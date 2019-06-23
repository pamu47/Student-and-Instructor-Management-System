'use strict';

import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Instructor = props => (
    <tr>
        <td>{props.instructor.firstname}</td>
        <td>{props.instructor.lastname}</td>
        <td>{props.instructor.faculty}</td>
        <td>{props.instructor.dept}</td>
        <td>{props.instructor.desig}</td>
        <td>{props.instructor.email}</td>
        <td>{props.instructor.password}</td>
    </tr>
);

export default class ViewInstructors extends Component {
    constructor(props) {
        super(props);

        this.onChangeInstructorId = this.onChangeInstructorId.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            instructors: [],
            InstructorId: ''
        };
    }

    onChangeInstructorId(e) {
        console.log(e.target.value);
        this.setState({
            instructorId: e.target.value
        });
    }



    componentDidMount() {
        document.title = "Add Instructors";
        axios.get('http://localhost:3000/instructor')
            .then(response => {
                console.log(response);
                this.setState({ instructors: response.data.instructors });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    courseList() {
        return this.state.instructors.map(function (currentCourse, i) {
            return <Instructor course={currentCourse} key={i} />;
        });
    }


    onSubmit(e) {
        e.preventDefault();

        }


    render() {
        return (

            <div>
                <br />

                <form onSubmit={this.onSubmit}>

                </form>

                <h2><b>Instructor List</b></h2>
                <table className="table table-striped" style={{ marginTop: 20 }}>
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
                    {this.courseList()}
                    </tbody>
                </table>

            </div>


        )
    }
}
