import React, {Component} from 'react'
import {login} from './UserFunctions'

class Login extends Component {

    constructor(){
        super();
        this.state = {
            email : '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            email : this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    }




    render() {
        return (
            <div className="container">
                <h2>
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal"><p align="center">Student Login</p></h1>
                            <div className="form-group">
                                <label htmlFor="email"><img src="https://img.icons8.com/color/48/000000/gmail.png"/>Email Address</label>
                                <input  type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><img src="https://img.icons8.com/cute-clipart/64/000000/password.png"/>Password</label>
                                <input  type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
                </h2>
            </div>
        );
    }
}

export default Login;