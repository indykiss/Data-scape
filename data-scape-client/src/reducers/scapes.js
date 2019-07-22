

export default (state = [], action) => {

    switch(action.type) {
        case 'GET_SCAPES':
            return action.scapes;

        case 'CREATE_SCAPE':
            return state.concat(action.scape);

    default: 
        return state;

    }
}