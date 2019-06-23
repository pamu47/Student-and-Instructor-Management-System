import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import Axios from 'axios';

class ViewAssignment extends Component {

    constructor(){
        super()
        this.state = {
            handle : '',
            assignment : [],
            name: '',
            obj : {}
        }
    }

    componentDidMount(){
        const {handle} = this.props.match.params
        this.setState({
            handle : handle
        })

        // Axios.get('http://localhost:5000/assignments/'+handle)
        //     .then(data=>{
        //         this.setState({
        //             assignment : data.data,
        //             name : data.title
        //         })
        //     })
        // console.log(this.state.assignment.title)
    }

    render(){
        return(

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form>

                            <div className="form-group text-center ">
                                <h4> Title </h4>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label >Subject</label>
                            </div>
                                <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       className="text-center"
                                       />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label>Title</label>
                                </div>
                                <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       className="text-center"
                                />
                            </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label>Due Date</label>
                                </div>
                                <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       className="text-center"
                                />
                            </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label>Description</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="text"
                                           className="form-control"
                                           className="text-center"
                                    />
                            </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label>Date Created</label>
                                </div>
                                <div className="col-md-6">
                                    <input type="text"
                                           className="form-control"
                                           className="text-center"
                                    />
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewAssignment


