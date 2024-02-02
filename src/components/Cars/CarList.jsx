import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const CarList = ({cars,showMore,isLoading,limit}) => {
    const [showBtn,setShowBtn] = useState(true);
    const [carCount,setCarCount]= useState(10);
    useEffect(()=>{
        if(carCount ==50){
            setShowBtn(false)
        }
    },[carCount])

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-2'>
            {
                cars?.map((car, key) => (
                    <CarCard key={key} car={car} />
                ))
            }
        </div>
        <div className="text-center">
                {
                    showBtn && limit<50 && cars.length>0 &&
                    <button className={`px-3 lg:px-10 p-2 border rounded rounded-full bg-blue-600 hover:bg-blue-700 text-white `} disabled={isLoading} onClick={showMore}>{isLoading ? 'Please wait' : 'Show more'}</button>
                }
                {
                    !isLoading && cars.length==0 &&
                    <button className={`p-2 text-red-500 font-bold text-2xl `}>Not found.</button>
                }
        </div>
        </>
    )
}

export default CarList;