
// No persistence, so no ID
import React, { Component } from 'react'
import ScapeForm from './ScapeForm'
import Scapes from './Scapes'
import NavBarLinks from '../components/Navbar'
import CommentBox from '../components/CommentBox'


class App extends Component {
    render () {
        return(
            <div>
            <NavBarLinks />
            {/* <ScapeForm />
            <Scapes /> */}
            <CommentBox />
            </div>
        )
    }
}
  

export default App;

