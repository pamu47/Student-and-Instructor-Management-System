const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assignmentSchema = new Schema({
    subject : {
        type : String 
    },
    title : {
        type : String
    },
    due_Date : {
        type : String
    },
    description : {
        type : String
    }
})

module.exports = Assignment = mongoose.model('assignment', assignmentSchema)
