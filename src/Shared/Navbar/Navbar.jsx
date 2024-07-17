import React, { useState, useEffect, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import lastCallImg from "../../assets/images/Navbar/lastcall.png";
import { AuthContext } from "../../context/AuthContext";
import { useLogout } from "../../hooks/useLogout";

function Navbar() {
  const { logout } = useLogout();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [cities, setCities] = useState([]);
  const [suggestions, setSuggestions] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
  ]);

  useEffect(() => {
    const url = `http://localhost:4000/api/city`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCities(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setIsScrollingUp(false);
    } else {
      setIsScrollingUp(true);
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setDropdownVisible(value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setDropdownVisible(false);
  };

  const Navlinks = (
    <>
      {!user ?
        <li className="flex flex-row">
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </li> :
        <div className="avatar">
          <div className="w-12">
            <img src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
          </div>
        </div>}

      <li>
        <Link to={""}>Cities</Link>
      </li>
      <li>
        <Link to={"/restaurants"}>For Restaurants</Link>
      </li>
    </>
  );

  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === '/restaurants';
  const isNewCastlePage = location.pathname === "/newcastle" || location.pathname === '/faq';

  return (
    <div className="relative">
      <div
        className={`${isHomePage ? "fixed" : isNewCastlePage ? "sticky text-black" : "sticky"} top-0 left-0 right-0 z-50 transition-transform duration-300 ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`navbar w-full ${isHomePage ? "text-white" : "text-black"
            }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {Navlinks}
              </ul>
            </div>
            <Link to="/">
              <img src="/logo.png" alt="Last Call Logo" className="w-60" />
            </Link>
            <div className="relative">
              <label
                className={`flex items-center gap-2 ml-3 rounded-full p-3 ${isHomePage ? "bg-transparent" : "bg-white text-black"
                  }`}
              >
                <CiSearch
                  className={`${isHomePage ? 'text-white' : 'text-black'}`}
                />
                <input
                  type="text"
                  className={`border-none outline-none bg-transparent rounded-full ${isHomePage ? "placeholder-white text-white" : "placeholder-black text-black"}`}
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onFocus={() => {
                    setDropdownVisible(searchTerm.length > 0);
                  }}
                  onBlur={() => {
                    setTimeout(() => setDropdownVisible(false), 100);
                  }}
                />
              </label>
              {dropdownVisible && (
                <ul className="absolute top-full left-0 w-full bg-white text-black border border-gray-200 mt-1 z-10 rounded-md">
                  {suggestions
                    .filter((suggestion) =>
                      suggestion
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((suggestion) => (
                      <li
                        key={suggestion}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                        onMouseDown={() => handleSuggestionClick(suggestion)}
                      >
                        {suggestion}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
          <div className="navbar-center hidden lg:block">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="select"
                className="select bg-transparent flex items-center m-1"
              >
                Cities
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] text-black shadow bg-base-100 rounded w-52 overflow-y-auto"
              >
                {
                  cities.map(city => <li className="py-2 px-4 hover:bg-blue-900 hover:text-white" key={city.key}>
                    <Link>{city?.name}</Link>
                  </li>)
                }
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-3">
              {!user ?
                <li className="flex flex-row">
                  <li>
                    <Link to={"/signup"}>Sign Up</Link>
                  </li>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                </li> :
                <div className="flex gap-3 items-center mr-5">
                  <button className="mx-2 px-3 bg-transparent py-3 rounded-3xl text-base font-semibold hover:bg-slate-200 hover:text-black" onClick={logout}>Logout</button>
                  <Link to={'/profile/update'} className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={user.user.image} />
                    </div>
                  </Link>
                </div>}
            </ul>
            <Link to="/restaurants" className="hidden lg:block">
              <button className="btn btn-outline rounded-full bg-white text-black">
                For Restaurant
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
