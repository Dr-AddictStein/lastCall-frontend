import { useForm } from "react-hook-form";
import bgImg from '../../assets/images/SignUp/bg01.jpg';
import bg1 from '../../assets/images/SignUp/bg1.png';
import bg2 from '../../assets/images/SignUp/bg2.png';
import bg3 from '../../assets/images/SignUp/bg3.jpg';
import bg4 from '../../assets/images/SignUp/bg4.png';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function RestaurantRegister() {
  const [isChecked, setIsChecked] = useState(false);
  const [showrest, setShowrest] = useState(true);
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    // Fetch regions and cities on component mount
    const fetchRegionsAndCities = async () => {
      try {
        const [regionsResponse, citiesResponse] = await Promise.all([
          axios.get("http://localhost:4000/api/region/"),
          axios.get("http://localhost:4000/api/city/")
        ]);
        setRegions(regionsResponse.data);
        setCities(citiesResponse.data);
      } catch (error) {
        console.error("Error fetching regions and cities:", error);
      }
    };

    fetchRegionsAndCities();
  }, []);

  const onSubmit = async (data) => {
    setShowrest(false);
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
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="my-20 mx-2 lg:mx-40">
        <div className="text-center ">
          <h2 className="text-5xl text-blue-900 mb-5">
            Sign up your restaurant <br /> for Last Call
          </h2>
          <p className="text-xl">
            Last Call enables increased revenue, vast market reach, and free marketing by taking advantage of tough-to-fill seats
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
                  {regions.map((region) => (
                    <option key={region._id} value={region.name}>
                      {region.name}
                    </option>
                  ))}
                </select>
                {errors.region && (
                  <span className="text-red-500">
                    {errors.region.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">City <span className="text-red-500">*</span></span>
                </label>
                <select
                  className="select select-bordered"
                  defaultValue="default"
                  {...register("city", {
                    required: "Please complete this required field",
                  })}
                >
                  <option disabled value="default">
                    Select City
                  </option>
                  {cities.map((city) => (
                    <option key={city._id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
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
                  <span className="text-red-500">{errors.restaurantName.message}</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-950">Website</span>
                </label>
                <input
                  {...register("website")}
                  type="text"
                  placeholder="Website"
                  className="input input-bordered"
                />
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
                  <span className="label-text text-blue-950">Table Offering Times</span>
                </label>
                <input
                  {...register("times")}
                  type="text"
                  placeholder="Example: Breakfast 8:00am 4 tables"
                  className="input input-bordered m"
                />
                <input
                  {...register("times")}
                  type="text"
                  placeholder="Example: Lunch N/A"
                  className="input input-bordered mt-2"
                />
                <input
                  {...register("times")}
                  type="text"
                  placeholder="Example: Dinner First Call 5:00pm 6 tables"
                  className="input input-bordered mt-2"
                />
                <input
                  {...register("times")}
                  type="text"
                  placeholder="Example: Dinner Last Call 9:30pm 4 tables"
                  className="input input-bordered mt-2"
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
                  <option value="Bookatable">Bookatable</option>
                  <option value="Bookenda">Bookenda</option>
                  <option value="Chope">Chope</option>
                  <option value="Design My Night">Design My Night</option>
                  <option value="Dojo">Dojo</option>
                  <option value="Eveve">Eveve</option>
                  <option value="FavuriteTable">FavuriteTable</option>
                  <option value="GloriaFood/GlobalFood">GloriaFood/GlobalFood</option>
                  <option value="GXM Bye Supurb Experience">GXM Bye Supurb Experience</option>
                  <option value="Hosteme App">Hosteme App</option>
                  <option value="Internal">Internal</option>
                  <option value="Mollom">Mollom</option>
                  <option value="Nabooki">Nabooki</option>
                  <option value="NowBookeit">NowBookeit</option>
                  <option value="No Platform">No Platform</option>
                  <option value="Obee">Obee</option>
                  <option value="Open Table">Open Table</option>
                  <option value="Qyandoo">Qyandoo</option>
                  <option value="Resdiary">Resdiary</option>
                  <option value="Resy">Resy</option>
                  <option value="SevenRooms">SevenRooms</option>
                  <option value="Table Agent">Table Agent</option>
                  <option value="The Fork">The Fork</option>
                  <option value="Tock">Tock</option>
                  <option value="Yelp">Yelp</option>
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
                <Link to='/privacyPolicy' className="underline">
                  Privacy Policy here
                </Link>
                <a href="">
                </a>
              </p>
            </div>
            <div className="flex gap-2 pt-3">
              <input onClick={handleCheckboxChange} type="checkbox" name="checkPrivacyPolicy" id="" />
              <p>By checking this box you agree to our Privacy Policy</p>
            </div>
            <div className="form-control mt-6 ">
              {isChecked === true ?
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
        {/* <div className="divider my-8"></div> */}

      </div>
      {/* <div className="bg-blue-950 py-10">
        <p className="text-center text-white text-xl">© Last Call 2014 - 2024</p>
      </div> */}
    </div>
  );
}

export default RestaurantRegister;
