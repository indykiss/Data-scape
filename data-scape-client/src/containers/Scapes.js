
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Counter } from '../components/ScapeCard'
import ScapeForm from './ScapeForm'
import { getScapes } from '../actions/scapes'

// Ok so I have an incrementing vote going
// Just need to fix it so that the count is for each scape

// export class Counter extends Component {
//     state = {
//         count: 1
//     }

//     handleClick = () => {
//         this.setState(({countStart}) => ({
//             count: countStart + 1
//         }) 
//     )}

//     render() {
//         return <button onClick={this.handleClick}>{this.state.count}</button>;
//       }
// }

class Scapes extends Component {

    componentDidMount() {
        this.props.getScapes()
    }

    state = {
        countClick: 1
    }

    // handleClick = () => {
    //     this.setState(({count}) => ({
    //         count: count + 1
    //     }) 
    // )}

    // render() {
    //     return <button onClick={this.handleClick}>{this.state.count}</button>;
    //   }

    handleEvent = () => {
        console.log("handleEvent click click")
    }

    handleClick = () => {
        this.props.onVote(this.props.name);
    }

    render () {
        return (
        <div>
            <h1> All the scapes </h1>
            <ScapeForm />
            {this.props.scapes.map(scape => 
             <div key={scape.id} className='card'>
                <h5>Name: {scape.name} <br/>
                Stock:{scape.stock} <br/>
                History: {scape.history} <br/>
                Start date: {scape.start_date} <br/>
                End date: {scape.end_date} <br/> 
                ID: {scape.id}<br/>
                Vote counts: {scape.counts}
                <button onClick={this.handleClick}>Click click</button>
                </h5>
                </div>    
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