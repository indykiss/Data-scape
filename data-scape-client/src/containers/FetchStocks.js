
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Stocks extends Component {

    componentDidMount() {
    //  "https://api.worldtradingdata.com/api/v1/history?symbol=" + this.state.stock_name + "&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"

        fetch(`https://api.worldtradingdata.com/api/v1/history?symbol=SBUX&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz`)
        .then(response => response.json())
        .then(responseData => {
          this.setState({
            stock_name: responseData.name, 
            history: responseData.history
          })
        })
    }

    render () {
        return (
            <div>
            {/* {console.log(this.state)} */}

            </div>
        )}
}


// const mapStateToProps = (state) => {
//     return ({
//         stock_name: state.stock_name,
//         history: state.history
//     })
// }

export default Stocks;