import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import AddAssignment from  './components/AddAssignment'
import ViewAssignment from './components/ViewAssignment'
import Profile from './components/Profile'
import addExams from './components/addExams'
import Dashboard from './components/Instructor-Dashboard'
import AssignmentList from './components/AssignmentList'
import addExam from './components/addExams'
import ExamList from './components/ExamList'

class App extends Component {
  render(){
    return (
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path="/" component={Landing}/>
            <div className="container">
              <Route exact path="/register" component={Register}/>
              <Route exact path="/viewAssignment/:handle" component={ViewAssignment}/>
              <Route exact path="/addAssignments" component={AddAssignment}/>
              <Route exact path="/assignmentList" component={AssignmentList}/>
              <Route exact path="/examList" component={ExamList}/>
              <Route exact path="/addExam" component={addExam}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/addExams" component={addExams}/>
              <Route exact path="/dashboard" component={Dashboard}/>

            </div>
          </div>
        </Router>
    );
  }
}
export default App;
