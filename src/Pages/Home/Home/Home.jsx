import { Helmet } from "react-helmet-async";
import OfferSection from "../OfferSection/OfferSection";
import PopularDestination from "../PopularDestination/PopularDestination";
import PopularHotels from "../PopularHotels/PopularHotels";
import Banner from "../Banner/Banner";
import Community from "../Community/Community";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useEffect, useState } from "react";

function Home() {
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);
  
  const [data,setData] = useState([]);

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


    if(cities && regions){
      let dex = [];

      
      for(let i=0;i<regions.length;i++){
        let reg = regions[i].name;
        let cityArr = [];
        
        for(let j=0;j<cities.length;j++){
          if(cities[j].region===reg){
            cityArr.push(cities[j]);
            console.log("Here",cityArr);
          }
        }

        dex.push(
          {
            name:reg,
            cities:cityArr
          }
        )
      }

      console.log("DEX:",dex)

      setData(dex);
    }
  }, []);

  useEffect(()=>{
    console.log("DAT:",data)
  },[data])

  return (
    <div className="">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner cities={cities} regions={regions} />
      <div className="max-w-screen-2xl mx-auto">
        <OfferSection />
        <PopularDestination />
        {/* <PopularHotels /> */}
        <Community />
        <SocialMedia />
      </div>
    </div>
  );
}

export default Home;
