import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {


    const location = useLocation();
    const {
        foodData,
        table,
        bookingTime,
        bookingTimeDet,
    } = location.state || {};

    console.log("unga-vunga 2", foodData, table);




    const { register, handleSubmit, formState: { errors } } = useForm();
    const [paymentMethod, setPaymentMethod] = useState('newCard');
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(true);

    const onSubmit = data => {
        console.log(data, paymentMethod);
        // Here you would typically send the data to the backend, e.g.:
        // fetch('/api/booking', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });
    };

    const handleCheckboxChange = () => {
        isChecked === true && setIsChecked(false);
        isChecked === false && setIsChecked(true);
    };

    const handleCheckboxChange2 = () => {
        isChecked2 === true && setIsChecked2(false);
        isChecked2 === false && setIsChecked2(true);
    };

    return (
        <div className="w-11/12 lg:w-3/4 mx-auto py-10">
            <h2 className="text-center text-[#265582] text-5xl font-semibold py-5">Reservation at {foodData?.name}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-10'>
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">Name for reservation<span className="text-red-500">*</span></span>
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
                            <span className="text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">Email for reservation<span className="text-red-500">*</span></span>
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
                            <span className="label-text text-blue-950">Phone Number for reservation<span className="text-red-500">*</span></span>
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
                            <span className="text-red-500">
                                {errors.phoneNumber.message}
                            </span>
                        )}
                    </div>
                    <div>
                        <h5 className='py-5 text-2xl font-semibold'>How many people?</h5>
                        <p className='text-slate-400'>Book a table for two, three or four people at Cafe del Mar</p>
                        <div className='flex justify-between gap-3'>
                            <div className='border text-7xl w-full text-center cursor-pointer p-4'>2</div>
                            <div className='border text-7xl w-full text-center cursor-pointer p-4'>3</div>
                            <div className='border text-7xl w-full text-center cursor-pointer p-4'>4</div>
                        </div>
                        <div>
                            <h5 className='py-2 text-2xl font-semibold'>Have you previously dined at Cafe del Mar?</h5>
                            <div className='flex gap-2'>
                                <input type="radio" name="" id="" />
                                <p>Yes</p>
                            </div>
                            <div className='flex gap-2'>
                                <input type="radio" name="" id="" />
                                <p>No</p>
                            </div>
                            <div className='flex gap-2 pt-3'>
                                <input type="checkbox" name="" id="" onClick={handleCheckboxChange2} />
                                <p>I would like to receive news and offers from Cafe del Mar</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-control mt-6 bg-gradient-to-b from-[#f5ede4] p-16">
                    <div>
                        <h5 className='text-2xl font-bold pb-1 text-[#d6bb96]'>Secure your {bookingTime}</h5>
                        <h2 className='text-[#265582] font-bold text-4xl'>{bookingTimeDet}, {table.date}</h2>
                        <h5 className='py-5 text-2xl font-semibold'>{foodData?.name}</h5>
                        <div>
                            <p><span className='text-slate-400'>Booking fee: </span>$10</p>
                            <p><span className='text-slate-400'>Discount: </span>50% of the food bill</p>
                            <p><span className='text-slate-400'>Special Conditions: </span></p>
                            <ul className='list-disc pl-16'>
                                <li>Set Menus are not included in the First Table offer.</li>
                                <li>Strict maximum of four people only - including children of any age. The First Table offer will not be honoured if you arrive with more than four diners.</li>
                            </ul>
                            <div className='flex gap-2'>
                                <input
                                    type="radio"
                                    className='p-2'
                                    name="paymentMethod"
                                    value="account"
                                    checked={paymentMethod === 'account'}
                                    onChange={() => setPaymentMethod('account')}
                                />
                                <p>Pay with bank account. also known as Account2Account or POLi.</p>
                            </div>
                            <div className='flex gap-2'>
                                <input
                                    type="radio"
                                    className='p-2'
                                    name="paymentMethod"
                                    value="newCard"
                                    checked={paymentMethod === 'newCard'}
                                    onChange={() => setPaymentMethod('newCard')}
                                />
                                <p>Pay with new card.</p>
                            </div>
                            {paymentMethod === 'newCard' && (
                                <div>
                                    <div className='py-3'>
                                        <p><span className='text-slate-400'>Credit or debit card </span></p>
                                        <input type="text" className='border bg-white p-2 w-full rounded-md' />
                                    </div>
                                    <div className='flex gap-2'>
                                        <input type="checkbox" name="saveCard" id="saveCard" />
                                        <p>Securely save this card for next time?</p>
                                    </div>
                                </div>
                            )}
                            <div className={`flex gap-2 ${paymentMethod !== 'newCard' && 'pt-3'}`}>
                                <input onClick={handleCheckboxChange} type="checkbox" name="acceptConditions" id="acceptConditions" />
                                <p>I accept the below conditions of purchase and dining</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-2">
                        {isChecked === true ?
                            <button type="submit" className="btn bg-[#FF756B] text-white hover:bg-[#FF756B] hover:text-white">
                                Book and save 50%
                            </button> :
                            <p type="submit" className="btn bg-slate-400 text-slate-500 hover:bg-slate-400 hover:text-slate-500 cursor-not-allowed">
                                Book and save 50%
                            </p>}
                    </div>
                </div>
            </form>
            <div className='text-slate-400 pb-10'>
                <h5 className='pt-20 text-2xl font-semibold pb-4'>Conditions</h5>
                <ol className="list-decimal list-inside text-lg text-justify">
                    <li>
                        Your reservation confirmation will be delivered to you by email. Present the reservation confirmation (on your phone or printed out) at the specified restaurant on the date and time of your booking.
                    </li>
                    <li>
                        You are entitled to the First Table offer of 50% off food only, as detailed on your reservation confirmation for the specified restaurant and number of diners, at the date and time shown. Any applicable service charges will be calculated on the whole bill and are not subject to the First Table offer.
                    </li>
                    <li>
                        Beverages are charged at full price and are not included in the First Table offer. The First Table offer is available for 2, 3 or 4 diners, including adults and children of any age. The First Table offer will not be upheld, and your booking fee will be forfeited if more than the number of diners stated on your confirmation attend the reservation.
                    </li>
                    <li>
                        First Table reservations can only be amended to 2, 3 or 4 people. To amend the number of diners on your reservation, please contact First Table.
                    </li>
                    <li>
                        All diners must be seated no later than 15 minutes after the booking time – no exceptions. Late arrivals will not qualify for the First Table offer. The restaurant is not obliged to honour the discount or the reservation in the instance where you arrive at the restaurant more than 15 minutes after the time specified on your reservation confirmation.
                    </li>
                    <li>
                        Meals ordered are for dine-in only. Restaurants may allow you to take away leftovers, but to prevent over-ordering, this is at their own discretion.
                    </li>
                    <li>
                        If the restaurant is a licensed venue, diners will need to be the legal drinking age in that jurisdiction to enter, and the venue may require you to produce a photo ID.
                    </li>
                    <li>
                        The First Table offer cannot be combined with any other offers, in-house specials, drink specials, discounts or promotions unless otherwise specified by the restaurant.
                    </li>
                    <li>
                        First Table bookings cannot be combined – a maximum of one table of up to four diners only.
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
                        NZ only: First Table can amend the number of diners on Four+More reservations per the terms agreed with participating venues. The First Table offer applies to a maximum of four diners. The discount will be applied at the venue's discretion for bookings of more than four. Please contact the venue directly for further information.
                    </li>
                    <li>
                        First Table reserves the absolute right to cancel and refund any confirmed booking resulting from an error or incorrect information presented on the website, such as, but not limited to, availability errors.
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
                        It is at the restaurant's discretion as to where First Table bookings will be seated.
                    </li>
                    <li>
                        It is the responsibility of the diner to ensure that wait staff are informed of the First Table reservation and offer prior to making payment.
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Booking;
