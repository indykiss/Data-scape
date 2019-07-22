
import React from 'react'

const ScapeCard=({scape}) => (
    <div key={scape.id} class = 'card'>
        <h4> Name: {scape.name}</h4>
            Stock: {scape.stock} <br/>
            History: {scape.history} <br/>
            Start date: {scape.start_date} <br/>
            End date: {scape.end_date} <br/>            
    </div>    
)

export default ScapeCard;