import axios from "axios";
const api = axios.create({
    baseURL: 'https://localhost:7242/api',
    headers: {
        Accept: 'application/json'
    }
})
api.interceptors.request.use((config) => {
    return config
})

export default api