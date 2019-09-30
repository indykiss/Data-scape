
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
    // passing data from parent to child is called using props. data passed to components
    // state is used for interactivity, like pressing buttons and updating count. data used WITHIN a component
// terminology
    // one way data flow. thats why we need mapStateToProps and mapDispatchToProps
    // mapStateToProps pulls data from state into props
        // dont need this in forms, bc not pulling data in, just pushing data out
    // mapDispatchToProps pushs actions from this component into reducer
        // need this in show page, bc ONLY pulling data in 
    // we use these two in connect that allows us to move data around the dif components

    // whenever user changes the DOM by clicking button, we update the state by doing ..
    // handleClick is a callback to App to fire whatever the updated state should be
    //  the callback then calls setState, which updates the app

// The state will change whenever we click the button

