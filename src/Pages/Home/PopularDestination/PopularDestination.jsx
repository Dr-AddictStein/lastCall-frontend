import { useEffect, useState } from "react";
import canbera from "../../../assets/images/Banner/banner.webp";
import './PopularDestination.css'
import { Link } from "react-router-dom";

function PopularDestination() {
  const today = new Date();
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);

  const [data, setData] = useState([]);

  const fetchCities = () => {
    fetch('http://localhost:4000/api/city')
      .then(res => res.json())
      .then(data => {
        setCities(data);
        // console.log('cities', data);
      })
      .catch(error => console.log(error));
  };

  const fetchRegions = () => {
    fetch('http://localhost:4000/api/region')
      .then(res => res.json())
      .then(data => {
        setRegions(data);
        // console.log('regions', data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchCities();
    fetchRegions();
  }, []);

  useEffect(() => {
    if (cities && regions) {
      let dex = [];


      for (let i = 0; i < regions.length; i++) {
        let reg = regions[i].name;
        let cityArr = [];

        for (let j = 0; j < cities.length; j++) {
          if (cities[j].region === reg) {
            cityArr.push(cities[j]);
            console.log("Here", cityArr);
          }
        }

        dex.push(
          {
            name: reg,
            cities: cityArr
          }
        )
      }

      console.log("DEX:", dex)

      setData(dex);
    }
  }, [cities, regions])

  useEffect(() => {
    console.log('regions GOTCHA:', data);
  }, [data]);

  return (
    <div className="my-10 md:px-20 lg:px-40 px-4">
      <div>
        <div className="">
          {data.map((region) => (
            <div
              key={region._id}
              className="relative group overflow-hidden rounded-lg mx-auto"
            >
              <p className="my-6 text-5xl text-blue-900 font-bold text-center">{region.name}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {region?.cities.map(city => (
                  <div key={city._id}>
                    <div className="relative w-[300px] h-[300px] overflow-hidden pb-20">
                      <Link to={`/${city.name}`}>
                        <img
                          className="w-full h-full overflow-hidden object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                          src={city.image}
                          alt={city.name}
                        />
                        <div className="absolute bg-black bg-opacity-20 hover:bg-opacity-50 duration-300 w-[300px] h-[220px] inset-0 flex items-center justify-center">
                          <p className="p-4 text-white text-3xl font-bold rounded">
                            {city.name}
                          </p>
                        </div>
                      </Link>
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
