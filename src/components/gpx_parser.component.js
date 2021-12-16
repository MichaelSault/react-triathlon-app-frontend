import axios from 'axios';
import React, { Component } from "react";

export default class Activity extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        //example get request and console log
        this.setState({ selectedFile: event.target.files[0]});
        console.log(axios.get('https://reqres.in/api/users/2'));
        
    };

    onFileUpload = () => {
        const formData = new FormData();

        formData.append(
            "myFile",
            this.state.selectedFile,
            this.state.selectedFile.name
        );

    };

    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div className="input-div">
                    <br />
                    <h6>File Details:</h6>
                    <p>File Name: {this.state.selectedFile.name}</p>
                    <p>File Type: {this.state.selectedFile.type}</p>
                    <p>
                    Last Modified:{" "}
                    {this.state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
        
                </div>
                );
        } else {
            return (
                <p className="subscript text-right">
                    Add entry manually?  <a href="sign-in">Click here!</a>
                </p>
            );
        }
    };


    render() {
        return (
            <form>
                <h3>Upload from .gpx file</h3>

                <div className="form-group">
                    <label>Upload Activity:</label>
                    <input type="file" onChange={this.onFileChange} />
                </div>
                
                <div>
                    <button onClick={this.onFileUpload} className="btn btn-primary btn-block">Upload Activity!</button>
                </div>
                {this.fileData()}
            </form>
        );
    }
}
