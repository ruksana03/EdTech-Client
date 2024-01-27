import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import contactImage from '../../assets/image/contact-us.jpg';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log('button clicked');

        emailjs.sendForm('service_yaskyb9', 'template_4pto5wb', form.current, 'nGBs8w8pheW6v3DRU')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: "Congrates🎉",
                    text: "Your Information has been Sent..",
                    icon: "success"
                });
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className=''>
            {/* banner */}
            <figure className='w-full h-[45vh]'>
                <img src={"https://i.ibb.co/Gc059xG/contact.jpg"} alt="contact-image" className='w-full h-full' />
            </figure>
            {/* form  */}
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10 items-center justify-center w-full my-20 section-container px-10 bg-white dark:bg-zinc-800 dark:text-gray-400'>
                <div className='cols-span-12 md:col-span-4 lg:col-span-4 p-5'>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-start mb-1'>Address:</h1>
                        <p>15/Dhaka city,Bangladesh</p>
                        <hr className='my-8' />
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-start mb-1'>Office Hours:</h1>
                        <p>Monday - Friday: 9AM - 5PM</p>
                        <hr className='my-8' />
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-start mb-1'>Phone:</h1>
                        <p>+08844-6854</p>
                        <hr className='my-8' />
                    </div>
                </div>
                <div className='cols-span-12 md:col-span-8 lg:col-span-8 p-5'>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"> Get in Touch with Us</h1>
                    <p className='my-8 text-center'>Welcome to EduTech Platform! Were thrilled that you want to connect with us. Whether you have questions about our educational resources, need assistance with our platform, or want to explore partnership opportunities, our team to help.</p>
                    <div className='mt-8'>
                        <form ref={form} onSubmit={sendEmail} className="w-full md:w-2/3 lg:w-2/3 mx-auto">
                            <div className="mb-6">
                                <div className="md:w-1/3">
                                    <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]">
                                        Full Name *
                                    </label>
                                </div>
                                <div className="md:w-full mt-2">
                                    <input className="bg-gray-200 dark:bg-zinc-600 text-[17px] appearance-none input border-2 border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first" id="inline-full-name" name='from_name' type="text" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="md:w-1/3">
                                    <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]" >
                                        Email *
                                    </label>
                                </div>
                                <div className=" md:w-full mt-2">
                                    <input className="bg-gray-200 dark:bg-zinc-600 appearance-none input border-2 text-[17px] border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none focus:bg-white focus:border-first" id="inline-password" name='from_email' type="email" placeholder='Email' required />
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="md:w-1/3">
                                    <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]" >
                                        Phone *
                                    </label>
                                </div>
                                <div className="md:w-full mt-2">
                                    <input className="bg-gray-200
                                    dark:bg-zinc-600 appearance-none input border-2 border-gray-200 rounded w-full py-4 px-4  leading-tight focus:outline-none text-[17px] focus:bg-white focus:border-first" id="inline-password" name='from_phone' type="number" placeholder='Phone Number' required />
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="md:w-1/3">
                                    <label className="block font-bold text-start mb-1 md:mb-0 pr-4 text-[17px]" >
                                        Message *
                                    </label>
                                </div>
                                <div className="md:w-full mt-2 ">
                                    <textarea className="bg-gray-200 dark:bg-zinc-600 appearance-none border-2 border-gray-200 rounded w-full h-32 py-2 text-[17px] px-4  leading-tight focus:outline-none focus:bg-white focus:border-first" name='message' type="text" placeholder='Message' required >
                                    </textarea>
                                </div>
                            </div>
                            <div className="flex items-end justify-end">
                                <button className="shadow bg-first hover:bg-[#256330] transition-all focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded text-[17px]" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Footer  */}
            <div>

            </div>

        </div>
    );
};

export default Contact;