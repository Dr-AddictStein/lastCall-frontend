import bannerImg from '../../../../assets/images/Banner/banner.jpg'
function Banner() {
  return (
    <div>
      <div
        className="hero min-h-96"
        style={{
          backgroundImage: ` url(${bannerImg})`,
        }}
      >
        <div className=" bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
           
            <p className="mb-5 font-bold text-5xl">Book your stay with Tripster</p>
            <p>1,480,086 rooms around the world are waiting for you!</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner