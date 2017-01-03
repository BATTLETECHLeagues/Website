import React from 'react'


class Home extends React.Component {
  render() {
    return (
       <div className="container">
        {/* Heading Row */}
        <div className="row">
          <div className="col-md-8">
            <img className="img-responsive img-rounded" src="./mechwarriros_frontpage.png" alt />
          </div>
          {/* /.col-md-8 */}
          <div className="col-md-4">
            <h1>S7O - BATTLETECH Combat Command</h1>
            <p>Solaris 7 Operations is an unofficial site for coordinating pvp based combat for the soon to be released 
            BATTLETECH turnbased mech combat game.</p>
            <p></p>
            <a className="btn btn-primary btn-lg" href="https://battletech.backerkit.com/hosted_preorders">Back BATTLETECH here</a>
          </div>
          {/* /.col-md-4 */}
        </div>
        {/* /.row */}
        <hr />
        {/* Call to Action Well */}
        <div className="row">
          <div className="col-lg-12">
            <div className="well text-center">
                <a href="./Login">Login</a> or <a href="./Login">Register</a> to start lance combat or company action now.
            </div>
          </div>
          {/* /.col-lg-12 */}
        </div>
        {/* /.row */}
        {/* Content Row */}
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <h2>Lance V Lance Combat</h2>
              <p>Setup a round robin lance v lance combat league for 3-6 players.  Players play each to determine league table standings.</p>
            </div>
            <div className="row ">
              <a className="btn btn-default" href="#">More Info</a>
            </div>
                        
          </div>
          {/* /.col-md-4 */}
          <div className="col-md-4">
            <div className="row">          
              <h2>Company V Company</h2>
              <p>Setup multi player company v company combat. Control territory to win the match.</p><p></p>
            </div>
            <div className="row ">
              <a className="btn btn-default" href="#">More Info</a>
            </div>
            
          </div>
          {/* /.col-md-4 */}
          <div className="col-md-4">
            <div className="row ">          
              <h2>Extended Campaign</h2>
              <p>Coming soon an extended campaign to capture objectives and control resources that can be used through the campaign</p>
            </div>
            <div className="row ">
              <a className="btn btn-default" href="#">More Info</a>
            </div>
            
          </div>
          {/* /.col-md-4 */}
        </div>
        {/* /.row */}

           {/* /.container */} </div> 


  );}
}

export default Home;