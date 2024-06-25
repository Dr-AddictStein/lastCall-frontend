import { BiSolidOffer } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { PiCalendarStarFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function OfferSection() {
  return (
    <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-20 lg:px-40 gap-10 mb-20 mt-10 ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-7xl text-blue-900 ">
          <FaMapLocation />
        </p>

        <h2 className="my-5 font-bold text-2xl">Find a restaurant</h2>
        <p className="text-center text-xl">
          Find a new restaurant to try from over 1,800 <br /> restaurants
          globally
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-7xl text-blue-900 text-center">
          <PiCalendarStarFill />
        </p>
        <h2 className="my-5 font-bold text-2xl">Select your date and time</h2>
        <p className="text-center text-xl">
          Get in quick to score the ‘first table’ of <br /> breakfast, lunch or
          dinner
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-7xl text-blue-900 text-center">
          <BiSolidOffer />
        </p>
        <h2 className="my-5 font-bold text-2xl">Book a First Table</h2>
        <p className="text-center text-xl">
          Book a First Table for $10 and get 50% off the <br /> food bill for
          two, three or four people
        </p>
      </div>
    </div>
  );
}
export default OfferSection