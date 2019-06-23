const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new Schema({
    subject : {
        type : String 
    },
    title : {
        type : String
    },
    instructions : {
        type : String
    },
    start : {
        type : String
    },
    end : {
        type : String
    }
})

module.exports = Exam = mongoose.model('exam', examSchema)
