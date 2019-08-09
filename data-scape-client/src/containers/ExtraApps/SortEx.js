const Row = ({id, title, priority, type, complete}) => (
  <div className="row">
    <div>{id}</div>
    <div>{title}</div>
    <div>{priority}</div>
    <div>{type}</div>    
    <div>{complete}</div>    
  </div>
);

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 403, title: 'Task 403', priority: 'High', type: 'Improvement', complete: 100}, 
        {id: 532, title: 'Task 532', priority: 'Medium', type: 'Improvement', complete: 30}, 
        {id: 240, title: 'Task 240', priority: 'High', type: 'Story', complete: 66},
      ],
    };
  }
  
  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy = (key) => {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

    return (
      <div>
        <div>
          <div onClick={() => this.sortBy('id')} >ID</div>
          <div onClick={() => this.sortBy('name')}>Name</div>
        </div>
        <div>
          {rows}
        </div>
      </div>
    );
    
  }
}


// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import scapes from './Scapes';

// class App extends Component {

//   state = {
//     scapes,
//     names: [],
//   }

//   componentDidMount() {
//     const { scapes, names} = this.state;

//     const names = scapes.map(scape => scape.name);
//     this.setState({ names })
//   }

//   sortAscending = () => {
//     const { names } = this.state;
//     names.sort((a, b) => a - b)    
//     this.setState({ names })
//   }

//   sortDescending = () => {
//     const { names } = this.state;
//     names.sort((a, b) => a - b).reverse()
//     this.setState({ names })
//   }

//   render() {
//     const { names } = this.state;
//     return (
//       <div>
//         <ul>
//           {
//             names.map((p, i) => {
//               return <li>{i}: {p}</li>;
//             })
//           }
//         </ul>
//         <button onClick={this.sortAscending}>asc</button>
//         <button onClick={this.sortDescending}>desc</button>
//       </div>
//     );
//   }
// }