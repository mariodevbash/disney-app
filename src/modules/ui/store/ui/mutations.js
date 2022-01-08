export const setActiveMenu = (state, payload) => {
    const index = state.menus.findIndex((element) => element.key === payload)
    state.menus[index].selected = true
}

export const clearActiveMenu = (state) => {
    state.menus.forEach((element) => (element.selected = false))
}