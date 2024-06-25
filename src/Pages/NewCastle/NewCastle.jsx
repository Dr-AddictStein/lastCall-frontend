import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/Banner/banner.jpg";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn, CiStar } from "react-icons/ci";
import { FaArrowRight, FaMap } from "react-icons/fa";
import "./NewCastle.css";
import { IoLocation } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { LuUtensilsCrossed } from "react-icons/lu";
import { useState } from "react";

function NewCastle() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="mb-20 w-full">
      <div
        className="w-full h-[70vh] object-contain bg-cover"
        style={{
          backgroundImage: ` url(${bannerImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" bg-opacity-95"></div>
        <div className=" hero text-neutral-content">
          <div className="block lg:hidden mt-16 text-white">
            <Link to={"/newCastle"}>
              <p className="cursor-pointer">NewCastle</p>
            </Link>
            <h2 className="text-5xl font-bold mt-10 mb-5">
              Newcastle Restaurants
            </h2>
            <p className="mb-5">Dine early, save money</p>
          </div>
        </div>
      </div>
      {/* Vejal */}
      <div className="lg:relative hidden lg:block text-white px-32">
        <div className="relative lg:absolute flex flex-col lg:flex-row items-center lg:justify-between -top-96 text-5xl text-red-600 custom-gap">
          <div className="lg:w-1/2 text-white">
            <Link to={"/newCastle"}>
              <p>NewCastle</p>
            </Link>
            <h2 className="text-5xl font-bold mt-10 mb-5">
              Newcastle Restaurants
            </h2>
            <p className="mb-5">Dine early, save money</p>
          </div>
          <div className="relative lg:w-1/2">
            <div className="absolute right-0 lg:right-auto  lg:-top-36 transform -translate-x-1/2 lg:translate-x-0 w-96 h-48 bg-slate-200 rounded-lg shadow-lg"></div>
            <div className="absolute right-0 lg:right-auto  lg:-top-36 transform -translate-x-1/2 lg:translate-x-0 w-96 h-48 bg-slate-50 rotate-3 rounded-lg shadow-lg"></div>
            <div className="absolute right-0 lg:right-auto  lg:-top-44 transform -translate-x-1/2 lg:translate-x-0 w-96 z-10 px-6 pt-10 text-center rounded-lg">
              <h2 className="text-blue-950 text-4xl mb-4 font-bold">
                Early bird dining
              </h2>
              <p className="text-black text-xl">
                Book the first table at Newcastle restaurants and get 50% off
                the food bill for two, three, or four people!
              </p>

              <div className="">
                <button
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  className={`btn-transition relative bg-[#ff675c] hover:bg-[#ff675c] w-[50px] hover:w-[130px] overflow-hidden btn mx-auto border-none rounded-full text-white mt-6 flex gap-6 items-center py-1 justify-end`}
                >
                  <p className={`absolute btn-transition left-3 whitespace-nowrap ${isHover ? 'opacity-100' : 'opacity-0'}`}>Learn More</p>
                  <FaArrowRight className="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DropDown section */}
      <div className="lg:relative flex justify-center">
        <div className=" lg:absolute grid   grid-cols-1 items-center justify-center rounded   lg:grid-cols-4 text-black lg:-bottom-8 w-full max-w-screen-lg mx-auto gap-4 ">
          <div className="dropdown bg-white shadow-lg  py-4 rounded min-w-full lg:w-60">
            <div
              tabIndex={0}
              role="button"
              className=" m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
            >
              <SlCalender className="text-blue-900" /> All Dates
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
          <div className="dropdown bg-white shadow-lg  py-4 rounded w-full lg:w-60 ">
            <div
              tabIndex={0}
              role="button"
              className=" m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
            >
              <IoLocation className="text-blue-900" /> All of NewCastles
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1]   shadow bg-base-100 w-3/4 lg:w-60 mt-10 overflow-y-auto max-h-40 text-left "
            >
              <li className="hover:bg-gray-200 bg-blue-950 text-white p-3">
                <Link>Coocks Hill</Link>
              </li>
              <li className="hover:bg-gray-200 p-3">
                <Link>New Castle CBD</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown bg-white shadow-lg  py-4 rounded w-full lg:w-60 ">
            <div
              tabIndex={0}
              role="button"
              className=" m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
            >
              <TfiMenuAlt className="text-blue-900" /> Dinner
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1]   shadow bg-base-100 w-3/4 lg:w-60 mt-10 overflow-y-auto max-h-40 text-left "
            >
              <li className="hover:bg-gray-200 bg-blue-950 text-white p-3">
                <Link>Top Rated </Link>
              </li>
              <li className="hover:bg-gray-200 p-3">
                <Link>A to Z</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown bg-white shadow-lg  py-4 rounded w-full lg:w-60 ">
            <div
              tabIndex={0}
              role="button"
              className=" m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
            >
              <LuUtensilsCrossed className="text-blue-900" />
              Lunch
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1]   shadow bg-base-100 w-3/4 lg:w-60 mt-10 overflow-y-auto max-h-40 text-left "
            >
              <li className="hover:bg-gray-200 bg-blue-950 text-white p-3">
                <Link>Lunch</Link>
              </li>
              <li className="hover:bg-gray-200 p-3">
                <Link>Dinner</Link>
              </li>
              <li className="hover:bg-gray-200 p-3">
                <Link>Breakfast</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Banner End */}
      <div className="flex mt-20 justify-between   custom-screen ">
        <div className="mr-3">
          <div className="flex flex-col md:flex-row lg:flex-row gap-8 my-5">
            <img src={bannerImg} alt="" className=" w-full md:w-64 lg:w-60 " />
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
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Sun</p>
                  <hr />
                  <p className="my-3">23 June</p>
                </div>
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Mon</p>
                  <hr />
                  <p className="my-3">24 June</p>
                </div>
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Tue</p>
                  <hr />
                  <p className="my-3">25 June</p>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Wed</p>
                  <hr />
                  <p className="mt-3">26 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>

                <div className="relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Thu</p>
                  <hr />
                  <p className="mt-3">27 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Fri</p>
                  <hr />
                  <p className="mt-3">28 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white">
                  <p className="my-2">Sat</p>
                  <hr />
                  <p className="mt-3">29 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="flex flex-col md:flex-row lg:flex-row gap-8 my-5">
            <img src={bannerImg} alt="" className=" w-full md:w-64 lg:w-60 " />
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
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Sun</p>
                  <hr />
                  <p className="my-3">23 June</p>
                </div>
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Mon</p>
                  <hr />
                  <p className="my-3">24 June</p>
                </div>
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Tue</p>
                  <hr />
                  <p className="my-3">25 June</p>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Wed</p>
                  <hr />
                  <p className="mt-3">26 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>

                <div className="relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Thu</p>
                  <hr />
                  <p className="mt-3">27 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Fri</p>
                  <hr />
                  <p className="mt-3">28 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white">
                  <p className="my-2">Sat</p>
                  <hr />
                  <p className="mt-3">29 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row lg:flex-row gap-8 my-5">
            <img src={bannerImg} alt="" className=" w-full md:w-64 lg:w-60 " />
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
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Sun</p>
                  <hr />
                  <p className="my-3">23 June</p>
                </div>
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Mon</p>
                  <hr />
                  <p className="my-3">24 June</p>
                </div>
                <div className="px-2 lg:px-3 py-2 bg-slate-400 border-r">
                  <p className="my-2">Tue</p>
                  <hr />
                  <p className="my-3">25 June</p>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Wed</p>
                  <hr />
                  <p className="mt-3">26 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>

                <div className="relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Thu</p>
                  <hr />
                  <p className="mt-3">27 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white border-r">
                  <p className="my-2">Fri</p>
                  <hr />
                  <p className="mt-3">28 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
                <div className=" relative px-2 lg:px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white">
                  <p className="my-2">Sat</p>
                  <hr />
                  <p className="mt-3">29 June</p>
                  <p className="mb-3">1:30PM</p>
                  <span className=" absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                    50% off
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Aside section */}
        <div className="hidden md:hidden lg:block border-l pl-10">
          <div className=" px-4 md:px-4 lg:px-8 flex items-center gap-1 border py-4 mb-4 cursor-pointer">
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
      {/* Last section */}
      <div className="px-4 lg:px-32">
        <h2 className="text-5xl text-blue-950 mt-32 mb-6 font-bold">
          You might also like
        </h2>
        <a href="">
          <div className="flex gap-6">
            <img src={bannerImg} alt="" className="w-32 h-32" />
            <div>
              <a href="" className="text-2xl mt-3 mb-8 font-bold">
                NewCastle Dinner Deals
              </a>

              <p className="mt-2">
                Book first table for dinner and get <br /> 50% off the food bill
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default NewCastle;
