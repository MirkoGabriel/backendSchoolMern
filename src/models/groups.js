const {Schema, model} = require('mongoose');

const groupSchema=new Schema({
    name: {
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = model('Group',groupSchema);