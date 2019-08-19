
import React, { Component } from 'react'
import { connect } from 'react-redux'
import getStocks from '../actions/getStocks'

// const getURL = () => {
//     //https://api.worldtradingdata.com/api/v1/history?symbol=AAPL&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz
//     return (
//     // "https://api.worldtradingdata.com/api/v1/history?symbol=" + this.state.stock_name + "&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
//         "https://api.worldtradingdata.com/api/v1/history?symbol=SBUX&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
//     )
// }

// var getStock = () => { 
//     fetch(this.getURL())
//             .then(response => response.json())
//             .then((responseData) => {
//               this.setState({ stock_name: responseData.name,
//                 history: responseData.history
//               })
//             .catch(error => this.setState({ error }));
//       })
// }


class Stocks extends Component {

    componentDidMount() {
        this.props.getStocks()
    }

    render () {
        return (
            <h3>{console.log()}</h3>
        )}
}


const mapStateToProps = (state) => {
    return ({
        stock_name: state.stock_name,
        history: state.history
    })
}

export default connect( mapStateToProps, getStocks) (Stocks);