import React, { Component } from "react";

export default class Reset extends Component {
    render() {
        return (
            <form>
                <h3>Reset Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Old Password</label>
                    <input type="password" className="form-control" placeholder="Enter old password" />
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                    <label>Repeat New Password</label>
                    <input type="password" className="form-control" placeholder="Repeat new password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Change Password</button>
            </form>
        );
    }
}
