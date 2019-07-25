
import React, { Component, useState} from 'react'

export class Counter extends Component {
    state = {
        count: 1
    }

    handleClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }) 
    )}

    render() {
        return <button onClick={this.handleClick}>{this.state.count}</button>;
      }
}


const ScapeCard=({scape}) => (
    <div key={scape.id} className='card'>
        <h4> Name: {scape.name}</h4>
            Stock: {scape.stock} <br/>
            History: {scape.history} <br/>
            Start date: {scape.start_date} <br/>
            End date: {scape.end_date} <br/> 
            Vote counts: {scape.counts}
    </div>    
)

export default ScapeCard;

// Thinking in React blog post , react documentation
// Finish this feature 
// import variables is called something 
// terminology

// The state will change whenever we click the button