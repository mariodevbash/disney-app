export const getMenus = (state) => {
    return state.menus
}

export const getSelectedMenu = (state) => {
    let selected
    state.menus.forEach((element) => element.selected && (selected = element.key))
    return selected
}