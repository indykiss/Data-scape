
import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

var list = [
    {id: 0, text: "first comment"},
    {id: 1, text: "second comment"},
    {id: 2, text: "third comment"}
]

class CommentBox extends Component  {
    state = {
        comments: []
    }

    componentDidMount = () => {
        this.setState({ comments: list })
    }

    handleEvent = comment => {
        const updatedList = this.state.comments.concat(comment)
        this.setState({
          comments: updatedList
        })

        this.state.comments = this.state.comments.conacat(comment)
      }

    render() {
        return (
        <div>
        {/* I am the CommentForm */}
            <CommentForm onFormSubmit={this.handleEvent} />  
        {/* I list out the comments that exist */}
            {this.state.comments.map(comment => {
                return (<Comment key={comment.id} id={comment.id} text={comment.text} 
                />)
            })}
        </div>
        )
    }
}

export default CommentBox;