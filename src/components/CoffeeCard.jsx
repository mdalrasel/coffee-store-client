import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoffeeCard = () => {
    return (
        <div>
            <div className="text-center  my-10">
                <p>--- Sip & Savor ---</p>
                <h2 className="font-rancho text-4xl text-[#331A15]">Our Popular Products</h2>
                <Link to='/coffeeAdded'><button  className="font-rancho text-2xl text-white bg-[#E3B577] flex items-center border-2 border-[#331A15] rounded-lg gap-2 py-2 px-4">Add Coffee <FaCoffee className="text-[#331A15]" /></button></Link>
            </div>

        </div>
    );
};

export default CoffeeCard;