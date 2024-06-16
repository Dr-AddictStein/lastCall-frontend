import canbera from "../../../assets/images/Banner/Brisbane.jpg";
import './PopularDestination.css'

function PopularDestination() {
  const destinations = [
    { id: 1, name: "Spain", image: canbera },
    { id: 2, name: "Australia", image: canbera },
    { id: 3, name: "Japan", image: canbera },
    { id: 4, name: "Thailand", image: canbera },
  ];

  return (
    <div className="my-10 lg:px-20 px-4">
      <div>
        <p className="my-6 text-2xl font-bold">Popular Destinations</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative   lg:w-60 custom-width-popularDestination group overflow-hidden rounded-lg mx-auto"
            >
              <div className="relative w-full h-full">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                  src={destination.image}
                  alt={destination.name}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="bg-black bg-opacity-20 p-4 text-white text-3xl font-bold rounded">
                    {destination.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDestination;
