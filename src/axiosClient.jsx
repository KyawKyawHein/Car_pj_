import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`
})

axiosClient.interceptors.request.use((config)=>{
    config.headers = {
        'X-RapidAPI-Key': 'ca2e56b72cmsh4aac4cfc8e124f1p104220jsn73631de6d703',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    return config;
})

axiosClient.interceptors.response.use((response)=>{
    return response;
})

export default axiosClient;