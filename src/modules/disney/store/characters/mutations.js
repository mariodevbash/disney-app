export const getCharacters = (state, payload) => {
    state.characters = payload
}

export const setLoading = (state, payload) => {
    state.isLoading = payload
}