import React, { useEffect, useState } from 'react';
import { Car, Tire, SteeringWheel, Gas,RightArrow } from '../../assets/img';
import "./Cars.css";
import CarCardModal from './CarCardModal';

const CarCard = ({car}) => {
    const { model, make, transmission, drive, city_mpg } = car;
    const [openModal, setOpenModal] = useState(false);
    const [name,setName] = useState('')
    const [nameArr,setNameArr] = useState([])
    const capitalize = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const getNameCapitalize = ()=>{
        const capitalizeMake = capitalize(make);
        setNameArr(capitalizeMake);
        const capitalizeModel = model.split(' ');
        const models = capitalizeModel.map((m) => capitalize(m))
        setNameArr((prev) => [prev, ...models]);
    }

    useEffect(()=>{
        setName(nameArr.join(' '));
    },[nameArr])

    useEffect(()=>{
        getNameCapitalize()
    },[])
    return (
        <div className='car-container p-1 lg:p-5 '>
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <div className="my-2">
                <p className='text-2xl'><sup>$</sup><span className='font-bold text-3xl'>53</span><sub><small>/day</small></sub></p>
            </div>
            <div className="flex justify-center">
                <img src={Car} width={'250px'} />
            </div>
            <div className="car-detail">
                <div className="car-detail-show flex items-center justify-around p-2 rounded h-15 w-full">
                    <div className="flex flex-col items-center">
                        <img src={SteeringWheel} width={'20px'} />
                        <span className='text-center'>{transmission ? 'Automatic' : "Manual"}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={Tire} width={'20px'} />
                        <span className='text-center'>{drive}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={Gas} width={'20px'} />
                        <span className='text-center'>{city_mpg}</span>
                    </div>
                </div>
                <div className="car-detail-view-more" onClick={()=>setOpenModal(true)}>
                    <button className='w-full bg-blue-600 hover:bg-blue-700 text-white flex p-3 h-15 justify-center items-center rounded rounded-lg relative mb-3'>View More <img src={RightArrow} className='absolute right-10' /></button>
                </div>

                {/* Modal  */}
                <CarCardModal openModal={openModal} setOpenModal={setOpenModal} car={car} name={name} />
            </div>
        </div>
    )
}

export default CarCard;