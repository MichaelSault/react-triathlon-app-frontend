import axios from 'axios';
import React, { Component } from "react";
import { InputGroup, FormControl, Form } from 'react-bootstrap';


export default class CreateActivity extends Component {
    
    activitySubmit = event => {

        console.log(document.getElementById('distance').value,
        document.getElementById('hr').value,
        document.getElementById('min').value,
        document.getElementById('sec').value,
        document.getElementById('elevation').value,
        document.getElementById('sport').value,
        document.getElementById('start_date').value,
        document.getElementById('start_time').value,
        document.getElementById('title').value,
        document.getElementById('description').value,
        document.getElementById('type').value,
        document.getElementById('effort').value)

        //example post request + console log and error catcher
        axios.post('http://localhost:8000/api/activity/activities/', 
        {
            "distance": document.getElementById('distance').value,
            "time_hours": document.getElementById('hr').value,
            "time_minutes": document.getElementById('min').value,
            "time_seconds": document.getElementById('sec').value,
            "elevation": document.getElementById('elevation').value,
            "sport": document.getElementById('sport').value,
            "date": document.getElementById('start_date').value,
            "start_time": document.getElementById('start_time').value,
            "title": document.getElementById('title').value,
            "description": document.getElementById('description').value,
            "type": document.getElementById('type').value,
            "effort": document.getElementById('effort').value
        },)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            }
        );
    };


    render() {
        return (
            <form>
                <h3>Create A Manual Activity:</h3>

                <div className="form-group">
                    <label>Distance</label>
                    <InputGroup>
                        <FormControl id="distance" placeholder="0"/>
                        <InputGroup.Text>km</InputGroup.Text>
                    </InputGroup>
                </div>

                <div className="form-group">
                    <label>Duration</label>
                    <InputGroup>
                        <FormControl id="hr" placeholder='00' default="0"/>
                        <InputGroup.Text>hr</InputGroup.Text>
                        <FormControl id="min" placeholder="00" default="0"/>
                        <InputGroup.Text>min</InputGroup.Text>
                        <FormControl id="sec" placeholder="00" default="0"/>
                        <InputGroup.Text>s</InputGroup.Text>
                    </InputGroup>
                </div>

                <div className="form-group">
                    <label>Elevation</label>
                    <InputGroup>
                        <FormControl id="elevation" placeholder="0" default="0"/>
                        <InputGroup.Text>meters</InputGroup.Text>
                    </InputGroup>
                </div>
                
                <div className="form-group">
                    <label>Sport</label>
                    <select name="Sport" id="sport" className="form-control">
                        <option value="run">Run</option>
                        <option value="bike">Bike</option>
                        <option value="swim">Swim</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Date and Time</label>

                    <InputGroup>
                        <input id="start_date" type="date" className="form-control" default/>
                        <input id="start_time" type="time" className="form-control"/>
                    </InputGroup>
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input id="title" type="text" className="form-control" placeholder="My Run" />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea rows={4} id="description" type="list" className="form-control" placeholder="How'd it go?  Anything eventful happen?" />
                </div>

                <div className="form-group">
                    <label>Activity Type</label>
                    <select name="Type" id="type" className="form-control">
                        <option value="race">Race</option>
                        <option value="workout">Workout</option>
                        <option value="wu">Warm Up</option>
                        <option value="cd">Cool Down</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Effort</label>
                    <Form.Range id="effort" name="effort" min="1" max="10" className="form-control"/>
                </div>

                <div>
                    <button type="submit" className="btn btn-primary btn-block" onClick={this.activitySubmit}>Log Activity</button>
                </div>

            </form>
        );
    }
}