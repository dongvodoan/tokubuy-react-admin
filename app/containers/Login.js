import React, { Component } from 'react';
// import { Link } from 'react-router';
// import {bindActionCreators} from 'redux';
// import * as sessionActions from '../actions/sessionActions';
import {connect} from 'react-redux';
import {loginUser} from "../actions/sessionActions";
import PropTypes from 'prop-types';
import {
    REDIRECT
} from '../constants/actionTypes';

// @connect((store) => {
//     return {
//         redirectTo: '/users'
//     };
// })

const mapStateToProps = state => ({
   appLoaded: state.common.appLoaded,
   redirectTo: state.auth.redirectTo
});

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            credentials : {
                email : '',
                password : ''
            }
        }
        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.context.router.replace(nextProps.redirectTo);
            // this.props.dispatch({type: REDIRECT})
        }
    }

    onSave (event) {
        event.preventDefault();
        this.props.dispatch(loginUser(this.state.credentials));

    }

    onChange(event) {
        event.preventDefault();
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({
            credentials: credentials
        });
    }

    render() {
        return(
            <div className="middle-box text-center loginscreen  animated fadeInDown">
                <div>
                    <div>
                        <h1 className="logo-name">TOKUBUY ADMIN</h1>
                    </div>
                    <form className="m-t">
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" className="form-control" placeholder="Password"  onChange={this.onChange} />
                        </div>
                        <button type="submit" onClick={this.onSave} className="btn btn-primary block full-width m-b">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
};
// function mapDispatchToProps(dispatch) {
//     return {
//         actions : bindActionCreators(sessionActions, dispatch)
//     }
// }

export default connect(mapStateToProps)(Login);