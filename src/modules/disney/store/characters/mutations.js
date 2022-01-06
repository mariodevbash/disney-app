export const getCharacters = (state, payload) => {
    state.characters = payload.data
    state.totalPages = payload.totalPages
    state.perPage = payload.count
}

export const setLoading = (state, payload) => {
    state.isLoading = payload
}