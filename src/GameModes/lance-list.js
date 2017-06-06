import React from 'react'

class Welcome extends React.Component {
  constructor() {
    super();
    this.listValue=[1,2,3,4,5];

 


 
    
    }


  render() {
     const Test = ({stations}) => (
  <div>
    {stations.map(station => (
      <div className="station" key={station.call}>{station.call}</div>
    ))}
  </div>);
 var stations = [
  {call:'station one',frequency:'000'},
  {call:'station two',frequency:'001'}
];   
     return  (<Test stations={stations}/>)

}



   handleClick() {
    alert(this.state.message);
  }
 

}

export default Welcome;