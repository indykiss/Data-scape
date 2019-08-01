// import { connect } from 'react-redux'
// import { getScapes } from '../actions/scapes'

// No persistence, so no ID

import React, { Component } from 'react'

var list = [
    {id: 0, text: "first comment"},
    {id: 1, text: "second comment"},
    {id: 2, text: "third comment"}
]

class App extends Component  {
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


class Comment extends Component {
    render () {
        return(
            <div> <h4> Text: {this.props.text} <br/>
                ID: {this.props.id}
            </h4>
            </div>
        )
    }
}

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

export default App;






// class CommentList extends Component {


//     render () {
//         return (
//         <div>

//         </div>
//     )}
// }

// {this.state.comments.map(comment => 
//     <CommentDomHandler key={comment.id}
//     id={comment.id}
//     text={comment.text}
//     onSubmit={this.handleEvent}
//     />)}
//     <CommentList />




// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import Scapes from './Scapes'
// import ScapeForm from './ScapeForm'
//  import Navbar from '../components/Navbar'



// import React, { Component } from 'react'
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// // import ReactDOM from 'react-dom';
// import Scapes from './Scapes'
// import ScapeForm from './ScapeForm'

// // import { getScapes } from '../actions/scapes'
// //import NavBar from '../components/Navbar'


// const list = [
//     {id: 1,
//     name: "Starbucks",
//     votes: 0},
//     {id: 2,
//     name: "Apple",
//     votes: 0},
//     {id: 3,
//     name: "Sony",
//     votes: 0},
// ]


// class App extends Component  {

//     state = {
//         scapes: []
//     };

//     componentDidMount() {
//         this.props.getScapes;
//         this.setState({ scapes: list });
//     }

//     handleEvent = scapeID => {
//         const updatedList = this.state.scapes.map(scape => {
//           if (scape.id === scapeID) {
//             return Object.assign({}, scape, {
//               votes: scape.votes + 1
//             });
//           } else {
//             return scape;
//           }
//         });
      
//         this.setState({
//           scapes: updatedList
//         });
//       };

//     render() {

//         return (
//             this.state.scapes.map(scape => 
//             <Scape key={scape.id}
//             id={scape.id}
//             name={scape.name} 
//             votes={scape.votes}
//             onVote={this.handleEvent}
//             />)
//     )}
// }

// class Scape extends Component {

//     handleClick = () => this.props.onVote(this.props.id);

//     render () {
//         return (
//         <div className="App">
//            {this.props.name} <button onClick={this.handleClick}>Upvote</button> {this.props.votes}
//         </div>);
//     }
// }


// export default App;
