import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.nasa.gov/'
})

export default api