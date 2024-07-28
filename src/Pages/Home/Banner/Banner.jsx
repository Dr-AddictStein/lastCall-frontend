import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/Banner/banner.webp';
import { SlCalender } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { FaRegMap } from 'react-icons/fa';
import { PiCityLight } from 'react-icons/pi';
import { IoMdRestaurant } from 'react-icons/io';

function Banner({ cities, regions }) {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const today = new Date();
      const datesArray = [];
      
      for (let i = 1; i <= 7; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        const day = daysOfWeek[nextDate.getDay()];
        const date = nextDate.getDate();
        const month = monthNames[nextDate.getMonth()];
        datesArray.push(`${day} ${date} ${month}`);
      }
      setDates(datesArray);
    };

    generateDates();
  }, []);

  useEffect(() => {
    console.log('Cities:', cities);
    console.log('Regions:', regions);
  }, [cities, regions]);

  return (
    <div className="">
      <div
        className="hero h-full lg:h-[60vh] bg-cover relative"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <p className="mb-5 font-bold text-3xl mt-10 lg:text-5xl">
              Dining deals from dawn to dusk
            </p>
            <p>1,480,086 rooms around the world are waiting for you!</p>
            <div className="grid grid-flow-cols-1 items-center rounded gap-2 lg:grid-cols-5 text-black mt-12">
              <div className="dropdown bg-white border-r py-4 rounded lg:w-60">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <SlCalender /> All Dates
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] shadow bg-base-100 w-3/4 lg:w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  {dates.map((date, index) => (
                    <li key={index} className="hover:bg-blue-900 hover:text-white cursor-pointer p-3">
                      <Link>{date}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown bg-white border-r py-4 rounded lg:w-60 ">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <FaRegMap />Select a Region
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  {regions.map((region, index) => (
                    <li key={index} className="hover:bg-blue-900 hover:text-white p-3">
                      <Link>{region.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown bg-white border-r py-4 rounded lg:w-60 ">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <PiCityLight />Select a City
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  {cities.map((city, index) => (
                    <li key={index} className="hover:bg-blue-900 hover:text-white p-3">
                      <Link>{city.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown bg-white border-r py-4 rounded ">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <IoMdRestaurant /> Dinner
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
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
                  <span className="bg-red-400 hover:bg-red-500 px-10 py-4 text-white font-bold">
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

export default Banner;
