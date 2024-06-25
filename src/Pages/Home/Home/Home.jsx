import { Helmet } from "react-helmet-async"
import OfferSection from "../OfferSection/OfferSection"
import PopularDestination from "../PopularDestination/PopularDestination"
import PopularHotels from "../PopularHotels/PopularHotels"
import Banner from "../Banner/Banner"
import Community from "../Community/Community"
import SocialMedia from "../SocialMedia/SocialMedia"

function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <OfferSection></OfferSection>
      <PopularDestination></PopularDestination>
      <PopularHotels></PopularHotels>
      <Community></Community>
      <SocialMedia></SocialMedia>
    </div>
  );
}
export default Home