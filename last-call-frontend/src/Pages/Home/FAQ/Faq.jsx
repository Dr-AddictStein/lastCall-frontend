import { useState } from "react";

function Faq() {
  const questions = [
    "What is First Table?",
    "How does it work?",
    "Are both food and drinks half price?",
    "Can I bring more than four people?",
    "When is a new day added?",
    "Where can I find a list of participating restaurants?",
    "What time can I book?",
    " Who runs First Table?",
    "What countries offer First Table?",
    "Is First Table available on public holidays or over Christmas and New Year?",
    "Do I need ID?",
  ];

  const answers = [
    "First Table is a restaurant discovery website offering diners 50% off the food bill when they book the first table at one of our partner restaurants for breakfast, lunch or dinner. It’s the perfect incentive for diners to try new and exciting restaurants and they save money by dining early.",
    "Our partner restaurants list their available first table for breakfast, lunch and/or dinner on our website. Diners can always see availability for the upcoming seven days. To secure a table, diners select a restaurant of their choice, the date and pay a $10 booking fee to lock in 50% off the food bill for two, three or four people.",
    "The First Table deal is strictly 50% off food only, drinks are always full price.",
    "No, sorry. Our arrangement with restaurants is for reservations of two, three or four people only.",
    "Availability for every restaurant is added just after midnight each night for the next seven days.",
    "Visit our homepage and filter by region to find your nearest city. Once you’re there, you’ll find a range of delicious restaurants to choose from. You can also filter by the occasion (breakfast, lunch or dinner) and the type of cuisine. Hurry, the early bird gets the dinner deal!",
    "You’re welcome to book any available times listed on our website. The cut off time to make a restaurant booking is generally one hour prior to the seating time, however, this does vary from venue to venue according to their requirements.",
    "Behind the scenes, we’re a passionate team of food lovers. It’s our job to help make dining out more of a routine than a luxury! Read our story here. ",
    "At this time, First Table is operating in New Zealand, Australia, and the UK.",
      " Restaurants have full control over the days and times that the offer is available. Availability on Christmas Day, Boxing Day and New Year's Day is extremely limited.",
    "Licensed premises are within their rights to deny you service if you can't produce identification (even when not drinking). To avoid disappointment, please make sure all diners have their ID. Please note, First Table booking fees will not be refunded in this scenario.",
  ];

  const [openIndexes, setOpenIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="mb-8 mx-4 px-16">
      <h1 className="text-blue-900 font-semibold text-7xl text-center my-12 mt-20">
        Frequently asked questions
      </h1>
      <div className="join join-vertical w-full">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`collapse collapse-arrow join-item text-center border-base-300 py-4 ${
              openIndexes.includes(index) ? "collapse-open" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={openIndexes.includes(index)}
              onChange={() => toggleIndex(index)}
            />
            <div className="collapse-title text-4xl text-blue-900 font-medium">
              {question}
            </div>
            <div className="collapse-content">
              <p className="mr-4 text-xl">{answers[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
