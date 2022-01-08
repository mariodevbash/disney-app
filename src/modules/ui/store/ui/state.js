export default () => ({
    menus: [
        {
            key: 1,
            icon: "person",
            name: "Personajes",
            selected: false,
            routeName: "general-view",
            params: {}
        },
        {
            key: 2,
            icon: "search",
            name: "Buscar Personaje",
            selected: false,
            routeName: "search-character",
            params: {
                id: 7
            }
        }
    ]
})