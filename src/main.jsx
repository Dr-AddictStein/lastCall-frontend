import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async'
import "@fontsource/bodoni-moda"; // Defaults to weight 400
import "@fontsource/bodoni-moda/400.css"; // Specify weight
import "@fontsource/bodoni-moda/400-italic.css"; // Specify weight and style;
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PjrgT2MktoZh11iDeUPLnJgTjL6X2KqOWkLL2Tvk7XBd6C7ZNey2mYIYeZqJ1ZF9CDeug1zagRSv9fIWZONzrmc00QWRtMK3C');



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <div className="rounded-lg">
        <HelmetProvider>
          <Elements stripe={stripePromise}>
            <RouterProvider router={router} />
          </Elements>
        </HelmetProvider>
      </div>
    </AuthContextProvider>
  </React.StrictMode>
);
