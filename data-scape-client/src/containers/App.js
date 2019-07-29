
import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import ReactDOM from 'react-dom';
import Scapes from './Scapes'
import ScapeForm from './ScapeForm'
import { getScapes } from '../actions/scapes'
import NavBar from '../components/Navbar'

const list = [
    {id: 1,
    name: "Starbucks",
    votes: 0},
    {id: 2,
    name: "Apple",
    votes: 0},
    {id: 3,
    name: "Sony",
    votes: 0},
]

class App extends Component  {

    state = {
        scapes: []
    };

    componentDidMount() {
        this.props.getScapes;
        this.setState({ scapes: list });
    }

    handleEvent = scapeID => {
        const updatedList = this.state.scapes.map(scape => {
          if (scape.id === scapeID) {
            return Object.assign({}, scape, {
              votes: scape.votes + 1
            });
          } else {
            return scape;
          }
        });
      
        this.setState({
          scapes: updatedList
        });
      };

    render() {
        return (
            this.state.scapes.map(scape => 
            <Scape key={scape.id}
            id={scape.id}
            name={scape.name} 
            votes={scape.votes}
            onVote={this.handleEvent}
            />)
    )}
}

class Scape extends Component {

    handleClick = () => this.props.onVote(this.props.id);

    render () {
        return (
        <div className="App">
           {this.props.name} <button onClick={this.handleClick}>Upvote</button> {this.props.votes}
        </div>);
    }
}


export default App;















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
