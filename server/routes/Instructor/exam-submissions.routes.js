const express = require('express')
const exsubmission = express.Router()
const examsubSchema = require('../../models/Instructor/ExamSubmission')

//Setting up twilio for sending a text when a reservation occurs
const accountSid = 'AC2285c402a8db5262edec637217f0a313';
const authToken = 'bc13f91ff8eec6d701d229cbb4ff1257';
const client = require('twilio')(accountSid, authToken);


exsubmission.post('/examsubmit', (req,res)=>{
    const subObj = new examsubSchema(req.body)
    subObj.save()
    .then(submission => {
        res.json({status : submission.it_number+ ' successfully submitted'})
    })
    .catch(err => {
        res.json({status : 'Error '+ err})
    })
})

exsubmission.get('/examsubmissions/:aid' ,(req,res)=>{
    examsubSchema.find({exam_id : req.params.aid})
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
exsubmission.get('/results/:aid' ,(req,res)=>{
    examsubSchema.find({exam_id : req.params.aid})
            .then(data => {
                if(data){
                    res.json(data)
                    const msg = 'Results have been published on courseweb.'
                    client.messages
                        .create({
                            body: msg,
                            from: '+12016763615',
                            to: '+94774064048'
                        })
                        .then(message => console.log(message.sid));
                }else{
                    res.send('No submissions found')
                }
            })
            .catch(err=>{
                res.send('error while reading submissions'+err)
            })
})

exsubmission.post('/examsubmit/update/', (req,res) =>{
    examsubSchema.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err,doc)=>{
        if(!err){
            res.send('updated')
        }else{
            console.log('Error during update')
        }
    })
})



module.exports = exsubmission