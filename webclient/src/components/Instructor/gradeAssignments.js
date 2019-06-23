import React, { Component } from 'react';
import {Link} from "react-router-dom"
import moment from 'moment'
import Axios from 'axios';
import Red from './img/red.png'
import Grey from './img/grey.png'

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

export default class GradeAssignments extends Component {
    constructor(){
        super()
        this.state = {
            assignments : [],
            exams : [],
            pendings : []
        }

    }

    componentDidMount(){
        Axios.get('http://localhost:5000/assignments/')
            .then(data => {
                this.setState({
                    assignments : data.data
                })
            })

        Axios.get('http://localhost:5000/exams/')
            .then(data => {
                this.setState({
                    exams : data.data
                })
            })
        // var temp = moment("20111031", "YYYYMMDD").fromNow();
        // console.log(temp)
        // console.log(moment([2019, 5, 25]).fromNow())
        // console.log(date)
        // console.log(moment('2010-05-20').isBefore(date))
    }

    render(){
        return(
            <div className="container" style={{marginTop:20}}>
                <h2 style={{marginBottom:20}}>Grading Assignments</h2>
                <hr style={{marginBottom:20}}/>
                <div class="list-group">
                    {
                        this.state.assignments.map(assignment => {
                            var tempdate = assignment.end_date
                            var chrdate = tempdate.split('')
                            var year = chrdate[0] + chrdate[1] + chrdate[2] + chrdate[3]
                            var month = chrdate[5]+ chrdate[6]
                            var day = chrdate[8]+ chrdate[9]
                            var due = moment([year, month-1, day]).fromNow()
                            //console.log(due) 
                            return (
                                <div>
                                <Link to={'/assignment/'+assignment.assignment_id} className={moment(assignment.end_date).isBefore(date)
                                    ? 'list-group-item list-group-item-action flex-column align-items-start due' 
                                    : 'list-group-item list-group-item-action flex-column align-items-start'}  style={{marginBottom:5}}>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{assignment.assignment_name}</h5>
                                        <small>{due}</small>
                                    </div>
                                    <p class="mb-1">{assignment.assignment_description}</p>
                                    
                                </Link>
                                </div>
                            );
                        })
                    }

                </div>
                <hr style={{marginTop:10}}/>
                <h2 style={{marginBottom:20}}>Grading Exams</h2>
                <div class="list-group">
                    {
                        this.state.exams.map(exam => {
                            var tempdate = exam.end_date
                            var chrdate = tempdate.split('')
                            var year = chrdate[0] + chrdate[1] + chrdate[2] + chrdate[3]
                            var month = chrdate[5]+ chrdate[6]
                            var day = chrdate[8]+ chrdate[9]
                            var due = moment([year, month-1, day]).fromNow()
                            //console.log(due) 
                            return (
                                <div>
                                <Link to={'/exam/'+exam.exam_id} className={moment(exam.end_date).isBefore(date)
                                    ? 'list-group-item list-group-item-action flex-column align-items-start due' 
                                    : 'list-group-item list-group-item-action flex-column align-items-start'}  style={{marginBottom:5}}>
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">{exam.exam_name}</h5>
                                        <small>{due}</small>
                                    </div>
                                    <p class="mb-1">{exam.exam_description}</p>
                                    
                                </Link>
                                </div>
                            );
                        })
                    }

                </div>


                <p><img src={Red} style={{width:15, height:15}} alt={'red'}/> Assignments/Exams to be marked</p>
                <p><img src={Grey} style={{width:15, height:15}} alt={'grey'} /> Upcomming assignments/exams </p>
            </div>
        );
    }

}