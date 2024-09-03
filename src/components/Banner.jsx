import React from 'react';
import banImg from '../../images/more/3.png'
import img1 from '../../images/icons/1.png'
import img2 from '../../images/icons/2.png'
import img3 from '../../images/icons/3.png'
import img4 from '../../images/icons/4.png'
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div className='relative'>
                <img src={banImg} alt="" />
                <div className='absolute top-2 lg:top-2/4 lg:right-10 lg:w-1/2  lg:space-y-5 '>
                    <h2 className='font-rancho lg:text-2xl '>Would you like a Cup of Delicious Coffee?</h2>
                    <p className='font-raleway '>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='font-rancho text-[#242222] px-4 py-2 bg-[#E3B577]'>Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3] flex justify-around py-10 px-28 gap-4 '>
                <div>
                    <img className='w-12' src={img1} alt="" />
                    <h2 className='font-rancho text-2xl text-[#331A15]'>Awesome Aroma</h2>
                    <p className='text-[#1B1A1A] font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img className='w-12' src={img2} alt="" />
                    <h2 className='font-rancho text-2xl text-[#331A15]'>High Quality</h2>
                    <p className='text-[#1B1A1A] font-raleway'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img className='w-12' src={img3} alt="" />
                    <h2 className='font-rancho text-2xl text-[#331A15]'>Pure Grades</h2>
                    <p className='text-[#1B1A1A] font-raleway'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div >
                    <img className='w-12' src={img4} alt="" />
                    <h2 className='font-rancho text-2xl text-[#331A15]'>Proper Roasting</h2>
                    <p className='text-[#1B1A1A] font-raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;