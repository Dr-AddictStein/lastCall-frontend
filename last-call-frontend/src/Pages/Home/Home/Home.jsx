import OfferSection from "../OfferSection/OfferSection"
import PopularDestination from "../PopularDestination/PopularDestination"
import PopularHotels from "../PopularHotels/PopularHotels"
import Banner from "./Banner/Banner"

function Home() {
  return (
      <div>
      <Banner></Banner>
      <PopularDestination></PopularDestination>
      <PopularHotels></PopularHotels>
      <OfferSection></OfferSection>
    </div>
  )
}
export default Home