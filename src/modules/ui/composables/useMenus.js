import { useStore } from 'vuex'
import { computed } from 'vue'

const useMenus = () => {
    const store = useStore()

    return {
        menus: computed(() => store.getters['ui/getMenus'])
    }
}

export default useMenus