import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import Home from './Home';
import Instructor from './Instructor';
import AddInstructor from './AddInstructor';
import AddCourse from './AddCourse';
import About from './Instructor';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    

    render() {
        return <div>
            <h2>Course Management System</h2>
            <Router>
                <div>
                    <div className="row">
                        <div className="col-sm">
                            <Link to="/">View Courses</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/addInstructor">Add Instructors</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/addCourse">Add Courses</Link>
                        </div>
                        <div className="col-sm">
                            <Link to="/about">View Instructors</Link>
                        </div>
                    </div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/course/:id" component={Instructor}/>
                    <Route path="/addInstructor" component={AddInstructor}/>
                    <Route path="/addCourse" component={AddCourse}/>
                </div>
            </Router>
        </div>;
    }
}
