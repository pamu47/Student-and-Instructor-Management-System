const express = require('express')
const submission = express.Router()
const subSchema = require('../../models/Instructor/Submission')

submission.post('/submit', (req,res)=>{
    const subObj = new subSchema(req.body)
    subObj.save()
    .then(submission => {
        res.json({status : submission.it_number+ ' successfully submitted'})
    })
    .catch(err => {
        res.json({status : 'Error '+ err})
    })
})

submission.get('/submissions/:aid' ,(req,res)=>{
    subSchema.find({assignment_id : req.params.aid})
            .then(data => {
                if(data){
                    res.json(data)
                }else{
                    res.send('No submissions found')
                }
            })
            .catch(err=>{
                res.send('error while reading submissions'+err)
            })
})
submission.post('/submission/update/', (req,res) =>{
    subSchema.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err,doc)=>{
        if(!err){
            res.send('updated')
        }else{
            console.log('Error during update')
        }
    })
})

module.exports = submission