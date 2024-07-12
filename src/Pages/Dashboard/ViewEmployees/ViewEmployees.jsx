import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ViewEmployees = () => {
    return (
        <div>
            <dialog id="user_modal" className="modal">
                <div className="modal-box">
                    <form className="text-black">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                // value={formData.firstname}
                                // onChange={handleInputChange}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input
                                type="text"
                                name="lastname"
                                // value={formData.lastname}
                                // onChange={handleInputChange}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleInputChange}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {(
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    //   value={formData.password}
                                    //   onChange={handleInputChange}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                        )}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input
                                type="text"
                                name="phone"
                                // value={formData.phone}
                                // onChange={handleInputChange}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button className="btn px-4 btn-primary" type="submit">
                                {/* {editUserId ? "Update" : "Submit"} */}
                            </button>
                            <button
                                className="btn bg-red-600 text-white"
                                type="button"
                                onClick={() => document.getElementById("employee_modal").close()}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-white hover:text-black hover:bg-white">
                            <th>Sl. No.</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:text-black hover:bg-white">
                            <td>1</td>
                            <td>name</td>
                            <td>manager</td>
                            <td>email@gmail.com</td>
                            <td>98734857</td>
                            <td className="flex gap-2">
                                <RiDeleteBin6Line
                                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                                // onClick={() => handleDelete(user._id)}
                                />
                                <FaRegEdit
                                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                                    onClick={() => {
                                        //   handleEdit(user);
                                        document.getElementById("employee_modal").showModal();
                                    }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewEmployees;