
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Counter } from '../components/ScapeCard'
import ScapeForm from './ScapeForm'
import { getScapes } from '../actions/scapes'

class Scapes extends Component {

    componentDidMount() {
        this.props.getScapes()
    }

    render () {
        return (
        <div>
            <h1> All the scapes </h1>
            {this.props.scapes.map(scape => 
             <div key={scape.id} className='card'>
                <h5>Name: {scape.name} <br/>
                Stock:{scape.stock} <br/>
                History: {scape.history} <br/>
                Start date: {scape.start_date} <br/>
                End date: {scape.end_date} <br/> 
                {/* ID: {scape.id}<br/>
                Vote counts: {scape.counts} */}
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