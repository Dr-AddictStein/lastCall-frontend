import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import lastCallImg from "../../assets/images/Navbar/lastcall.png";

function Navbar() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
  ]);
  const [isFocused, setIsFocused] = useState(false);

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
      <li>
        <Link to={"/signup"}>Sign Up</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
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
  const isNewCastlePage = location.pathname === "/newCastle" || location.pathname=== '/faq';

  return (
    <div className="relative">
      <div
        className={`${
          isHomePage
            ? "fixed"
            : isNewCastlePage 
            ? "sticky text-black"
            : "sticky"
        } top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isScrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`navbar w-full ${
            isNewCastlePage ? "text-black" : "text-white"
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
              {/* <img src={lastCallImg} alt="Last Call Logo" className="h-16" /> */}
              <p className="flex  gap-1 lg:text-3xl cursor-pointer">
                {" "}
                <span className="font-bold">Last</span> <span>Call</span>
              </p>
            </Link>
            <div className="relative">
              <label
                className={`flex items-center gap-2 ml-3 rounded-full p-3 ${
                  isFocused ? "bg-white text-black" : "bg-transparent"
                }`}
              >
                <CiSearch
                  className={`${
                    isFocused
                      ? "text-black"
                      : isNewCastlePage
                      ? "text-black"
                      : "text-white"
                  }`}
                />
                <input
                  type="text"
                  className={`border-none outline-none bg-transparent rounded-full ${
                    isFocused
                      ? "placeholder-black text-black"
                      : isNewCastlePage
                      ? "placeholder-black text-black"
                      : "placeholder-white text-white"
                  }`}
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onFocus={() => {
                    setIsFocused(true);
                    setDropdownVisible(searchTerm.length > 0);
                  }}
                  onBlur={() => {
                    setIsFocused(false);
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
                <li className="hover:bg-slate-200 py-2 px-4 bg-blue-900 text-white">
                  <a>China</a>
                </li>
                <li className="hover:bg-slate-200 py-2 px-4">
                  <a>Bangladesh</a>
                </li>
                <li className="hover:bg-slate-200 py-2 px-4">
                  <a>Thailand</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-3">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
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
