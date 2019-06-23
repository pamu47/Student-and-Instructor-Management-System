import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Axios from 'axios';

export default class Assignment extends Component {

    constructor(){
        super()
        this.state = {
            submissions : []
        }
    
    }

    componentDidMount(){
        const {handle} = this.props.match.params
        this.setState({
            handle : handle
        })
        Axios.get('http://localhost:5000/results/'+handle)
            .then(data => {
                this.setState({
                    submissions : data.data
                })
            })
    }
    render(){
        return(
            <div className="container">
                <h1>Results of {this.state.handle}</h1>
                <hr/>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item">Exams</li>
                    <li class="breadcrumb-item active">{this.state.handle}</li>
                </ol>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">IT Number</th>
                            <th scope="col">Mark</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.submissions.map(sub=>{
                                return(
                                    <tr>
                                        <td>{sub.it_number}</td>
                                        <td>{sub.mark}</td>
                                        <td>{sub.grade}</td>
                                        <td>{sub.comments}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}