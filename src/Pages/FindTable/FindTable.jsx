import { Link, useLocation } from 'react-router-dom';
import bannerImg from "../../assets/images/Banner/banner-modified.webp";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn, CiStar } from "react-icons/ci";
import { FaArrowRight, FaRegMap, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { PiCityLight } from 'react-icons/pi';
import { IoMdRestaurant } from 'react-icons/io';

function FindTable() {
    const [isHover, setIsHover] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
    const [dates, setDates] = useState([]);
    const [cities, setCities] = useState([]);
    const [regions, setRegions] = useState([]);

    const [selectedDate2, setSelectedDate] = useState('');
    const [selectedRegion2, setSelectedRegion] = useState('');
    const [selectedCity2, setSelectedCity] = useState('');
    const [selectedMeal2, setSelectedMeal] = useState('');
    const [selectedMeal3, setSelectedMeal3] = useState('');

    const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
    const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [isMealDropdownOpen, setIsMealDropdownOpen] = useState(false);

    const [selectedCategory, setSelectedCategory] = useState("");
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        let dex = restaurants.filter((rest) => {
            return rest.category.includes(selectedCategory);
        })
        setRestaurants(dex);
    }, [selectedCategory])

    const fetchCities = () => {
        fetch('http://localhost:4000/api/city')
            .then(res => res.json())
            .then(data => {
                setCities(data);
            })
            .catch(error => console.log(error));
    };

    const fetchRegions = () => {
        fetch('http://localhost:4000/api/region')
            .then(res => res.json())
            .then(data => {
                setRegions(data);
            })
            .catch(error => console.log(error));
    };

    const categories = [
        "American", "Asian", "Barbeque", "Brunch", "Burgers", "Cafe", "Chinese", "Desserts",
        "European", "Filipino", "Fine Dining", "French", "Fusion", "Greek", "Halal", "Hotpot",
        "Indian", "Italian", "Japanese", "Korean", "Latin", "Mediterranean", "Mexican",
        "Middle Eastern", "Pizza", "Pub", "Ramen", "Seafood", "Spanish", "Steakhouse",
        "Sushi", "Thai", "Vegan", "Vegetarian", "Vietnamese"
    ];

    const location = useLocation();
    const {
        selectedDate,
        selectedRegion,
        selectedCity,
        selectedMeal,
    } = location.state || {};

    const setAll = () => {
        setSelectedDate(selectedDate)
        setSelectedCity(selectedCity)
        setSelectedMeal(selectedMeal)
        setSelectedMeal3(selectedMeal)
        setSelectedRegion(selectedRegion)
    }

    const [trig, setTrig] = useState(false);

    useEffect(() => {
        setAll();
        setTrig(true);
    }, []);

    const [globalRestaurants, setGlobalRestaurants] = useState([]);
    const formo = (dateString) => {
        const date = new Date(dateString);

        // Array of weekday names
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Array of month names
        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        // Extract day, date, month, and year
        const dayName = daysOfWeek[date.getDay()];
        const dayNumber = date.getDate();
        const monthName = monthNames[date.getMonth()];
        const year = date.getFullYear();

        // Construct the desired format
        const formattedDate = `${dayName} ${dayNumber} ${monthName} ${year}`;

        return formattedDate;
    }

    const filterRestaurants = () => {
        const filteredData = globalRestaurants.filter(restaurant => {

            const categoryMatch = selectedCategory
                ? restaurant.category.includes(selectedCategory)
                : true;


            const matchesCity = selectedCity2 !== 'Select a City' ? restaurant.city === selectedCity2 : true;
            const matchesRegion = selectedRegion2 !== 'Select a Region' ? restaurant.region === selectedRegion2 : true;
            let okay = false;
            for (let i = 0; i < restaurant.tables.length; i++) {

                if (restaurant.tables[i].isclosed) {
                    continue;
                }

                const tableDate = new Date(restaurant.tables[i].date);
                tableDate.setHours(0, 0, 0, 0); // Set time to midnight to ensure consistent comparison
                const tableDateString = restaurant.tables[i].date;
                // const tableDateString = tableDate.toISOString().split("T")[0];
                if (tableDateString !== formo(selectedDate2) && selectedDate2 !== "All Dates") {
                    continue;
                }


                console.log("Date $ Meal", selectedDate2, selectedMeal2, restaurant.tables[i].date)

                if (selectedMeal2 === "Meal" || selectedMeal2 === "Breakfast") {
                    if (restaurant.tables[i].breakfast.accomodations && parseInt(restaurant.tables[i].breakfast.accomodations) > 0) {
                        okay = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
                else if (selectedMeal2 === "Meal" || selectedMeal2 === "Lunch") {
                    if (restaurant.tables[i].lunch.accomodations && parseInt(restaurant.tables[i].lunch.accomodations) > 0) {
                        // console.log("Here -> Date $ Meal",tableDateString,selectedDate,restaurant.name,parseInt(restaurant.tables[i].lunch.accomodations))
                        okay = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
                else if (selectedMeal2 === "Meal" || selectedMeal2 === "Dinner First Call") {
                    if (restaurant.tables[i].dinnerfirstcall.accomodations && parseInt(restaurant.tables[i].dinnerfirstcall.accomodations) > 0) {
                        okay = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
                else if (selectedMeal2 === "Meal" || selectedMeal2 === "Dinner Last Call") {
                    if (restaurant.tables[i].dinnerlastcall.accomodations && parseInt(restaurant.tables[i].dinnerlastcall.accomodations) > 0) {
                        okay = true;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }

            console.log("Testing...:", okay);
            return matchesCity && matchesRegion && okay && categoryMatch;
        });

        console.log("AAAAAAAAAAAAA", filteredData);

        setSelectedMeal3(selectedMeal2);
        setRestaurants(filteredData);
    }
    const fetchRestaurant = () => {
        console.log("Selected Date:", selectedDate2);
        console.log("Selected Region:", selectedRegion2);
        console.log("Selected City:", selectedCity2);
        console.log("Selected Meal:", selectedMeal2);
        const url = `http://localhost:4000/api/restaurant`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setGlobalRestaurants(data);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        filterRestaurants();
    }, [globalRestaurants])



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

            const formattedDate = `${day} ${date} ${month} ${year}`;

            datesArray.push(formattedDate);
        }
        setDates(datesArray);
    };

    const getMealTime = (table, meal) => {
        switch (meal) {
            case 'Meal':
                return table.breakfast && parseInt(table.breakfast.accomodations) > 0
                    ? table.breakfast.starts
                    : 'Time Unavailable';
            case 'Breakfast':
                return table.breakfast && parseInt(table.breakfast.accomodations) > 0
                    ? table.breakfast.starts
                    : 'Time Unavailable';
            case 'Lunch':
                return table.lunch && parseInt(table.lunch.accomodations) > 0
                    ? table.lunch.starts
                    : 'Time Unavailable';
            case 'Dinner First Call':
                return table.dinnerfirstcall && parseInt(table.dinnerfirstcall.accomodations) > 0
                    ? table.dinnerfirstcall.starts
                    : 'Time Unavailable';
            case 'Dinner Last Call':
                return table.dinnerlastcall && parseInt(table.dinnerlastcall.accomodations) > 0
                    ? table.dinnerlastcall.starts
                    : 'Time Unavailable';
            default:
                return 'Time Unavailable';
        }
    };

    useEffect(() => {
        generateDates();
        fetchCities();
        fetchRegions();
        fetchRestaurant();
    }, []);


    const handleDateClick = (date) => {
        setSelectedDate(date);
        setIsDateDropdownOpen(false);
    };

    const handleRegionClick = (region) => {
        setSelectedRegion(region.name);
        setIsRegionDropdownOpen(false);
    };

    const handleCityClick = (city) => {
        setSelectedCity(city.name);
        setIsCityDropdownOpen(false);
    };

    const handleMealClick = (meal) => {
        setSelectedMeal(meal);
        setIsMealDropdownOpen(false);
    };

    return (
        <div className="mb-20">
            <div
                className="hero h-full bg-center bg-cover object-cover bg-no-repeat lg:h-[60vh]"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}
            >
                <div className="bg-opacity-95"></div>

            </div>
            {/* Main Section */}
            <div className="lg:relative hidden lg:block text-white max-w-screen-2xl mx-auto lg:px-32">
                <div className="relative lg:absolute flex flex-col lg:flex-row items-center lg:justify-between top-[-450px] text-5xl text-red-600 custom-gap">
                    <div className="relative">
                        <div className="absolute left-[450px] transform -translate-x-1/2 lg:translate-x-0 w-96 h-48 bg-slate-200 rounded-lg shadow-lg"></div>
                        <div className="absolute left-[450px] transform -translate-x-1/2 lg:translate-x-0 w-96 h-48 bg-slate-50 rotate-3 rounded-lg shadow-lg"></div>
                        <div className="absolute left-[450px] transform -translate-x-1/2 lg:translate-x-0 w-96 z-10 px-6 pt-5 text-center rounded-lg">
                            <h2 className="text-blue-950 text-4xl mb-4 font-bold">
                                Restaurant Search
                            </h2>
                            <p className="text-black text-xl">
                                Book a reservation at {selectedCity2 === "Select a City" ? "any" : `${selectedCity2}`} restaurants and get 50% off
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
                        <div className="grid grid-flow-cols-1 bg-white items-center rounded gap-2 lg:grid-cols-5 text-black mt-72 ml-8">
                            <div className="dropdown bg-white border-r py-4 rounded lg:w-60">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                                    onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                                >
                                    <SlCalender /> {selectedDate2}
                                </div>
                                {isDateDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] shadow bg-base-100 w-3/4 lg:w-60 mt-10 overflow-y-auto max-h-40 text-left text-xl"
                                    >
                                        {dates.map((date, index) => (
                                            <li
                                                key={index}
                                                className="hover:bg-blue-900 hover:text-white cursor-pointer p-3"
                                                onClick={() => handleDateClick(date)}
                                            >
                                                <p>{date}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown bg-white border-r py-4 rounded lg:w-60">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                                    onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                                >
                                    <FaRegMap /> {selectedRegion2}
                                </div>
                                {isRegionDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left text-xl "
                                    >
                                        {regions.map((region, index) => (
                                            <li
                                                key={index}
                                                className="hover:bg-blue-900 cursor-pointer hover:text-white p-3"
                                                onClick={() => handleRegionClick(region)}
                                            >
                                                <p>{region.name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown bg-white border-r py-4 rounded lg:w-60">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                                >
                                    <PiCityLight /> {selectedCity2}
                                </div>
                                {isCityDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left text-xl"
                                    >
                                        {cities.map((city, index) => (
                                            <li
                                                key={index}
                                                className="hover:bg-blue-900 cursor-pointer hover:text-white p-3"
                                                onClick={() => handleCityClick(city)}
                                            >
                                                <p>{city.name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown bg-white border-r py-4 rounded">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                                    onClick={() => setIsMealDropdownOpen(!isMealDropdownOpen)}
                                >
                                    <IoMdRestaurant /> {selectedMeal2}
                                </div>
                                {isMealDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left text-xl"
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
                                            onClick={() => handleMealClick('Dinner First Call')}
                                        >
                                            <p>Dinner First Call</p>
                                        </li>
                                        <li
                                            className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white"
                                            onClick={() => handleMealClick('Dinner Last Call')}
                                        >
                                            <p>Dinner Last Call</p>
                                        </li>

                                    </ul>
                                )}
                            </div>
                            <div className="bg-red-400  flex justify-center items-center rounded ml-[-7px]">
                                <div className="py-4 flex justify-center">
                                    <button
                                        className="bg-red-400 px-10 py-4 text-white font-bold cursor-pointer text-lg"
                                        onClick={() => {
                                            filterRestaurants();
                                        }}
                                    >
                                        Find a table
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <form className="grid grid-flow-cols-1 bg-white items-center rounded gap-2 lg:grid-cols-5 text-black mt-72">
                            <div className="dropdown bg-white border-r py-4 rounded lg:w-[310px]">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                                    onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
                                >
                                    <SlCalender /> {selectedDate2}
                                </div>
                                {isDateDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] shadow bg-base-100 w-3/4 lg:w-[310px] mt-10 overflow-y-auto max-h-40 text-left text-lg"
                                    >
                                        {dates.map((date, index) => (
                                            <li
                                                key={index}
                                                className="hover:bg-blue-900 hover:text-white cursor-pointer p-3"
                                                onClick={() => handleDateClick(date)}
                                            >
                                                <p>{date}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown bg-white border-r py-4 rounded lg:w-[310px]">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                                    onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                                >
                                    <FaRegMap /> {selectedRegion2}
                                </div>
                                {isRegionDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left text-lg "
                                    >
                                        {regions.map((region, index) => (
                                            <li
                                                key={index}
                                                className="hover:bg-blue-900 cursor-pointer hover:text-white p-3"
                                                onClick={() => handleRegionClick(region)}
                                            >
                                                <p>{region.name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown bg-white border-r py-4 rounded lg:w-[310px]">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                                >
                                    <PiCityLight /> {selectedCity2}
                                </div>
                                {isCityDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left text-lg "
                                    >
                                        {cities.map((city, index) => (
                                            <li
                                                key={index}
                                                className="hover:bg-blue-900 cursor-pointer hover:text-white p-3"
                                                onClick={() => handleCityClick(city)}
                                            >
                                                <p>{city.name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="dropdown bg-white border-r py-4 rounded">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="m-1 flex items-center justify-center text-xl gap-4 select focus:outline-none border-none"
                                    onClick={() => setIsMealDropdownOpen(!isMealDropdownOpen)}
                                >
                                    <IoMdRestaurant /> {selectedMeal2}
                                </div>
                                {isMealDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[1] shadow bg-base-100 w-60 mt-10 overflow-y-auto max-h-40 text-left text-lg "
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
                                            onClick={() => handleMealClick('Dinner First Call')}
                                        >
                                            <p>Dinner First Call</p>
                                        </li>
                                        <li
                                            className="cursor-pointer p-3 hover:bg-blue-900 hover:text-white"
                                            onClick={() => handleMealClick('Dinner Last Call')}
                                        >
                                            <p>Dinner Last Call</p>
                                        </li>

                                    </ul>
                                )}
                            </div>
                            <div className="  border-r  rounded">
                                <div className=" bg-red-400 rounded-md text-center h-[100px] text-white  font-semibold hover:bg-red-500">
                                    <button className='w-full' onClick={() => {
                                        filterRestaurants();
                                    }}>Search</button>
                                </div>
                            </div>
                        </form> */}
                        {/* <div className="mt-2 bg-red-400 rounded-md text-center text-white py-1 font-semibold hover:bg-red-500">
                            <button className='w-full' onClick={() => {
                                filterRestaurants();
                            }}>Search</button>
                        </div> */}

                    </div>
                </div>
            </div>

            {/* DropDown section */}

            {/* Banner End */}
            {/* Calender section */}
            <div className="flex flex-col lg:flex-row mt-20 justify-between custom-screen max-w-screen-2xl mx-auto">
                <div className="mr-3">
                    {restaurants.map((restaurant) => (
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
                                            {restaurant?.city}
                                        </p>
                                    </span>
                                    <span className="pl-5">
                                        <span>{restaurant?.category[0]}, </span>
                                        <span>{restaurant?.category[1]}</span>
                                    </span>
                                </p>
                                <p className="flex gap-2 items-center text-2xl">
                                    <span className="flex">
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                        <FaStar className="text-yellow-400" />
                                    </span>
                                    {restaurant.reviews.length} reviews
                                </p>
                                <div id="dates" className="flex text-center flex-wrap">
                                    {dates.map((date, index) => {
                                        const table = restaurant.tables.find(t => t.date === date);
                                        const hasTableForDate = table !== undefined;

                                        const mealTime = hasTableForDate ? getMealTime(table, selectedMeal3) : 'Time Unavailable';
                                        const isMealAvailable = mealTime !== 'Time Unavailable';

                                        return (
                                            <div
                                                key={index}
                                                className={`px-3 lg:px-3 py-2 border-r w-[100px] ${isMealAvailable ? 'bg-blue-900 hover:bg-blue-950 text-white relative' : 'bg-slate-400'
                                                    }`}
                                            >
                                                <p className="my-2">{date.slice(0, 3)}</p><hr />
                                                <p className="mt-3">{date.slice(4, 10)}</p>
                                                {isMealAvailable && (
                                                    <>
                                                        <p className="mb-3">{mealTime}</p>
                                                        <span className="absolute w-16 -bottom-3 left-[18px] bg-orange-600 p-1 text-sm">
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
                    {/* <button className="bg-red-400 text-3xl text-white rounded-lg px-4 py-2 mb-6 " onClick={() => {
                        setSelectedCategory("");
                        setSelectedDate("All Dates");
                        setSelectedMeal("Meal");
                        setSelectedCity("Select a City");
                        setSelectedRegion("Select a Region");
                        setRestaurants(globalRestaurants)
                        console.log("Here")
                    }}>Reset Filters</button> */}
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
export default FindTable;
