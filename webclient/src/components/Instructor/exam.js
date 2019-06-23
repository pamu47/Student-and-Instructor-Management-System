import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Axios from 'axios';

export default class Exam extends Component {
    constructor(){
        super()
        this.state = {
            handle : '',
            submissions : [],
            mark : '',
            grade : '',
            obj : {},
            id :'',
            comment : ''
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

        Axios.get('http://localhost:5000/examsubmissions/'+handle)
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

    onCommentChange(e){
        this.setState({
            comment : e.target.value
        })
    }

    onMarkSubmit(id,e){
        e.preventDefault()
        console.log()
        var mark = this.state.mark
        var obj = {
            it : id,
            grade : ''
        }
        if(mark <= 100 && mark >=90){
            obj.grade = 'A+'
            this.setState({
                obj : obj
            })
        }else if(mark <= 89 && mark >=85){
            obj.grade = 'A'
            this.setState({
                obj : obj
            })
        }else if(mark <= 84 && mark >=80){
            obj.grade = 'A-'
            this.setState({
                obj : obj
            })
        }else if(mark <= 79 && mark >=77){
            obj.grade = 'B+'
            this.setState({
                obj : obj
            })
        }else if(mark <= 76 && mark >=73){
            obj.grade = 'B'
            this.setState({
                obj : obj
            })
        }else if(mark <= 72 && mark >=70){
            obj.grade = 'B-'
            this.setState({
                obj : obj
            })
        }else if(mark <= 69 && mark >=67){
            obj.grade = 'C+'
            this.setState({
                obj : obj
            })
        }else if(mark <= 66 && mark >=63){
            obj.grade = 'C'
            this.setState({
                obj : obj
            })
        }else if(mark <= 62 && mark >=60){
            obj.grade = 'C-'
            this.setState({
                obj : obj
            })
        }
        
    }
    onSave(id, it, grade, e){
        e.preventDefault()
        const exmData = {
            _id : id,
            it_number : it,
            mark : this.state.mark,
            grade : grade,
            comments : this.state.comment
        }
        Axios.post('http://localhost:5000/examsubmit/update', exmData)
            .then(data => {
                console.log('updated')
                this.componentDidMount()
            })
    }

    render(){
        return(
            <div className="container-fluid" style={{ marginTop: 30 }}>
                <h1>{this.state.handle}</h1>
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
                            <th scope="col">submitted file</th>
                            <th scope="col">Mark</th>
                            <th scope="col">Grade</th>
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
                                        <td>IT170xxxxx.csv</td>
                                        <td>
                                            <form onSubmit={(e) => this.onMarkSubmit(sub.it_number, e)}>
                                                <input name="mark" type="text"  onChange={this.onMarkChange} />
                                                <button className="btn btn-primary">add</button><div style={{marginLeft:5}}>added : {sub.mark}</div>
                                            </form>
                                        </td>
                                        <td><input name="grade" type="text" 
                                        value={
                                            
                                            (sub.it_number==this.state.obj.it)? ''+this.state.obj.grade :''+sub.grade
                                            
                                            } /></td>
                                        <td><textarea onChange={this.onCommentChange}>{sub.comments}</textarea></td>
                                        <td><button onClick={(e) => this.onSave(sub._id, sub.it_number, this.state.obj.grade, e)} className="btn btn-success">Save</button></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div className="container" style={{marginTop:70}}>
                <Link to={'/result/'+this.state.handle} class="btn btn-block btn-warning">Publish <i class="fas fa-fw fa-paper-plane"></i></Link>
                </div>
            </div>
        );
    }
}