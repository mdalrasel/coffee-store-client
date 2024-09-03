import React from 'react';
import Navbar from './Navbar';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Form from './Form';

const CoffeeAdded = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='bg-white py-12 px-16'>
                <Link to='/'><button className='font-rancho text-xl text-[#374151] flex items-center gap-2'><GoArrowLeft />Back to home</button></Link>
                <Form></Form>
            </div>

        </div>
    );
};

export default CoffeeAdded;