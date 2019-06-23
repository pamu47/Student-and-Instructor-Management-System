import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Axios from 'axios';

export default class Assignment extends Component {
    constructor(){
        super()
        this.state = {
            handle : '',
            submissions : [],
            mark : '',
            comment : '',
            obj : {}
        }
        this.onMarkChange = this.onMarkChange.bind(this)
        this.onMarkSubmit = this.onMarkSubmit.bind(this)
        this.onCommentChange = this.onCommentChange.bind(this)
        this.onSave = this.onSave.bind(this)
    }

    componentDidMount(){
        const {handle} = this.props.match.params
        this.setState({
            handle : handle
        })
        Axios.get('http://localhost:5000/submissions/'+handle)
        .then(data => {
            this.setState({
                submissions : data.data
            })
        })
        console.log(handle)
    }
    onMarkChange(e){
        this.setState({
            mark : e.target.value,
        })
        console.log(this.state.mark)
    }
    onMarkSubmit(id,e){
        e.preventDefault()
        var obj = {
            it : id,
            mark : this.state.mark
        }
        this.setState({
            obj : obj
        })

    }
    onCommentChange(e){
        this.setState({
            comment : e.target.value
        })
    }
    onSave(id, it, e){
        e.preventDefault()
        const asData = {
            _id : id,
            it_number : it,
            mark : this.state.mark,
            comments : this.state.comment
        }
        Axios.post('http://localhost:5000/submission/update', asData)
            .then(data => {
                console.log('updated')
                this.componentDidMount()
            })
    }



    render(){
        return(
            <div className="container-fluid" style={{ marginTop: 30 }}>
                <h1>{this.state.handle}</h1>
                <hr />
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
                            <th scope="col">submitted file</th>
                            <th scope="col">Mark</th>
                            <th scope="col">Any special comments?</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.submissions.map(sub=>{
                                return(
                                    <tr>
                                        <td>{sub.it_number}</td>
                                        <td>assignment_it170xxxxx.pdf</td>
                                        <td>
                                        <form onSubmit={(e) => this.onMarkSubmit(sub.it_number, e)}>
                                                <input name="mark" type="text"  onChange={this.onMarkChange} />
                                                <button className="btn btn-primary">add</button><div style={{marginLeft:5}}>added : {sub.mark}</div>
                                        </form>
                                        </td>
                                        <td><textarea onChange={this.onCommentChange}>{sub.comments}</textarea></td>
                                        <td><button onClick={(e) => this.onSave(sub._id, sub.it_number, e)} className="btn btn-success">Save</button></td>
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