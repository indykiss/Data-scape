

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/scape/new">Make a scape</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/knowledge">Knowledge Center</NavLink></li>
           <li><NavLink to="/scapes">Scapes</NavLink></li>
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;