import { MdKeyboardArrowRight } from 'react-icons/md';
import img1 from '../../../assets/images/Banner/melbourne2.jpg'
import { Link } from 'react-router-dom';
function PopularHotels() {
  return (
    <div className="mt-4 mb-20">
      <div>
        <p className="text-2xl font-bold my-4">Hotels loved by guests</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-5'>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-4 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  ">
            <p className="font-semibold">Shoho Hotel London</p>
            <p>London</p>
            <p className="font-bold">$130/Night</p>
            <div className="card-actions justify-end">
              <Link>
                <button className="btn ">
                  <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-4 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  ">
            <p className="font-semibold">Shoho Hotel London</p>
            <p>London</p>
            <p className="font-bold">$130/Night</p>
            <div className="card-actions justify-end">
              <Link>
                <button className="btn ">
                  <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-4 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  ">
            <p className="font-semibold">Shoho Hotel London</p>
            <p>London</p>
            <p className="font-bold">$130/Night</p>
            <div className="card-actions justify-end">
              <Link>
                <button className="btn ">
                  <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-4 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  ">
            <p className="font-semibold">Shoho Hotel London</p>
            <p>London</p>
            <p className="font-bold">$130/Night</p>
            <div className="card-actions justify-end">
              <Link>
                <button className="btn ">
                  <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-4 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body  ">
            <p className="font-semibold">Shoho Hotel London</p>
            <p>London</p>
            <p className="font-bold">$130/Night</p>
            <div className="card-actions justify-end">
              <Link>
                <button className="btn ">
                  <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopularHotels