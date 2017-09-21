import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
    render() {
        return(
            <div className="middle-box text-center loginscreen  animated fadeInDown">
                <div>
                    <div>

                        <h1 className="logo-name">TOKUBUY ADMIN</h1>

                    </div>
                    <form className="m-t">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Username" required=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required=""/>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                        <Link to=""><small>Forgot password?</small></Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login