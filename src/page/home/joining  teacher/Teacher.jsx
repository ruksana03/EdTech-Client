import Swal from 'sweetalert2';
import { FaArrowsLeftRight } from 'react-icons/fa6';
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
    <div className='w-full mx-auto border rounded-lg flex flex-col items-center justify-center my-12'>
      {/* First Section */}
      <div className='w-full h-auto flex items-center justify-center flex-col md:flex-row lg:flex-row lg:justify-evenly bg-gradient-to-b from-first to-black dark:from-black dark:to-gray-800'>
        <div className='w-full h-full md:w-1/2 relative overflow-hidden'>
          {/* Parallax Image 1 */}
          <img
            className='w-full h-full object-cover transform scale-110 md:scale-100 lg:scale-100 transition-transform duration-500 ease-in-out'
            src='https://i.ibb.co/9g72MMf/partner.jpg'
            alt='Partner'
          />
        </div>
        <div className='w-full md:w-1/2 md:h-full p-7 space-y-3 flex items-start justify-center flex-col text-white dark:text-gray-400'>
          <h1 className='text-xl md:text-2xl'>Become a Partner</h1>
          <p>
            Do you want to join our organization as an associate? Confirm your request by clicking the button below.
          </p>
          <button
            onClick={handlePartApply}
            className='text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white dark:text-gray-400 hover:bg-transparent hover:text-green-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:border-2 border-2 border-first hover:border-first hover:scale-100 hover:dark:text-gray-400 flex items-center gap-2'
          >
            <FaArrowsLeftRight className='text-2xl hidden md:block lg:block' />
            Apply Now
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className='w-full h-auto flex items-center justify-center flex-col md:flex-row-reverse lg:flex-row-reverse bg-gradient-to-b from-first to-black dark:from-black dark:to-gray-800'>
        <div className='w-full h-full md:w-1/2 relative overflow-hidden'>
          {/* Parallax Image 2 */}
          <img
            className='w-full h-full object-cover transform scale-110 md:scale-100 lg:scale-100 transition-transform duration-500 ease-in-out'
            src='https://i.ibb.co/1zKk3xY/teacher.jpg'
            alt='Teacher'
          />
        </div>
        <div className='w-full md:w-1/2 h-auto p-7 space-y-3 flex items-start justify-center flex-col text-white dark:text-gray-400'>
          <h1 className='text-xl md:text-2xl'>Become a Teacher</h1>
          <p>Do you want to join our organization? Confirm your request by clicking the button below.</p>
          <Link to='/join-teacher'>
            <button className='text-[18px] font-medium px-4 py-2 duration-200 transform bg-first text-white dark:text-gray-400 hover:bg-transparent hover:text-green-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:border-2 border-2 border-first hover:border-first hover:scale-100 hover:dark:text-gray-400 flex items-center gap-2'>
              <FaArrowsLeftRight className='text-2xl hidden md:block lg:block' />
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
