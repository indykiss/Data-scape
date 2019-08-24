
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateScapeFormData } from '../actions/scapeForm'
import { createScape } from '../actions/scapes'


class ScapeForm extends Component {

    // Maybe I need to make a post request with this: 
    // Since I'm returning the api data, not loading it
    // before the actions happen
    componentDidMount(stock) {
        // fetch(`https://api.worldtradingdata.com/api/v1/history?symbol=SBUX&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz`)
        fetch(`https://api.worldtradingdata.com/api/v1/history?symbol=${stock}&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz`)
            .then(response => response.json())
            .then(responseData => {
              this.setState({
                stock: responseData.name, 
                history: responseData.history
              })
        })
    }
// 1st step is to change the handleOnChange to contact API to fetch the desired stock 

    handleOnChange = event => {
        const { name, value } = event.target;
        const currentScapeFormData = Object.assign({}, this.props.scapeFormData, {
            [name]: value
        })
        this.props.updateScapeFormData(currentScapeFormData)
    }

    handleStockInput = event => {
        // maybe handle stock price change differently
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createScape(this.props.scapeFormData)
    }

    render () {
        const {name, stock, start_date, end_date} = this.props.scapeFormData;
        return (
            <div>
            <h2>Scape form</h2>
            <form onSubmit={this.handleOnSubmit}>
            <div><label>Name this scape</label>
            <input
                type='text'
                name="name"
                value={name}
                onChange={this.handleOnChange}
            /></div>
            <div><label>Select a stock</label>
            <input
                type='text'
                name="stock"
                value={stock}
                onChange={this.handleOnChange}
            /></div>
            <div><label>Select start date</label>
            <input
                type='date'
                name="start_date"
                value={start_date}
                onChange={this.handleOnChange}
            /></div>
            <label>Select end date</label>
            <div><input
                type='date'
                name="end_date"
                value={end_date}
                onChange={this.handleOnChange}
            /></div>
            <button type="submit">Add Scape</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        scapeFormData: state.scapeFormData
    }
}

export default connect(mapStateToProps, { updateScapeFormData, createScape }) (ScapeForm); 