import disneyApi from '@/api/disneyApi'

export const getCharacters = async({commit}, currentPage) => {
    try {
        commit('setLoading', true)
        const { data } = await disneyApi.get(`/characters?page=${currentPage}`)
        commit('getCharacters', data)
    } catch (error) {
        console.log(error)
    }finally{
        commit('setLoading', false)
    }
}