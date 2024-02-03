import Swal from 'sweetalert2';
import { IoEnter } from "react-icons/io5";

import { Link } from 'react-router-dom';

const Teacher = () => {
  const handlePartApply = () => {
    Swal.fire({
      title: 'Partner Available Now!',
      text: 'Please Try again from next week!',
      icon: 'error',
    });
  };

  return (
    <div className='w-full section-container mx-auto rounded-lg flex flex-col items-center justify-center my-12'>
      {/* First Section */}
      <div className='w-full h-auto flex items-center justify-center flex-col md:flex-row lg:flex-row lg:justify-evenly bg-gradient-to-b from-third to-first dark:from-black dark:to-gray-800'>
        <div className='w-full h-full md:w-1/2 relative overflow-hidden'>
          {/* Parallax Image 1 */}
          <img
            className='w-full h-full object-cover transform scale-110 md:scale-100 lg:scale-100 transition-transform duration-500 ease-in-out'
            src='https://i.ibb.co/31hWyTW/business-partners-handshake-international-business-concept.jpg'
            alt='Partner'
          />
        </div>
        <div className='w-full md:w-1/2 md:h-full p-7 space-y-5 flex items-start justify-center flex-col text-white dark:text-gray-400 overflow-hidden'>
          <h1 className='text-xl md:text-2xl font-medium'>Become a Partner</h1>
          <p>
            Do you want to join our organization as an associate? Confirm your request by clicking the button below.
          </p>
          <button data-aos="fade-left"
            onClick={handlePartApply}
            className='  font-medium px-4 py-2 duration-200 transform  rounded-2xl hover:-translate-y-[2px] transition-all ease-in  btn-style  hover:scale-100   flex items-center gap-2'
          >
            <IoEnter   className='text-2xl hidden md:block lg:block' />
            Apply Now
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className='w-full h-auto flex items-center justify-center flex-col md:flex-row-reverse lg:flex-row-reverse bg-gradient-to-b from-first to-third dark:from-black dark:to-gray-800 '>
        <div className='w-full h-full md:w-1/2 relative overflow-hidden'>
          {/* Parallax Image 2 */}
          <img
            className='w-full h-full object-cover transform scale-110 md:scale-100 lg:scale-100 transition-transform duration-500 ease-in-out'
            src='https://i.ibb.co/1zKk3xY/teacher.jpg'
            alt='Teacher'
          />
        </div>
        <div className='w-full md:w-1/2 h-auto p-7 space-y-5 flex items-start justify-center flex-col text-white dark:text-gray-400 overflow-hidden'>
          <h1 className='text-xl md:text-2xl'>Become a Teacher</h1>
          <p>Do you want to join our organization? Confirm your request by clicking the button below.</p>
          <Link to='/join-teacher'>
            <button data-aos="fade-right" className=' font-medium px-4 py-2 duration-200 transform  rounded-2xl hover:-translate-y-[2px] transition-all ease-in  btn-style  hover:scale-100   flex items-center gap-2'>
              <IoEnter   className='text-2xl hidden md:block lg:block' />
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;