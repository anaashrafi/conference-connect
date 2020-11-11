import React from 'react';
import Table from 'react-bootstrap/Table'
 
class Connections extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         isLoaded: false,
         connections: []
      };
  }

  componentDidMount(){
      const api = 'http://18.224.61.179:5000/'
      console.log("component mounted");
      fetch(api + 'users')
      .then(res=> res.json())
      .then(result=> {
          console.log('parsed: ', result[0].connections);
          this.setState({
             isLoaded: true,
             connections: result[0].connections
            });
      })    
  }

  render(){
      const {connections, isLoaded} = this.state;
      if (isLoaded) {
         return (
            <ul>
               {connections.map(item => (
                  <li>
                  {item}
                  </li>
               ))}
            </ul>
         );
      } else {
         return (<p>error</p>);
      }
  }
}
 
export default Connections;