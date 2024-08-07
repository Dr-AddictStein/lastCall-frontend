import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../Pages/Home/Home/Home";
import Faq from "../Pages/Home/FAQ/Faq";
import OurStory from "../Pages/Home/OurStory/OurStory";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Restaurants from "../Pages/AdminDashboard/Restaurants/Restaurants";
import Regions from "../Pages/AdminDashboard/Regions/Regions";
import Cities from "../Pages/AdminDashboard/Cities/Cities";
import Users from "../Pages/AdminDashboard/Users/Users";

import ForRestaurants from "../Pages/Home/ForRestaurants/ForRestaurants";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import NewCastle from "../Pages/NewCastle/NewCastle";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile/UpdateProfile";
import RestaurantBuilder from "../Pages/Dashboard/RestaurantBuilder/RestaurantBuilder";
import ViewReservations from "../Pages/Dashboard/ViewReservations/ViewReservations";
import AddTable from "../Pages/Dashboard/AddTable/AddTable";
import ViewEmployees from "../Pages/Dashboard/ViewEmployees/ViewEmployees";
import RestaurantRegister from "../Pages/RestaurantRegister/RestaurantRegister";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "../Pages/CancellationPolicy/CancellationPolicy";
import ContactUs from "../Pages/ContactUs/ContactUs";
import SuggestRestaurant from "../Pages/SuggestRestaurant/SuggestRestaurant";
import Booking from "../Pages/Booking/Booking";
import FindTable from "../Pages/FindTable/FindTable";
import RestaurantBuilderForAdmin from "../Pages/Dashboard/RestaurantBuilder/RestaurantBuilderForAdmin";
import AddTableForAdmin from "../Pages/Dashboard/AddTable/AddTableForAdmin";
import ViewReservationsForAdmin from "../Pages/Dashboard/ViewReservations/ViewReservationsForAdmin";
import DashboardRA from "../Pages/AdminDashboard/DashboardRA";
import ViewEmployeesForAdmin from "../Pages/Dashboard/ViewEmployees/ViewEmployeesForAdmin";
import PastBookings from "../Pages/Profile/MyBookings/PastBookings";
import UpcomingBookings from "../Pages/Profile/MyBookings/UpcomingBookings";
import ReviewPosting from "../Pages/ReviewPosting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/ourStory",
        element: <OurStory></OurStory>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/privacyPolicy',
        element: <PrivacyPolicy />
      },
      {
        path: '/CancellationPolicy',
        element: <CancellationPolicy />
      },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '/suggestRestaurant',
        element: <SuggestRestaurant />
      },
      {
        path: '/reviewPosting/:id',
        element: <ReviewPosting />
      },
      {
        path: "/restaurants",
        element: <ForRestaurants></ForRestaurants>,
      },
      {
        path: "/restaurantRegister",
        element: <RestaurantRegister />
      },
      {
        path: "/booking",
        element: <Booking />
      },
      {
        path: "/:city",
        element: <NewCastle></NewCastle>
      },
      {
        path: "/findTable",
        element: <FindTable />
      },
      {
        path: 'foodDetails/:id',
        element: <FoodDetails />
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile/pastbookings",
            element: <PastBookings />,
          },
          {
            path: "/profile/upcomingbookings",
            element: <UpcomingBookings />,
          },
          {
            path: "/profile/update",
            element: <UpdateProfile />
          }
        ],
      },
    ],
  },
  // Dashboard pages routes
  {
    path: "/dashboard/restaurant",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/restaurant/restaurantBuilder",
        element: <RestaurantBuilder />
      },
      {
        path: "/dashboard/restaurant/viewReservations",
        element: <ViewReservations />
      },
      {
        path: "/dashboard/restaurant/addTable",
        element: <AddTable />
      },
      {
        path: "/dashboard/restaurant/viewEmployees",
        element: <ViewEmployees />
      },
    ]
  },
  
  //admin dashboard
  {
    path: "/dashboard/admin",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/dashboard/admin/restaurants",
        element: <Restaurants></Restaurants>,
      },
      {
        path: "/dashboard/admin/regions",
        element: <Regions></Regions>,
      },
      {
        path: "/dashboard/admin/cities",
        element: <Cities></Cities>,
      },
      {
        path: "/dashboard/admin/users",
        element: <Users></Users>,
      },
    ],
  },

  // Dashboard pages of Restaurants for Admin routes
  {
    path: "/dashboard/adminRestaurant",
    element: <DashboardRA></DashboardRA>,
    children: [
      {
        path: "/dashboard/adminRestaurant/restaurantBuilder/:id",
        element: <RestaurantBuilderForAdmin />
      },
      {
        path: "/dashboard/adminRestaurant/viewReservations/:id",
        element: <ViewReservationsForAdmin />
      },
      {
        path: "/dashboard/adminRestaurant/addTable/:id",
        element: <AddTableForAdmin />
      },
      {
        path: "/dashboard/adminRestaurant/viewEmployees/:id",
        element: <ViewEmployeesForAdmin />
      },
    ]
  },
]);
