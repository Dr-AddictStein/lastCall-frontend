import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaCity, FaSubway } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosRestaurant } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { FaArrowLeftLong } from "react-icons/fa6";

function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={`flex ${drawerOpen ? "drawer-open" : "drawer-closed"}`}>
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={toggleDrawer}
        />
        <div className="drawer-content flex gap-1 bg-[#3749a6]">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost text-2xl text-black  drawer-button">
            <CiMenuBurger />
          </label>
          <div className="content-area px-4 ml-3 text-white bg-black min-h-screen w-full">
            <Outlet />
          </div>
        </div>

        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-[#3749a6] text-white text-xl">
            <label className="flex justify-end">
              <ImCross
                className="mb-4 text-red-600 cursor-pointer"
                onClick={toggleDrawer}
              />
            </label>
            {/* Sidebar content here */}
            <li>
              <NavLink
                to="/dashboard/regions"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <FaSubway className="text-xl" /> Regions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/cities"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <FaCity className="text-xl" /> Cities
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/restaurants"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <IoIosRestaurant className="text-xl" /> Restaurants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/users"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <LuUsers className="text-xl" /> Users
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <Link to={"/"}>
                {" "}
                <FaArrowLeftLong />
                Back to home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
