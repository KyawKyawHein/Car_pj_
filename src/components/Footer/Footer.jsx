import React from 'react';
import { Logo } from '../../assets/img';

const Footer = () => {
    return (
        <>
        <div className="mx-10 my-10">
            <div className="block lg:flex justify-between items-start">
                <div className="logo">
                    <img src={Logo} width={'100px'} />
                    <div className="mt-3 text-gray-500">
                        <p>Autoverse 2023</p>
                        <p>All Rights Reserved </p>
                    </div>
                </div>
                <div className="about">
                    <p className='font-semibold'>About</p>
                    <ul className="mt-3">
                        <li className='my-2 text-gray-500'>How it works</li>
                        <li className='my-2 text-gray-500'>Featured</li>
                        <li className='my-2 text-gray-500'>Partnership</li>
                        <li className='my-2 text-gray-500'>Business Relation</li>
                    </ul>
                </div>
                <div className="company">
                    <p className='font-semibold'>Company</p>
                    <ul className="mt-3">
                        <li className='my-2 text-gray-500'>Events</li>
                        <li className='my-2 text-gray-500'>Blog</li>
                        <li className='my-2 text-gray-500'>Podcast</li>
                        <li className='my-2 text-gray-500'>Invite a friend</li>
                    </ul>
                </div>
                <div className="socials">
                    <p className='font-semibold'>Socials</p>
                    <ul className="mt-3">
                        <li className='my-2 text-gray-500'>Discord</li>
                        <li className='my-2 text-gray-500'>Instagram</li>
                        <li className='my-2 text-gray-500'>Twitter</li>
                        <li className='my-2 text-gray-500'>Facebook</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-between items-center my-5 text-gray-500">
                <p>@2024 Autoverse. All rights reserved.</p>
                <div className="flex gap-4">
                    <p>Privacy & Policy</p>
                    <p>Terms & Condition</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;