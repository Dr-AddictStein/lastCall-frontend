import Img1 from '../../../assets/images/Our Story/what-we-stand-for.svg';
import Img2 from "../../../assets/images/Our Story/group1.svg";
// import Img3 from "../../../assets/images/Our Story/our-vision.svg";
// import Img3 from "../../../assets/images/Our Story/our-vision.svg";
function OurStory() {
  return (
    <div className="mb-10">
      <div className="text-center my-8">
        <h3 className="text-5xl font-bold mb-4 text-blue-900">Our Story </h3>
        <p className="text-2xl">
          We want to share our love of dining out with you. It’s simple.
        </p>
      </div>
      <div className="flex gap-5 mt-6 justify-between">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold mb-4 text-blue-900">
            Why we started
          </h2>
          <p className="text-xl">
            Inspiration for First Table sparked when our founder, Mat Weir,
            discovered a new approach to dining that he’d never come across
            before. Tucked away in Queenstown, New Zealand, was a small French
            restaurant offering 50% off their first table of the night. <br />{" "}
            <br /> <br /> Excited to try a new restaurant at half the cost, Mat
            booked the ‘first table’ for him and his family. The experience
            seemed too good to be true – they ordered entrées, mains and
            desserts, sampled daring local delicacies and enjoyed a good bottle
            of wine, without breaking the bank. Curious to understand the model,
            Mat asked the waiter how the restaurant benefited from the
            promotion. <br /> <br /> <br /> It was simple – the ‘first table’
            helped build an atmosphere from the start of service to attract more
            customers. It was a win-win for restaurants and diners alike.
            Already a tech entrepreneur, Mat saw an opportunity to build an
            online marketplace to solve the problem of slow starts to evenings,
            at scale.
          </p>
        </div>
        <div>
          <img src={Img1} alt="" srcset="" />
        </div>
      </div>
      <div className="flex flex-row-reverse gap-5 mt-10 justify-between">
        <div className="w-1/2">
          <h2 className="text-5xl font-bold mb-4 text-blue-900">
            Why we started
          </h2>
          <p className="text-xl">
            Inspiration for First Table sparked when our founder, Mat Weir,
            discovered a new approach to dining that he’d never come across
            before. Tucked away in Queenstown, New Zealand, was a small French
            restaurant offering 50% off their first table of the night. <br />{" "}
            <br /> <br /> Excited to try a new restaurant at half the cost, Mat
            booked the ‘first table’ for him and his family. The experience
            seemed too good to be true – they ordered entrées, mains and
            desserts, sampled daring local delicacies and enjoyed a good bottle
            of wine, without breaking the bank. Curious to understand the model,
            Mat asked the waiter how the restaurant benefited from the
            promotion. <br /> <br /> <br /> It was simple – the ‘first table’
            helped build an atmosphere from the start of service to attract more
            customers. It was a win-win for restaurants and diners alike.
            Already a tech entrepreneur, Mat saw an opportunity to build an
            online marketplace to solve the problem of slow starts to evenings,
            at scale.
          </p>
        </div>
        <div>
          <img src={Img1} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
export default OurStory