import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className=" space-y-6 grid grid-cols-1 text-center  lg:grid-cols-3 gap-4 items-center  p-10 bg-[#234563] text-neutral-content">
        {/* Services */}
        <nav>
          <div>
            <h3 className="text-white text-3xl">Dinners</h3>
            <p className="text-xl text-slate-300 my-4">
              Join more than 1,400,000 diners who already &#x2764; First Table.
            </p>
            <button className=" bg-slate-600 p-4 text-white">Learn More</button>
          </div>
        </nav>

        {/* Company */}
        <nav>
          <div>
            <h3 className="text-white text-3xl">Restaurateurs</h3>
            <p className="text-xl text-slate-300 my-4">
              Join more than 1,400,000 diners who already &#x2764; First Table.
            </p>
            <button className=" bg-slate-600 p-4 text-white">Learn More</button>
          </div>
        </nav>

        {/* Legal */}
        <nav>
          <div>
            <h3 className="text-white text-3xl">Follow us</h3>
            <p className="text-xl text-slate-300 my-4">
              Join more than 1,400,000 diners who already &#x2764; First Table.
            </p>
            <div className="flex justify-center  items-center gap-3">
              <Link className="bg-slate-600 rounded-full p-4 text-white">
                <span>
                  <FaFacebookF />
                </span>
              </Link>
              <Link className="bg-slate-600  rounded-full  p-4 text-white">
                <span>
                  <FaInstagram />
                </span>
              </Link>
            </div>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title">About Us</h6>
          <ul className="footer-list space-y-2">
            <li>
              <Link to="/about-us" className="link link-hover">
                About us
              </Link>
            </li>
            <li>
              <Link to="/our-story" className="link link-hover">
                Our story
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="link link-hover">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="link link-hover">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="link link-hover">
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        {/* Restaurateurs */}
        <nav>
          <h6 className="footer-title">Restaurateurs</h6>
          <ul className="footer-list space-y-2">
            <li>
              <Link to="/how-it-works" className="link link-hover">
                How it works
              </Link>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>

        {/* Our Community */}
        <nav>
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
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
