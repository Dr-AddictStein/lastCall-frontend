import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { AuthContext } from '../../context/AuthContext';

const Booking = () => {
    const stripe = useStripe();
    const elements = useElements();
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const {
        foodData,
        table,
        bookingTime,
        bookingTimeDet,
    } = location.state || {};

    console.log(foodData);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [paymentMethod, setPaymentMethod] = useState('newCard');
    const [isChecked, setIsChecked] = useState(false);
    const [numberOfPeople, setNumberOfPeople] = useState(2); // Default to 2 people

    const handleCheckboxChange = () => setIsChecked(!isChecked);

    const onSubmit = async (data) => {
        console.log(data, paymentMethod);

        if (!stripe || !elements) {
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    reservedFor: data.name,
                    reservedForMail: data.email,
                    reservedForPhone: data.phoneNumber,
                    people: numberOfPeople,
                    leaveReview: isChecked,
                    restaurant: foodData._id,
                    date: table.date,
                    tableType: bookingTime,
                    time: bookingTimeDet,
                    specialConditions: foodData.specialconditions // Send only necessary data
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const session = await response.json();

            const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="w-11/12 lg:w-3/4 mx-auto py-10">
            <h2 className="text-center text-[#265582] text-5xl font-semibold py-5">
                Reservation at {foodData?.name}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-10">
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">
                                Name for reservation<span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            {...register("name", {
                                required: "Please complete this required field",
                            })}
                            type="text"
                            placeholder="Name for reservation"
                            className="input input-bordered w-full"
                        />
                        {errors.name && (
                            <span className="text-red-500">{errors.name.message}</span>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">
                                Email for reservation<span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            {...register("email", {
                                required: "Please complete this required field",
                            })}
                            type="email"
                            placeholder="Email for reservation"
                            className="input input-bordered w-full"
                        />
                        {errors.email && (
                            <span className="text-red-500">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">
                                Phone Number for reservation<span className="text-red-500">*</span>
                            </span>
                        </label>
                        <input
                            {...register("phoneNumber", {
                                required: "Please complete this required field",
                            })}
                            type="text"
                            placeholder="Phone number for reservation"
                            className="input input-bordered w-full"
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-500">{errors.phoneNumber.message}</span>
                        )}
                    </div>

                    <div>
                        <h5 className="py-5 text-2xl font-semibold">How many people?</h5>
                        <p className="text-slate-400">
                            Book a table for two, three or four people at {foodData?.name}
                        </p>
                        <div className="flex justify-between gap-3">
                            <div
                                className={`border text-7xl w-full text-center cursor-pointer p-4 ${numberOfPeople === 2 ? 'bg-gray-200' : ''}`}
                                onClick={() => setNumberOfPeople(2)}>
                                2
                            </div>
                            <div
                                className={`border text-7xl w-full text-center cursor-pointer p-4 ${numberOfPeople === 3 ? 'bg-gray-200' : ''}`}
                                onClick={() => setNumberOfPeople(3)}>
                                3
                            </div>
                            <div
                                className={`border text-7xl w-full text-center cursor-pointer p-4 ${numberOfPeople === 4 ? 'bg-gray-200' : ''}`}
                                onClick={() => setNumberOfPeople(4)}>
                                4
                            </div>
                        </div>
                        <div className="flex gap-2 pt-3">
                            <input
                                type="checkbox"
                                name="leaveReview"
                                id="leaveReview"
                                onClick={handleCheckboxChange}
                            />
                            <p>I would like to leave a review after dining</p>
                        </div>
                    </div>
                </div>

                <div className="form-control mt-6 bg-gradient-to-b from-[#f5ede4] p-16">
                    <div>
                        <h5 className="text-2xl font-bold pb-1 text-[#d6bb96]">
                            Secure your {bookingTime}
                        </h5>
                        <h2 className="text-[#265582] font-bold text-4xl">
                            {bookingTimeDet}, {table?.date}
                        </h2>
                        <h5 className="py-5 text-2xl font-semibold">{foodData?.name}</h5>
                        <div>
                            <p>
                                <span className="text-slate-400">Booking fee: </span>$10
                            </p>
                            <p>
                                <span className="text-slate-400">Discount: </span>50% of the
                                food bill
                            </p>
                            <p>
                                <span className="text-slate-400">Special Conditions: </span>
                            </p>
                            <ul className="list-disc pl-16">
                                {foodData?.specialconditions?.map((spcond) => (
                                    <li key={spcond}>{spcond}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="form-control mt-20">
                        <button
                            type="submit"
                            className="btn bg-[#FF756B] text-white hover:bg-[#FF756B] hover:text-white"
                        >
                            Book and save 50%
                        </button>
                    </div>
                </div>
            </form>
            <div className="text-slate-400 pb-10">
                <h5 className="pt-20 text-2xl font-semibold pb-4">Conditions</h5>
                <ol className="list-decimal list-inside text-lg text-justify">
                <li>
                        Your reservation confirmation will be delivered to you by email. Present the reservation confirmation (on your phone or printed out) at the specified restaurant on the date and time of your booking.
                    </li>
                    <li>
                        You are entitled to the Last Call offer of 50% off food only, as detailed on your reservation confirmation for the specified restaurant and number of diners, at the date and time shown. Any applicable service charges will be calculated on the whole bill and are not subject to the Last Call offer.
                    </li>
                    <li>
                        Beverages are charged at full price and are not included in the Last Call offer. The Last Call offer is available for 2, 3 or 4 diners, including adults and children of any age. The Last Call offer will not be upheld, and your booking fee will be forfeited if more than the number of diners stated on your confirmation attend the reservation.
                    </li>
                    <li>
                        Last Call reservations can only be amended to 2, 3 or 4 people. To amend the number of diners on your reservation, please contact Last Call.
                    </li>
                    <li>
                        All diners must be seated no later than 15 minutes after the booking time – no exceptions. Late arrivals will not qualify for the Last Call offer. The restaurant is not obliged to honour the discount or the reservation in the instance where you arrive at the restaurant more than 15 minutes after the time specified on your reservation confirmation.
                    </li>
                    <li>
                        Meals ordered are for dine-in only. Restaurants may allow you to take away leftovers, but to prevent over-ordering, this is at their own discretion.
                    </li>
                    <li>
                        If the restaurant is a licensed venue, diners will need to be the legal drinking age in that jurisdiction to enter, and the venue may require you to produce a photo ID.
                    </li>
                    <li>
                        The Last Call offer cannot be combined with any other offers, in-house specials, drink specials, discounts or promotions unless otherwise specified by the restaurant.
                    </li>
                    <li>
                        Last Call bookings cannot be combined – a maximum of one table of up to four diners only.
                    </li>
                    <li>
                        No refunds. Except when a restaurant cannot accommodate your reservation for any reason other than you arriving more than 15 minutes after the time specified on your reservation confirmation.
                    </li>
                    <li>
                        This reservation is not exchangeable for cash and is not permitted for resale. If your reservation is on a public holiday, the restaurant may or may not impose a surcharge as advertised at the restaurant.
                    </li>
                    <li>
                        Cancellations are permitted, but the booking fee may be non-refundable. Refer to our Cancellation Policy for details and information on how to cancel.
                    </li>
                    <li>
                        Last Call reserves the absolute right to cancel and refund any confirmed booking resulting from an error or incorrect information presented on the website, such as, but not limited to, availability errors.
                    </li>
                    <li>
                        Reservations are not transferable to another date, venue or time.
                    </li>
                    <li>
                        Diners can make a public or private review of their dining experience. Refer to our Review Guidelines to ensure your review complies.
                    </li>
                    <li>
                        By using this platform, you acknowledge and agree that we accept no liability for the accuracy or currency of menus, pricing or photos provided by restaurants.
                    </li>
                    <li>
                        It is at the restaurant's discretion as to where Last Call bookings will be seated.
                    </li>
                    <li>
                        It is the responsibility of the diner to ensure that wait staff are informed of the Last Call reservation and offer prior to making payment.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Booking;
