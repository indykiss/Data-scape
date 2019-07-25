
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScapeCard from '../components/ScapeCard'
import { Counter } from '../components/ScapeCard'
import ScapeForm from './ScapeForm'
import { getScapes } from '../actions/scapes'

// Ok so I have an incrementing vote going
// Just need to add it to each individual scape

class Scapes extends Component {

    componentDidMount() {
        this.props.getScapes()
    }

    render () {
        return (
        <div>
            <h1> Voting thing </h1>
            <Counter/>

            <h1> All the scapes </h1>
            <ScapeForm />
            {this.props.scapes.map(scape => 
            <ScapeCard key={scape.id} scape={scape}/>
            )}
        </div>
    )}
}

const mapStateToProps = (state) => {
    return ({
        scapes: state.scapes
    })
}

export default connect(mapStateToProps, { getScapes }) (Scapes);