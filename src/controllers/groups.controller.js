const groupsCtrl = {};

const Group= require('../models/groups')

groupsCtrl.getGroups = async (req, res) => {
    const groups= await Group.find();
    res.json(groups);
}

groupsCtrl.createGroups = async (req, res) => {
    const {name} = req.body;
    const newGroup = new Group({
        name:name
    });

    await newGroup.save();
    res.json({message: 'Group Saved'})
}

groupsCtrl.deleteGroup = async (req, res) => {
    await Group.findOneAndDelete({_id:req.params.id});
    res.json({message: 'Group Deleted'})
}

module.exports = groupsCtrl;
