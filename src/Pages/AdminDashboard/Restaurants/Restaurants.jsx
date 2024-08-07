import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    ownerfirstname: "",
    ownerlastname: "",
    email: "",
    phone: "",
    region: "",
    city: ""
  });
  const [editRestaurantId, setEditRestaurantId] = useState(null);

  useEffect(() => {
    fetchRestaurants();
    fetchRegions();
    fetchCities();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/restaurant/");
      if (!response.ok) {
        throw new Error("Failed to fetch restaurants");
      }
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const fetchRegions = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/region/");
      if (!response.ok) {
        throw new Error("Failed to fetch regions");
      }
      const data = await response.json();
      setRegions(data);
    } catch (error) {
      console.error("Error fetching regions:", error);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/city/");
      if (!response.ok) {
        throw new Error("Failed to fetch cities");
      }
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "region") {
      console.log("Here ", value)
      const region = regions.filter(reg => reg._id === value);
      const filtered = cities.filter(city => city.region === region[0].name);
      setFilteredCities(filtered);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editRestaurantId) {
      await updateRestaurant(editRestaurantId, formData);
    } else {
      await createRestaurant(formData);
    }
    setFormData({
      name: "",
      ownerfirstname: "",
      ownerlastname: "",
      email: "",
      phone: "",
      region: "",
      city: ""
    });
    setEditRestaurantId(null);
  };

  const createRestaurant = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/api/restaurant/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add restaurant");
      }
      toast.success("Restaurant added successfully!");
      fetchRestaurants();
      document.getElementById("restaurant_modal").close();
    } catch (error) {
      console.error("Error adding restaurant:", error);
      toast.error("Error adding restaurant. Please try again.");
    }
  };

  const updateRestaurant = async (restaurantId, data) => {
    try {
      const response = await fetch(`http://localhost:4000/api/restaurant/${restaurantId}`, {
        method: "PATCH", // Assuming PATCH for updates
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update restaurant");
      }
      toast.success("Restaurant updated successfully!");
      fetchRestaurants();
      document.getElementById("restaurant_modal").close();
    } catch (error) {
      console.error("Error updating restaurant:", error);
      toast.error("Error updating restaurant. Please try again.");
    }
  };

  const handleEdit = (restaurant) => {
    setEditRestaurantId(restaurant._id);
    setFormData({
      name: restaurant.name,
      ownerfirstname: restaurant.ownerfirstname,
      ownerlastname: restaurant.ownerlastname,
      email: restaurant.email,
      phone: restaurant.phone,
      region: restaurant.region,
      city: restaurant.city
    });
    setFilteredCities(cities.filter(city => city.regionId === restaurant.region));
    document.getElementById("restaurant_modal").showModal();
  };

  const handleDelete = async (restaurantId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/restaurant/${restaurantId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete restaurant");
      }
      toast.success("Restaurant deleted successfully!");
      fetchRestaurants();
    } catch (error) {
      console.error("Error deleting restaurant:", error);
      toast.error("Error deleting restaurant. Please try again.");
    }
  };

  return (
    <div className="mt-1">
      <ToastContainer />
      <div className="text-right">
        <button
          className="btn bg-orange-400"
          onClick={() => {
            setEditRestaurantId(null);
            setFormData({
              name: "",
              ownerfirstname: "",
              ownerlastname: "",
              email: "",
              phone: "",
              region: "",
              city: ""
            });
            setFilteredCities([]);
            document.getElementById("restaurant_modal").showModal();
          }}
        >
          Add Restaurant
        </button>

        <dialog id="restaurant_modal" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit} className="text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Restaurant Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner First Name</span>
                </label>
                <input
                  type="text"
                  name="ownerfirstname"
                  value={formData.ownerfirstname}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner Last Name</span>
                </label>
                <input
                  type="text"
                  name="ownerlastname"
                  value={formData.ownerlastname}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner Email</span>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Region</span>
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                >
                  <option value="" disabled>Select Region</option>
                  {regions.map((region) => (
                    <option key={region._id} value={region._id}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                >
                  <option value="" disabled>Select City</option>
                  {filteredCities.map((city) => (
                    <option key={city._id} value={city._id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="btn px-4 btn-primary" type="submit">
                  {editRestaurantId ? "Update" : "Submit"}
                </button>
                <button
                  className="btn bg-red-600 text-white"
                  type="button"
                  onClick={() => document.getElementById("restaurant_modal").close()}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-white hover:text-black hover:bg-white">
              <th>Sl. No.</th>
              <th>Restaurant Name</th>
              <th>Owner</th>
              <th>Owner Email</th>
              <th>Owner Phone</th>
              <th>Region</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant, index) => (
              <tr key={restaurant._id} className="hover:text-black hover:bg-white">
                <td>{index + 1}</td>
                <td>{restaurant.name}</td>
                <td>{`${restaurant.ownerfirstname} ${restaurant.ownerlastname}`}</td>
                <td>{restaurant.email}</td>
                <td>{restaurant.phone}</td>
                <td>{regions.find(region => region._id === restaurant.region)?.name || "Unknown"}</td>
                <td>{cities.find(city => city._id === restaurant.city)?.name || "Unknown"}</td>
                <td className="flex gap-2">
                  <Link
                    to={`/dashboard/adminRestaurant/restaurantBuilder/${restaurant._id}`}
                  >
                    <FaRegEdit
                      className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                    />
                  </Link>
                  <RiDeleteBin6Line
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                    onClick={() => handleDelete(restaurant._id)}
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

export default Restaurants;
