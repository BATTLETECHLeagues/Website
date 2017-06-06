import React from 'react'
import Welcome from './lance-list'

class CreateLanceVLance extends React.Component {
  render() {
    return (
       <div className="container">
        {/* Heading Row */}
        <div className="row">
          <div className="col-md-8">
            <img className="img-responsive img-rounded" src="/mechwarriros_frontpage.png" alt />
          </div>
          {/* /.col-md-8 */}
          <div className="col-md-4">
            <h1>S7O - Lance Combat</h1>
            <p>Select players to start playing lance vs lance combat</p>
            <a className="btn btn-primary btn-lg" href="https://battletech.backerkit.com/hosted_preorders">Create</a>
          </div>
          {/* /.col-md-4 */}
        </div>
        {/* /.row */}
        <hr />
        {/* Call to Action Well */}
        <div className="row">
          <div className="col-lg-12">
          </div>
          {/* /.col-lg-12 */}
        </div>
        {/* /.row */}
        {/* Content Row */}
        <div className="row">
          
        <div className="col-lg-5">
            <div className="input-group">
            <span className="input-group-btn">
                <button className="btn btn-default" type="button">Add Player</button>
            </span>
            <input type="text" className="form-control" placeholder="Search for..."/>
            </div>
        </div>
        </div>
        <div className="row">
            <div className="col-lg-5">
                <Welcome name='Sara'/> 
                
             <div/>
        </div>
            
          {/* /.col-md-4 */}
        </div>
        {/* /.row */}

           {/* /.container */} </div> 


  );
  }
}

export default CreateLanceVLance;