import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/Banner/banner.jpg'
function ForRestaurants() {
  const today = new Date();
  console.log(today)
  const itemsHeading = [
    "Bringing you new customers.",
    "Selling tables you wouldn’t otherwise.",
    "Maximising revenue for your restaurant.",
    "Creating atmosphere during quiet times.",
    "Never charging you a penny.",
    "Building your database for remarketing.",
    "Generating rave reviews.",
    "Doing your marketing for you, for free.",
    "Seamlessly integrating with your booking system.",
  ];
  const itemsDesk = [
    "Over 1,400,000 diners use First Table to try new and exciting restaurants each month. Our stats show 75% of subscribers are dining at our partner restaurants for the first time. Show them a wonderful time and they’ll tell their friends and return again.",
    "You have full control over the days and times you offer your ‘first tables’ - meaning your VIP function, busy weekends or special dates can be blocked out if you’re fully booked or closed.",
    "With the majority of diners visiting during peak-times, First Table is a unique solution to help ensure that you are generating the maximum amount of revenue throughout your shift.",
    "A crowd attracts a crowd! A customer eating in your restaurant is an endorsement and social proof that your restaurant is worth dining at. Customers also create atmosphere, making other diners more likely to stay at your establishment for longer (and order that second cocktail).",
    "First Table is free and easy! No commission, sign-up fees or minimum period. Apart from offering an early bird special on food (drinks are always full price), there’s no cost or contracts for restaurants.",
    "We help build your own database of diners for email marketing or loyalty programmes. Diners can opt-in to receive news and updates from your restaurant when making a First Table booking.",
    "Customers are encouraged to leave reviews of their dining experiences to help others discover new restaurants. All public reviews are featured on our website and indexed by Google’s knowledge panel.",
    "We give diners a great reason to try your restaurant for the first time investing significant resources into reaching engaged foodies. You benefit from free marketing to an engaged database of foodies through email, social media, paid media and influencer outreach.",
    "First Table integrates your restaurant seamlessly into our platform, working together with your existing reservation system or marketing channels to streamline reservations, table management and syncing of guest data.",
  ];
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
        <p className="text-2xl">
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
      </div>
      <div className="divider mt-12 w-3/4"></div>
      <div className="flex text-center justify-around flex-col lg:flex-row mx-4 my-14 lg:mx-10 gap-12">
        <div className="mb-8">
          <h2 className="text-4xl text-blue-950">
            Request an <br /> information pack
          </h2>
          <p className="my-6">
            We’ll send you more information on our story, how First Table works
            and the benefits to your restaurant.
          </p>
          <button className="bg-[#FF756B] p-4 text-white font-bold">
            Request information
          </button>
        </div>
        <div>
          <h2 className="text-4xl text-blue-950 ">
            Schedule a <br /> personal call
          </h2>
          <p className="my-6">
            We’ll send you more information on our story, how First Table works
            and the benefits to your restaurant.
          </p>
          <button className="bg-[#FF756B] p-4 text-white font-bold">
            Schedule a call
          </button>
        </div>
        <div>
          <h2 className="text-4xl text-blue-950">
            Sign up your <br /> restaurant for free
          </h2>
          <p className="my-6">
            We’ll send you more information on our story, how First Table works
            and the benefits to your restaurant.
          </p>
          <Link to={'/freesignup'}>
            <button className="bg-[#FF756B] p-4 text-white font-bold">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
      <div className="divider mt-12 w-3/4"></div>
      <div>
        <h2 className="text-orange-300 text-center text-5xl my-6">
          Unique ways First Table grows your restaurant
        </h2>
        {itemsHeading.map((heading, index) => (
          <div key={index} className="mx-40 my-6">
            {/* Display the heading with chain numbering */}
            <h1 className="text-4xl text-blue-900">{heading}</h1>
            {/* Display the corresponding description */}
            <p className="text-xl my-6">{itemsDesk[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ForRestaurants