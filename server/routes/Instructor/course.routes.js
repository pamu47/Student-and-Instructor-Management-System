const express = require('express')
const course = express.Router()
const courseSchema = require('../../models/Instructor/Course')

course.get('/courses/', (req,res)=>{
    courseSchema.find()
                .then(courseData => {
                    if(courseData){
                        res.json(courseData)
                    }else{
                        res.send("No courses available")
                    }
                })
                .catch(err => {
                    res.send("Error while reading courses" +err)
                })
})


course.post('/addcourse', (req,res) => {
    const courseObj = new courseSchema(req.body)
    courseObj.save()
            .then(course => {
                res.json({status : course.course_name+ ' successfully added'})
            })
            .catch(err => {
                res.json({status : 'Error '+ err})
            })
})

course.post('/courses/accept/' ,(req,res)=>{
    courseSchema.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err,doc)=>{
        if(!err){
            res.send('updated')
        }else{
            console.log('Error during update')
        }
    })

})

course.post('/courses/deny/', (req,res)=>{
    courseSchema.findByIdAndRemove(req.body._id, (err,doc) => {
        if(!err){
            res.send('denied')
        }else{
            console.log('Error '+err)
        }
    })
})

course.get('/courses/accepted', (req,res)=>{
    courseSchema.find({isTaken : true})
                .then(data => {
                    if(data){
                        res.json(data)
                    }else{
                        res.send('No accepted courses available')
                    }
                })
                .catch(err => {
                    res.send('Error while reading courses')
                })
})

module.exports = course