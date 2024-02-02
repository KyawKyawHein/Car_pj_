import React, { useRef, useState } from 'react';
import { CarLogo,ModelIcon,MagnifyingGlass } from '../../assets/img';
import { fuels,yearsOfProduction } from "../constant.js";
import {  Select,TextInput } from 'flowbite-react';

const CarSearchForm = ({searchCar}) => {
    const [manufacturer,setManufacturer] = useState();
    const [searchName,setSearchName] = useState('');
    const fuelRef = useRef();
    const yearRef = useRef();
    const submitController = (e)=>{
        e.preventDefault();
        searchCar({make:searchName,fuel:fuelRef.current.value,year:yearRef.current.value});
    }
    const selectChange = ()=>{
        searchCar({make:searchName,fuel:fuelRef.current.value,year:yearRef.current.value});
    }
    return (
        <div className="flex justify-between items-center my-4 mt-6">
            <form onSubmit={(e)=>submitController(e)} className='flex gap-5 items-center '>
                <div className="max-w-md flex gap-2 items-center ">
                    <div className=" block">
                        <img src={ModelIcon} className='w-6' />
                    </div>
                    <div className=" block">
                        <div>
                            <TextInput id="car" value={searchName} onChange={(e)=>setSearchName(e.target.value)} type="car" placeholder="Car Name"/>
                        </div>
                    </div>
                </div>
                <button type='submit' className='border rounded px-1'><img src={MagnifyingGlass} alt="" /></button>
            </form>
            <div className="max-w-md flex gap-2 items-center">
                <Select id="fuel" ref={fuelRef} onChange={selectChange} required>
                    {
                        fuels.map((fuel) => (
                            <option key={fuel.value} value={fuel.value}>{fuel.title}</option>
                        ))
                    }
                </Select>
                <Select id="year" ref={yearRef} onChange={selectChange} required>
                    {
                        yearsOfProduction.map((production) => (
                            <option key={production.value} value={production.value}>{production.title}</option>
                        ))
                    }
                </Select>
            </div>
        </div>
    )
}
export default CarSearchForm;