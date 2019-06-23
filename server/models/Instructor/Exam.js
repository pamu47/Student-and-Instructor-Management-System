const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new Schema({
    exam_id : {
        type : String 
    },
    exam_name : {
        type : String
    },
    exam_description : {
        type : String
    },
    start_date : {
        type : String
    },
    end_date : {
        type : String
    }
})

module.exports = Exam = mongoose.model('exam', examSchema)
