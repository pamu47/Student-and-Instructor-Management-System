import React, {Component} from 'react'
import Axios from 'axios';


class AddAssignment extends Component {

    constructor(){
        super()
        this.state = {
            subject : '',
            title : '',
            due_Date : '',
            description : ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
        // let files = e.target.files;
        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);
    }

    onSubmit(e){
        e.preventDefault()
        const assignmentData = {
            subject : this.state.subject,
            title : this.state.title,
            due_Date : this.state.due_Date,
            description : this.state.description
        }
        Axios.post('http://localhost:5000/assignment/add', assignmentData)
            .then(data=>{
                console.log('assignment added')
                this.props.history.push(`/assignmentList`)
            })
    }



    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h3 className="h3 mb-3 font-weight-normal text-center"><img src="https://cdn3.iconfinder.com/data/icons/rest/30/add_order-512.png" width="100" height="100"/> New Assignment </h3>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" onChange={this.onChange}
                                       className="form-control"
                                       name="subject"
                                       placeholder="Enter Subject"
                                      />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" onChange={this.onChange}
                                       className="form-control"
                                       name="title"
                                       placeholder="Enter Title"
                                       />
                            </div>
                            <div className="form-group">
                                <label htmlFor="due_Date">Due Date</label>
                                <input type="date" onChange={this.onChange}
                                       className="form-control"
                                       name="due_Date"
                                       />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description+">Description</label>
                                <input type="text" onChange={this.onChange}
                                       className="form-control"
                                       name="description"
                                       placeholder="Enter Description"
                                      />
                            </div>
                            <div className="form-group">
                                <label htmlFor="choose_file">Choose File</label>
                                <input type="file" name="file" onChange={(e)=> this.onChange(e)} className="form-input"/>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Create Assignment
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddAssignment