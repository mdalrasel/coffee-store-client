import React from 'react';
import logo from '../../images/more/logo1.png'
const Navbar = () => {
    return (
        <div className='flex justify-center  bg-orange-950 p-2 gap-3'>
            <img className='w-9' src={logo} alt="" />
            <h1 className='font-rancho  text-4xl text-white'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;