import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/Banner/banner.jpg'
import { SlCalender } from 'react-icons/sl';
function Banner() {
  const today = new Date();
  console.log(today)
  return (
    <div className="">
      <div
        className="hero min-h-screen"
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
            <div className="grid grid-flow-cols-1 items-center rounded gap-2  lg:grid-cols-4 text-black mt-12">
              {/* <div className="bg-white border-r  px-6 flex justify-center items-center">
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
              </div> */}
              <div className="dropdown bg-white border-r py-4 rounded lg:w-60">
                <div
                  tabIndex={0}
                  role="button"
                  className=" m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <SlCalender /> All Dates
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1]   shadow bg-base-100 w-3/4 lg:w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  <li className="hover:bg-gray-200 bg-blue-950 text-white p-3">
                    <Link>22 June</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>23 June</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>24 june</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>25 june</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 5</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 6</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 7</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 8</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 9</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 10</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 11</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 12</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown bg-white border-r py-4 rounded lg:w-60 ">
                <div
                  tabIndex={0}
                  role="button"
                  className=" m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  Select a Region
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1]   shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  <li className="hover:bg-gray-200 bg-blue-950 text-white p-3">
                    <Link>Bangladesh</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <Link>Australia</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <Link>Thailand</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>25 june</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 5</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 6</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 7</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 8</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 9</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 10</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 11</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 12</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 13</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 14</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 15</a>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <a>Item 16</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown bg-white border-r py-4 rounded ">
                <div
                  tabIndex={0}
                  role="button"
                  className=" m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  Dinner
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1]   shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  <li className="hover:bg-gray-200 bg-blue-950 text-white p-3">
                    <Link>Dinner</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <Link>Lunch</Link>
                  </li>
                  <li className="hover:bg-gray-200 p-3">
                    <Link>Breakfast</Link>
                  </li>
               
                  
                 
                </ul>
              </div>
              <div className="bg-white border-r flex justify-center items-center rounded">
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