import Img1 from '../../../assets/images/Our Story/what-we-stand-for.svg';
import Img2 from "../../../assets/images/Our Story/blair.jpg";
 import Img3 from "../../../assets/images/Our Story/ben.jpg";
// import Img3 from "../../../assets/images/Our Story/our-vision.svg";
function OurStory() {
  return (
    <div className="mb-10 mx-6">
      <div className="text-center my-8">
        <h3 className="text-5xl font-bold mb-4 text-blue-900">Our Story </h3>
        <p className="text-2xl">
          We want to share our love of dining out with you. It’s simple.
        </p>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row mt-16 justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold mb-8 text-blue-900">
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
      <div className="flex flex-col lg:flex-row-reverse gap-5 mt-16 justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold mb-8 text-blue-900">
            Our startup story
          </h2>
          <p className="text-xl">
            To achieve quick results, Mat needed to limit distractions and stay
            focused. A limited budget and sheer determination led him to Koh
            Samui in Thailand where he spent 12 hours a day, seven days a week
            buttoned up in a cheap seaside resort building a custom made booking
            system from scratch. <br /> <br /> <br /> It took hard work and many
            sleepless nights, but six weeks later, he returned to Queenstown
            with a finished website, ready to get his first customers on board.
            Without any previous sales experience, Mat realised there was no
            better training ground than a humble, door-to-door effort. He walked
            from venue to venue learning what resonated with owners and
            managers, refining the value proposition along the way and
            officially launched First Table in September 2014 with ten ‘keen as
            mustard’ restaurants.
            <br /> <br /> <br /> It was simple – the ‘first table’ helped build
            an atmosphere from the start of service to attract more customers.
            It was a win-win for restaurants and diners alike. Already a tech
            entrepreneur, Mat saw an opportunity to build an online marketplace
            to solve the problem of slow starts to evenings, at scale.
          </p>
        </div>
        <div>
          <img src={Img1} alt="" srcset="" />
        </div>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row mt-16 justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold mb-8 text-blue-900">
            What we stand for
          </h2>
          <p className="text-xl">
            Our business model is unique in that it’s a win-win solution that
            benefits both the restaurateur and customer (very rare, so we
            hear!). With a compelling offer on the first table of the night,
            we’re inspiring hundreds of thousands of people to broaden their
            culinary landscapes by dining out more often. As a result, we’re
            cultivating an open and collaborative platform that helps
            restaurants leverage otherwise empty tables.
            <br /> <br /> <br /> As our business has grown, we’ve harnessed the
            energy of startup culture at its best. We’ve built a team of smart,
            passionate foodies who thrive on making a difference for customers
            and love what they do.
            <br /> <br /> <br /> In our world, we practice integrity and empathy
            to build partnerships that last a lifetime. While our Kiwi ingenuity
            gives us the drive and desire to constantly improve and reimagine
            the global dining experience.
          </p>
        </div>
        <div>
          <img src={Img1} alt="" srcset="" />
        </div>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row-reverse mt-16 justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold mb-8 text-blue-900">Our vision</h2>
          <p className="text-xl">
            Our business model is unique in that it’s a win-win solution that
            benefits both the restaurateur and customer (very rare, so we
            hear!). With a compelling offer on the first table of the night,
            we’re inspiring hundreds of thousands of people to broaden their
            culinary landscapes by dining out more often. As a result, we’re
            cultivating an open and collaborative platform that helps
            restaurants leverage otherwise empty tables.
            <br /> <br /> <br /> As our business has grown, we’ve harnessed the
            energy of startup culture at its best. We’ve built a team of smart,
            passionate foodies who thrive on making a difference for customers
            and love what they do.
            <br /> <br /> <br /> In our world, we practice integrity and empathy
            to build partnerships that last a lifetime. While our Kiwi ingenuity
            gives us the drive and desire to constantly improve and reimagine
            the global dining experience.
          </p>
        </div>
        <div>
          <img src={Img1} alt="" srcset="" />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-5xl font-bold mb-8 text-blue-900">
          What people are saying
        </h2>
      </div>

      {/* Our team */}
      <div className="text-center mt-20">
        <h2 className="text-5xl font-bold mb-8 text-blue-900">Our Team</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mx-24">
        <div>
          <img src={Img3} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Mat</h2>
          <p>CEO and Founder</p>
        </div>
        <div>
          <img src={Img2} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Jess</h2>
          <p>Director</p>
        </div>
        <div>
          <img src={Img3} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Blair</h2>
          <p>Operations Manager</p>
        </div>
        <div>
          <img src={Img3} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Mat</h2>
          <p>CEO and Founder</p>
        </div>
        <div>
          <img src={Img2} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Jess</h2>
          <p>Director</p>
        </div>
        <div>
          <img src={Img3} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Blair</h2>
          <p>Operations Manager</p>
        </div>
        <div>
          <img src={Img3} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Mat</h2>
          <p>CEO and Founder</p>
        </div>
        <div>
          <img src={Img2} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Jess</h2>
          <p>Director</p>
        </div>
        <div>
          <img src={Img3} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Blair</h2>
          <p>Operations Manager</p>
        </div>
        <div>
          <img src={Img3} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Mat</h2>
          <p>CEO and Founder</p>
        </div>
        <div>
          <img src={Img2} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Jess</h2>
          <p>Director</p>
        </div>
        <div>
          <img src={Img3} className="rounded" alt="" />
          <h2 className="text-5xl font-bold mb-4 text-blue-900">Blair</h2>
          <p>Operations Manager</p>
        </div>
      </div>
    </div>
  );
}
export default OurStory