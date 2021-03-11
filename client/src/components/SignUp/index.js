import React, { Component } from "react";
import "./style.css";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h2>Sign Up</h2>

                <div className="form-group">
                    <label>Nickname</label>
                    <input type="text" className="form-control" placeholder="Nickname" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type= "email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
            </form>
        )
    }
}
