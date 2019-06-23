const express = require('express')
const assignment = express.Router()
const assignmentSchema = require('../../models/Instructor/Assignment')

assignment.get('/assignments/', (req,res) => {
    assignmentSchema.find()
                    .then(data=>{
                        if(data){
                            res.json(data)
                        }else{
                            res.send('No assignments available')
                        }
                    })
                    .catch(err=>{
                        res.send('Error while reading assignments '+err)
                    })
})

assignment.post('/addassignment', (req,res) => {
    const assignmentObj = new assignmentSchema(req.body)
    assignmentObj.save()
            .then(assignment => {
                res.json({status : assignment.assignment_name+ ' successfully added'})
            })
            .catch(err => {
                res.json({status : 'Error '+ err})
            })
})

module.exports = assignment