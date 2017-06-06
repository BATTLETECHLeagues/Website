import React from 'react'

class LanceVLance extends React.Component {
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
            <p>The Lance vs Lance combat mode supports combat between 2 and 6 players in a round robin format.</p>
            <p>Players can set up tournaments between mechwariors on the site. S7O will report the outcome of game round and the current tournament standings</p>
          </div>
          {/* /.col-md-4 */}
        </div>
        {/* /.row */}
        <hr />
        {/* Call to Action Well */}
        <div className="row">
          <div className="col-lg-12">
            <div className="well text-center">
                <a href="./lance-v-lance/create">Create</a> a tournament today.
            </div>
          </div>
          {/* /.col-lg-12 */}
        </div>
        {/* /.row */}
        {/* Content Row */}
        <div className="row">
          <div className="col-md-4">
          
            
          </div>
          {/* /.col-md-4 */}
        </div>
        {/* /.row */}

           {/* /.container */} </div> 


  );
  }
}

export default LanceVLance;