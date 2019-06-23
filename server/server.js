const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended : false
}))

const mongoURI = 'mongodb://localhost:27017/SImgt'

mongoose.connect(mongoURI, {useNewUrlParser : true})
        .then(()=> console.log("Database connection success"))
        .catch(err => console.log("Error while connecting to Database " +err))

//Add your routes here
const course = require('./routes/Instructor/course.routes')
const assignment = require('./routes/Instructor/assignment.routes')
const submission = require('./routes/Instructor/submissions.routes')
const exam = require('./routes/Instructor/exam.routes')
const examSubmission = require('./routes/Instructor/exam-submissions.routes')

app.use('/', course)
app.use('/', assignment)
app.use('/',submission)
app.use('/', exam)
app.use('/',examSubmission)



app.listen(port, () => {
    console.log('Server running on port ' +port)
})