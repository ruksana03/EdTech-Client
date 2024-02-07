

const BlogModal = ({ blog }) => {
    
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex justify-center items-end gap-6 mb-12">
                        <div>
                            <img className="w-44 h-44 rounded-full" src={blog?.post_image} alt="" />
                        </div>
                        <div >
                            <p> <span className="font-semibold">User Name:</span><br /> {blog?.host_user}</p>
                            <p><span className="font-semibold">User Email:</span><br />{blog?.host_email}</p>
                        </div>
                    </div>
                    <h3 className="font-bold text-lg">{blog?.caption}</h3>
                    <img src={blog?.post_image} alt="" />
                    <p className="py-4">{blog?.description}</p>
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

export default BlogModal;