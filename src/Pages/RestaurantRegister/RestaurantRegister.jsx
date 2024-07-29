import { useForm } from "react-hook-form";
import bgImg from '../../assets/images/SignUp/bg01.jpg';
import bg1 from '../../assets/images/SignUp/bg1.png';
import bg2 from '../../assets/images/SignUp/bg2.png';
import bg3 from '../../assets/images/SignUp/bg3.jpg';
import bg4 from '../../assets/images/SignUp/bg4.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RestaurantRegister() {
  const [isChecked, setIsChecked] = useState(false)

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

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
      console.log("Done", result);
  
      if (response.ok) {
        alert("Restaurant registered successfully!");
        reset(); // Reset the form fields
        navigate('/');
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };
  

  const handleCheckboxChange = () => {
    isChecked === true && setIsChecked(false);
    isChecked === false && setIsChecked(true);
  };

  return (
    <div>
      <div className="my-20 mx-2 lg:mx-40">
        <div className="text-center ">
          <h2 className="text-5xl text-blue-900 mb-5">
            Sign up your restaurant <br /> for Last Call
          </h2>
          <p className="text-xl">
            Last Call is a restaurant discovery platform which helps turn
            restaurants' hardest-to-fill tables into a marketing asset,
            increasing profitability and growing their business.
          </p>
        </div>
        <div>
          <h2 className="text-5xl text-blue-900 my-5">Your details</h2>
        </div>
        <div className="mb-8 grid grid-cols-2 gap-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row  gap-3">
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
                  <span className="label-text text-blue-950">Last Name<span className="text-red-500">*</span></span>
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

            <div className=" ">
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
                  <span className="label-text text-blue-950">Phone Number<span className="text-red-500">*</span></span>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Region<span className="text-red-500">*</span></span>
                </label>
                <select
                  className="select select-bordered"
                  defaultValue="default"
                  {...register("region", {
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
                {errors.region && (
                  <span className="text-red-500">
                    {errors.region.message}
                  </span>
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
                  <span className="label-text text-blue-950">Website</span>
                </label>
                <input
                  {...register("website", {
                    required: "Please complete this required field",
                  })}
                  type="text"
                  placeholder="Website"
                  className="input input-bordered"
                />
                {errors.website && (
                  <span className="text-red-500">
                    {errors.website.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Facebook</span>
                </label>
                <input
                  {...register("facebook")}
                  type="text"
                  placeholder="Facebook"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Instagram</span>
                </label>
                <input
                  {...register("instagram")}
                  type="text"
                  placeholder="Instagram"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Times</span>
                </label>
                <input
                  {...register("times")}
                  type="text"
                  placeholder="Times"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Special Conditions</span>
                </label>
                <input
                  {...register("specialConditions")}
                  type="text"
                  placeholder="Special Conditions"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">E-mail to send reservations <span className="text-red-500">*</span></span>
                </label>
                <input
                  {...register("reservationEmail", {
                    required: "Please complete this required field",
                  })}
                  type="email"
                  placeholder="Reservation Email"
                  className="input input-bordered"
                />
                {errors.reservationEmail && (
                  <span className="text-red-500">
                    {errors.reservationEmail.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Booking Platform <span className="text-red-500">*</span></span>
                </label>
                <select
                  className="select select-bordered"
                  defaultValue="default"
                  {...register("bookingPlatform", {
                    required: "Please complete this required field",
                  })}
                >
                  <option disabled value="default">
                    Select Booking Platform
                  </option>
                  <option value="Platform1">Platform 1</option>
                  <option value="Platform2">Platform 2</option>
                  <option value="Platform3">Platform 3</option>
                </select>
                {errors.bookingPlatform && (
                  <span className="text-red-500">
                    {errors.bookingPlatform.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-control mt-6">
              <p className="text-justify">
                Last Call needs the contact information you provide by
                submitting this form to contact you about our products and
                services. You may unsubscribe from these communications at any
                time. Please review our{" "}
                <a href="" className="underline">
                  Privacy Policy here
                </a>
              </p>
            </div>
            <div className="flex gap-2 pt-3">
              <input onClick={handleCheckboxChange} type="checkbox" name="checkPrivacyPolicy" id="" />
              <p>By checking this box you are agreeing to all of our privacy and policy</p>
            </div>
            <div className="form-control mt-6 ">
              {isChecked === false ?
                <button type="submit" className="btn bg-[#FF756B] text-white hover:bg-[#FF756B] hover:text-white">
                  Submit
                </button> :
                <p type="submit" className="btn bg-slate-400 text-slate-500 hover:bg-slate-400 hover:text-slate-500 cursor-not-allowed">
                  Submit
                </p>}
            </div>
          </form>
          <img className="rounded-xl overflow-hidden" src="https://a.mktgcdn.com/p/rG1SzyDOZMsDj19-fakRweDt1Q7I5Cmk1Yyrh13fM1k/3000x4500.jpg" alt="" />
        </div>
        <div className="divider my-8"></div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div
            className=""
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
            <p className="text-xl mt-10"> Last Table has definitely been a great marketing tool for us. It's a brilliant way for our local market to try us for a nice dinner out without breaking the bank. Early dining is always a quiet time of night so it's great being able to create some real atmosphere in the restaurant at an early stage of the evening. It's also a great opportunity for our staff to show the First Table diners what we do here and add a personal touch to their experience. We get a lot of return customers as a result.
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
      {/* <div className="bg-blue-950 py-10">
        <p className="text-center text-white text-xl">© Last Call 2014 - 2024</p>
      </div> */}
    </div>
  );
}

export default RestaurantRegister;
