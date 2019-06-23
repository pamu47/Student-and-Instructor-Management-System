'use strict';

import React, {Component} from 'react';
import axios from 'axios';


const InstructorDetails = props => (
    <tr>
        <td>{props.instructor.firstname}</td>
        <td>{props.instructor.lastname}</td>
        <td>{props.instructor.faculty}</td>
        <td>{props.instructor.dept}</td>
        <td>{props.instructor.desig}</td>
        <td>{props.instructor.email}</td>
        <td>{props.instructor.password}</td>
    </tr>
)
export default class Instructor extends Component {
    constructor(props) {
        super(props);

        this.state = {instructors:[]};
    }


    componentDidMount(){
       
        let url=window.location.href;
        let cid=(url.split('/')[4]);

        console.log(cid);

        axios.get('http://localhost:3000/course/'+ cid).then(response=>{
            console.log(response);
            console.log(response.data.data[0].instructors);
            this.setState({instructors:response.data.data[0].instructors});
        })
        .catch(err=>{
            console.log(err);
        });
    }

    courseList(){
        return this.state.instructors.map(function(currentCourse,i){
                  return <InstructorDetails instructor = {currentCourse} key={i}/>;
        });
    }

    render() {
        return  <div>
        <h3>Instructor List</h3>
        <table className="table table-striped" style={{marginTop:20}}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Faculty</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>

            </thead>

            <tbody>
                {this.courseList() }
            </tbody>

        </table>
    </div>;
    }
}
