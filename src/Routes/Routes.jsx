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
import FreeSignUp from "../Pages/Home/FreeSignUp/FreeSignUp";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import NewCastle from "../Pages/NewCastle/NewCastle";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard";
import Profile from "../Pages/Profile/Profile";
import MyBookings from "../Pages/Profile/MyBookings/MyBookings";
import UpdateProfile from "../Pages/Profile/UpdateProfile/UpdateProfile";
import RestaurantBuilder from "../Pages/Dashboard/RestaurantBuilder/RestaurantBuilder";
import ViewReservations from "../Pages/Dashboard/ViewReservations/ViewReservations";
import AddTable from "../Pages/Dashboard/AddTable/AddTable";
import ViewEmployees from "../Pages/Dashboard/ViewEmployees/ViewEmployees";

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
        path: "/restaurants",
        element: <ForRestaurants></ForRestaurants>,
      },
      {
        path: "/freesignup",
        element: <FreeSignUp></FreeSignUp>
      },
      {
        path: "/:city",
        element: <NewCastle></NewCastle>
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile/mybookings",
            element: <MyBookings />,
          },
          {
            path: "/profile/update",
            element: <UpdateProfile />
          }
        ],
      },
      {
        path: 'foodDetails/:id',
        element: <FoodDetails />
      }
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
]);
