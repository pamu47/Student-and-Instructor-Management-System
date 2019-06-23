import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/fontawesome-free/css/all.min.css'
import './css/sb-admin.css'

export default class Dashboard extends Component {
  render() {
    return (

        <div className="container">
          <div className="row">
            <div className="col-md-10 mt-5 mx-auto bg bg-light">

            <h1 className="h3 mb-3 font-weight-normal text-center"><img src="https://cdn1.iconfinder.com/data/icons/dual-stroke-part-four/64/bandwidth-control-speed-meter-512.png" width="100" height="100"/>
              DASHBOARD
            </h1>

            <div className="form-group row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <div className = "card text-white bg-primary o-hidden h-100" >
                  <div className = "card-body" >
                    <div className = "card-body-icon" >
                      <i className = "far fa-plus-square" > </i>
                    </div>
                    <div className = "mr-5" > Add New Assignment </div>
                  </div>
                  <a className = "card-footer text-white clearfix small z-1" href = "/addAssignments" >
                    <span className = "float-left" > ViewDetails </span>
                    <span className="float-right">
              <i className="fas fa-angle-right"></i>
            </span>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className = "card text-white bg-success o-hidden h-100" >
                  <div className = "card-body" >
                    <div className = "card-body-icon" >
                      <i className="far fa-eye"></i>
                    </div>
                    <div className = "mr-5" > View Assignments </div>
                  </div>
                  <a className = "card-footer text-white clearfix small z-1" href = "/assignmentList" >
                    <span className = "float-left" > ViewDetails </span>
                    <span className="float-right">
              <i className="fas fa-angle-right"></i>
            </span>
                  </a>
                </div>
              </div>
            </div>
              <div className="form-group row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className = "card text-white bg-secondary o-hidden h-100" >
                    <div className = "card-body" >
                      <div className = "card-body-icon" >
                        <i className = "far fa-plus-square" > </i>
                      </div>
                      <div className = "mr-5" > Add New Exam </div>
                    </div>
                    <a className = "card-footer text-white clearfix small z-1" href = "/addExams" >
                      <span className = "float-left" > ViewDetails </span>
                      <span className="float-right">
              <i className="fas fa-angle-right"></i>
            </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className = "card text-white bg-warning o-hidden h-100" >
                    <div className = "card-body" >
                      <div className = "card-body-icon" >
                        <i className="far fa-eye"></i>
                      </div>
                      <div className = "mr-5" > View Exams </div>
                    </div>
                    <a className = "card-footer text-white clearfix small z-1" href = "/examList" >
                      <span className = "float-left" > ViewDetails </span>
                      <span className="float-right">
              <i className="fas fa-angle-right"></i>
            </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className = "card text-white bg-danger o-hidden h-100" >
                    <div className = "card-body" >
                      <div className = "card-body-icon" >
                        <i className = "far fa-plus-square" > </i>
                      </div>
                      <div className = "mr-5" > Add Exam Timetable </div>
                    </div>
                    <a className = "card-footer text-white clearfix small z-1" href = "/addAssignments" >
                      <span className = "float-left" > ViewDetails </span>
                      <span className="float-right">
              <i className="fas fa-angle-right"></i>
            </span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className = "card text-white bg-info o-hidden h-100" >
                    <div className = "card-body" >
                      <div className = "card-body-icon" >
                        <i className="far fa-eye"></i>
                      </div>
                      <div className = "mr-5" > View Exam Timetable </div>
                    </div>
                    <a className = "card-footer text-white clearfix small z-1" href = "/addAssignments" >
                      <span className = "float-left" > ViewDetails </span>
                      <span className="float-right">
              <i className="fas fa-angle-right"></i>
            </span>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>

    );
  }
}
