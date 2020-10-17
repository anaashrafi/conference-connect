import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
        <Navbar bg="primary" variant="dark">
          <NavLink to="/" style={{ color: '#FFF' }}>Home</NavLink>
          <NavLink to="/about" style={{ color: '#FFF' }}>About</NavLink>
          <NavLink to="/contact" style={{ color: '#FFF' }}>Contact</NavLink>
        </Navbar>
       </div>
    );
}
 
export default Navigation;