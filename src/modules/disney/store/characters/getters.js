export const loadingStatus = (state) => {
    return state.isLoading
}

export const allCharacters = (state) => {
    return state.characters
}

export const characterDetails = (state) => {
    return state.characterDetails
}

export const perPage = (state) => {
    return state.perPage
}

export const totalItems = (state) => {
    return state.totalPages * state.perPage
}