import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "restaurant-owner",
    phone: ""
  });
  const [editUserId, setEditUserId] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editUserId) {
      await updateUser(editUserId, formData);
    } else {
      await createUser(formData);
    }
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "restaurant-owner",
      phone: ""
    });
    setEditUserId(null);
  };

  const createUser = async (data) => {
    try {

      console.log("oaoaoaoaoa",data);
      const response = await fetch("http://localhost:4000/api/user/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Restaurant Owner Account registered successfully!");
        fetchUsers();
        document.getElementById("user_modal").close();
      } else {
        const result = await response.json();
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        toast.success("User deleted successfully!");
        fetchUsers();
      } else {
        const result = await response.json();
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user. Please try again.");
    }
  };

  const handleEdit = (user) => {
    setEditUserId(user._id);
    setFormData({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: "",
      role: user.role,
      phone: user.phone || ""
    });
    document.getElementById("user_modal").showModal();
  };

  const updateUser = async (userId, data) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/${userId}`, {
        method: "PATCH",  // Changed to PATCH
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("User updated successfully!");
        fetchUsers();
        document.getElementById("user_modal").close();
      } else {
        const result = await response.json();
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user. Please try again.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="text-right">
        <button
          className="btn bg-orange-400"
          onClick={() => {
            setEditUserId(null);
            setFormData({
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              role: "restaurant-owner",
              phone: ""
            });
            document.getElementById("user_modal").showModal();
          }}
        >
          Add User
        </button>
      </div>

      <dialog id="user_modal" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="text-black">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
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
                value={formData.lastname}
                onChange={handleInputChange}
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
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            {!editUserId && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
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
                value={formData.phone}
                onChange={handleInputChange}
                className="input input-bordered"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button className="btn px-4 btn-primary" type="submit">
                {editUserId ? "Update" : "Submit"}
              </button>
              <button
                className="btn bg-red-600 text-white"
                type="button"
                onClick={() => document.getElementById("user_modal").close()}
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
                    onClick={() => {
                      handleEdit(user);
                      document.getElementById("user_modal").showModal();
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
