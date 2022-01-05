import axios from 'axios';
import React, { Component } from "react";

const baseURL = "http://localhost:8000/api/activity/activities/"

export default class ViewActivity extends Component {
    state = {
        activities: []
    }

    componentDidMount() {
        axios.get(baseURL).then(res => {
            const activities = res.data;
            this.setState({ activities })
            console.log(this.state.activities);
        })
    }

    render() {
        return (
            <div>
                <h1>Recent Activities:</h1>
                { this.state.activities.slice(0,10).map(activity => (<div key={activity.id} className = "activitybox"><h4>{activity.title}</h4>
                                                            <pbot><b>Date: </b>{activity.date} at {activity.start_time} <br></br></pbot>
                                                            <pbot><b>Distance: </b>{activity.distance}km&emsp;<b>Time: </b>{activity.time_hours}:{activity.time_minutes}:{activity.time_seconds}</pbot>
                                                            <p><b>Elevation: </b>{activity.elevation}m</p>
                                                            <p><i>{activity.description}</i></p>
                                                            <p><b>Tags: </b>{activity.sport}, {activity.type}</p>
                                                            <button>View</button><button>Edit</button><button>Delete</button>
                                                        </div>)) }
            </div>
        );
    }
}