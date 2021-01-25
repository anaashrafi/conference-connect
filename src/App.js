// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Hello.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Redirect, useHistory } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Connections from './components/Connections';
import Help from './components/Help';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Navigation from './components/Navigation';
import Logout from './components/Logout';
const loggedIn = false;
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Login} exact/>
             {/* <Route exact path="/">
                {loggedIn ? <Redirect to="/home" /> : <Login />}
             </Route> */}
             {/* <Navigation /> */}
              <Route path="/home" component={Home}/>
              <Route path="/connections" component={Connections}/>
              <Route path="/help" component={Help}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/home" component={Logout}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;