const express =require("express")
const exam = express.Router()
const examSchema = require('../models/Exam')

exam.post('/exam/add/', (req,res) => {
    const examObj = new examSchema(req.body)
    examObj.save()
                .then(exam=>{
                    res.json({status : exam.name+ ' successfully added'})
                })
                .catch(err=> {
                    res.json({status : 'Error : '+err})
                })
})

exam.get('/exams', (req,res) => {
    examSchema.find()
                    .then(data=>{
                        if(data){
                            res.json(data)
                        }else{
                            res.send('No exams found')
                        }
                    })
                    .catch(err => {
                        res.send('Error while reading exams '+err)
                    })
})

exam.get('/exams/:id', (req,res)=>{
    examSchema.findById(req.params.id, (err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            res.send('exam not available')
        }
    })
})

exam.post('/exams/delete/',(req,res) => {
    examSchema.findByIdAndRemove(req.body._id, (err,doc)=>{
        if(!err){
            res.send('deleted')
        }else{
            console.log('error '+err)
        }
    })
})

module.exports = exam
