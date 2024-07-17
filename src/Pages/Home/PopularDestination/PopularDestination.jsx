import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PopularDestination() {
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [data, setData] = useState([]);

  const fetchCities = () => {
    fetch('http://localhost:4000/api/city')
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(error => console.log(error));
  };

  const fetchRegions = () => {
    fetch('http://localhost:4000/api/region')
      .then(res => res.json())
      .then(data => setRegions(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchCities();
    fetchRegions();
  }, []);

  useEffect(() => {
    if (cities.length && regions.length) {
      const combinedData = regions.map(region => ({
        ...region,
        cities: cities.filter(city => city.region === region.name),
      }));
      setData(combinedData);
    }
  }, [cities, regions]);

  return (
    <div className="my-10 md:px-20 lg:px-40 px-4">
      {data.map(region => (
        <div key={region._id} className="relative group overflow-hidden rounded-lg mx-auto">
          <p className="my-6 text-5xl text-blue-900 font-bold text-center">{region.name}</p>
          <div className={`grid gap-5 w-fit mx-auto ${region?.cities.length === 1 && 'md:grid-cols-1'} ${region?.cities.length === 2 && 'md:grid-cols-2'} ${region?.cities.length === 3 && 'md:grid-cols-3'} ${region?.cities.length >= 4 && 'md:grid-cols-4'}`}>
            {region.cities.map(city => (
              <div key={city._id} className="flex justify-center items-center">
                <div className="relative w-[250px] h-[160px] overflow-hidden">
                  <Link to={`/${city.name.replace(/\s+/g, '-')}`}>
                    <div>
                      <img
                        className="w-[250px] h-[160px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                        src={city.image}
                        alt={city.name}
                      />
                    </div>
                    <div className="absolute bg-black bg-opacity-20 hover:bg-opacity-50 duration-300 w-[250px] h-[160px] inset-0 flex items-center justify-center">
                      <p className="p-4 text-white text-3xl font-bold rounded">{city.name}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PopularDestination;
