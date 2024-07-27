import axios from 'axios';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log('sending data', data);
            const response = await axios.post('', data);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    return (
        <div className="lg:w-3/4 w-11/12 mx-auto py-20">
            <h2 className='text-5xl font-semibold text-center pb-10'>Contact Us</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col lg:flex-row gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-blue-950">First Name <span className="text-red-500">*</span></span>
                            </label>
                            <input
                                {...register("firstName", {
                                    required: "Please complete this required field",
                                })}
                                type="text"
                                placeholder="First Name"
                                className="input input-bordered"
                            />
                            {errors.firstName && (
                                <span className="text-red-500">
                                    {errors.firstName.message}
                                </span>
                            )}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-blue-950">Last Name <span className="text-red-500">*</span></span>
                            </label>
                            <input
                                {...register("lastName", {
                                    required: "Please complete this required field",
                                })}
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered"
                            />
                            {errors.lastName && (
                                <span className="text-red-500">
                                    {errors.lastName.message}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">Email <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            {...register("email", {
                                required: "Please complete this required field",
                            })}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                        />
                        {errors.email && (
                            <span className="text-red-500">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">Phone Number <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            {...register("phoneNumber", {
                                required: "Please complete this required field",
                            })}
                            type="text"
                            placeholder="Phone number"
                            className="input input-bordered"
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-500">
                                {errors.phoneNumber.message}
                            </span>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">City <span className="text-red-500">*</span></span>
                        </label>
                        <input
                            {...register("city", {
                                required: "Please complete this required field",
                            })}
                            type="text"
                            placeholder="City"
                            className="input input-bordered"
                        />
                        {errors.city && (
                            <span className="text-red-500">{errors.city.message}</span>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-blue-950">Message <span className="text-red-500">*</span></span>
                        </label>
                        <textarea
                            {...register("message", {
                                required: "Please complete this required field",
                            })}
                            placeholder="Your message"
                            className="textarea textarea-bordered h-32"
                        />
                        {errors.message && (
                            <span className="text-red-500">{errors.message.message}</span>
                        )}
                    </div>
                    <div className="form-control mt-6 ">
                        <button type="submit" className="btn bg-[#FF756B] text-white hover:bg-[#FF756B] hover:text-white">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
