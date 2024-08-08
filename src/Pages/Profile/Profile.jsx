import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div className="w-11/12 lg:w-3/4 mx-auto">
            <div className="grid grid-cols-4 gap-8">
                <div>
                    <ul className="flex flex-col justify-center h-[30vh] gap-5 font-semibold cursor-pointer">
                        {/* Close button */}
                        {/* Sidebar navigation items */}
                        <li className="w-full border-b pb-2">
                            <NavLink
                                to="/profile/update"
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li className="w-full border-b pb-2">
                            <NavLink
                                to="/profile/pastbookings"
                                className=""
                            >
                                Past Reservations
                            </NavLink>
                        </li>
                        <li className="w-full border-b pb-2">
                            <NavLink
                                to="/profile/upcomingbookings"
                                className=""
                            >
                                Upcoming Reservations
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div
                    className={`content-area px-4 min-h-screen w-full col-span-3`}
                >
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Profile;