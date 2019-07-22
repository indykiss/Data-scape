
import React, {Component} from 'react'
import { connect } from 'react-redux'
import ScapeCard from '../components/ScapeCard'
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
            <ScapeCard key={scape.id} scape={scape} />
        )}
        <ScapeForm />
    </div>
    )}
}

const mapStateToProps = (state) => {
    return ({
        scapes: state.scapes
    })
}

export default connect(mapStateToProps, { getScapes }) (Scapes);