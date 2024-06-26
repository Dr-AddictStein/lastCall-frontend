import React from "react";
import { useForm } from "react-hook-form";
import bgImg from '../../../assets/images/SignUp/bg01.jpg';
import bg1 from '../../../assets/images/SignUp/bg1.png';
import bg2 from "../../../assets/images/SignUp/bg2.png";
import bg3 from "../../../assets/images/SignUp/bg3.jpg";
import bg4 from "../../../assets/images/SignUp/bg4.png";
import { useNavigate } from "react-router-dom";

function FreeSignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:4000/api/restaurant/notifyadmin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Done",result);

      if (response.ok) {
        alert("Restaurant registered successfully!");
        navigate('/')
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div>
      <div className="my-20 mx-2 lg:mx-40">
        <div className="text-center ">
          <h2 className="text-5xl text-blue-900 mb-5">
            Sign up your restaurant <br /> for First Table
          </h2>
          <p className="text-xl">
            First Table is a restaurant discovery platform which helps turn
            restaurants' hardest-to-fill tables into a marketing asset,
            increasing profitability and growing their business.
          </p>
        </div>
        <div>
          <h2 className="text-5xl text-blue-900 my-5">Your details</h2>
        </div>
        <div className="mb-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row lg:w-1/2 gap-3">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-blue-950">First Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register("firstName", {
                    required: "Please complete this required field",
                  })}
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered"
                />
                {errors.firstName && (
                  <span className="text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-blue-950">Last Name</span>
                </label>
                <input
                  {...register("lastName", {
                    required: "Please complete this required field",
                  })}
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered"
                />
                {errors.lastName && (
                  <span className="text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className=" lg:w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Email <span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register("email", {
                    required: "Please complete this required field",
                  })}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Phone number</span>
                </label>
                <input
                  {...register("phoneNumber", {
                    required: "Please complete this required field",
                  })}
                  type="text"
                  placeholder="Phone number"
                  className="input input-bordered"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Country</span>
                </label>
                <select
                  className="select select-bordered"
                  defaultValue="default"
                  {...register("country", {
                    required: "Please complete this required field",
                  })}
                >
                  <option disabled value="default">
                    Select Country
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
                </select>
                {errors.country && (
                  <span className="text-red-500">{errors.country.message}</span>
                )}
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Region AU <span className="text-red-500">*</span></span>
                </label>
                <select
                  className="select select-bordered"
                  defaultValue="default"
                  {...register("regionAu", {
                    required: "Please complete this required field",
                  })}
                >
                  <option disabled value="default">
                    Select Region
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Nepal">Nepal</option>
                </select>
                {errors.regionAu && (
                  <span className="text-red-500">
                    {errors.regionAu.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">City <span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register("city", {
                    required: "Please complete this required field",
                  })}
                  type="text"
                  placeholder="City"
                  className="input input-bordered"
                />
                {errors.city && (
                  <span className="text-red-500">{errors.city.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Restaurant Name <span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register("restaurantName", {
                    required: "Please complete this required field",
                  })}
                  type="text"
                  placeholder="Restaurant Name"
                  className="input input-bordered"
                />
                {errors.restaurantName && (
                  <span className="text-red-500">
                    {errors.restaurantName.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">
                    Restaurant Website URL
                  </span>
                </label>
                <input
                  {...register("websiteUrl", {
                    required: "Please complete this required field",
                  })}
                  type="text"
                  placeholder="Url"
                  className="input input-bordered"
                />
                {errors.websiteUrl && (
                  <span className="text-red-500">
                    {errors.websiteUrl.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-control lg:w-1/2 mt-6">
              <p>
                First Table needs the contact information you provide by
                submitting this form to contact you about our products and
                services. You may unsubscribe from these communications at any
                time. Please review our{" "}
                <a href="" className="underline">
                  Privacy Policy here
                </a>
              </p>
            </div>
            <div className="form-control mt-6 lg:w-1/2">
              <button type="submit" className="btn bg-[#FF756B]">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="divider my-8"></div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div
            className="lg:w-1/2"
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "50vh",
            }}
          ></div>
          <div className="w-1/2">
            <h2 className="text-5xl text-blue-700">
              What Restaurants Are Saying
            </h2>
            <p className="text-xl mt-10">
              First Table has definitely been a great marketing tool for us.
              It's a brilliant way for our local market to try us for a nice
              dinner out without breaking the bank. Early dining is always a
              quiet time of night so it's great being able to create some real
              atmosphere in the restaurant at an early stage of the evening.
              It's also a great opportunity for our staff to show the First
              Table diners what we do here and add a personal touch to their
              experience. We get a lot of return customers as a result.
            </p>
            <p className="text-blue-800 mt-4">
              -Hayden Davison, <br /> Restaurant Manager at Jervois Steak House
            </p>
          </div>
        </div>
        <div className="divider my-8"></div>
        <div>
          <h2 className="text-5xl text-blue-800 text-center my-7">
            Restaurants using Last Call to win customers
          </h2>
          <div className="flex gap-10 justify-center my-8">
            <img src={bg1} className="w-64" alt="" srcSet="" />
            <img src={bg2} className="w-64" alt="" srcSet="" />
            <img src={bg3} className="w-64" alt="" srcSet="" />
            <img src={bg4} className="w-64" alt="" srcSet="" />
          </div>
        </div>
      </div>
      <div className="bg-blue-950 py-10">
        <p className="text-center text-white text-xl">© Last Call 2014 - 2024</p>
      </div>
    </div>
  );
}

export default FreeSignUp;
