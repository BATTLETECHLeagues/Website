import React, { Component } from 'react';

class Logout extends React.Component {
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
            <div><p>You have been loged out</p></div>
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
export default Logout;