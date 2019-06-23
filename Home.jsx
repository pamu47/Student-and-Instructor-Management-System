'use strict';

import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Course = props => (
    <tr>
        <td>{props.course.name}</td>
        <td>{props.course.code}</td>
        <td>{props.course.pass}</td>
        <td>
            <Link to={"/course/" + props.course._id}>Instructors</Link>
        </td>
        <td>
            <button className="btn btn-primary">Edit</button>
            <hr/>
            <button className="btn btn-danger">Delete</button>


        </td>
     </tr>
);

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.onChangeCourseId = this.onChangeCourseId.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            courses: [],
            courseId: ''
        };
    }

    onChangeCourseId(e) {
        console.log(e.target.value);
        this.setState({
            courseId: e.target.value
        });
    }



    componentDidMount() {
        document.title = "Add Instructors";
        axios.get('http://localhost:3000/course')
            .then(response => {
                console.log(response);
                this.setState({ courses: response.data.courses });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    courseList() {
        return this.state.courses.map(function (currentCourse, i) {
            return <Course course={currentCourse} key={i} />;
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

                <h2><b>Course List</b></h2>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Course ID</th>
                            <th>Enrollment Key</th>
                            <th>Lecturer</th>
                            <th colSpan="2">Actions</th>
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
