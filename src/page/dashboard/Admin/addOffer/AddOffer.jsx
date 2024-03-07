/* eslint-disable no-unused-vars */

import { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useGetAllOffers from '../../../../Hooks/useGetAllOffers';
import Skeleton from 'react-loading-skeleton';
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const AddOffer = () => {
    const axiosPublic = useAxiosPublic()
    const { allOffers, refetch } = useGetAllOffers()
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
            // Send the combined data to your backend endpoint
            const backendResponse = await axiosPublic.post('/post-offer', finalData);

            if (backendResponse) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `upload Resource successfully `,
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({})
            }
           
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    }
    // this function work for  deleted offer 
    const handleDeleteOffer = async (offerId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosPublic.delete(`/delete-offer/${offerId}`);
                    refetch();
                    toast.success("Delete Successfully");
                } catch (error) {
                    toast.error("Failed to delete PDF");
                }
            }
        });
    };
    return (
        <div>
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
            {/* show here all offer data  */}
            <div className="w-[800px] mx-auto p-6 border border-black rounded-xl my-8">
                <div className="overflow-x-auto">
                    <h1 className='text-center text-4xl text-first font-bold mb-4'>All Offer Here</h1>
                    <table className="table  border border-black">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-white'>Index</th>
                                <th className='text-white'>Offer Start day</th>
                                <th className='text-white'>Offer End Date</th>
                                <th className='text-white'>Delete Offer</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allOffers && allOffers.map((offer, index) => {
                                    return (
                                        <tr key={offer._id}>
                                            <td className='text-white'>{index + 1}</td>
                                            <td className='text-white'>
                                                {offer.startDate}
                                            </td>
                                            <td className='text-white'>
                                                {offer.endDate}
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() => handleDeleteOffer(offer._id)}
                                                    className="bg-first text-white p-2 rounded-full text-2xl"><FaTrash></FaTrash></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {
                        allOffers?.length <= 0 && <Skeleton count={15 || allOffers?.length} height={30} borderRadius={10} />
                    }
                </div>
            </div>
        </div>
    );
};

export default AddOffer;