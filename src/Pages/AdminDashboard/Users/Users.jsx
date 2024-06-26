import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Users() {
  const { register, handleSubmit, setValue } = useForm();
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/user/", {
        method: "GET",
      });

      if (response.ok) {
        const result = await response.json();
        setUsers(result);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const onSubmit = async (data) => {
    const toSend = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      role: "restaurant-owner",
    };

    try {
      const response = await fetch("http://localhost:4000/api/user/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toSend),
      });

      if (response.ok) {
        alert("Restaurant Owner Account registered successfully!");
        fetchUsers();
        document.getElementById("my_modal_").close();
      } else {
        const result = await response.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("User deleted successfully!");
        fetchUsers();
      } else {
        const result = await response.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user. Please try again.");
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setValue("firstname", user.firstname);
    setValue("lastname", user.lastname);
    setValue("email", user.email);
    setValue("role", user.role);
    // Assuming 'phone' is a field in your user object
    setValue("phone", user.phone); 
    document.getElementById("edit_modal").showModal();
  };

  const handleUpdate = async (data) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/${editUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("User updated successfully!");
        fetchUsers();
        document.getElementById("edit_modal").close();
      } else {
        const result = await response.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user. Please try again.");
    }
  };

  return (
    <div>
      {/* Add User Modal */}
      <div className="text-right">
        <button className="btn bg-orange-400" onClick={() => document.getElementById("my_modal_").showModal()}>
          Add User
        </button>
      </div>

      <dialog id="my_modal_" className="modal">
        <div className="modal-box">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  {...register("firstname", { required: true })}
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  {...register("lastname", { required: true })}
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="flex gap-4 mt-6">
                <button className="btn px-4 btn-primary" type="submit">
                  Submit
                </button>
                <button className="btn bg-red-600 text-white" type="button" onClick={() => document.getElementById("my_modal_").close()}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      {/* Users Table */}
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
            {users.map((user, index) => (
              <tr key={user._id} className="hover:text-black hover:bg-white">
                <td>{index + 1}</td>
                <td>{`${user.firstname} ${user.lastname}`}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="flex gap-2">
                  <RiDeleteBin6Line
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                    onClick={() => handleDelete(user._id)}
                  />
                  <FaRegEdit
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                    onClick={() => handleEdit(user)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleUpdate)} className="text-black">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button" onClick={() => document.getElementById("edit_modal").close()}>✕</button>
            <h3 className="font-bold text-lg text-center">Update User</h3>
            <div className="py-2">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input {...register("firstname")} type="text" name="firstname" className="border border-black w-full text-black" />
            </div>
            <div className="py-2">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input {...register("lastname")} type="text" name="lastname" className="border border-black w-full text-black" />
            </div>
            <div className="py-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email")} type="text" name="email" className="border border-black w-full text-black" />
            </div>
            <div className="py-2">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <input {...register("role")} type="text" name="role" className="border border-black w-full text-black" />
            </div>
            <div className="py-2">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input {...register("phone")} type="text" name="phone" className="border border-black w-full text-black" />
            </div>
            <div className="text-right pt-2">
              <button className="bg-[#265582] text-white rounded-md p-2" type="submit">
                Update
              </button>
              <button className="btn bg-red-600 text-white" type="button" onClick={() => document.getElementById("edit_modal").close()}>
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
export default Users;
