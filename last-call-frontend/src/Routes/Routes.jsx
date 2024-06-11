import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../Pages/Home/Home/Home";
import Faq from "../Pages/Home/FAQ/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
          },
          {
            path: '/faq',
            element: <Faq></Faq>
          }
    ]
  },
]);
