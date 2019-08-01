
import React, { Component } from 'react'

class Comment extends Component {
    render () {
        return(
            <div> <h4> Text: {this.props.text} <br/>
                ID: {this.props.id}
            </h4> </div>
        )
    }
}

export default Comment;