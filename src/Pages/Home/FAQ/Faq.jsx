import { useState } from "react";

function Faq() {
  const questions = [
    "What is Last Call?",
    "How does it work?",
    "How do restaurants benefit?",
    "How do I create an account?",
    "How do I cancel or amend my reservation?",
    "How many can I book for?",
    "Are both food and drinks half price?",
    "How do I get my booking confirmation?",
    "Can I combine Last Call bookings for large groups?",
    "Can I bring more than four people?",
    "Can I take my food away?",
    "When is a new day added?",
    "Where can I find a list of participating restaurants?",
    "Can I book the same restaurant twice?",
    "Is the booking fee deducted from my bill?",
    "What happens if I’m late?",
    "Are there any exclusions?",
    "What time can I book?",
    "Can I combine Last Call with other vouchers?",
    "I’m a solo diner – can I dine on Last Call?",
    "Can I pick which table to sit at?",
    "Is there a minimum spend?",
    "Do I need ID?",
    "What countries offer Last Call?",
  ];

  const answers = [
    "Last Call is a restaurant discovery website offering 50% off the food bill for the Last Call or First Call at breakfast, lunch or dinner at participating restaurants.",
    "Participating restaurants list their times for breakfast, lunch or dinner – showing seven days of availability on our website.",
    "Our concept is a real win-win for diners and restaurants – we bring people together to enjoy new dining experiences and support restaurateurs by filling their off-peak tables.",
    "You can sign up for a free Last Call account at www.lastcall.co using Facebook, Apple, Google, or email address.",
    "Simply log into your Last Call account, select reservations and cancel your booking.",
    "Last Call reservations are for groups of two, three or four people including children of all ages.",
    "The Last Call deal is strictly 50% off food only, drinks are always full price.",
    "Your booking confirmation is emailed to you once payment has been finalized.",
    "A maximum of one Last Call may be booked per group per night.",
    "No, sorry. Our arrangement with restaurants is for reservations of two, three or four people only.",
    "Meals ordered are for dine-in only.",
    "Availability for every restaurant is added just after midnight each night for the next seven days.",
    "Visit our homepage and filter by date, region and session (breakfast, lunch or dinner) to find restaurants near you.",
    "Absolutely, but not twice in a row. Last Call was built to encourage you to try new restaurants.",
    "The $10 booking fee entitles you to receive 50% off the food bill when you make your reservation on our website.",
    "The Last Call offer is only available for the date and time you’ve booked. If you’re more than 15 minutes late, the deal is off.",
    "Some of our partner restaurants have special conditions attached to their Last Call offer.",
    "You’re welcome to book any available days or times listed on our website.",
    "Last Call bookings cannot be combined with any other offers, discounts or promotions (ie happy hour), including restaurant credit unless otherwise specified by the restaurant.",
    "While we love solo dining, unfortunately, our deal does not apply to tables of one.",
    "The restaurant will most likely have a designated table for Last Call diners.",
    "You can spend as much or as little as you like – your food bill will be discounted by 50% at the end of the meal.",
    "Licensed premises are within their rights to deny you service if you can't produce identification (even when not drinking).",
    "At this time, Last Call is operating in Canada.",
  ];

  const [openIndexes, setOpenIndexes] = useState(
    questions.map((_, index) => index)
  );

  const toggleIndex = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="mx-auto mb-8 px-4 lg:px-36">
      <h1 className="px-4 text-blue-900 font-semibold text-4xl lg:text-7xl text-center my-12 mt-20">
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
            <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium">
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
