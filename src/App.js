import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
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
      <a className="navbar-brand" href="#">Solaris 7 Operations</a>
    </div>        
         <p className="navbar-text navbar-right">Signed in as <a href="#" className="navbar-link">Mark Otto</a></p>
        </div>
      </nav>
      <div className="container">
        <div >
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
