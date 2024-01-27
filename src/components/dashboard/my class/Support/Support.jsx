
import { MdErrorOutline } from 'react-icons/md';


const Support = () => {
    return (
        <div className='flex justify-center items-center mt-10 '>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" onClick={()=>document.getElementById('my_modal_5').showModal()}>Request for Support</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">No Support session is availble </p>
    <div className=' flex justify-center'>    <MdErrorOutline className='w-20 h-20'></MdErrorOutline>
</div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Support;