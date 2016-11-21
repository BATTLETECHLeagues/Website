import React, { Component } from 'react';
import logo from './logo.svg';
import LoginText from './LoginText';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, Link, browserHistory } from 'react-router';
import About from './About';
import Home from './Home';
import Login from './login';
import Register from './Register';

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
        <Route path="/register" component={Register}/>    
     </Router>
    </div>
            
    </div>
    );
  }
}

export default App;
