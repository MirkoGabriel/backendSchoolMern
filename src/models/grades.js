const {Schema, model} = require('mongoose');

const gradeSchema=new Schema({
    student: {
        type:Schema.Types.ObjectId,
        ref:'Student'
    },
    subject: {type:Schema.Types.ObjectId,
        ref:'Subject'
    },
    period: {type:Schema.Types.ObjectId,
        ref:'Period'
    },
    group: {type:Schema.Types.ObjectId,
        ref:'Group'
    },
    note:  {
        type:String,
        required:true
    }
},{
    timestamps:true
});

module.exports = model('Grade',gradeSchema);