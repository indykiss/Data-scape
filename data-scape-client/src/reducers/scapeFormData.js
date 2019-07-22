
const initialState = {
    name: '', 
    stock: '', 
    history: '', 
    start_date: "2018-01-01", 
    end_date: "2018-01-03"
}

export default (state = initialState, action) => {
        switch(action.type) {
            case 'UPDATED_DATA':
                return action.scapeFormData

            case 'RESET_SCAPE_FORM':
                return initialState
        
            default:
                return state;
        }
}