import React from "react";
import bgImg from "../../../assets/images/SignUp/bg01.jpg";
import { FaApple, FaArrowLeft, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./SignUp.css";
import { Helmet } from "react-helmet-async";

function SignUp() {
    return (
      <div className="flex flex-col lg:flex-row ml-4">
        <Helmet>
          <title>SignUp</title>
        </Helmet>
        <div className="lg:w-1/2 my-6">
          <p className="text-blue-900 mb-4 font-bold mt-8">
            <Link to={"/"} className="flex gap-3 items-center">
              <FaArrowLeft /> Back to home
            </Link>
          </p>
          {/* Other content */}
          <div className="text-center mx-auto">
            <form className="join signup-btn">
              <input
                className="input input-bordered focus:outline-none join-item"
                placeholder="Email"
              />
              <button className=" btn btn-join join-item">Next</button>
            </form>

            <div className="divider"></div>

            <div className="flex flex-col justify-center items-center w-full">
              <p>
                <button className="btn signup-btn btn-facebook">
                  <FaFacebook className="text-xl mr-2" /> Continue with Facebook
                </button>
              </p>
              <p>
                <button className="btn signup-btn btn-google">
                  <FcGoogle className="text-xl mr-2" /> Continue with Google
                </button>
              </p>
              <p>
                <button className="btn signup-btn btn-apple">
                  <FaApple className="text-xl mr-2" /> Continue with Apple
                </button>
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          {/* Content with background image */}
          <div className="lg:mx-20 mx-4  text-white">
            <h2 className="text-6xl  text-center my-8 mt-20">
              There’s never <br /> been a better <br /> time to tuck in
            </h2>
            <p>
              Book a First Table at our partner restaurants and get 50% off the
              food bill for two to four people. Talk about the early bird
              catches the worm!
            </p>
            <p className="mt-7">
              © First Table Limited 2024 <a href="">Privacy and Terms</a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default SignUp;
