const mongoose = require('mongoose')
const Schema = mongoose.Schema

const submissionSchema = new Schema({
    assignment_id : {
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

module.exports = Submission = mongoose.model('submission', submissionSchema)
