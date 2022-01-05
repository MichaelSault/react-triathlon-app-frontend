import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Recover from './components/recover.component';
import Reset from './components/passwordreset.component';
import Activity from './components/gpx_parser.component';
import CreateActivity from './components/createactivity.component';
import ViewActivity from './components/viewactivity.component';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href='https://michaelsault.ca/'>michaelsault.ca</a> 
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/reset-password"}>Reset(temp)</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/upload-activity"}>Activity</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to={"/view-activity"}>Recent Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/create-activity"}>New Activity</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={ViewActivity} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/recover-password" component={Recover} />
            <Route path="/reset-password" component={Reset} />
            <Route path="/upload-activity" component={Activity} />
            <Route path="/create-activity" component={CreateActivity} />
            <Route path="/view-activity" component={ViewActivity} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
