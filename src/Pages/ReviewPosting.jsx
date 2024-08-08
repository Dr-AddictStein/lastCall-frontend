import React, { useContext, useEffect, useState } from 'react'
import StarRating from '../Components/StarRating';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const ReviewPosting = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    if(!user){
        navigate('/');
    }



    const [restu, setRestu] = useState(null);
    const fetchLawyer = async () => {
        try {
            const response = await axios.get(
                `http://localhost:4000/api/restaurant/${id}`
            );
            const fetchedLawyer = response.data;

            setRestu(fetchedLawyer);

        } catch (error) {
            console.error("Error fetching lawyer:", error);
        }
    };

    useEffect(() => {
        fetchLawyer();
    }, [id]);
    const [rating, setRating] = useState(null);
    const [desc, setDesc] = useState("");
    const clientName = user?.user?.firstname + ' ' + user?.user?.lastname;
    const clientImage = user?.user?.image;
    const handleRatingSelect = (selectedRating) => {
        setRating(selectedRating);
    };

    const [done, setDone] = useState(false);


    const handleSubmit = async () => {
        const timestamp = Date.now();
        const date = new Date(timestamp);

        // Options for formatting the date
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        // Format the date to "Jul 7, 2024" format
        const formattedDate = date.toLocaleDateString('en-US', options);
        const review = {
            clientName: clientName,
            clientImage: clientImage,
            rating: rating,
            desc: desc,
            date: formattedDate
        }
        try {
            const response = await axios.post(
                `http://localhost:4000/api/restaurant/postReview/${id}`,
                review
            );

            console.log("A",response);
            setDone(true);


        } catch (error) {
            console.error("Error fetching lawyer:", error);
        }
    }



    return (
        <>
            <div className="bg-[#F1FFF4] min-h-screen">
                <div className="mt-10 mx-auto max-w-[1000px] bg-white">
                    <div className="border border-[#00000069]">
                        <div className="bg-[#3E7D5A] w-full text-[18px] py-3 flex items-center justify-center text-white">
                            Share Your Honest Feedback about how your Reservation went with {restu?.name}
                        </div>
                        {
                            !done ?
                                <>
                                    <div className="lg:flex lg:justify-between">

                                        <div className="py-7 px-10">
                                            <div className="flex w-full lg:w-auto justify-between lg:justify-normal items-center gap-5 ">
                                                <p className="text-[20px]">
                                                    Rating<span className="text-red-500">*</span>
                                                </p>
                                                <StarRating onRatingSelect={handleRatingSelect} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-7 px-10">
                                        <textarea
                                            rows={6}
                                            placeholder="Your Valuable Feedback..."
                                            className="bg-[#E9E9E9A6] w-full px-5 border border-[#CECECE] py-2 rounded-[8px] "
                                            value={desc}
                                            onChange={(e) => setDesc(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <div className="w-full flex justify-center items-center pb-8">
                                        <button
                                            className="px-8 py-2 text-white text-center flex items-center gap-2 rounded-[8px] bg-[#4D8360] hover:brightness-110"
                                            onClick={handleSubmit}
                                        >
                                            Submit Review and Rating
                                        </button>

                                    </div>

                                </>
                                :
                                <div className="w-full bg-white gap-5 border py-10 px-5 lg:px-20 border-[#00000080] text-center text-green-500">
                                    Feedback successfully Posted.!.<br />Thanks for your Gratitude. 🙏
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewPosting