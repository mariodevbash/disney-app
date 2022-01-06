import { useStore } from 'vuex'
import { computed } from 'vue'

const useCharacters = () => {
    const store = useStore()

    const getCharacters = async (currentPage) => {
        await store.dispatch('characters/getCharacters', currentPage)
    }

    return {
        getCharacters,

        loadingStatus: computed(() => store.getters['characters/loadingStatus']),
        allCharacters: computed(() => store.getters['characters/allCharacters']),
        perPage: computed(() => store.getters['characters/perPage']),
        totalItems: computed(() => store.getters['characters/totalItems'])
    }
}

export default useCharacters