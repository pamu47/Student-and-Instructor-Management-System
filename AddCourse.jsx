import React, { Component } from 'react';
import axios from 'axios';


const Sub = props => (

    <div className="form-group">
        <input type="checkbox" name={props.sub._id} style={{ marginRight: "10px" }} />{props.sub.firstname} {props.sub.lastname}


    </div>



);

export default class AddInstructor extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePass = this.onChangePass.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            code: '',
            pass: '',
            allInstructors: [],
            instructors: []
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCode(e) {
        this.setState({
            code: e.target.value
        });
    }
    onChangePass(e) {
        this.setState({
            pass: e.target.value
        });
    }

    componentDidMount() {

        axios.get('http://localhost:3000/instructor/')
            .then(response => {
                console.log(response);
                console.log(response.data.data);
                console.log(response.data.data.length);




                this.setState({ allInstructors: response.data.data });

                this.state.allInstructors.forEach(element => {
                    console.log('element');
                    console.log(element.name);
                });

                let myArray = [];

                response.data.data.forEach(element => {
                    myArray.push("uncheked");
                });



            }).catch(err => {
                console.log(err);
            });
    }

    instructorList() {
        return this.state.allInstructors.map(function (currentSub, i) {
            return <Sub sub={currentSub} key={i} />;
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const course = {
            name: this.state.name,
            code: this.state.code,
            pass: this.state.pass,
        }


        axios.post('http://localhost:3000/course', course)
            .then(res => console.log(res));

        this.setState({

            name: '',
            code: '',
            pass: '',

        });


        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>

                <h3 className="text-primary">Add New Course</h3>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Course Name:</label>
                        <input type="text" className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Course ID:</label>
                        <input type="text" className="form-control"
                            value={this.state.code}
                            onChange={this.onChangeCode}
                        />
                    </div>


                    <div className="form-group">
                        <label>Enrollment Key:</label>
                        <input type="text" className="form-control"
                            value={this.state.pass}
                            onChange={this.onChangePass}
                        />
                    </div>

                    <div className="form-group">

                        <ul>
                            {this.instructorList()}
                        </ul>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Course" className="btn btn-primary" />
                    </div>

                </form>




            </div>
        )
    }

}