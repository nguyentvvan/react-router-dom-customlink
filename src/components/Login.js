import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtUsername: '',
            txtPassword: '',
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onLogin = (event) => {
        event.preventDefault();
        
        if (this.state.txtUsername === 'admin' && this.state.txtPassword === '123') {
            localStorage.setItem('USER', JSON.stringify({
                txtUsername: this.state.txtUsername,
                txtPassword: this.state.txtPassword,
            }));
        }
    }

    render() {
        var {txtUsername, txtPassword} = this.state;
        console.log(this.props.location);
        var loggedInUser = localStorage.getItem('USER');
        if (loggedInUser !== null) {
            // return <Redirect to="/products" />
            return <Redirect to={{
                pathname: '/products',
                state: {
                    from: this.props.location
                }
            }} />
        }

        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onLogin}>
                        <legend>Login to start</legend>
                    
                        <div className="form-group">
                            <label>Username: </label>
                            <input type="text" className="form-control" name="txtUsername" 
                                value={txtUsername} 
                                onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Password: </label>
                            <input type="password" className="form-control" name="txtPassword" 
                                value={txtPassword} 
                                onChange={this.onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Login;