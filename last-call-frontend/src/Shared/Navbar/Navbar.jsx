import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import lastCallImg from '../../assets/images/Navbar/logo.png'

function Navbar() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      setIsScrollingUp(false);
    } else {
      // Scrolling up
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
    </>
  );

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isScrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="navbar text-white w-full ">
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
            {/* <a className="btn btn-ghost text-xl">Last Call</a> */}
           <a href="" className="btn"> Lastcall</a>
            <label className="input input-bordered flex items-center gap-2 ml-3">
              <input type="text" className="" placeholder="Search" />
              <CiSearch />
            </label>
          </div>
          <div className="navbar-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="select"
                className="select bg-transparent flex items-center text-white m-1"
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
                <Link to={"/signup"}>Sign Up</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
            <Link to={"/restaurants"}>
              <button className="btn btn-outline bg-white text-black">
                For Restaurent
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
