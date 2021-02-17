const subjectCtrl = {};

const Subject = require('../models/subject')

subjectCtrl.getSubjects = async (req, res) => {
 /*   const { group } = req.query;
    const query = {};
    if (group) query['group'] = group;

    if (Object.entries(query).length === 0) {*/
        const subjects = await Subject.find().populate('group');
        res.json(subjects);
 /*   } else {
        const subjects = await Subject.find(query).populate('group');
        res.json(subjects);
    }*/

}

subjectCtrl.createSubjects = async (req, res) => {
    const { group, name } = req.body;
    const newSubject = new Subject({
        group: group,
        name: name
    });

    await newSubject.save().
        then((data) => {
            console.log("saved data ", data);
            res.json({ message: 'Subject created!' });
        }).catch(function (error) {
            console.log(error);
            res.status(503).json({ message: 'Subject not created!' });
        });
}

subjectCtrl.getSubject = async (req, res) => {
    const subject = await Subject.findById(req.params.id);
    res.json(subject);
}

subjectCtrl.updateSubject = async (req, res) => {
    const { group, name } = req.body;
    await Subject.findOneAndUpdate({ _id: req.params.id }, {
        group: group,
        name: name
    }).
        then((data) => {
            console.log("saved data ", data);
            res.json({ message: 'Subject Updated!' });
        }).catch(function (error) {
            console.log(error);
            res.status(503).json({ message: 'Subject not updated!' });
        });
}

subjectCtrl.deleteSubject = async (req, res) => {
    await Subject.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Subject Deleted' })
}

module.exports = subjectCtrl;
