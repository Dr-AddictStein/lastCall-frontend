import { Link, useParams } from "react-router-dom";
import bannerImg from "../../assets/images/Banner/banner.webp";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn, CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { LuUtensilsCrossed } from "react-icons/lu";
import { useEffect, useState } from "react";

function NewCastle() {
  const [isHover, setIsHover] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [dates, setDates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("Time");
  const [selectedDate, setSelectedDate] = useState("All Dates");
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isMealDropdownOpen, setIsMealDropdownOpen] = useState(false);
  const { city } = useParams();

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    setIsMealDropdownOpen(false);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsDateDropdownOpen(false);
  };

  const categories = [
    "American", "Asian", "Barbeque", "Brunch", "Burgers", "Cafe", "Chinese", "Desserts",
    "European", "Filipino", "Fine Dining", "French", "Fusion", "Greek", "Halal", "Hotpot",
    "Indian", "Italian", "Japanese", "Korean", "Latin", "Mediterranean", "Mexican",
    "Middle Eastern", "Pizza", "Pub", "Ramen", "Seafood", "Spanish", "Steakhouse",
    "Sushi", "Thai", "Vegan", "Vegetarian", "Vietnamese"
  ];

  const fetchRestaurant = () => {
    const url = `http://localhost:4000/api/restaurant`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data?.filter(restaurant => restaurant?.city === city);
        setRestaurants(filteredData);
      })
      .catch((error) => console.log(error));
  };

  const generateDates = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    const today = new Date();
    const datesArray = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const day = daysOfWeek[nextDate.getDay()];
      const date = nextDate.getDate();
      const month = monthNames[nextDate.getMonth()];
      const year = nextDate.getFullYear();
      datesArray.push({
        day,
        date,
        month,
        year,
        fullDate: nextDate.toISOString().split('T')[0], // Store full date in yyyy-mm-dd format
      });
    }
    setDates(datesArray);
  };

  useEffect(() => {
    fetchRestaurant();
    generateDates();
  }, []);

  const filteredRestaurants = restaurants
    .filter(restaurant => {
      // Filter by category
      const categoryMatch = selectedCategory
        ? restaurant.category.includes(selectedCategory)
        : true;

      // Filter by selected date
      const dateMatch = selectedDate === "All Dates" || restaurant.tables.some(table => {
        const tableDate = new Date(table.date).toISOString().split('T')[0];
        return tableDate === selectedDate;
      });

      return categoryMatch && dateMatch;
    });

  const handleCategoryChange = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? "" : category));
  };

  return (
    <div className="mb-20">
      <div
        className="hero h-full bg-center bg-cover object-cover bg-no-repeat lg:h-[70vh]"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="bg-opacity-95"></div>
        <div className="hero-content text-neutral-content">
          <div className="block lg:hidden mt-16 text-white">
            <Link to={"/newCastle"}>
              <p className="cursor-pointer">NewCastle</p>
            </Link>
            <h2 className="text-3xl lg:text-5xl font-bold mt-10 mb-5">
              Newcastle Restaurants
            </h2>
            <p className="mb-5">Dine early, save money</p>
          </div>
        </div>
      </div>
      <div className="lg:relative hidden lg:block text-white max-w-screen-2xl mx-auto lg:px-32">
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
            <div className="absolute right-0 lg:right-auto lg:-top-36 transform -translate-x-1/2 lg:translate-x-0 w-96 h-48 bg-slate-200 rounded-lg shadow-lg"></div>
            <div className="absolute right-0 lg:right-auto lg:-top-36 transform -translate-x-1/2 lg:translate-x-0 w-96 h-48 bg-slate-50 rotate-3 rounded-lg shadow-lg"></div>
            <div className="absolute right-0 lg:right-auto lg:-top-44 transform -translate-x-1/2 lg:translate-x-0 w-96 z-10 px-6 pt-10 text-center rounded-lg">
              <h2 className="text-blue-950 text-4xl mb-4 font-bold">
                Early bird dining
              </h2>
              <p className="text-black text-xl">
                Book the first table at Newcastle restaurants and get 50% off
                the food bill for two, three, or four people!
              </p>

              <Link to="/faq">
                <button
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  className={`btn-transition relative bg-[#ff675c] hover:bg-[#ff675c] w-[50px] hover:w-[130px] overflow-hidden btn mx-auto border-none rounded-full text-white mt-6 flex gap-6 items-center py-1 justify-end`}
                >
                  <p
                    className={`absolute btn-transition left-3 whitespace-nowrap ${isHover ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    Learn More
                  </p>
                  <FaArrowRight className="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* DropDown section */}
      <form className="lg:relative flex justify-center">
        <div className="lg:absolute grid grid-cols-1 items-center justify-center rounded lg:grid-cols-2 text-black lg:-bottom-8 w-1/4 max-w-screen-lg mx-auto gap-4">
          <div className="dropdown bg-white shadow-lg py-4 rounded w-full lg:w-60 md:px-2">
            <div
              tabIndex={0}
              role="button"
              className="m-1 relative flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
            >
              <SlCalender className="text-blue-900 absolute left-0" /> {selectedDate === "All Dates" ? selectedDate : new Date(selectedDate).toDateString()}
            </div>
            {isDateDropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] shadow bg-base-100 w-3/4 lg:w-60 mt-10 overflow-y-auto max-h-40 text-left"
              >
                {dates.map((date, index) => (
                  <li key={index} className="hover:bg-blue-900 hover:text-white cursor-pointer p-3" onClick={() => handleDateClick(date.fullDate)}>
                    <a>{`${date.day} ${date.date} ${date.month}`}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="dropdown bg-white shadow-lg py-4 rounded w-full lg:w-60 md:px-2">
            <div
              tabIndex={0}
              role="button"
              className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
              onClick={() => setIsMealDropdownOpen(!isMealDropdownOpen)}
            >
              <LuUtensilsCrossed className="text-blue-900" />
              {selectedMeal}
            </div>
            {isMealDropdownOpen && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left "
              >
                <li
                  className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white"
                  onClick={() => handleMealClick('Breakfast')}
                >
                  <p>Breakfast</p>
                </li>
                <li
                  className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white"
                  onClick={() => handleMealClick('Lunch')}
                >
                  <p>Lunch</p>
                </li>
                <li
                  className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white"
                  onClick={() => handleMealClick('Dinner')}
                >
                  <p>Dinner</p>
                </li>

              </ul>
            )}
          </div>
        </div>
      </form>
      {/* Banner End */}
      {/* Calender section */}
      <div className="flex flex-col lg:flex-row mt-20 justify-between custom-screen max-w-screen-2xl mx-auto">
        <div className="mr-3">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant._id}
              className="flex flex-col md:flex-row lg:flex-row gap-8 my-5"
            >
              <div className="avatar">
                <div className="w-60 rounded">
                  <img src={restaurant?.thumb} alt={restaurant?.name} />
                </div>
              </div>
              <div>
                <h2>
                  <Link to={`/foodDetails/${restaurant?._id}`}>
                    <span className="text-3xl">{restaurant?.name}</span>
                  </Link>
                  &nbsp;
                  <span className="bg-orange-500 px-2 py-1 text-white">NEW</span>
                </h2>
                <p className="flex my-3 text-xl">
                  <span className="flex items-center gap-2 border-r-2 border-black pr-5">
                    <CiLocationOn />
                    <p>
                      {restaurant?.city}, {restaurant?.region}
                    </p>
                  </span>
                  <span className="pl-5">
                    <span>{restaurant?.category[0]}, </span>
                    <span>{restaurant?.category[1]}</span>
                  </span>
                </p>
                <p className="flex gap-2 items-center text-2xl">
                  <span className="flex">
                    <CiStar className="text-slate-500" />
                    <CiStar className="text-slate-500" />
                    <CiStar className="text-slate-500" />
                    <CiStar className="text-slate-500" />
                    <CiStar className="text-slate-500" />
                  </span>
                  0 reviews
                </p>
                <div id="dates" className="flex text-center flex-wrap">
                  {dates.map((date, index) => {
                    const databaseDate = restaurant.tables.find(t => {
                      const tableDate = new Date(t.date).toISOString().split('T')[0];
                      return tableDate === date.fullDate;
                    });

                    return (
                      <div
                        key={index}
                        className={`px-2 lg:px-3 py-2 border-r ${databaseDate ? 'bg-[#265582]  text-white relative' : 'bg-white'}`}
                      >
                        <p className="my-2">{date.day}</p><hr />
                        <p className="mt-3">{date.date} {date.month.substring(0, 3)}</p>
                        {databaseDate && (
                          <>
                            <p className="mb-3">1:30PM</p>
                            <span className="absolute w-16 -bottom-3 left-2 bg-orange-600 p-1 text-sm">
                              50% off
                            </span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Aside section */}
        <div className="hidden md:hidden lg:block border-l pl-24">
          <div className="">
            <p className='text-center font-semibold'>Category</p>
            <ul className="p-2 z-[1] w-48">
              {categories.map(category => (
                <li key={category} className="flex justify-between">
                  <span>{category}</span> <input type="checkbox" checked={selectedCategory === category} onChange={() => handleCategoryChange(category)} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCastle;
