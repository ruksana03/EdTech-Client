/* eslint-disable react/prop-types */

const BlogModal = ({ blog }) => {
    
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex justify-center items-end gap-6 mb-12">
                        <div>
                            <img className="w-44 h-44 rounded-full" src={blog?.userPhoto} alt="" />
                        </div>
                        <div >
                            <p> <span className="font-semibold">User Name:</span><br /> {blog?.userName}</p>
                            <p><span className="font-semibold">User Email:</span><br />{blog?.userEmail}</p>
                        </div>
                    </div>
                    <h3 className="font-bold text-lg">{blog?.caption}</h3>
                    <img src={blog?.imageUrl} alt="" />
                    <p className="py-4">{blog?.content}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BlogModal;