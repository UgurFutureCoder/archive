import axios from "axios";

export const inctance = axios.create({
    baseURL: "http://localhost:4001/"
})


inctance.interceptors.request.use((config): any => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
   
    return config
})