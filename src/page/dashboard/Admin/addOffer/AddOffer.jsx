
import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

const AddOffer = () => {
    const axiosPublic = useAxiosPublic()
    const [formData, setFormData] = useState({
        offPercentage: " ",
        startDate: " ",
        endDate: " ",
        offerDescription: " "
        // Add other fields here 
    });
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const finalData = { ...formData };
            console.log(finalData);
            // Send the combined data to your backend endpoint
            const backendResponse = await axiosPublic.post('/post-offer', finalData);
            console.log(backendResponse);

            if (backendResponse) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `upload Resource successfully `,
                    showConfirmButton: false,
                    timer: 1500
                });

                console.log('Data sent to backend successfully:', backendResponse.data);
            }
        } catch (error) {
            console.error('Error sending data to backend:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }
    return (
        <div className="mt-12 p__cormorant w-10/12 mx-auto">
            {/* Add new offer  */}
            <h1 className="headtext__cormorant text-center">Add A New offer</h1>
            <div className="w-[800px] mx-auto p-6 border border-white rounded-xl flex justify-center">

                {/* start a form  */}
                <form
                    onSubmit={handleSubmit} >
                    <div className="flex justify-between gap-4">
                        {/*Start Date */}
                        <div className=" mt-6 bg-[#1E1F20] py-2 px-3">
                            <label className="text-xl">Start Date</label><br />
                            <input type="date"
                                placeholder="Type here Start date"
                                required
                                name='startDate'
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                onChange={handleChange}
                            />
                            <hr className="border-t border-first" />
                        </div>
                        {/*End Date */}
                        <div className=" mt-6 bg-[#1E1F20] py-2 px-3">
                            <label className="text-xl">End Date</label><br />
                            <input type="date"
                                placeholder="Type here end date"
                                required
                                name='endDate'
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                onChange={handleChange}
                            />
                            <hr className="border-t border-first" />
                        </div>
                    </div>
                    <div className='flex justify-between gap-4'>
                        {/*Regular price */}
                        <div className=" mt-6 bg-[#1E1F20] py-2 px-3">
                            <label className="text-xl">Offer Description</label><br />
                            <textarea
                                placeholder="Enter Offer Description"
                                required
                                name='offerDescription'  // Assuming 'offerDescription' is the correct name for the description field
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                onChange={handleChange}
                            ></textarea>
                            <hr className="border-t border-first" />
                        </div>
                        {/*Offer  Percentage */}
                        <div className=" mt-6 bg-[#1E1F20] py-2 px-3">
                            <label className="text-xl">Off Percentage</label><br />
                            <input type="number"
                                placeholder="Offer price"
                                required
                                name='offPercentage'
                                className="py-2 bg-transparent transition-colors peer w-full pl-3 font-poppins text-sm border-none outline-none focus:ring-0"
                                onChange={handleChange}
                            />
                            <hr className="border-t border-first" />
                        </div>

                    </div>

                    <button
                        className="btn-style w-full mt-6"
                        type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddOffer;