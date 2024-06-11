import { Link } from 'react-router-dom';
import bannerImg from '../../../../assets/images/Banner/banner.jpg'
import { SlCalender } from 'react-icons/sl';
function Banner() {
  const today = new Date();
  console.log(today)
  return (
    <div className="rounded">
      <div
        className="hero min-h-screen rounded-lg"
        style={{
          backgroundImage: ` url(${bannerImg})`,
        }}
      >
        <div className=" bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <p className="mb-5 font-bold text-5xl">
              Book your stay with Tripster
            </p>
            <p>1,480,086 rooms around the world are waiting for you!</p>
            <div className="grid grid-flow-cols-1 gap-2  lg:grid-cols-4 text-black mt-12">
              <div className="bg-white border-r  px-6 flex justify-center items-center">
                <SlCalender />
                <select name="" id="" className=" px-4     text-black">
                  <option
                    className=""
                    disabled
                    selected
                    value="
                  All dates"
                  >
                    All dates
                  </option>
                  <option
                    value="
                  All dates"
                  >
                    11th june ,2024
                  </option>
                  <option
                    value="
                  All dates"
                  >
                    11th june ,2024
                  </option>
                  <option
                    value="
                  All dates"
                  >
                    11th june ,2024
                  </option>
                </select>
              </div>
              <div className="bg-white border-r pr-6 flex justify-center items-center">
                <select name="" id="" className="  px-4 lg:px-10 ">
                  <option
                    selected
                    value="
                  All dates"
                  >
                    Select a Region
                  </option>
                  <option
                    value="
                  Bangladesh"
                  >
                    Bangladesh
                  </option>
                  <option
                    value="
                 Thailand"
                  >
                    Thailand
                  </option>
                  <option
                    value="
                  All dates"
                  >
                    Afganistan
                  </option>
                </select>
              </div>
              <div className="bg-white border-r pr-6 flex justify-center items-center">
                <select name="" id="" className="px-4 lg:px-10  text-black">
                  <option
                    selected
                    value="
                  All dates"
                  >
                    Dinner
                  </option>
                  <option
                    value="
                  All dates"
                  >
                    Lunch
                  </option>
                  <option
                    value="
                  All dates"
                  >
                    Breakfast
                  </option>
                </select>
              </div>
              <div className="bg-white border-r pr-6 flex justify-center items-center">
                <div className="py-4 flex justify-center mx-4">
                  <span className="bg-red-400 hover:bg-red-500 px-10 py-4 text-white font-bold ">
                    <Link>Find a table</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner