import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Dashbord from './components/Instructor/Instructor-Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
            <a class="navbar-brand mr-1" href="home.php">Instructor Portal</a>
          </nav>
        </div>
        <Route exact path='/' component={Dashbord} />
      </Router>
    );
  }
}

export default App;
