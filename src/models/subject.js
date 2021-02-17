const {Schema, model} = require('mongoose');

const subjectSchema = new Schema({
    group: {
        type:Schema.Types.ObjectId,
        ref:'Group'
    },
    name:  {
        type:String,
        required:true,
        trim:true,
        unique: true    
    } 
},{
    timestamps:true
});

module.exports = model('Subject',subjectSchema);