
// No persistence, so no ID
import React, { Component } from 'react'
import Stocks from './FetchStocks'
import NavBarLinks from '../components/Navbar'
// import CommentBox from '../components/CommentBox'


class App extends Component {

    render () {
        return(
            <div>
            <NavBarLinks />
            <Stocks />
            </div>
        )
    }
}

export default App;

