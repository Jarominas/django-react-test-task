import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000/'

const api = axios.create({
    baseURL: baseURL,
})

export default api
