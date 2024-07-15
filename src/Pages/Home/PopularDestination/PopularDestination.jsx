import { useEffect } from "react";
import canbera from "../../../assets/images/Banner/banner.webp";
import './PopularDestination.css'

function PopularDestination({ regions }) {
  const today = new Date();
  console.log(today);

  useEffect(() => {
    console.log('regions GOTCHA:', regions);
  }, [regions]);

  return (
    <div className="my-10 md:px-20 lg:px-40 px-4">
      <div>
        <div className="">
          {regions.map((region) => (
            <div
              key={region._id}
              className="relative group overflow-hidden rounded-lg mx-auto"
            >
              <p className="my-6 text-4xl font-bold">{region.name}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {regions.map(city => (
                  <div key={city._id}>
                    <div className="relative w-full h-full">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        src={city.image}
                        alt={city.name}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="bg-black bg-opacity-20 p-4 text-white text-3xl font-bold rounded">
                          {city.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDestination;
