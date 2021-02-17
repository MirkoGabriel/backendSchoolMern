const {Schema, model} = require('mongoose');

const periodSchema=new Schema({
    name: {
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = model('Period',periodSchema);