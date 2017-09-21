import React, { Component } from 'react';
import { TableRow } from '../components/common/index';
import { Link, Location } from 'react-router';
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";

@connect((store) => {
    return {
        users: store.users.users
    };
})

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetchUser());
    }

    render() {
        const { users } = this.props;
        const ListUsers = users.map((user, index) => <TableRow index={index} {...user}/>);
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <Link to="/user/create" className="btn btn-primary btn-lg">Create</Link>
                        <div className="text-center m-t-lg">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover table-condensed">
                                    <thead>
                                    <tr>
                                        <th className="text-center">No.</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">NickName</th>
                                        <th className="text-center">Create Date</th>
                                        <th className="text-center">Update Date</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    { ListUsers }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}