import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/Banner/banner.jpg'
import { SlCalender } from 'react-icons/sl';
function ForRestaurants() {
  const today = new Date();
  console.log(today)
  return (
    <div className="rounded">
      <div
        className="hero min-h-screen rounded-lg relative"
        style={{
          backgroundImage: ` url(${bannerImg})`,
          backgroundSize: "cover", // Ensure the image covers the entire area
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute inset-0 bg-black opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <p className="mb-5 font-bold text-7xl">
              Drive revenue using your empty tables
            </p>
            <p>
              First Table turns restaurants' hardest-to-fill tables into a
              marketing asset that increases profitability and grows their
              business.
            </p>
            <div className="mt-6">
              <button className="bg-[#FF756B] p-4 text-white font-bold">
                Sign Up for free
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-8  lg:mx-80">
        <h2 className="text-6xl text-blue-950 font-bold my-4">How it works</h2>
        <p className='text-2xl'> 
          First Table is a restaurant discovery platform that incentivises
          diners to book tables at restaurants during off-peak hours. <br /> Our
          unique model charges diners, not restaurants, making it completely
          free to list your restaurant on our website. All you need to do is
          make the First Table offer available for a minimum of one table per
          night on your quiet days. <br /> Over 1,800 restaurants have found
          success marketing their empty tables and increasing profitability with
          First Table. Our proven formula guarantees that your restaurant will
          too.
        </p>
        <div className="divider mt-5"></div>
      </div>
    </div>
  );
}
export default ForRestaurants