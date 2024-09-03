import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../images/more/logo1.png'
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='mt-10 '>
            <div>
                <footer className="footer bg-neutral text-neutral-content p-20">
                    <aside>
                        <img className='w-20' src={logo} alt="" />
                        <h2 className='font-rancho text-2xl'>Espresso Emporium</h2>
                        <p className='font-raleway'>
                            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                        </p>
                        <div className='flex gap-5 text-2xl'>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />
                        </div>
                        <h2 className='font-rancho text-3xl'>Get in Touch</h2>
                        <div>
                            <div className='flex items-center gap-5'>
                                <IoCallSharp />
                                <p className='font-raleway text-xl'>+88 01533 333 333</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <MdEmail />
                                <p className='font-raleway text-xl'>info@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <FaLocationDot />
                                <p className='font-raleway text-xl'>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>

                    </aside>
                    <nav>
                        <h2 className='font-rancho text-2xl '>Connect with Us</h2>
                        <form className='space-y-5'>
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Name" className="p-2" />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Email" className="p-2" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="massage" placeholder="Massage" className="p-2 " />
                            </div>
                            <div className="form-control">
                                <input type="submit" value='Send Message'  className="p-2 border" />
                            </div>
                        </form>
                    </nav>
                </footer>
                <footer className="footer footer-center bg-base-300 text-base-content p-4">
                    <aside>
                        <p>Copyright Espresso Emporium ! All Rights Reserved</p>
                    </aside>
                </footer>
            </div>

        </div>
    );
};

export default Footer;