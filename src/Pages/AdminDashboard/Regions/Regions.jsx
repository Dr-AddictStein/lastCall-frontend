import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Regions() {
  const [regions, setRegions] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    cities: []
  });
  const [city, setCity] = useState("");
  const [editRegionId, setEditRegionId] = useState(null);

  useEffect(() => {
    fetchRegions();
  }, []);

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

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const addCity = () => {
    if (city) {
      setFormData({ ...formData, cities: [...formData.cities, city] });
      setCity("");
    }
  };

  const removeCity = (index) => {
    const updatedCities = formData.cities.filter((_, i) => i !== index);
    setFormData({ ...formData, cities: updatedCities });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editRegionId) {
      await updateRegion(editRegionId, formData);
    } else {
      await createRegion(formData);
    }
    setFormData({
      name: "",
      cities: []
    });
    setEditRegionId(null);
  };

  const createRegion = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/api/region/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add region");
      }
      toast.success("Region added successfully!");
      fetchRegions();
      document.getElementById("region_modal").close();
    } catch (error) {
      console.error("Error adding region:", error);
      toast.error("Error adding region. Please try again.");
    }
  };

  const updateRegion = async (regionId, data) => {
    try {
      const response = await fetch(`http://localhost:4000/api/region/${regionId}`, {
        method: "PATCH", // Assuming PATCH for updates
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update region");
      }
      toast.success("Region updated successfully!");
      fetchRegions();
      document.getElementById("region_modal").close();
    } catch (error) {
      console.error("Error updating region:", error);
      toast.error("Error updating region. Please try again.");
    }
  };

  const handleEdit = (region) => {
    setEditRegionId(region._id);
    setFormData({
      name: region.name,
      cities: region.cities || []
    });
    document.getElementById("region_modal").showModal();
  };

  const handleDelete = async (regionId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/region/${regionId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete region");
      }
      toast.success("Region deleted successfully!");
      fetchRegions();
    } catch (error) {
      console.error("Error deleting region:", error);
      toast.error("Error deleting region. Please try again.");
    }
  };

  return (
    <div className="mt-1">
      <ToastContainer />
      <div className="text-right">
        <button
          className="btn bg-orange-400"
          onClick={() => {
            setEditRegionId(null);
            setFormData({
              name: "",
              cities: []
            });
            document.getElementById("region_modal").showModal();
          }}
        >
          Add Region
        </button>

        <dialog id="region_modal" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit} className="text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Region Name</span>
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
                  <span className="label-text">Add City</span>
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={city}
                    onChange={handleCityChange}
                    className="input input-bordered flex-grow"
                  />
                  <button type="button" className="btn bg-green-500 text-white ml-2" onClick={addCity}>
                    Add City
                  </button>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cities</span>
                </label>
                <ul className="list-disc list-inside bg-gray-100 p-2 rounded">
                  {formData.cities.map((city, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{city}</span>
                      <button type="button" className="btn btn-sm bg-red-500 text-white" onClick={() => removeCity(index)}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="btn px-4 btn-primary" type="submit">
                  {editRegionId ? "Update" : "Submit"}
                </button>
                <button
                  className="btn bg-red-600 text-white"
                  type="button"
                  onClick={() => document.getElementById("region_modal").close()}
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
              <th>Region Name</th>
              <th>Cities</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {regions.map((region, index) => (
              <tr key={region._id} className="hover:text-black hover:bg-white">
                <td>{index + 1}</td>
                <td>{region.name}</td>
                <td>
                  <ul className="list-disc list-inside">
                    {region.cities.map((city, cityIndex) => (
                      <li key={cityIndex} className="my-4">{city}</li>
                    ))}
                  </ul>
                </td>
                <td className="">
                <div className="flex gap-2">
                  <FaRegEdit
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                    onClick={() => handleEdit(region)}
                  />
                  <RiDeleteBin6Line
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                    onClick={() => handleDelete(region._id)}
                  />

                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Regions;
