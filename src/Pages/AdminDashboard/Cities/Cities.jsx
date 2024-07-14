import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Cities() {

  const [loader, setLoader] = useState(false);
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    image: null,
  });
  const [editCityId, setEditCityId] = useState(null);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    fetchCities();
    fetchRegions();
  }, []);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const uploadFile = async (file, id) => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post(`http://localhost:4000/api/file/image/${id}`, formData);
      return response.data.data.url;
    } catch (error) {
      console.error('File upload failed:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoader(true);

    let imageUrl = currentImage;
    if (formData.image) {
      imageUrl = await uploadFile(formData.image, Date.now().toString());
    }

    const cityData = {
      name: formData.name,
      region: formData.region,
      image: imageUrl,
    };

    if (editCityId) {
      await updateCity(editCityId, cityData);
    } else {
      await createCity(cityData);
    }
    setFormData({
      name: "",
      region: "",
      image: null,
    });
    setEditCityId(null);
    setCurrentImage("");
    setLoader(false);
  };

  const createCity = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/api/city/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add city");
      }
      toast.success("City added successfully!");
      fetchCities();
      document.getElementById("city_modal").close();
    } catch (error) {
      console.error("Error adding city:", error);
      toast.error("Error adding city. Please try again.");
    }
  };

  const updateCity = async (cityId, data) => {
    try {
      const response = await fetch(`http://localhost:4000/api/city/${cityId}`, {
        method: "PATCH", // Assuming PATCH for updates
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update city");
      }
      toast.success("City updated successfully!");
      fetchCities();
      document.getElementById("city_modal").close();
    } catch (error) {
      console.error("Error updating city:", error);
      toast.error("Error updating city. Please try again.");
    }
  };

  const handleEdit = (city) => {
    setEditCityId(city._id);
    setFormData({
      name: city.name,
      region: city.region,
      image: null,
    });
    setCurrentImage(city.image);
    document.getElementById("city_modal").showModal();
  };

  const handleDelete = async (cityId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/city/${cityId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete city");
      }
      toast.success("City deleted successfully!");
      fetchCities();
    } catch (error) {
      console.error("Error deleting city:", error);
      toast.error("Error deleting city. Please try again.");
    }
  };

  if (loader) {
    return (
      <>
        <div className="text-center text-white text-3xl">
          Saving Your City Info. Please Wait...
        </div>
        <div className='w-full h-[70vh] flex justify-center items-center'>
          <ClimbingBoxLoader
            color='white'
            size={70}
          />
        </div>
      </>
    )
  }

  return (
    <div className="mt-1">
      <ToastContainer />
      <div className="text-right">
        <button
          className="btn bg-orange-400"
          onClick={() => {
            setEditCityId(null);
            setFormData({
              name: "",
              region: "",
              image: null,
            });
            setCurrentImage("");
            document.getElementById("city_modal").showModal();
          }}
        >
          Add City
        </button>

        <dialog id="city_modal" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit} className="text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City Name</span>
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
                    <option key={region._id} value={region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">City Image</span>
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="input input-bordered"
                  accept="image/*"
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button className="btn px-4 btn-primary" type="submit">
                  {editCityId ? "Update" : "Submit"}
                </button>
                <button
                  className="btn bg-red-600 text-white"
                  type="button"
                  onClick={() => document.getElementById("city_modal").close()}
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
              <th>City Name</th>
              <th>Region</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city, index) => (
              <tr key={city._id} className="hover:text-black hover:bg-white">
                <td>{index + 1}</td>
                <td>{city.name}</td>
                <td>{city.region}</td>
                <td className="flex gap-2">
                  <FaRegEdit
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                    onClick={() => handleEdit(city)}
                  />
                  <RiDeleteBin6Line
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                    onClick={() => handleDelete(city._id)}
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

export default Cities;
