
import React, { Component } from 'react';
import logo from './logo.svg';
import LoginText from './LoginText';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, browserHistory } from 'react-router';
import About from './About';
import Home from './Home';
import Login from './User/login';
import Logout from './User/logout';
import LanceVLance from './GameModes/lance-v-lance'
import Register from './User/Register';
import ApiUrl from './apiUrl';

class App extends Component {
   constructor ()
   {
     super()
        this.state = {date: new Date(),version: new String()};
   }

   componentDidMount() {

      var baseApiUrl = new ApiUrl().getBase();

      console.log(baseApiUrl);
  

        fetch(baseApiUrl + "/api/systemdetails")
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        var version = json.Version.Major + "." + json.Version.Minor + "." + json.Version.Revision
                        this.setState({version: version});
                    });
   }

  render() {
    return (
    <div className="App">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="./">Solaris 7 Operations</a>
    </div>        
        <LoginText/>
        </div>
      </nav>
      <div className="container">
      
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/game-modes/lance-v-lance" component={LanceVLance}/>
        <Route path="/register" component={Register}/>    
     </Router>
    </div>
   <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>This content on this website is released under the     
                <a href="https://creativecommons.org/"> Creative Commons</a></p>
                <p>Site version is {this.state.version} </p>
            </div>
          </div>
        </div>
      </footer> 
    </div>
    );
  }
}

export default App;
