import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

import Dashbord from './components/Instructor/Instructor-Dashboard'
import ChooseCourse from './components/Instructor/chooseCourses'
import GradeAssignments from './components/Instructor/gradeAssignments'
import Exam from './components/Instructor/exam'
import Assignment from './components/Instructor/assignment'
import Result from './components/Instructor/results'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
            <Link to='/' class="navbar-brand mr-1">Instructor Portal</Link>
          </nav>
        </div>
        <Route exact path='/' component={Dashbord} />
        <Route path='/choose-course' component={ChooseCourse} />
        <Route path='/grade-assignments' component={GradeAssignments} />
        <Route path='/exam/:handle' component={Exam} />
        <Route path='/assignment/:handle' component={Assignment} />
        <Route path='/result/:handle' component={Result} />
      </Router>
    );
  }
}

export default App;
