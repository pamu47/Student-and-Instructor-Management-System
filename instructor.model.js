const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
        firstname:{
            type:String,
            require:true
        },
        lastname:{
            type:String,
            require:true
        },

        faculty:{
            type:String,
            require:true
        },
    dept:{
        type:String,
        require:true
    },
    desig:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    password: {
        type: String,
        require: true
    }
    },
    {
        collection: 'instructors'

});

module.exports = mongoose.model('Instructor' ,instructorSchema);