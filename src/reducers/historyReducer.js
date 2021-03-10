const searchTerm = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_TERM':
            return [
                ...state,
                 action.payload
            ];
        default:
            return state;       
    }
};

export default searchTerm;