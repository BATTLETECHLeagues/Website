import React, { Component } from 'react';
import cookie from 'react-cookie'; 

class Register extends React.Component {
      constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state =  { userId: cookie.load('userId') };
 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  }

  render() {
    return (

      <div className="container">
      <div>
        <div className="col-md-4" />
        <div className="col-md-4">
          <section className="login-form">
            <div><p>Note: Site will be secured in 90 days</p></div>
            <form method="post" action="#" role="login" onSubmit={this.handleSubmit}>
              <input type="email" name="email" placeholder="email@example.com" required className="form-control input-lg" value={this.state.value} onChange={this.handleChange} />
            {/* Add in password at a later date 
              <input type="password" className="form-control input-lg" id="password" placeholder="Password" required />*/}
              <div className="pwstrength_viewport_progress" />
              <button type="submit" name="go" className="btn btn-lg btn-primary btn-block">Register</button>
            </form>
          </section>  
        </div>
        <div className="col-md-4" />
      </div>
      </div>  
    );
  
  }

    handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    cookie.save('userId', this.state.value, { path: '/' });
    alert('A name was submitted: ' + cookie.load('userId'));
    
    event.preventDefault();
  }

};
export default Register;