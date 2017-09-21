import React, { Component } from 'react';
import { Link, Location } from 'react-router';
import { activeRoute } from '../../../helpers/Helpers';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                             </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li>
                        <li className={activeRoute("/home", this.props.location.pathname)}>
                            <Link to="/home"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></Link>
                        </li>
                        <li className={activeRoute("/users", this.props.location.pathname)}>
                            <Link to="/users"><i className="fa fa-users"></i> <span className="nav-label">Users List</span></Link>
                        </li>
                        <li className={activeRoute("/others", this.props.location.pathname)}>
                            <Link to="/others"><i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation