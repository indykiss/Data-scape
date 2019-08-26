
// Action creators

export const updateScapeFormData = scapeFormData => {
    return {
        type: 'UPDATED_DATA',
        scapeFormData
    }
}

export const resetScapeForm = () => {
    return {
        type: 'RESET_SCAPE_FORM'
    }
}