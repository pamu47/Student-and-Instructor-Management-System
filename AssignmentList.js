import React, {Component} from 'react'
import Axios from 'axios';
import {Link} from "react-router-dom"

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class AssignmentList extends Component {

    constructor(){
        super()
        this.state = {
            assignments : []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/assignments/')
            .then(data=>{
                this.setState({
                    assignments : data.data
                })
            })
    }

    onDelete(id, e){
        const assignmentData = {
            _id : id
        }
        Axios.post('http://localhost:5000/assignments/delete/', assignmentData)
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
                        <th className="w-10">Description</th>
                        <th className="w-10">Due Date</th>
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
                        <th className="w-10">Description</th>
                        <th className="w-10">Due Date</th>
                        <th className="w-10">Date Created</th>
                        <th className="w-10">File</th>
                        <th className="w-10">Update</th>
                        <th className="w-10">Delete</th>

                    </tr>
                    </tfoot>
                    <tbody>
                    {
                        this.state.assignments.map(assignment=>{
                            return(
                                <tr>
                                    <td>{assignment.subject}</td>
                                    <td>{assignment.title}</td>
                                    <td>{assignment.description}</td>
                                    <td>{assignment.due_Date}</td>
                                    <td>{date}</td>
                                    <td>Assigment.pdf</td>
                                    <td><Link className="btn btn-success" to={"/viewAssignment/"+assignment._id} >Update</Link></td>
                                    <td><button className="btn btn-danger" onClick={(e) => this.onDelete(assignment._id, e)} >Delete</button></td>
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
export default AssignmentList


