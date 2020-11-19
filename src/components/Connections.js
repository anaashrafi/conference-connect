import React from 'react';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
      // const {connections, isLoaded} = this.state;
      // if (isLoaded) {
      //    return (
      //       <ul>
      //          {connections.map(item => (
      //             <li>
      //             {item}
      //             </li>
      //          ))}
      //       </ul>
      //    );
      // } else {
      //    return (<p>error</p>);
      // }

      return (
         <div>
         <Container>
            <Row style={{marginTop: "20px"}}>
               {/* <DropdownButton id="dropdown-basic-button" title="Sort">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
               </DropdownButton>
               <DropdownButton id="dropdown-basic-button" title="Filter" style={{paddingLeft: "20px"}}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
               </DropdownButton> */}
               <div class="dropdown">
               <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" style={{marginRight: "20px"}}>Sort
               <span class="caret"></span></button>
               <ul class="dropdown-menu">
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">JavaScript</a></li>
               </ul>
               </div>

               <div class="dropdown">
               <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Filter
               <span class="caret"></span></button>
               <ul class="dropdown-menu">
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">JavaScript</a></li>
               </ul>
               </div>
            </Row>
            <Row>
               <Table striped bordered hover responsive="sm" style={{marginTop: "20px"}}>
                  <thead>
                     <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>LinkedIn</th>
                        <th>Company</th>
                        <th>Position</th>
                        <th>Conference</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>David Moore</td>
                        <td>DavidLMoore@boeing.com</td>
                        <td>716-507-2191</td>
                        <td><a href="www.linkedin.com/in/ana-ashrafi">linkedin.com/in/david-moore</a></td>
                        <td>Boeing</td>
                        <td>Software Engineer I</td>
                        <td>UT Austin Fall EXPO</td>
                     </tr>
                     <tr>
                        <td>Ruth Richardson</td>
                        <td>RuthVRichardson@dell.com</td>
                        <td>310-748-8575</td>
                        <td><a href="www.linkedin.com/in/ana-ashrafi">linkedin.com/in/ruth-richardson</a></td>
                        <td>Dell</td>
                        <td>University Recruiter</td>
                        <td>UT Austin Fall EXPO</td>
                     </tr>
                     <tr>
                        <td>Timothy Martinez</td>
                        <td>TimothyVMartinez@amazon.com</td>
                        <td>978-579-6426</td>
                        <td><a href="www.linkedin.com/in/ana-ashrafi">linkedin.com/in/tim-martinez</a></td>
                        <td>Amazon</td>
                        <td>System Validation Engineer</td>
                        <td>UT Austin Fall EXPO</td>
                     </tr>
                     <tr>
                        <td>Robert Cooley</td>
                        <td>RobertACooley@walmart.com</td>
                        <td>573-759-9041</td>
                        <td><a href="www.linkedin.com/in/ana-ashrafi">linkedin.com/in/robert-cooley</a></td>
                        <td>Walmart</td>
                        <td>Software Engineering Manager</td>
                        <td>UT Austin Fall EXPO</td>
                     </tr>
                     <tr>
                        <td>Madalyn Morgan</td>
                        <td>MadalynSMorgan@microsoft.com</td>
                        <td>817-279-7674</td>
                        <td><a href="www.linkedin.com/in/ana-ashrafi">linkedin.com/in/madalyn-morgan</a></td>
                        <td>Microsoft</td>
                        <td>Product Manager</td>
                        <td>UT Austin Fall EXPO</td>
                     </tr>
                     <tr>
                        <td>Russ Wells</td>
                        <td>RussDWells@google.com</td>
                        <td>210-332-0243</td>
                        <td><a href="www.linkedin.com/in/ana-ashrafi">linkedin.com/in/russ-wells</a></td>
                        <td>Google</td>
                        <td>Associate Product Manager</td>
                        <td>UT Austin Fall EXPO</td>
                     </tr>
                     <tr>
                        <td>Debbie Wiggs</td>
                        <td>DebbieRWiggs@visa.com</td>
                        <td>740-686-5623</td>
                        <td><a href="www.linkedin.com/in/ana-ashrafi">linkedin.com/in/debbie-wiggs</a></td>
                        <td>Visa</td>
                        <td>Talent Acquisition Specialist</td>
                        <td>UT Austin Fall EXPO</td>
                     </tr>
                     <tr>
                        <td>Rachael Webb</td>
                        <td>RachaelRWebb@indeed.com</td>
                        <td>804-792-5812</td>
                        <td><a href="www.linkedin.com/in/ana-ashrafi">linkedin.com/in/rachael-webb</a></td>
                        <td>Indeed</td>
                        <td>Data Analyst</td>
                        <td>UT Austin Fall EXPO</td>
                     </tr>
                  </tbody>
               </Table>
         </Row>
         </Container>
         </div>
      );
  }
}
 
export default Connections;