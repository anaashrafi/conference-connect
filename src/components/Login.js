import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';
import { Redirect, useHistory } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const clientId = '44240221307-5chg97evjag20irasgpo79dsih4turhb.apps.googleusercontent.com';
const loggedIn = true;
function Login() {
    const onSuccess = (res) => {
        //this.props.history.push('/profile');
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        refreshTokenSetup(res);
        //loggedIn = true;
        // <Redirect to="/home" />
      };
    
      const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login. 😢`
        );
        //loggedIn = false;
      };
      
      return (
        <div>
        {/* <Route exact path="/">
                {loggedIn ? <Redirect to="/home" /> : <Login />}
        </Route> */}
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
          />
        </div>
      );
}
 
export default Login;