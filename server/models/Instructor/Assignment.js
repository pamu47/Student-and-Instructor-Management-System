const mongoose = require('mongoose')
const Schema = mongoose.Schema

const assignmentSchema = new Schema({
    assignment_id : {
        type : String 
    },
    assignment_name : {
        type : String
    },
    assignment_description : {
        type : String
    },
    start_date : {
        type : String
    },
    end_date : {
        type : String
    }
})

module.exports = Assignment = mongoose.model('assignment', assignmentSchema)
