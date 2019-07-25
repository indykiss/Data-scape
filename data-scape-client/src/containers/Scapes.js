
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScapeCard from '../components/ScapeCard'
// import { Counter } from '../components/ScapeCard'
import ScapeForm from './ScapeForm'
import { getScapes } from '../actions/scapes'

// Ok so I have an incrementing vote going
// Just need to fix it so that the count is for each scape

export class Counter extends Component {
    state = {
        count: 1
    }

    handleClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }) 
    )}

    render() {
        return <button onClick={this.handleClick}>{this.state.count}</button>;
      }
}


class Scapes extends Component {

    componentDidMount() {
        this.props.getScapes()
    }

    state = {
        count: 1
    }

    handleClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }) 
    )}

    // render() {
    //     return <button onClick={this.handleClick}>{this.state.count}</button>;
    //   }

    render () {
        return (
        <div>
            {/* <h1> Voting thing </h1>
            <Counter/> */}

            <h1> All the scapes </h1>
            <ScapeForm />
            {this.props.scapes.map((scape, i) => 
            <h5> 
            Name: {scape.name} 
            Stock:{scape.stock} <br/>
            History: {scape.history} <br/>
            Start date: {scape.start_date} <br/>
            End date: {scape.end_date} <br/> 
            Vote counts: {scape.counts}            
            <button onClick={this.handleClick}>{this.state.count}</button>
            </h5>
            // <ScapeCard key={scape.id} scape={scape}/>
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