import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div className="w-11/12 lg:w-3/4 mx-auto">
            <div className="grid grid-cols-4 gap-8">
                <ul className="flex flex-col gap-5 font-semibold cursor-pointer">
                    {/* Close button */}
                    {/* Sidebar navigation items */}
                    <li className="w-full border-b pb-2">
                        <NavLink
                            to="/profile/mybookings"
                            className=""
                        >
                            My Bookings
                        </NavLink>
                    </li>
                    <li className="w-full border-b pb-2">
                        <NavLink
                            to="/profile/update"
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li className="w-full border-b pb-2">
                        <NavLink
                            to="/dashboard/admin/restaurants"
                        >
                            Account Balance
                        </NavLink>
                    </li>
                    <li className="w-full border-b pb-2">
                        <NavLink
                            to="/dashboard/admin/users"
                        >
                            Payment Cards
                        </NavLink>
                    </li>
                    <li className="w-full border-b pb-2">
                        <NavLink
                            to="/dashboard/admin/users"
                        >
                            Subscriptions
                        </NavLink>
                    </li>
                    <li className="w-full border-b pb-2">
                        <NavLink
                            to="/dashboard/admin/users"
                        >
                            Promo Code
                        </NavLink>
                    </li>
                    {/* Divider and back to home link */}
                </ul>
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