import { useStore } from 'vuex'
import { computed } from 'vue'

const useMenus = () => {
    const store = useStore()

    const setActiveMenu = (menuKey) => {
        store.commit('ui/setActiveMenu', menuKey)
    }

    const clearActiveMenu = () => {
        store.commit('ui/clearActiveMenu')
    }

    return {
        clearActiveMenu,
        setActiveMenu,

        menus: computed(() => store.getters['ui/getMenus']),
        selectedMenu: computed(() => store.getters['ui/getMenus'])
    }
}

export default useMenus