import { Helmet } from "react-helmet-async"
import OfferSection from "../OfferSection/OfferSection"
import PopularDestination from "../PopularDestination/PopularDestination"
import PopularHotels from "../PopularHotels/PopularHotels"
import Banner from "./Banner/Banner"

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularDestination></PopularDestination>
      <PopularHotels></PopularHotels>
      <OfferSection></OfferSection>
    </div>
  )
}
export default Home