import { useQuery } from "@tanstack/react-query"
import { getCars } from "../apis/car"

const useGetCars =(data)=>{
    return useQuery({
        queryKey : ['get','cars',data],
        queryFn : ()=>getCars(data)
    })
}

export const useCar = ()=>{
    return {
        useGetCars
    }
}