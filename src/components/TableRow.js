import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.course}
                </td>
                <td>
                    {this.props.obj.assignment_name}
                </td>
                <td>
                    {this.props.obj.deadline}
                </td>
                <td>
                    <button className="btn btn-primary">Done</button>
                </td>
                <td>


                </td>
            </tr>
        );
    }
}

export default TableRow;