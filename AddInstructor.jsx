import React, { Component } from 'react';
import axios from 'axios';

export default class AddInstructor extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName=this.onChangeFirstName.bind(this);
        this.onChangeLastName=this.onChangeLastName.bind(this);
        this.onChangeFaculty=this.onChangeFaculty.bind(this);
        this.onChangeDept=this.onChangeDept.bind(this);
        this.onChangeDesig=this.onChangeDesig.bind(this);
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);

        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            firstname: '',
            lastname: '',
            faculty: '',
            dept: '',
            desig: '',
            email: '',
            password: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        });
    }
    onChangeFaculty(e) {
        this.setState({
            faculty: e.target.value
        });
    }

    onChangeDept(e) {
        this.setState({
            dept: e.target.value
        });
    }

    onChangeDesig(e) {
        this.setState({
            desig: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const instructor={
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            faculty:this.state.faculty,
            dept:this.state.dept,
            desig:this.state.desig,
            email:this.state.email,
            password:this.state.password
        }


        axios.post('http://localhost:3000/instructor',instructor)
        .then(res=>console.log(res));

        this.setState({
            firstname: '',
            lastname: '',
            faculty: '',
            dept: '',
            desig: '',
            email: '',
            password: ''
        });


        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>

                <h3 className="text-primary">Add New Instructor</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.firstname}
                            onChange={this.onChangeFirstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangeLastName}
                        />
                    </div>


                    <div className="form-group">
                        <label>Faculty:</label>
                        <input type="text" className="form-control"
                            value={this.state.faculty}
                            onChange={this.onChangeFaculty}
                        />
                    </div>

                    <div className="form-group">
                        <label>Department:</label>
                        <input type="text" className="form-control"
                               value={this.state.dept}
                               onChange={this.onChangeDept}
                        />
                    </div>

                    <div className="form-group">
                        <label>Designation:</label>
                        <input type="text" className="form-control"
                               value={this.state.desig}
                               onChange={this.onChangeDesig}
                        />
                    </div>


                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" className="form-control"
                               value={this.state.password}
                               onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Instructors" className="btn btn-primary" />
                    </div>

                </form>




            </div>
        )
    }

}