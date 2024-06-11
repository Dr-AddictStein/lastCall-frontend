import canbera from '../../../assets/images/Banner/Canberra.jpeg'
function PopularDestination() {
  return (
    <div className="my-10">
      <div>
        <p className="my-6 text-2xl font-bold">Popular Destination</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative ">
              <img className="rounded-lg" src={canbera} alt="" />
              <p className="absolute bottom-2 left-1  bg-base-300 px-5 py-3 rounded-3xl">
                Spain
              </p>
            </div>
          </div>
          <div>
            <div className="relative ">
              <img className="rounded-lg h-1/2" src={canbera} alt="" />
              <p className="absolute bottom-2 left-1  bg-base-300 px-5 py-3 rounded-3xl">
                Spain
              </p>
            </div>
            <div className="relative  ">
              <img className="rounded-lg h-1/2" src={canbera} alt="" />
              <p className="absolute bottom-2 left-1  bg-base-300 px-5 py-3 rounded-3xl">
                Spain
              </p>
            </div>
          </div>
          <div>
            <div className="relative ">
              <img className="rounded-lg" src={canbera} alt="" />
              <p className="absolute bottom-2 left-1  bg-base-300 px-5 py-3 rounded-3xl">
                Spain
              </p>
            </div>
          </div>
          <div>
            <div>
              <div className="relative ">
                <img className="rounded-lg" src={canbera} alt="" />
                <p className="absolute bottom-2 left-1  bg-base-300 px-5 py-3 rounded-3xl">
                  Spain
                </p>
              </div>
              <div className="relative ">
                <img className="rounded-lg" src={canbera} alt="" />
                <p className="absolute bottom-2 left-1  bg-base-300 px-5 py-3 rounded-3xl">
                  Spain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopularDestination