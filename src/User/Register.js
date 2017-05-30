import React, { Component } from 'react';
import ApiUrl from '.././apiUrl';
import Cookie from '.././cookie';

class Register extends React.Component {
      constructor(props) {
    super(props);
    this.state = {value: ''};
 
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
              <input type="text" name="userName" placeholder="User Name" required className="form-control input-lg" value={this.state.value} onChange={this.handleChange} />
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

    var baseApiUrl = new ApiUrl().getBase();
    
    var payload = {
      UserName: this.state.value,
    };

    fetch(baseApiUrl + '/api/user',
    {
      method: "POST",
      headers: {
        'content-type': 'application/json'      
      },
      body: JSON.stringify( payload )
    })
  .then(function(res){ return res.json(); })
  .then(function(data){ 
    if (data.OperationSuccess === 'true')
    {
      new Cookie().createCookie('BATTLETECHSessionKey',data.SessionKey,30);
    }
    alert( JSON.stringify( data ) )
   })

    event.preventDefault();
  }

};
export default Register;