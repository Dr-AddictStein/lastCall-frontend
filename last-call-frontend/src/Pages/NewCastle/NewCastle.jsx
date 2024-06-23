import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/Banner/banner.jpg";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn, CiStar } from "react-icons/ci";
import { FaMap } from "react-icons/fa";
function NewCastle() {
  return (
    <div className="mb-20 ">
      <div
        className="hero px-20"
        style={{
          backgroundImage: ` url(${bannerImg})`,
          height: "70vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" bg-opacity-95">
          <div className="flex px-20 flex-col   justify-between  gap-10">
            <div className="lg:w-1/2 text-white">
              <Link to={"/newCastle"}>
                <p>NewCastle</p>
              </Link>
              <h2 className="text-5xl font-bold mt-10 mb-5">
                Newcastle Restaurants
              </h2>
              <p className="mb-5">Dine early, save money</p>
            </div>
            <div className=" lg:w-1/2 justify-center items-center">
              <div className="ralative  ">
                <div className="absolute right-5 top-60  transform -translate-y-1/2 w-96 h-48 bg-slate-200 rounded-lg shadow-lg"></div>
                <div className="absolute right-5 top-60 transform -translate-y-1/2 w-96 h-48 bg-slate-50 rotate-3 rounded-lg shadow-lg"></div>
                <div className="absolute right-0 top-60 transform -translate-y-1/2 w-96 z-10 px-6 pt-10 text-center  rounded-lg ">
                  <h2 className="text-blue-950 text-4xl mb-4 font-bold">
                    Early bird dining
                  </h2>
                  <p className="text-black">
                    Book the first table at Newcastle restaurants and get 50%
                    off the food bill for two, three, or four people!
                  </p>
                  <button className="btn bg-orange-600 border-none rounded-full text-white mt-10">
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-content   text-neutral-content"></div>
      </div>
      <div className="lg:relative flex justify-center">
        <div className=" lg:absolute grid   grid-cols-1 items-center justify-center rounded gap-2  lg:grid-cols-4 text-black lg:-bottom-8 w-full max-w-screen-lg mx-auto ">
          <div className="dropdown bg-white shadow-lg border-r py-4 rounded min-w-full lg:w-60">
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
            </ul>
          </div>
          <div className="dropdown bg-white shadow-lg border-r py-4 rounded w-full lg:w-60 ">
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
          <div className="dropdown bg-white shadow-lg border-r py-4 rounded w-full lg:w-60 ">
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
          <div className="dropdown bg-white shadow-lg border-r py-4 rounded w-full lg:w-60 ">
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
        </div>
      </div>
      {/* Banner End */}
      <div className="flex mt-20 justify-between px-4 lg:px-32">
        <div className="mr-3">
          <div className="flex gap-12 my-5">
            <img src={bannerImg} alt="" className="w-60 " />
            <div>
              <h2>
                <span className="text-3xl">Ape</span> &nbsp;
                <span className="bg-orange-500 px-2 py-1 text-white">NEW</span>
              </h2>
              <p className=" flex my-3 text-xl">
                <span className="flex items-center gap-2">
                  <CiLocationOn />
                  <a href=""> Newcastle CBD &nbsp;</a>
                </span>
                |<span> &nbsp; Japanese, Asian</span>
              </p>
              <p className="flex gap-2 items-center text-2xl">
                <span className="flex  ">
                  <CiStar className="text-slate-500" />
                  <CiStar className="text-slate-500" />
                  <CiStar className="text-slate-500" />
                  <CiStar className="text-slate-500" />
                  <CiStar className="text-slate-500" />
                </span>
                0 reviews
              </p>
              <div className="flex text-center">
                <div className="px-4 py-2 bg-slate-400 border-r">
                  <p className="my-2">Sun</p>
                  <hr />
                  <p className="my-3">23 June</p>
                </div>
                <div className="px-4 py-2 bg-slate-400 border-r">
                  <p className="my-2">Mon</p>
                  <hr />
                  <p className="my-3">24 June</p>
                </div>
                <div className="px-4 py-2 bg-slate-400 border-r">
                  <p className="my-2">Tue</p>
                  <hr />
                  <p className="my-3">25 June</p>
                </div>
                <div className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Wed</p>
                  <hr />
                  <p className="mt-3">26 June</p>
                  <p>1:30PM</p>
                </div>
                <div className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Thu</p>
                  <hr />
                  <p className="mt-3">27 June</p>
                  <p>1:30PM</p>
                </div>
                <div className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Fri</p>
                  <hr />
                  <p className="mt-3">28 June</p>
                  <p>1:30PM</p>
                </div>
                <div className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white">
                  <p className="my-2">Sat</p>
                  <hr />
                  <p className="mt-3">29 June</p>
                  <p>1:30PM</p>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="flex gap-12 my-5">
            <img src={bannerImg} alt="" className="w-60 " />
            <div>
              <h2>
                <span className="text-3xl">Ape</span> &nbsp;
                <span className="bg-orange-500 px-2 py-1 text-white">NEW</span>
              </h2>
              <p className=" flex my-3 text-xl">
                <span className="flex items-center gap-2">
                  <CiLocationOn />
                  <a href=""> Newcastle CBD &nbsp;</a>
                </span>
                |<span> &nbsp; Japanese, Asian</span>
              </p>
              <p className="flex gap-2 items-center text-2xl">
                <span className="flex  ">
                  <CiStar className="text-slate-500" />
                  <CiStar className="text-slate-500" />
                  <CiStar className="text-slate-500" />
                  <CiStar className="text-slate-500" />
                  <CiStar className="text-slate-500" />
                </span>
                0 reviews
              </p>
              <div className="flex text-center">
                <div className="px-4 py-2 bg-slate-400 border-r">
                  <p className="my-2">Sun</p>
                  <hr />
                  <p className="my-3">23 June</p>
                </div>
                <div className="px-4 py-2 bg-slate-400 border-r">
                  <p className="my-2">Mon</p>
                  <hr />
                  <p className="my-3">24 June</p>
                </div>
                <div className="px-4 py-2 bg-slate-400 border-r">
                  <p className="my-2">Tue</p>
                  <hr />
                  <p className="my-3">25 June</p>
                </div>
                <div className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Wed</p>
                  <hr />
                  <p className="mt-3">26 June</p>
                  <p>1:30PM</p>
                </div>
                <div className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Thu</p>
                  <hr />
                  <p className="mt-3">27 June</p>
                  <p>1:30PM</p>
                </div>
                <div className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Fri</p>
                  <hr />
                  <p className="mt-3">28 June</p>
                  <p>1:30PM</p>
                </div>
                <div className="px-4 py-2 bg-blue-900 hover:bg-blue-950 text-white">
                  <p className="my-2">Sat</p>
                  <hr />
                  <p className="mt-3">29 June</p>
                  <p>1:30PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Aside section */}
        <div className="hidden md:hidden lg:block border-l pl-6">
          <div className=" px-10 flex items-center gap-1 border py-4 mb-4">
            <FaMap />
            View Map
          </div>
          <hr />
          <p className="flex justify-between items-center mb-20">
            Cuisine
            <details className="dropdown dropdown-end" open>
              <summary className="m-1 select focus:outline-none border-none "></summary>
              <ul className="p-2  dropdown-content z-[1]  w-48">
                <li className="flex justify-between">
                  <span>Asian (1) </span> <input type="checkbox" />
                </li>
                <li className="flex justify-between">
                  <span>Asian (1) </span> <input type="checkbox" />
                </li>
              </ul>
            </details>
          </p>
          {/* Features */}
          <p className="flex justify-between items-center">
            Features
            <details className="dropdown dropdown-end " open>
              <summary className="m-1 select focus:outline-none border-none "></summary>
              <ul className="p-2  dropdown-content z-[1]  w-48">
                <li className="flex justify-between">
                  <span>New Venues (3) </span> <input type="checkbox" />
                </li>
              </ul>
            </details>
          </p>
        </div>
      </div>
    </div>
  );
}
export default NewCastle;
