import axios from 'axios'

const disneyApi = axios.create({
    baseURL: 'https://api.disneyapi.dev'
})

export default disneyApi