import React, { Component } from 'react';

class Register extends React.Component {
      constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="container">
      <div>
        <div className="col-md-4" />
        <div className="col-md-4">
          <section className="login-form">
            <div><p>Note site is not secured in any meaningful fashion</p></div>
            <form method="post" action="#" role="login" onSubmit={this.handleSubmit}>
              <input type="email" name="email" placeholder="email@domainname.com" required className="form-control input-lg" />
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

  handleSubmit(event) {
    alert('A name was submitted: ');
    event.preventDefault();
  }

};
export default Register;