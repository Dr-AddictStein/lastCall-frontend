import { Helmet } from "react-helmet-async"
import OfferSection from "../OfferSection/OfferSection"
import PopularDestination from "../PopularDestination/PopularDestination"
import PopularHotels from "../PopularHotels/PopularHotels"
import Banner from "../Banner/Banner"
import Community from "../Community/Community"

function Home() {
  return (
    <div className="">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularDestination></PopularDestination>
      <PopularHotels></PopularHotels>
      <Community></Community>
      <OfferSection></OfferSection>
    </div>
  )
}
export default Home