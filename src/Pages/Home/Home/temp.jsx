import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const temp = () => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div>
            <div className="btn-transition">
                <button
                  className={`transition duration-150 btn mx-auto border-none rounded-full text-white mt-6 flex items-center py-1 justify-center ${isHover ? "btn-hovered" : "btn-not-hovered"}`}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  <span className={`${!isHover && 'hidden'}`}>Learn More</span> <FaArrowRight />
                </button>
              </div>
        </div>
    );
};

export default temp;