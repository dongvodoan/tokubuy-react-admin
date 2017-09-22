import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from "../actions/sessionActions";
import PropTypes from 'prop-types';
import { ListErrors } from "../components/common/index";

const mapStateToProps = state => ({
   appLoaded: state.common.appLoaded,
   redirectTo: state.auth.redirectTo,
   errors: state.auth.errors
});

const mapDispatchToProps = dispatch => ({
   onSubmit: (email, password) =>
    dispatch(loginUser(email, password))
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
        this.props.onSubmit(this.state.credentials.email, this.state.credentials.password);

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
                    <ListErrors errors={this.props.errors}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);