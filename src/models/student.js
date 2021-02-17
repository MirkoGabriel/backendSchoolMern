const {Schema, model} = require('mongoose');

const studentSchema=new Schema({
    group: {
        type:Schema.Types.ObjectId,
        ref:'Group'
    },
    period: {
        type:Schema.Types.ObjectId,
        ref:'Period'
    },
    name:  {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email: {
        type:String,
        required:true
    },
    gender:  {
        type:String,
        required:true
    },
    age: {
        type:String,
        required:true
    },
    phone:  {
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = model('Student',studentSchema);