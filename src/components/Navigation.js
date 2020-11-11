import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Conference Connect</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/connections">Connections</a>
                    <a class="nav-item nav-link" href="/profile">Profile</a>
                    <a class="nav-item nav-link" href="/help">Help</a>
                    <a class="nav-item nav-link" href="/settings">Settings</a>
                </div>
            </div>
        </nav>

       </div>
    );
}
 
export default Navigation;