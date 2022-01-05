import disneyApi from '@/api/disneyApi'

export const getCharacters = async({commit}) => {
    try {
        commit('setLoading', true)
        const { data } = await disneyApi.get('/characters')
        commit('getCharacters', data.data)
    } catch (error) {
        console.log(error)
    }finally{
        commit('setLoading', false)
    }
}