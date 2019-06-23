import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
            const loginRegLink = (
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            <h1> <img src="https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png"/> Login </h1>
                        </Link>
                    </li>
                    <li className="nav nav-tabs">
                        <Link to="/register" className="nav-link">
                            <h1> <img src="https://img.icons8.com/dusk/64/000000/web-design.png"/> Register </h1>
                        </Link>
                    </li>
                </ul>
            )

            const userLink = (
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                            <h1><img src="https://img.icons8.com/color/48/000000/user.png"/> User </h1>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/uploads" className="nav-link">
                            <h1><img src="https://img.icons8.com/color/48/000000/upload-to-ftp.png"/> Assignment Submissions </h1>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/assignments" className="nav-link">
                            <h1><img src="https://img.icons8.com/cute-clipart/64/000000/paper.png"/>Assignment List </h1>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                            <h1><img src="https://img.icons8.com/cotton/64/000000/power-off-button.png"/>Logout</h1>
                        </a>
                    </li>
                </ul>
        )

        return(
            <nav className="navbar navbar-expand-lg navbar-light rounded">
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar1"
                        aria-controls="navbar1"
                        aria-expanded="false"
                        aria-lable="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <h1> <img src="https://img.icons8.com/flat_round/64/000000/home.png"/> Home </h1>
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )


    }
}

export default withRouter(Navbar);