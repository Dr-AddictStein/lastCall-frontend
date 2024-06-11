import { FaDonate } from "react-icons/fa";

function OfferSection() {
  return (
    <div className="mb-10">
      <div className="card bg-base-200 shadow-xl flex flex-col gap-4 lg:flex-row items-center px-4 py-8 justify-between">
        <div className="flex gap-4 items-center ">
          <FaDonate className="text-5xl" />
          <div>
            <h2 className="text-xl font-bold">Pssst!</h2>
            <p>
              Do you want to get secret offers and best prices for amazing
              stays? Sign up to join our Travel Club!
            </p>
          </div>
        </div>
        <div>
          <button className="btn border-blue-600 rounded-full">
            Sign up for newsletter
          </button>
        </div>
      </div>
    </div>
  );
}
export default OfferSection