const express = require('express')
const exam = express.Router()
const examSchema = require('../../models/Instructor/Exam')

exam.get('/exams/', (req,res) => {
    examSchema.find()
                    .then(data=>{
                        if(data){
                            res.json(data)
                        }else{
                            res.send('No exams available')
                        }
                    })
                    .catch(err=>{
                        res.send('Error while reading exams '+err)
                    })
})

exam.post('/addexam', (req,res) => {
    const examObj = new examSchema(req.body)
    examObj.save()
            .then(exam => {
                res.json({status : exam.exam_name+ ' successfully added'})
            })
            .catch(err => {
                res.json({status : 'Error '+ err})
            })
})

module.exports = exam