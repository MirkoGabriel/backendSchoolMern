const gradesCtrl = {};

const Grade = require('../models/grades');

gradesCtrl.getGrades = async (req, res) => {
    const { student, period } = req.query;
    const query = {};
    if (student) query['student'] = student;
    if (period) query['period'] = decodeURI(period);

    const grades = await Grade.find(query).populate([{
        path: 'period',
        model: 'Period'
    }, {
        path: 'subject',
        model: 'Subject'
    }, {
        path: 'student',
        model: 'Student'
    }, {
        path: 'group',
        model: 'Group'
    }]);
    res.json(grades);
}

gradesCtrl.createGrades = async (req, res) => {
    const { student, subject, note, period, group } = req.body;
    const newGrade = new Grade({
        student: student,
        subject: subject,
        note: note,
        period: period,
        group: group
    });

    await newGrade.save().
        then((data) => {
            console.log("saved data ", data);
            res.json({ message: 'Grade created!' });
        }).catch(function (error) {
            console.log(error);
            res.status(503).json({ message: 'Grade not created!' });
        });
}

gradesCtrl.getGrade = async (req, res) => {
    const grade = await Grade.findById(req.params.id).populate([{
        path: 'period',
        model: 'Period'
    }, {
        path: 'subject',
        model: 'Subject'
    }, {
        path: 'student',
        model: 'Student'
    }, {
        path: 'group',
        model: 'Group'
    }]);
    res.json(grade);
}

gradesCtrl.updateGrade = async (req, res) => {
    const { group, period, student, subject, note } = req.body;
    await Grade.findOneAndUpdate({ _id: req.params.id }, {
        group: group,
        period: period,
        student: student,
        subject: subject,
        note: note
    }).
        then((data) => {
            console.log("saved data ", data);
            res.json({ message: 'Grade Updated!' });
        }).catch(function (error) {
            console.log(error);
            res.status(503).json({ message: 'Grade not updated!' });
        });
}
/*
gradesCtrl.deleteGrade = async (req, res) => {
    await Grade.findOneAndDelete({_id:req.params.id});
    res.json({message: 'Grade Deleted'})
}*/

gradesCtrl.deleteGrades = async (req, res) => {
    const { subject, period, id, student, group } = req.query;
    const query = {};

    if (subject) query['subject'] = subject
    if (period) query['period'] = period
    if (id) query['_id'] = id
    if (student) query['student'] = student
    if (group) query['group'] = group
    console.log(query)
    await Grade.deleteMany(query)
    res.json({ message: 'Grades deleted' })
}

module.exports = gradesCtrl;
