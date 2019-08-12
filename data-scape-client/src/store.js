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


