import React, { useEffect, useState } from 'react';
import {CarTitle,CarList} from "./index";
import { useCar } from '../../hooks/useCar';
import CarSearchForm from './CarSearchForm';

const Cars = () => {
    const { useGetCars } = useCar()
    const [showCars,setShowCars] = useState([]);
    const [payload, setPayload] = useState({ make: " ", model: " ", limit: 10, fuel: "",year:'' })
    const { data:cars, isLoading, isError,isFetching } = useGetCars(payload)
    const showMore = () => {
        setPayload({ ...payload, limit: payload.limit + 10 })
    }
    const smallLetter = (name)=>{
        name = name.split(' ').map((n)=>n.charAt(0).toLowerCase() + n.slice(1))
        name = name.join(' ')
        return name;
    }
    //search car from the form
    const searchCar = ({make,fuel,year})=>{
        setShowCars([])
        setPayload({...payload,make:smallLetter(make),fuel:smallLetter(fuel),year:year,limit:50})
    }
    
    useEffect(()=>{
        if(cars?.length >0){
            setShowCars(cars);
        }
    },[cars])
    console.log(showCars);

    return (
        <div className='mx-10 mb-5'>
            <CarTitle/>
            <CarSearchForm payload={payload} searchCar={searchCar}/>
            {
                <CarList cars={showCars} showMore={showMore} isLoading={isLoading} limit={payload.limit} />
            }
        </div>
    )
}

export default Cars;