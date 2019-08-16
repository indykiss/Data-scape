
import React from 'react';
//import Scapes from '../containers/Scapes'
import About from './About'
import Home from './Home'
import Knowledge from './Knowledge'
import ScapeForm from '../containers/ScapeForm'
import Scapes from '../containers/Scapes'
import { Navbar, NavLink, Nav } from 'react-bootstrap/Navbar'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const NavBarLinks = () => {
    return (
        <Router>
        <div>
        <Navbar bg="light" expand="lg">
          <ul>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            {/* <li>
              <Link to="/knowledge">Knowledge</Link>
            </li>
            <li>
              <Link to="/scapeform">Add a new scape</Link>
            </li>
            <li>
              <Link to="/scapes">See all scapes</Link>
            </li> */}
          </ul>
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/knowledge" component={Knowledge} />
          <Route exact path="/scapeform" component={ScapeForm} />
          <Route exact path="/scapes" component={Scapes} />
          </ Navbar>
        </div>
      </Router>    
)}

export default NavBarLinks;