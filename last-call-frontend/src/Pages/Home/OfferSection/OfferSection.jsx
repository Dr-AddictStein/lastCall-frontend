import { FaDonate } from "react-icons/fa";

function OfferSection() {
  return (
    <div className="mb-10">
      <div className="card bg-base-300 shadow-xl">
        <div className="flex gap-4 items-center ">
          <FaDonate className="text-5xl" />
          <div>
            <h2>Pssst!</h2>
            <p>
              Do you want to get secret offers and best prices for amazing
              stays? Sign up to join our Travel Club!
            </p>
          </div>
        </div>
        <div>
          <button className="btn border-blue-600 rounded-lg">Sign up for newsletter</button>
        </div>
      </div>
    </div>
  );
}
export default OfferSection