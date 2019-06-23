const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExamsubmissionSchema = new Schema({
    exam_id : {
        type : String
    },
    it_number : {
        type : String
    },
    mark : {
        type : String
    },
    grade : {
        type : String
    },
    comments : {
        type : String
    },
    file : {
        type : String
    }
})

module.exports = ExamSubmission = mongoose.model('examsubmission', ExamsubmissionSchema)
