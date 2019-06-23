import React, { Component } from 'react';
import {Link} from "react-router-dom"
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap';

export default class ChooseCourses extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            courses: [],
            accepted : []
        }
        this.onAccept = this.onAccept.bind(this)
        this.onDeny = this.onDeny.bind(this)

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentDidMount() {
        axios.get('http://localhost:5000/courses/')
            .then(data => {
                this.setState({
                    courses: data.data
                })
            })

        axios.get('http://localhost:5000/courses/accepted')
            .then(data => {
                this.setState({
                    accepted : data.data
                })
            })
        

    }

    onAccept(id, cid, name, description, e) {
        e.preventDefault()
        const courseData = {
            _id: id,
            course_id: cid,
            course_name: name,
            course_description: description,
            isTaken: true
        }
        axios.post('http://localhost:5000/courses/accept/', courseData)
            .then(data => {
                console.log('accepted')
                this.componentDidMount()
            })

    }

    onDeny(id, e) {
        e.preventDefault()
        const cData = {
            _id: id
        }
        axios.post('http://localhost:5000/courses/deny/', cData)
            .then(data => {
                console.log('Denied')
                this.componentDidMount()
            })
    }

    render() {
        return (
            <div>
            <div className="container" style={{ marginTop: 30 }}>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active">Courses</li>
                </ol>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Course Code</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(course => {
                                return (
                                    <tr>
                                        <td className={course.isTaken ? 'completed' : ''}>{course.course_id}</td>
                                        <td className={course.isTaken ? 'completed' : ''}>{course.course_name}</td>
                                        <td className={course.isTaken ? 'completed' : ''}>{course.course_description}</td>
                                        <td>
                                            {course.isTaken ?
                                                <div><button className="btn btn-warning" style={{ marginRight: 5 }} disabled>Accept</button><button className="btn btn-danger" disabled>Deny</button></div> :
                                                <div><button onClick={(e) => this.onAccept(course._id, course.course_id, course.course_name, course.course_description, e)} className="btn btn-success" style={{ marginRight: 5 }}>Accept</button>
                                                    <button onClick={(e) => this.onDeny(course._id, e)} className="btn btn-danger">Deny</button></div>
                                            }
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
                <Button variant="primary" onClick={this.handleShow}>
                    Show my Courses
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Accepted Courses</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Code</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.accepted.map(course => {
                                        return(
                                            <tr>
                                                <td>{course.course_id}</td>
                                                <td>{course.course_name}</td>
                                                <td>{course.course_description}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
                <footer class="sticky-footer" style={{width:'100%'}}>
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright © Code Warriors 2018</span>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}