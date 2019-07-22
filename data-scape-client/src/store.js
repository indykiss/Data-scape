// Reducer is just a function that returns a new state of the desired thing

// I'm at about 35 mins into the video. 
// I'm working on getting these weird errors fixed in my console. 
// Video isn't having these issues.
// Something to do with my store

import { createStore, applyMiddleware, compose, combineReducers} from 'redux'

import thunk from 'redux-thunk'
import scapes from './reducers/scapes'
import scapeFormData from './reducers/scapeFormData'

const reducers = combineReducers ({
    scapes, 
    scapeFormData
})

//const middleware = [thunk];

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

export default store;


// export default createStore(
//     reducers, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunk)
// )


