import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const RoleModal = ({ userToChangeRole, refetch }) => {

    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        const role = data.role;
        axiosPublic.patch(`/users/${userToChangeRole._id}`, {role})
        .then(res => {
            if (res.data.modifiedCount > 0) {
                 const modal = document.getElementById('user_role_modal');
                modal.close();
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${userToChangeRole.name} is ${role} Now`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    };

    return (
        <div>
            <dialog id="user_role_modal" className="modal">
                <div className="modal-box bg-black text-white border border-white">
                    <div>
                        <h3 className="text-center text-2xl font-bold font-serif ">Select a Role</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control flex flex-col mt-2">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select
                                    {...register('role', { required: true })}
                                    className="input mt-2  bg-black text-white border border-white "
                                >
                                    <option value="">Select Role</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="student">Student</option>
                                    <option value="admin">Admin</option>
                                    <option value="moderator">Moderator</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                            <input className="btn btn-style" type="submit" value="Update" />
                        </div>
                        </form>
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

RoleModal.propTypes = {
    userToChangeRole: PropTypes.any,
    refetch: PropTypes.any
}
export default RoleModal;