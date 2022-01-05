// import { computed } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const useCharacters = () => {
    const store = useStore()

    const getCharacters = async () => {
        await store.dispatch('characters/getCharacters')
    }

    return {
        getCharacters,

        loadingStatus: computed(() => store.getters['characters/loadingStatus']),
        allCharacters: computed(() => store.getters['characters/allCharacters'])
    }
}

export default useCharacters