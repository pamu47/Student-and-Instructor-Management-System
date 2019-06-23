const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    course_id : {
        type : String 
    },
    course_name : {
        type : String
    },
    course_description : {
        type : String
    },
    isTaken : {
        type : Boolean
    }
})

module.exports = Course = mongoose.model('course', courseSchema)
