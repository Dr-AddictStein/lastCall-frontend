import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#234563]">
      <footer className="space-y-6 grid grid-cols-1 lg:grid-cols-2 text-center w-1/2 mx-auto items-start p-10  text-neutral-content">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <ul className="footer-list space-y-2">
            <li>
              <Link to="/faq" className="link link-hover">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contactUs" className="link link-hover">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/suggestRestaurant" className="link link-hover">
                Suggest a Restaurant
              </Link>
            </li>
            <li>
              <Link to={"/privacyPolicy"} className="link link-hover">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/CancellationPolicy" className="link link-hover">
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Restaurateurs */}
        <nav className="no-margin">
          <h6 className="footer-title">Restaurateurs</h6>
          <ul className="footer-list space-y-2">
            <li>
              <Link to="/restaurants" className="link link-hover">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/restaurantRegister" className="link link-hover">
                Signup
              </Link>
            </li>
            {/* <li>
              <Link to="/request-info" className="link link-hover">
                Request info
              </Link>
            </li>
            <li>
              <Link to="/integrations" className="link link-hover">
                Integrations
              </Link>
            </li>
            <li>
              <Link to="/first-table-bites" className="link link-hover">
                First Table Bites
              </Link>
            </li>
            <li>
              <Link to="/partnerships" className="link link-hover">
                Partnerships
              </Link>
            </li>
            <li>
              <Link to="/collaborations" className="link link-hover">
                Collaborations
              </Link>
            </li>
            <li>
              <Link to="/ambassador-programme" className="link link-hover">
                Ambassador Programme
              </Link>
            </li>
            <li>
              <Link to="/media-centre" className="link link-hover">
                Media Centre
              </Link>
            </li> */}
          </ul>
        </nav>

        {/* Our Community */}
        {/* <nav>
          <h6 className="footer-title">Our Community</h6>
          <ul className="footer-list space-y-2">
            <li>
              <Link to="/our-community" className="link link-hover">
                Our community
              </Link>
            </li>
            <li>
              <Link to="/gift-vouchers" className="link link-hover">
                Gift vouchers
              </Link>
            </li>
            <li>
              <Link to="/corporate-gift-vouchers" className="link link-hover">
                Corporate gift vouchers
              </Link>
            </li>
            <li>
              <Link to="/competitions" className="link link-hover">
                Competitions
              </Link>
            </li>
            <li>
              <Link to="/magazine" className="link link-hover">
                Magazine
              </Link>
            </li>
            <li>
              <Link to="/sign-up-for-free" className="link link-hover">
                Sign up for free
              </Link>
            </li>
            <li>
              <Link to="/suggest-a-restaurant" className="link link-hover">
                Suggest a restaurant
              </Link>
            </li>
          </ul>
        </nav> */}
      </footer>
      <p className="text-slate-200 text-center pb-5">
        Need help? hello@lastcall.co
      </p>
    </div>
  );
}

export default Footer;
