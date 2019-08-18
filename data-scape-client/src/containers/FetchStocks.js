
import React, { Component } from 'react'
import { connect } from 'react-redux'
import getStocks from '../actions/getStocks'


class Stocks extends Component {

    componentDidMount() {
        this.props.getStocks()
        console.log(this.state)
    }

    render () {
        return (
        <div>
            {/* <h4>{this.state.stock_name}</h4> */}
        </div>
    )}


}





const mapStateToProps = (state) => {
    return ({
        stock_name: state.stock_name,
        history: state.history
    })
}

export default connect(mapStateToProps, { getStocks }) (Stocks);