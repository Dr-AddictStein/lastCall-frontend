import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const Booking = () => {
    const stripe = useStripe();
    const elements = useElements();
    const location = useLocation();

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
                            Book a table for two, three or four people at Cafe del Mar
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
                            {bookingTimeDet}, {table.date}
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
                                {foodData.specialconditions.map((spcond) => (
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
                    {/* Your conditions here */}
                </ol>
            </div>
        </div>
    );
};

export default Booking;
