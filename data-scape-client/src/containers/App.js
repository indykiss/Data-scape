
import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ReactDOM from 'react-dom';
import Scapes from './Scapes'
import scapes from '../reducers/scapes'
// import { getScapes } from '../actions/scapes'
import NavBar from '../components/Navbar'

class App extends Component  {

    componentDidMount() {
        this.props.getScapes;
    }

    render() {
        return (
            <div className="App">
            <NavBar/>
            <Scapes/>
            </div>
        )
    }
}

export default App;
