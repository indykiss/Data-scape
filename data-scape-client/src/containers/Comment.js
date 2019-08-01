

import React, { Component } from 'react'

var data = [{
  id: 1,
  text: "first comment"
  }, {
  id: 2,
  text: "second comment"
}];


export default class CommentBox extends Component {
  
  constructor(props) {
    super(props)
  }

  state = {
    comments: [], 
  };

  componentDidMount() {
     this.setState({ data: data });
 }

  handleFormSubmit = (comment) => {
    //update array for demo purposes - would be fetched from server etc..
    data.push(comment);        
    this.setState({data: data});
  }

  render() {
    return (
    <div>
        <CommentList data={this.state.data} />
        <CommentForm onFormSubmit={this.handleFormSubmit}/>
    </div>
    )}
}

// I don't love this. Let's see what happens anyways:
class CommentList extends Component {

  render(){
    var commentnodes = this.state.data.map(comment => {
        return (
            <Comment key={comment.id}>
            {comment.text}</Comment>    
        )
    });
    return (
        <div>
            {commentnodes}
        </div>
    )}
};

class Comment extends Component {
  render() {
    // I dont love:
    <h3>{this.props.children}</h3>
  }
}


class CommentForm extends Component {

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    var text = this.state.text;
    
    // ???:
    this.props.onFormSubmit({text: text});        
    this.setState({text: ''});
}


  render() {
       return (
           <div>
           <h1> Comment here: </h1>
            <form onSubmit={this.handleOnSubmit}>
             <label>
                   Comment: 
                   <input type="text" name="comment" onChange={this.handleChange} value={this.state.text} />
               </label>
                   <input type="submit" value="Submit" />
               </form>
  
             </div>
    
  )};

}




// // So I need to build a comment form. 
// // I started doing it OK but then fell when it came to handleChange/handleSubmit
// // So need to start again with keeping track of all the comments 

// // Next refactor might be a sorting thing. Try that out before hand a bit


// import React, { Component } from 'react'

// var commentData = [
//   { 
//     id: 1,
//     text: "This is great!"
//   },
//   { 
//     id: 2,
//     text: "Need 22598823 other things." 
//   }
// ];




// class CommentBox extends Component {
  
//   getInitialState = () => {
//     return {
//       data: commentData
//     }
//   }

//   handleFormSubmit = (comment) => {
//       //update array for demo purposes - would be fetched from server etc..
//       this.props.data.push(comment);
//       var comments = this.state.data;
//       var newComments = comments.concat([comment]);
//       this.setState({data: newComments});
//   }

//   render() {
//       return (
//           <div>
//               <CommentList data={this.props.data} />
//               <CommentForm data={this.props.data} onFormSubmit={this.handleFormSubmit}/>
//           </div>
//       )
//   }
// };

// class CommentList extends Component {

//   render() {
//     var allComments = this.props.data.map(function (comment) {
//         return (
//             <Comment key={comment.id}>{comment.text}</Comment>    
//         )
//     });
//     return (
//         <div>
//             {allComments}
//         </div>
//     )
// }
// }

// class CommentForm extends Component {

//   getInitialState = () => {
//     return ({text: ''});
//   }

//   handleChange = (e) => {
//     this.setState({text: e.target.value});
//   }
//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     var text = this.state.text;

//     this.props.onFormSubmit({text: text});        
//     this.setState({text: ''});
//   }

//   render() {
//     return (
//         <div>
//         <h1> Comment here: </h1>
//         <form onSubmit={this.handleOnSubmit}>
//           <label>
//               Comment: 
//               <input type="text" name="comment" value={this.state.text} onChange={this.handleChange} />
//           </label>
//               <input type="submit" value="Submit" />
//           </form>


//         </div>

//       )};

// }
  
