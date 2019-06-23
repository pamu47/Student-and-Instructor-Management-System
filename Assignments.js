const express =require("express")
const assignment = express.Router()
const assignmentSchema = require('../models/Assignment')

assignment.post('/assignment/add/', (req,res) => {
    const assignmentObj = new assignmentSchema(req.body)
    assignmentObj.save()
                .then(assignment=>{
                    res.json({status : assignment.name+ ' successfully added'})
                })
                .catch(err=> {
                    res.json({status : 'Error : '+err})
                })
})

assignment.get('/assignments', (req,res) => {
    assignmentSchema.find()
                    .then(data=>{
                        if(data){
                            res.json(data)
                        }else{
                            res.send('No assignments found')
                        }
                    })
                    .catch(err => {
                        res.send('Error while reading assignments '+err)
                    })
})

assignment.get('/assignments/:id', (req,res)=>{
    assignmentSchema.findById(req.params.id, (err,docs)=>{                  
        if(!err){
            res.json(docs)
        }else{
            res.send('assignment not available')
        }
    })
})

assignment.post('/assignments/delete/',(req,res) => {
    assignmentSchema.findByIdAndRemove(req.body._id, (err,doc)=>{
        if(!err){
            res.send('deleted')
        }else{
            console.log('error '+err)
        }
    })
})

module.exports = assignment
