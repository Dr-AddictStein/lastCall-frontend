import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/Banner/banner.webp';
import { SlCalender } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import { FaRegMap } from 'react-icons/fa';
import { PiCityLight } from 'react-icons/pi';
import { IoMdRestaurant } from 'react-icons/io';

function Banner({ cities, regions }) {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('All Dates');
  const [selectedRegion, setSelectedRegion] = useState('Select a Region');
  const [selectedCity, setSelectedCity] = useState('Select a City');
  const [selectedMeal, setSelectedMeal] = useState('Category');

  useEffect(() => {
    const generateDates = () => {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const today = new Date();
      const datesArray = [];
      
      for (let i = 0; i <= 7; i++) {
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

  const handleFindTable = () => {
    console.log({
      selectedDate,
      selectedRegion,
      selectedCity,
      selectedMeal
    });
  };

  return (
    <div className="">
      <div
        className="hero h-full lg:h-[80vh] bg-cover relative pb-14"
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
            <div className="grid grid-flow-cols-1 bg-white items-center rounded gap-2 lg:grid-cols-5 text-black mt-12">
              <div className="dropdown bg-white border-r py-4 rounded lg:w-60">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <SlCalender /> {selectedDate}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] shadow bg-base-100 w-3/4 lg:w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  {dates.map((date, index) => (
                    <li
                      key={index}
                      className="hover:bg-blue-900 hover:text-white cursor-pointer p-3"
                      onClick={() => setSelectedDate(date)}
                    >
                      <p>{date}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown bg-white border-r py-4 rounded lg:w-60">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <FaRegMap /> {selectedRegion}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  {regions.map((region, index) => (
                    <li
                      key={index}
                      className="hover:bg-blue-900 cursor-pointer hover:text-white p-3"
                      onClick={() => setSelectedRegion(region.name)}
                    >
                      <p>{region.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown bg-white border-r py-4 rounded lg:w-60">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <PiCityLight /> {selectedCity}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  {cities.map((city, index) => (
                    <li
                      key={index}
                      className="hover:bg-blue-900 cursor-pointer hover:text-white p-3"
                      onClick={() => setSelectedCity(city.name)}
                    >
                      <p>{city.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown bg-white border-r py-4 rounded">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                >
                  <IoMdRestaurant /> {selectedMeal}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
                >
                  <li className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white" onClick={() => setSelectedMeal('Breakfast')}>
                    <p>Breakfast</p>
                  </li>
                  <li className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white" onClick={() => setSelectedMeal('Lunch')}>
                    <p>Lunch</p>
                  </li>
                  <li className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white" onClick={() => setSelectedMeal('Dinner First Call')}>
                    <p>Dinner First Call</p>
                  </li>
                  <li className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white" onClick={() => setSelectedMeal('Dinner Last Call')}>
                    <p>Dinner Last Call</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white border-r flex justify-center items-center rounded">
                <div className="py-4 flex justify-center mx-4">
                  <span
                    className="bg-red-400 hover:bg-red-500 px-10 py-4 text-white font-bold cursor-pointer"
                    onClick={handleFindTable}
                  >
                    Find a table
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
