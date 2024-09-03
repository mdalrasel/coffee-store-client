

const Form = () => {
    const handedAddCoffee = event =>{
        event.preventDefault()
        const form =event.target;
        const name =form.name.value;
        const chef =form.chef.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const photo =form.photo.value;
        const details =form.details.value;
        const coffeeMenu ={name, chef, supplier, taste, category, photo, details}
        console.log(coffeeMenu)
    }
    return (
        <div className="bg-[#F4F3F0] mt-10">
            <div className="text-center ">
                <h2 className="font-rancho text-2xl text-[#374151] pt-5">Add New Coffee</h2>
                <p className="font-raleway text-[#1B1A1A] px-28 mt-2">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handedAddCoffee}>
                <div className="px-10 grid grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="">
                            <span >Name :</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter coffee name" className="p-2" />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span >Chef :</span>
                        </label>
                        <input type="text" name="chef" placeholder="Enter coffee chef" className="p-2" />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span >Supplier :</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="p-2" />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span >Taste :</span>
                        </label>
                        <input type="text" name="taste" placeholder="Enter coffee taste" className="p-2" />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span >Category :</span>
                        </label>
                        <input type="text" name="category" placeholder="Enter coffee category" className="p-2" />
                    </div>
                    <div className="form-control ">
                        <label className="">
                            <span >Photo :</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="p-2" />
                    </div>
                </div>
                <div className="form-control px-10">
                    <label className="">
                        <span >Details :</span>
                    </label>
                    <input type="text" name="details" placeholder="Enter coffee details" className="p-2" />
                </div>
                <div className="form-control px-10 mt-4 ">
                    <input  type="submit" value='Add Coffee' className="p-2 bg-[#D2B48C] text-[#331A15] border-2 border-[#331A15] rounded-lg" />
                </div>
            </form>
        </div>
    );
};

export default Form;