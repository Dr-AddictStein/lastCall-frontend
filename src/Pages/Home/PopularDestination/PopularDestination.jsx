import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function PopularDestination() {
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState('All Dates');
  const [selectedRegion, setSelectedRegion] = useState('Select a Region');
  const [selectedCity, setSelectedCity] = useState('Select a City');
  const [selectedMeal, setSelectedMeal] = useState('Meal');

  const handleFindTable = (city,region) => {
    navigate('/findTable', {
      state: {
        selectedDate,
        selectedCity:city,
        selectedRegion:region,
        selectedMeal,
      },
    });
  };

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
          <p className="my-20 text-5xl text-blue-900 font-bold text-center">{region.name}</p>
          <div className={`grid gap-5 w-fit mx-auto ${region?.cities.length === 1 && 'md:grid-cols-1'} ${region?.cities.length === 2 && 'md:grid-cols-2'} ${region?.cities.length === 3 && 'md:grid-cols-3'} ${region?.cities.length === 4 && 'md:grid-cols-4'} ${region?.cities.length >= 5 && 'md:grid-cols-5'}`}>
            {region.cities.map(city => (
              <div key={city._id} className="flex justify-center items-center">
                <div className="relative w-[250px] h-[160px] overflow-hidden">
                  <button onClick={()=>{
                    handleFindTable(city.name,city.region)
                  }}>
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
                  </button>
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
