
import React from 'react';
//import Scapes from '../containers/Scapes'
import About from './About'
import Home from './Home'
import Knowledge from './Knowledge'
import ScapeForm from '../containers/ScapeForm'
import Scapes from '../containers/Scapes'

import { Link } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";


const NavBarLinks = () => {
    return (
        <Router>
        <div>
          <ul>
              <Link to="/">Home</Link>
          <br></br>
              <Link to="/about">About</Link>
          <br></br>
              <Link to="/knowledge">Knowledge</Link>
          <br></br>
              <Link to="/scapeform">Add a new scape</Link>
          <br></br>
              <Link to="/scapes">See all scapes</Link>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/knowledge" component={Knowledge} />
          <Route exact path="/scapeform" component={ScapeForm} />
          <Route exact path="/scapes" component={Scapes} />
        </div>
      </Router>    
)}

export default NavBarLinks;