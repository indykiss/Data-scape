
// No persistence, so no ID
// import ScapeForm from './ScapeForm'
// import Scapes from './Scapes'
import React, { Component } from 'react'
import CommentBox from '../components/CommentBox'


class App extends Component {
    render () {
        return(
            <div>
            <CommentBox />
            {/* <ScapeForm /> */}
            {/* <Scapes /> */}
            </div>
        )
    }
}
  

export default App;

