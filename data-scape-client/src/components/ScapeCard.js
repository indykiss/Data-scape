
import React from 'react'

const ScapeCard=({scape}) => (
    <div key={scape.id}>
        <h4> Name: {scape.name}</h4>
            <li> Stock: {scape.stock} <br/>
            History: {scape.history} <br/>
            Start date: {scape.start_date} <br/>
            End date: {scape.end_date} <br/>
            ID:{scape.id} <br/>
            </li>
    </div>    
)

export default ScapeCard;