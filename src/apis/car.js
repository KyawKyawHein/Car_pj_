import axios from "axios";
import axiosClient from "../axiosClient"

export const getCars=  async({make,model,year,limit,fuel})=>{
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: { 
            model:  model || "",
            make : make||"",
            year : year || '',
            limit : limit || 10,
            fuel_type :  fuel || "",
        },
        headers: {
            'X-RapidAPI-Key': 'ca2e56b72cmsh4aac4cfc8e124f1p104220jsn73631de6d703',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };


    const res = await axios.request(options);
    return res.data
}