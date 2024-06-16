import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from "../../../assets/images/Banner/melbourne2.jpg";
import { Link } from "react-router-dom";

function PopularHotels() {
  return (
    <div className="mt-4 mb-20 px-4 lg:px-20 ">
      <div>
        <p className="text-2xl font-bold my-4">Hotels loved by guests</p>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="card bg-base-100 shadow-xl group">
            <figure className="px-4 pt-10 relative overflow-hidden">
              <img
                src={img1}
                alt="Shoes"
                className="rounded-xl w-full h-full obj  transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
            </figure>
            <div className="card-body">
              <p className="font-semibold">Shoho Hotel London</p>
              <p>London</p>
              <p className="font-bold">$130/Night</p>
              <div className=" flex justify-end">
                <Link to="#">
                  <button className=" ">
                    <MdKeyboardArrowRight className="text-2xl" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularHotels;
