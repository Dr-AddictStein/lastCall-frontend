import canbera from "../../../assets/images/Banner/Canberra.jpeg";

function PopularDestination() {
  const destinations = [
    { id: 1, name: "Spain", image: canbera },
    { id: 2, name: "Spain", image: canbera },
    { id: 3, name: "Spain", image: canbera },
    { id: 4, name: "Spain", image: canbera },
   
  ];

  return (
    <div className="my-10">
      <div>
        <p className="my-6 text-2xl font-bold">Popular Destinations</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {destinations.map((destination) => (
            <div key={destination.id}>
              <div className="relative">
                <img
                  className="rounded-lg w-full h-full object-cover"
                  src={destination.image}
                  alt={destination.name}
                />
                <p className="absolute bottom-2 left-1 bg-base-300 px-5 py-3 rounded-3xl">
                  {destination.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDestination;
