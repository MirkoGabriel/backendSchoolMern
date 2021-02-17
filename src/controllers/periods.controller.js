const periodsCtrl = {};

const Period = require('../models/periods')

periodsCtrl.getPeriods = async (req, res) => {
    const periods= await Period.find();
    res.json(periods);
}

periodsCtrl.createPeriod = async (req, res) => {
    const {name} = req.body;
    const newPeriod = new Period({
        name:name
    });

    await newPeriod.save();
    res.json({message: 'Period Saved'})
}

periodsCtrl.deletePeriod = async (req, res) => {
    await Period.findOneAndDelete({_id:req.params.id});
    res.json({message: 'Period Deleted'})
}

module.exports = periodsCtrl;
