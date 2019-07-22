
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Scapes from './Scapes'
import ScapeCard from '../components/ScapeCard'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Knowledge from '../components/Knowledge'
import scapes from '../reducers/scapes'
import { getScapes } from '../actions/scapes'

class App extends Component  {

    componentDidMount() {
        this.props.getScapes
    }

    render() {
        return (
            <div>
            <Scapes/>
            </div>
        )
    }
}

export default App;
