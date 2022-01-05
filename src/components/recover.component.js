import React, { Component } from "react";

export default class Recover extends Component {
    render() {
        return (
            <form>
                <h3>Recover Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                    <p className='subscipt-login'><i>Enter the email associated with your account and a temporary password will be sent to you.</i></p>
                </div>

                <button type="submit" className="wide_button">Recover Password</button>
            </form>
        );
    }
}
