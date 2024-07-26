import { useState } from "react";

function CancellationPolicy() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mx-auto mb-8 px-4 lg:px-36">
            <h1 className="px-4 text-blue-900 font-semibold text-4xl lg:text-7xl text-center my-12 mt-20">
                Cancellation Policy
            </h1>
            <p>
                We understand that you can't always make your Last Call booking as initially planned. Our cancellation policy is designed to encourage you to make your cancellation sooner rather than later to give restaurants enough time to secure a new Last Call booking. <br />
                All refunds are processed as a credit on your Last Call account for you to use on a future booking and are valid for 90 days. Cash refunds are not available.
            </p>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex === 1}
                    onChange={() => toggleIndex(1)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium">
                    Cancel within 60 minutes of making your reservation
                </div>
                {openIndex === 1 && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Made a mistake or changed your mind? No problem. Cancel within 60 minutes of making your reservation and get a 100% refund on your booking fee as a credit on your Last Call account.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex === 2}
                    onChange={() => toggleIndex(2)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium">
                    Cancel any day before the date of your reservation
                </div>
                {openIndex === 2 && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Cancel any day before the date of your reservation, and you'll get a 50% refund on your booking fee as a credit on your Last Call account. If we're able to find someone else to book your spot, we'll automatically credit you the rest.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex === 3}
                    onChange={() => toggleIndex(3)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium">
                    Cancel on the day of your reservation
                </div>
                {openIndex === 3 && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            No refunds are offered for cancellations made on the day of your reservation. However, if we find a hungry diner to book your spot, we'll automatically credit your full booking fee as a credit on your Last Call account.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex === 4}
                    onChange={() => toggleIndex(4)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium">
                    Our fair use policy for cancellations
                </div>
                {openIndex === 4 && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            At Last Call, we want to make sure our users have the same odds at scoring the Last Call. With this in mind, Last Call users are eligible for a maximum of three refunded credits in a rolling 30 day period, in keeping with our cancellation policy rules.
                        </p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex === 5}
                    onChange={() => toggleIndex(5)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium">
                    No shows
                </div>
                {openIndex === 5 && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Failure to arrive at a venue within 15 minutes of the reserved time may result in the venue allocating some or all of your seats to other diners. The user who made the booking may also be recorded as a “no-show” by both the venue and Last Call. <br />
                            To prevent no-shows being marked against your Last Call profile, please make sure that you update or cancel your reservation if your plans change in a timely manner. A no-show could be in the form of the below:
                        </p>
                        <ol className="text-justify list-decimal pl-5 py-3 text-xl">
                            <li><span className="font-semibold">Not attending your reservation</span> If you do not attend your reservation and you have not cancelled online, or called the venue to cancel your reservation ahead of time, we reserve the right to mark your reservation as a no-show.</li>
                            <li><span className="font-semibold">A venue's cancellation policy</span> As mentioned above, some venues may explicitly have a 24-48 hour cancellation policy, of which some may take a non-refundable deposit. If you cancel a reservation inside their cancellation policy the venue will mark a no-show against your reservation in your member profile which will go towards your overall diner rating.</li>
                        </ol>
                        <p className="mr-4 text-xl text-justify">If you commit three or more no-shows in any 12-month period, your Last Call account will be deactivated.  If you were marked as a no-show in error, please click here to dispute it. By using the Last Call platform, you agree that all final no-show decisions are made by Last Call at its sole discretion.</p>
                    </div>
                )}
            </div>
            <div className="collapse collapse-arrow join-item text-center border-base-300 py-4">
                <input
                    type="checkbox"
                    checked={openIndex === 6}
                    onChange={() => toggleIndex(6)}
                />
                <div className="collapse-title text-2xl lg:text-4xl text-blue-900 font-medium">
                    Cancel a booking
                </div>
                {openIndex === 6 && (
                    <div className="collapse-content">
                        <p className="mr-4 text-xl text-justify">
                            Visit your bookings admin to cancel your bookings. Please note, cash refunds are not available, the credit will be stored on your Last Call account for 90 days.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CancellationPolicy;
