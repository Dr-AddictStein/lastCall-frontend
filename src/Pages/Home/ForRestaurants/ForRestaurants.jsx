import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/images/Restaurant/restaurants.jpg'
import img1 from '../../../assets/images/Restaurant/img1.avif';
import img2 from "../../../assets/images/Restaurant/img2.jpg";
import img3 from "../../../assets/images/Restaurant/img3.jpg";
import img4 from "../../../assets/images/Restaurant/img4.webp";
import img5 from "../../../assets/images/Restaurant/img5.jpg";
import img6 from "../../../assets/images/Restaurant/img6.jpg";
import img7 from "../../../assets/images/Restaurant/img7.webp";
function ForRestaurants() {
  const today = new Date();
  console.log(today)
  const images = [img1, img2, img3,img4, img5, img6, img7];
  const itemsHeading = [
    "Always completely free.",
    "Your marketing done for you.",
    "Excited new customers.",
    "More tables filled.",
    "Amplify your restaurant’s revenue.",
    "Heightened atmosphere at all times.",
    "Rave reviews.",

  ];
  const itemsDesk = [
    "No commission, sign-up fees, or minimum stays. There is no contract or cost for restaurants apart from offering specials on food.",
    "We give diners a great reason to try your restaurant for the first time investing significant resources into reaching engaged foodies. You benefit from free marketing to an engaged database of foodies through email, social media, paid media and influencer outreach.",
    "Who doesn’t love a discount? Customers will be flocking to their reservation with a smile on their face knowing they are in for a treat. Show them a wonderful time and they’ll tell their friends and return again",
    "You have full control over the days and times you offer your Last Call - meaning your VIP function, busy weekends or special dates can be blocked out if you’re fully booked or closed.",
    "With the majority of diners visiting during peak-times, Last Call is a unique solution to help ensure that you are generating the maximum amount of revenue throughout service.",

    "A crowd attracts a crowd! A customer eating in your restaurant is an endorsement and social proof that your restaurant is worth dining at. Customers also create atmosphere, making other diners more likely to stay at your establishment for longer (and order that second cocktail).",
    "Customers are encouraged to leave reviews of their dining experiences to help others discover new restaurants. All public reviews are featured on our website and indexed by Google’s knowledge panel.",
  ];
  return (
    <div className="rounded">
      <div
        className="hero min-h-screen rounded-lg "
        style={{
          backgroundImage: ` url(${bannerImg})`,
          backgroundSize: "cover", // Ensure the image covers the entire area
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="">
            <p className="mb-5 font-bold text-7xl">
              Transform empty seats into earnings
            </p>
            <p>
              Last Call enables increased revenue, vast market reach, and free
              marketing by taking advantage of tough-to-fill seats
            </p>
            <div className="mt-6">
              <Link to={"/restaurantRegister"}>
                <button className="bg-[#FF756B] p-4 text-white font-bold">
                  Sign up for free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-8  lg:mx-80">
        <h2 className="text-6xl text-blue-950 font-bold my-4">The Method</h2>
        <p className="text-2xl">
          Discover the power of Last Call – the ultimate restaurant discovery
          platform that fills your off-peak hours with eager diners. Our
          innovative model shifts the cost to diners, making it free for you to
          join. Simply offer up one table per night on your slowest days, and
          let us turn those empty seats into revenue. Our proven formula
          guarantees success.
        </p>
      </div>
      <div className="divider mt-12 w-3/4 mx-auto"></div>
      <div className="flex text-center justify-around items-center flex-col lg:flex-row mx-4 my-14 lg:mx-10 gap-12">
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
          <h2 className="text-4xl text-blue-950 ">Schedule a call</h2>
          <p className="my-6">
            Schedule a call or visit to learn more about how it works and answer
            any outstanding questions.
          </p>
          <button className="bg-[#FF756B] p-4 text-white font-bold">
            Schedule a call
          </button>
        </div>
        <div>
          <h2 className="text-4xl text-blue-950">Sign up for free</h2>
          <p className="my-6">
            Start maximizing revenue today by signing up your restaurant
          </p>
          <Link to={"/freesignup"}>
            <button className="bg-[#FF756B] p-4 text-white font-bold">
              Sign up for free
            </button>
          </Link>
        </div>
      </div>
      <div className="divider mx-auto mt-12 w-3/4"></div>
      <div>
        <h2 className="text-orange-300 text-center text-5xl  mb-28 mt-10">
          Last Call’s Diverse Growth
        </h2>
        {itemsHeading.map((heading, index) => (
          <div
            key={index}
            className={`mx-40 my-6 flex gap-12 justify-between mb-32 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Display the heading with chain numbering */}
            <div>
              <h1 className="text-4xl text-blue-900">{heading}</h1>
              {/* Display the corresponding description */}
              <p className="text-xl my-6">{itemsDesk[index]}</p>
            </div>
            <img src={images[index]} alt="" className="w-[400px] rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ForRestaurants