import disneyApi from '@/api/disneyApi'

export const getCharacters = async ({ commit }, currentPage) => {
    try {
        commit('setLoading', true)
        const { data } = await disneyApi.get(`/characters?page=${currentPage}`)
        commit('getCharacters', data)
        commit('setLoading', false)
    } catch (error) {
        console.log(error)
    }
}

export const getCharacterDetails = async ({ commit }, characterId) => {
    try {
        commit('setLoading', true)
        const { data } = await disneyApi.get(`/characters/${characterId}`)
        commit('getCharacterDetails', data)
        return data?.name
    } catch (error) {
        console.log(error)
    } finally {
        commit('setLoading', false)
    }
}