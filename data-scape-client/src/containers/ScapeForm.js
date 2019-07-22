
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateScapeFormData } from '../actions/scapeForm'
import { createScape } from '../actions/scapes'


class ScapeForm extends Component {

    handleOnChange = event => {
        const { name, value } = event.target;
        const currentScapeFormData = Object.assign({}, this.props.scapeFormData, {
            [name]: value
        })
        this.props.updateScapeFormData(currentScapeFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createScape(this.props.scapeFormData)
    }

    render () {
        const {name, stock, start_date, end_date} = this.props.scapeFormData;
        return (
            <div class = 'card2'>
            <h2>Add a ScapeForm</h2>
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