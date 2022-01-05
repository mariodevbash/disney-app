import disneyApi from '@/api/disneyApi'

export const getCharacters = async({commit}) => {
    try {
        const { data } = await disneyApi.get('/characters')
        console.log(data)
        commit('getCharacters', data.data)
    } catch (error) {
        console.log(error)
    }
}