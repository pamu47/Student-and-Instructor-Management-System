import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
        })
    }

    render(){
        return(

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form>
                            <h1 className="h3 mb-3 font-weight-normal text-center">PROFILE</h1>
                            <div className="form-group text-center ">

                                <h4> <img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" width="150" height="150"/></h4>
                                <h4> {this.state.first_name} {this.state.last_name} </h4>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label >First Name</label>
                            </div>
                                <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.first_name}
                                       readonly="readonly"
                                       className="text-center"
                                       />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label>Last Name</label>
                                </div>
                                <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.last_name}
                                       readOnly="readonly"
                                       className="text-center"
                                />
                            </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       value={this.state.email}
                                       readOnly="readonly"
                                       className="text-center"
                                />
                            </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label>Designation</label>
                                </div>
                                <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       value="Instructor"
                                       readOnly="readonly"
                                       className="text-center"
                                />
                            </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                <label>Faculty</label>
                                </div>
                                <div className="col-md-6">
                                <input type="text"
                                       className="form-control"
                                       value="Computing"
                                       readOnly="readonly"
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
export default Profile


