import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaCity, FaSubway } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosRestaurant } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
     const [drawerOpen, setDrawerOpen] = useState(false);
     const toggleDrawer = () => {
       setDrawerOpen(!drawerOpen);
     };
  return (
    <div className="mx-2 flex">
      <div className="drawer ">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={toggleDrawer}
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn  drawer-button">
            <CiMenuBurger />
          </label>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-xl text-base-content">
            <label className="flex  justify-end">
              <ImCross className="mb-4 text-red-600 cursor-pointer" onClick={toggleDrawer} />
            </label>
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/regions">
                {" "}
                <FaSubway className="text-xl" /> Regions
              </Link>
            </li>
            <li>
              <Link to="/dashboard/cities">
                <FaCity className="text-xl" />
                Cities
              </Link>
            </li>
            <li>
              <Link to="/dashboard/restaurants">
                <IoIosRestaurant className="text-xl" />
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users">
                <LuUsers className="text-xl" />
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default Dashboard