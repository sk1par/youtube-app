const history = (searchString) => {
    return {
        type: 'SEARCH_TERM',
        payload: searchString
    }
}

export default history;