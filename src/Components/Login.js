import React from 'react';
import { browserHistory } from "react-router";

export class Login extends React.Component {

    handleLogin(){
        browserHistory.push("/user");
    }

    render() {
        return (
            <div className="base-container">
                <div className="header">User Login</div>
                <div className="content">
                    <div className="form">
                        <div className="formgroup">
                            <label className="label">UserName:</label>
                            <input
                                className="input"
                                type="text"
                                name="username"
                                placeholder="Enter the username"
                                maxLength={15}
                            />
                        </div>
                        <div className="formgroup">
                            <label className="label">Password:</label>
                            <input
                                className="input"
                                type="password"
                                name="password"
                                placeholder="Enter the password"
                                maxLength={20}
                            />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn"
                            type="submit"
                            onClick = {this.handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        )
    }
}
