import { useStore } from 'vuex'
import { computed } from 'vue'
import { notification } from 'ant-design-vue'

const useCharacters = () => {
    const store = useStore()

    const getCharacters = async (currentPage) => {
        await store.dispatch('characters/getCharacters', currentPage)
    }

    const getCharacterDetails = async ({ characterId }) => {
        const result = await store.dispatch('characters/getCharacterDetails', characterId)
        
        if(!result){
            notification['error']({
                message: 'ERROR',
                description: 'El personaje que buscas no existe.'
            })
        }
    }

    return {
        getCharacters,
        getCharacterDetails,

        loadingStatus: computed(() => store.getters['characters/loadingStatus']),
        allCharacters: computed(() => store.getters['characters/allCharacters']),
        characterDetails: computed(() => store.getters['characters/characterDetails']),
        perPage: computed(() => store.getters['characters/perPage']),
        totalItems: computed(() => store.getters['characters/totalItems'])
    }
}

export default useCharacters