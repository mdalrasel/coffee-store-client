import img9 from '../../images/cups/Rectangle 9.png'
import img10 from '../../images/cups/Rectangle 10.png'
import img11 from '../../images/cups/Rectangle 11.png'
import img12 from '../../images/cups/Rectangle 12.png'
import img13 from '../../images/cups/Rectangle 13.png'
import img14 from '../../images/cups/Rectangle 14.png'
import img15 from '../../images/cups/Rectangle 15.png'
import img16 from '../../images/cups/Rectangle 16.png'

const ExtraBanner = () => {
    return (
        <div>
            <div className="text-center">
                <p className="font-raleway text-xl">Follow Us Now</p>
                <h2 className="font-rancho text-3xl">Follow on Instagram</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 gap-5 mt-5'>
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13} alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
            </div>

        </div>
    );
};

export default ExtraBanner;