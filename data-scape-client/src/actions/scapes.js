
import { resetScapeForm } from './scapeForm'

// Action creators
const setScapes = scapes => {
    return {
        type: 'GET_SCAPES', 
        scapes
    }
}

// Async actions
export const getScapes = () => {
    return dispatch => {
    return fetch(`http://localhost:3000/api/scapes`)
        .then(response => response.json())
        .then(scapes => dispatch(setScapes(scapes)))
        .catch(errors => console.log(errors))
    }
}

const addScape = scape => {
    return {
        type: "CREATE_SCAPE", 
        scape
    }
}

export const createScape = scape => {
    return dispatch => {
    return fetch(`http://localhost:3000/api/scapes`,  {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ scape: scape })
    })
        .then(response => response.json())
        .then(scape => {
            dispatch(addScape(scape))
            dispatch(resetScapeForm())
        })
        .catch(error => console.log(error))
    }
}
