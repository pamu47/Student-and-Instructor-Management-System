import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/fontawesome-free/css/all.min.css'
import './css/sb-admin.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="content-wrapper">

            <div class="container-fluid">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item active">Overview</li>
              </ol>
              <div class="row">
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-primary o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-list"></i>
                      </div>
                      <div class="mr-5">Choose Courses</div>
                    </div>
                    <Link class="card-footer text-white clearfix small z-1" to='/choose-course'>
                      <span class="float-left">View Available courses</span>
                      <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-warning o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-pencil-ruler"></i>
                      </div>
                      <div class="mr-5">Assignments</div>
                    </div>
                    <Link class="card-footer text-white clearfix small z-1" to='/grade-assignments'>
                      <span class="float-left">View Assignments</span>
                      <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
              <footer class="sticky-footer" style={{width:'100%'}}>
                <div class="container my-auto">
                  <div class="copyright text-center my-auto">
                    <span>Copyright © Code Warriors 2018</span>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </div> 
    );
  }
}
