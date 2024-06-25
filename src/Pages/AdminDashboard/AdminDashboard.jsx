import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaCity, FaSubway, FaArrowLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosRestaurant } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Helmet } from "react-helmet-async";

const AdminDashboard = () => {
    const [drawerOpen, setDrawerOpen] = useState(true);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className="">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="drawer">
                {/* Drawer toggle input */}
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={drawerOpen}
                    onChange={toggleDrawer}
                />
                <div className="drawer-content flex gap-1 ">
                    {/* Hamburger menu icon */}
                    {/* <label
            htmlFor="my-drawer"
            className={`ml-8 mt-4 text-4xl fixed text-white w-10 flex justify-start z-10 ${
              drawerOpen ? "hidden" : ""
            }`}
          >
            <CiMenuBurger />
          </label> */}
                    {/* Main content area */}
                    <div
                        className={`content-area px-4 text-white bg-[#1B2431] min-h-screen w-full `}
                    >
                        <Outlet />
                    </div>
                </div>

                {/* Side drawer */}
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>

                    <ul className="menu p-4 w-80 min-h-full bg-[#3749a6] text-white text-xl px-16 space-y-3 ">
                        {/* Close button */}
                        <label className="flex justify-end">
                            <ImCross
                                className="mb-4 text-white cursor-pointer"
                                onClick={toggleDrawer}
                            />
                        </label>
                        {/* Sidebar navigation items */}
                        <li>
                            <NavLink
                                to="/dashboard/admin/regions"
                                className=" w-full"
                            >
                                <FaSubway className="text-xl mr-2" /> Regions
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/admin/cities"
                                className=" w-full"
                            >
                                <FaCity className="text-xl mr-2" /> Cities
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/admin/restaurants"
                                className=" w-full"
                            >
                                <IoIosRestaurant className="text-xl mr-2" /> Restaurants
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/admin/users"
                                className=" w-full"
                            >
                                <LuUsers className="text-xl mr-2" /> Users
                            </NavLink>
                        </li>
                        {/* Divider and back to home link */}
                        <div className="divider"></div>
                        <li>
                            <Link to={"/"} className=" w-full">
                                <FaArrowLeft className="text-xl mr-2" />
                                Back to home
                            </Link>
                        </li>
                    </ul>
                </div>
                {!drawerOpen && (
                    <div>
                        <ul className="menu p-2 text-center space-y-3  min-h-full bg-[#3749a6] text-white text-xl ">
                            <label
                                htmlFor="my-drawer"
                                className={` text-4xl  text-white  text-center pl-2 mb-3 `}
                            >
                                <CiMenuBurger />
                            </label>

                            <li>
                                <NavLink
                                    to="/dashboard/admin/regions"
                                    className="flex justify-center text-center w-full"
                                >
                                    <FaSubway className="text-xl mr-2" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/admin/cities"
                                    className="flex justify-center text-center w-full"
                                >
                                    <FaCity className="text-xl mr-2" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/admin/restaurants"
                                    className="flex justify-center text-center w-full"
                                >
                                    <IoIosRestaurant className="text-xl mr-2" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/admin/users"
                                    className="flex justify-center text-center w-full"
                                >
                                    <LuUsers className="text-xl mr-2" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;