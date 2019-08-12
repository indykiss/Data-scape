
import React from 'react';
//import Scapes from '../containers/Scapes'
import About from './About'
import Home from './Home'
import Knowledge from './Knowledge'
import ScapeForm from '../containers/ScapeForm'
import Scapes from '../containers/Scapes'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Navbar = () => {
    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/knowledge">Knowledge</Link>
            </li>
            <li>
              <Link to="/scapeform">Add a new scape</Link>
            </li>
            <li>
              <Link to="/scapes">See all scapes</Link>
            </li>
          </ul>
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/knowledge" component={Knowledge} />
          <Route exact path="/scapeform" component={ScapeForm} />
          <Route exact path="/scapes" component={Scapes} />

        </div>
      </Router>
    
)}

export default Navbar;