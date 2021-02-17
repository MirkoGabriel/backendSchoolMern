const studentsCtrl = {};

const Student = require('../models/student')

studentsCtrl.getStudents = async (req, res) => {
  /*  const { group, period, name } = req.query;
    const query = {};
    if (group) query['group'] = group;
    if (name) query._id = name;
    if (period) query['period'] = period;
    */
    //if(Object.entries(query).length === 0){
        const students = await Student.find().populate('group').populate('period');
        res.json(students);
  /*  }else{
        const students = await Student.find(query).populate('group').populate('period');
        res.json(students);
    }
    */
    
}

studentsCtrl.createStudents = async (req, res) => {
    const { group, period, name, email, gender, age, phone } = req.body;
    const newStudent = new Student({
        group: group,
        period: period,
        name: name,
        email: email,
        gender: gender,
        age: age,
        phone: phone
    });

    await newStudent.save().
        then((data) => {
            console.log("saved data ", data);
            res.json({ message: 'Student created!' });
        }).catch(function (error) {
            console.log(error);
            res.status(503).json({ message: 'Student not created!' });
        });
}

studentsCtrl.getStudent = async (req, res) => {
    const student = await Student.findById(req.params.id)
    res.json(student);
}


studentsCtrl.updateStudent = async (req, res) => {
    const { group, period, name, email, gender, age, dni, phone } = req.body;
    await Student.findOneAndUpdate({ _id: req.params.id }, {
        group: group,
        period: period,
        name: name,
        email: email,
        gender: gender,
        age: age,
        dni: dni,
        phone: phone
    }).
    then((data) => {
        console.log("saved data ", data);
        res.json({ message: 'Student Updated!' });
    }).catch(function (error) {
        console.log(error);
        res.status(503).json({ message: 'Student not updated!' });
    });
    
}

studentsCtrl.deleteStudent = async (req, res) => {
    await Student.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Student Deleted' })
}

module.exports = studentsCtrl;
