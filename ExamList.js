import React, {Component} from 'react'
import Axios from 'axios';
import {Link} from "react-router-dom"

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class ExamList extends Component {

    constructor(){
        super()
        this.state = {
            exams : []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/exams/')
            .then(data=>{
                this.setState({
                    exams : data.data
                })
            })
    }

    onDelete(id, e){
        const examData = {
            _id : id
        }
        Axios.post('http://localhost:5000/exams/delete/', examData)
            .then(data => {
                console.log('deleted')
                this.componentDidMount()
            })
    }

    render(){
        return(

                <div style={{marginTop:30}} className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead className="thead-light">
                    <tr>
                        <th className="w-10">Subject</th>
                        <th className="w-10">Title</th>
                        <th className="w-10">Instructions</th>
                        <th className="w-10">Start Time</th>
                        <th className="w-10">End Time</th>
                        <th className="w-10">Date Created</th>
                        <th className="w-10">File</th>
                        <th className="w-10">Update</th>
                        <th className="w-10">Delete</th>
                    </tr>
                    </thead>
                    <tfoot className="thead-light">
                    <tr>
                        <th className="w-10">Subject</th>
                        <th className="w-10">Title</th>
                        <th className="w-10">Instructions</th>
                        <th className="w-10">Start Date</th>
                        <th className="w-10">End Date</th>
                        <th className="w-10">Date Created</th>
                        <th className="w-10">File</th>
                        <th className="w-10">Update</th>
                        <th className="w-10">Delete</th>

                    </tr>
                    </tfoot>
                    <tbody>
                    {
                        this.state.exams.map(exam=>{
                            return(
                                <tr>
                                    <td>{exam.subject}</td>
                                    <td>{exam.title}</td>
                                    <td>{exam.instructions}</td>
                                    <td>{exam.start}</td>
                                    <td>{exam.end}</td>
                                    <td>{date}</td>
                                    <td>Exam.pdf</td>
                                    <td><Link className="btn btn-success" /*to={"/viewAssignment/"+assignment._id} */>Update</Link></td>
                                    <td><button className="btn btn-danger" onClick={(e) => this.onDelete(exam._id, e)} >Delete</button></td>
                                </tr>
                            );
                        })
                    }

                    </tbody>
                </table>



            </div>


        )
    }
}
export default ExamList


