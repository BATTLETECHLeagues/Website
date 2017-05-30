import React, { Component } from 'react';

class LoginText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      //check to see if cookie exists.
      //if exists display username and a logout link.
      <div className="navbar-text navbar-right"><a href="./Login">Login</a></div>
    );
  }
}

export default LoginText;
