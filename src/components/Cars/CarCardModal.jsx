import React from 'react';
import { Modal } from 'flowbite-react';
import { Car } from '../../assets/img';

const CarCardModal = ({openModal,setOpenModal,car,name}) => {
    const {city_mpg,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,transmission,year} = car;
    return (
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <div className="flex justify-center">
                    <img src={Car} width={'400px'} />
                </div>
                <div className="mb-3">
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <div className="model-specification">
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>City Mpg</p>
                            <p className='font-bold'>{city_mpg}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Class</p>
                            <p className='font-bold'>{car.class}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Cobination Mpg</p>
                            <p className='font-bold'>{combination_mpg}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Cylinders</p>
                            <p className='font-bold'>{cylinders}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Displacement</p>
                            <p className='font-bold'>{displacement}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Drive</p>
                            <p className='font-bold'>{drive}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Fuel Type</p>
                            <p className='font-bold'>{fuel_type}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Highway Mpg</p>
                            <p className='font-bold'>{highway_mpg}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Make</p>
                            <p className='font-bold'>{make}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Model</p>
                            <p className='font-bold'>{model}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Transmission</p>
                            <p className='font-bold'>{transmission}</p>
                        </div>
                        <div className='flex justify-between items-center p-2'>
                            <p className='text-gray-600'>Year</p>
                            <p className='font-bold'>{year}</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default CarCardModal;