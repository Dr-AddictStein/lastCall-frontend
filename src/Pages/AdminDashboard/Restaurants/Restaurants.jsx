import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Restaurants() {
  const { register, handleSubmit, reset } = useForm();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
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

  const onSubmit = async (data) => {
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
      alert("Restaurant added successfully!");
      fetchRestaurants();
      reset(); // Reset form fields
      document.getElementById("my_modal_").close(); // Close modal
    } catch (error) {
      console.error("Error adding restaurant:", error);
      alert("Error adding restaurant. Please try again.");
    }
  };

  return (
    <div className="mt-1">
      <div className="text-right">
        {/* Button to open the modal */}
        <button
          className="btn bg-orange-400"
          onClick={() => document.getElementById("my_modal_").showModal()}
        >
          Add Restaurants
        </button>

        {/* Modal dialog for adding a restaurant */}
        <dialog id="my_modal_" className="modal">
          <div className="modal-box">
            {/* Form starts here */}
            <div className="card-body text-black">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Restaurant Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Restaurant Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Owner First Name</span>
                  </label>
                  <input
                    {...register("ownerfirstname", { required: true })}
                    type="text"
                    placeholder="Owner First Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Owner Last Name</span>
                  </label>
                  <input
                    {...register("ownerlastname", { required: true })}
                    type="text"
                    placeholder="Owner Last Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Owner Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Owner Email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Owner Phone</span>
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    type="text"
                    placeholder="Owner Phone"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Region</span>
                  </label>
                  <input
                    {...register("region", { required: true })}
                    type="text"
                    placeholder="Region"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    placeholder="City"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <button className="btn px-4 btn-primary" type="submit">
                    Submit
                  </button>

                  <button
                    className="btn bg-red-600 text-white"
                    type="button"
                    onClick={() => document.getElementById("my_modal_").close()}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
            {/* Form ends here */}
          </div>
        </dialog>
      </div>

      {/* Table to display the restaurant list */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-white hover:text-black hover:bg-white">
              <th>Sl. No.</th>
              <th>Name</th>
              <th>Owner</th>
              <th>Owner Mail</th>
              <th>Owner Phone</th>
              <th>Region</th>
              <th>City</th>
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
                <td>{restaurant.region}</td>
                <td>{restaurant.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Restaurants;
