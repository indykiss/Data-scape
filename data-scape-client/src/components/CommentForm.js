
import React, { Component } from 'react'

class CommentForm extends Component {

    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        var text=this.state.text;
        console.log(text)
        this.props.onFormSubmit({ text: text});
        this.setState({text: ''})
    }

    render () {
        return (
        <div>
        <form onSubmit={this.handleOnSubmit}>
        <label> Comment: </label>
            <input type="text" name="text" onChange={this.handleChange} value={this.state.text} />
            <input type="submit" value="Submit" />
        </form>
        </div>
        );
    }
}

export default CommentForm;