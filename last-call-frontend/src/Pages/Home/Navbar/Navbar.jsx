import { CiSearch } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import lastCallImg from '../../../assets/images/Navbar/lastcall.png'

function Navbar() {
  const Navlinks = (
    <>
      <>
       
        <li>
          <Link to={'/faq'}>FAQs</Link>
        </li>
        <li>
          <Link>Our Story</Link>
        </li>
        <li>
          <Link>Sign Up</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
      </>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Last Call</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <li className="mr-6">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <CiSearch />
              </label>
            </li>
            
            {Navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link>
            <button className="btn btn-outline bg-white text-black">
              {" "}
              For Restaurent
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
