import React, { Component } from 'react';
import { Link, Location } from 'react-router';

class TableRow extends Component {
    render() {
        const { _id, email, nickname, createdAt, updatedAt} = this.props;
        return (
            <tr className="text-center">
                <td>{this.props.index + 1}</td>
                <td>{email}</td>
                <td>{nickname}</td>
                <td>{createdAt}</td>
                <td>{updatedAt}</td>
                <td>
                    <div className="btn-group">
                        <Link to={`/user/show/${_id}`} className="btn btn-info">Show</Link>
                        <Link to="" className="btn btn-primary">Edit</Link>
                        <Link to="" className="btn btn-danger">Delete</Link>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow