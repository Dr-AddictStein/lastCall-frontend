import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaInstagram, FaRegStar, FaStar } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const FoodDetails = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeTab2, setActiveTab2] = useState(0);
    const [activeTab3, setActiveTab3] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selected, setSelected] = useState('false');
    const [foodData, setFoodData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:4000/api/restaurant`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // const filteredData = data.find(food => food._id === _id); // use this line after using useParams
                setFoodData(data[0]);
                console.log(data[0]);
            })
            .catch(error => console.log(error));
    }, []);

    const slides = [
        {
            img: "https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg",
            title: "MoneyPenny",
            subtitle: "Australian, Fussion, Pub Food",
            days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            dates: ["25", "26", "27", "28", "28", "30", "1"]
        },
        {
            img: "https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg",
            title: "Another Restaurant",
            subtitle: "Italian, Fine Dining",
            days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            dates: ["25", "26", "27", "28", "28", "30", "1"]
        },
        {
            img: "https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg",
            title: "Another Restaurant",
            subtitle: "Italian, Fine Dining",
            days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            dates: ["25", "26", "27", "28", "28", "30", "1"]
        },
        {
            img: "https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg",
            title: "Another Restaurant",
            subtitle: "Italian, Fine Dining",
            days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            dates: ["25", "26", "27", "28", "28", "30", "1"]
        },
        {
            img: "https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg",
            title: "Another Restaurant",
            subtitle: "Italian, Fine Dining",
            days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            dates: ["25", "26", "27", "28", "28", "30", "1"]
        },
        {
            img: "https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg",
            title: "Another Restaurant",
            subtitle: "Italian, Fine Dining",
            days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            dates: ["25", "26", "27", "28", "28", "30", "1"]
        },
        {
            img: "https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg",
            title: "Third Place",
            subtitle: "Fast Food, Burgers",
            days: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"],
            dates: ["25", "26", "27", "28", "28", "30", "1"]
        }
    ];

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="w-11/12 lg:w-2/3 md:w-11/12 mx-auto py-12">
            <div className="text-slate-500 pb-5">
                NewCastle / NewCastel CBD / Demo
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-[#265582] text-5xl font-semibold">{foodData?.name}<span className="text-white bg-[#ff675c] px-2 text-2xl">New</span></h1>
                    <div className="flex gap-4 text-xl items-center">
                        <div className="flex gap-1">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaRegStar className="text-slate-400" />
                            <FaRegStar className="text-slate-400" />
                        </div>
                        <p className="text-slate-500 cursor-pointer hover:border-b border-slate-400">24 reviews</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <FaInstagram className="text-white text-4xl bg-[#265582] p-2 rounded-full" />
                    <GrFacebookOption className="text-white text-4xl bg-[#265582] p-2 rounded-full" />
                </div>
            </div>
            <div className="pt-5">
                <div className="">
                    <div className="grid grid-cols-4">
                        <div className="col-span-2 relative cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
                            <img className="h-[430px] w-full object-cover" src={foodData?.banner} alt="" />
                            <div className="flex lg:gap-1 mt-3 justify-between lg:border-8 bg-white border-white md:absolute mx-auto w-[430px] left-0 right-0 -bottom-10">
                                <div className="w-24 h-16 overflow-hidden">
                                    <img src={foodData?.image1} alt="" />
                                </div>
                                <div className="w-24 h-16 overflow-hidden">
                                    <img src={foodData?.image2} alt="" />
                                </div>
                                <div className="w-24 h-16 overflow-hidden">
                                    <img src={foodData?.image3} alt="" />
                                </div>
                                <div className="w-24 h-16 overflow-hidden bg-black/20">
                                    <img src={foodData?.image4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 relative">
                            <div className="flex cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                <div className="">
                                    <img className="h-[215px] object-cover" src={foodData?.image1} alt="" />
                                    <img className="h-[215px] object-cover" src={foodData?.image2} alt="" />
                                </div>
                                <img className="w-1/2 hidden lg:block h-[430px] object-cover" src={foodData?.image3} alt="" />
                            </div>
                            <dialog id="my_modal_3" className="modal w-full">
                                <div className="modal-box max-w-[100vw] h-[100vh]">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle z-10 bg-white border border-red-600 text-red-600 hover:border-red-600 hover:bg-white btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className="h-[85vh]">
                                        <div className="carousel h-[87vh]">
                                            <div id="slide2" className="carousel-item relative w-full">
                                                <img
                                                    src={foodData?.image1}
                                                    className="w-full object-cover" />
                                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="slide3" className="carousel-item relative w-full">
                                                <img
                                                    src={foodData?.image2}
                                                    className="w-full object-cover" />
                                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                            <div id="slide4" className="carousel-item relative w-full">
                                                <img
                                                    src={foodData?.image3}
                                                    className="w-full object-cover" />
                                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </dialog>
                            <div className={`hidden lg:block bg-white px-10 py-7 absolute mx-auto w-[430px] left-0 right-0 ${activeTab2 === 0 ? '-bottom-[479px]' : '-bottom-[362px]'} `}>
                                {activeTab2 === 0 ?
                                    <div>
                                        <h3 className="text-3xl text-[#265582] font-semibold">Book a First Table</h3>
                                        <p className="text-[#c7a77b]">Get 50% off the food bill or two to four people</p>
                                        <div className="pt-5">
                                            <TabList className="flex justify-center text-center">
                                                <Tab className={`font-semibold text-xl cursor-pointer border-b-2 w-full pb-2 ${activeTab === 0 ? "font-semibold border-black" : "font-normal"}`} onClick={() => setActiveTab(0)} >
                                                    Lunch
                                                </Tab>
                                                <Tab className={`font-semibold text-xl cursor-pointer border-b-2 w-full pb-2 ${activeTab === 1 ? "font-semibold border-black" : "font-normal"}`} onClick={() => setActiveTab(1)} >
                                                    Dinner
                                                </Tab>
                                            </TabList>
                                            <Tabs selectedIndex={activeTab}>
                                                <TabPanel>
                                                    <p className="text-xl font-semibold pt-5">Lunch</p>
                                                    <p>2-4 people</p>
                                                    <div className="grid grid-cols-4 gap-2 pt-2">
                                                        <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">25 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">26 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">27 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">28 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div selected className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">29 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">30 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">1 Jul</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                    </div>
                                                    <div className="pt-5 flex cursor-pointer text-[#265582] font-semibold items-center text-xl justify-between" onClick={() => setActiveTab2(1)}>
                                                        <p className="">Special Conditions</p>
                                                        <FaAngleRight className="mt-1" />
                                                    </div>
                                                </TabPanel>
                                                <TabPanel>
                                                    <p className="text-xl font-semibold pt-5">First Table</p>
                                                    <p>2-4 people</p>
                                                    <div className="grid grid-cols-4 gap-2 pt-2">
                                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">25 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">26 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">27 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">28 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">29 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">30 Jun</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                            <p className="border-b boder-white text-center">Tue</p>
                                                            <p className="text-center">1 Jul</p>
                                                            <p className="text-center">5:30 pm</p>
                                                            <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                        </div>
                                                    </div>
                                                    <div className="pt-5 flex cursor-pointer text-[#265582] font-semibold items-center text-xl justify-between">
                                                        <p>Special Conditions</p>
                                                        <FaAngleRight />
                                                    </div>
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                    </div> :
                                    <div>
                                        <FaAngleLeft className="text-[#265582] text-xl cursor-pointer" onClick={() => setActiveTab2(0)} />
                                        <h4 className="text-2xl py-5 text-[#265582] font-semibold">Special Conditions</h4>
                                        <p>This venue has the following special conditions for First Table reservations:</p>
                                        <ul className="py-5 list-disc ml-5">
                                            <li>The First Table offer applies to the A La carte menu</li>
                                            <li>Diners must order One Main and one beverage</li>
                                            <li>Banquets and Binnie Beef Wagyu 200g MBS9+ Striploin are excluded from the First Table offer</li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="pt-14">
                        <div className="">
                            <h1 className="text-[#265582] text-5xl font-semibold pb-5">Overview</h1>
                            <div className="flex gap-8 pb-8">
                                <p className={`cursor-pointer`}>Australian</p>
                                <p onClick={() => setActiveTab3(1)} className={`cursor-pointer pb-1 ${activeTab3 === 1 && 'border-b border-black'}`}>How to find us</p>
                                <p onClick={() => setActiveTab3(2)} className={`cursor-pointer pb-1 ${activeTab3 === 2 && 'border-b border-black'}`}>Sample menu</p>
                                <p onClick={() => setActiveTab3(3)} className={`cursor-pointer pb-1 ${activeTab3 === 3 && 'border-b border-black'}`}>Contacts</p>
                            </div>
                            <div className="pb-3">
                                {activeTab3 === 1 && <div>
                                    <h4 className="text-2xl font-semibold">How to find us</h4>
                                </div>}
                                {activeTab3 === 2 && <div>
                                    <h4 className="text-2xl font-semibold">Sample Menu</h4>
                                </div>}
                                {activeTab3 === 3 && <div>
                                    <h4 className="text-2xl font-semibold">Contact us</h4>
                                    <div className="pt-3">
                                        <div className="grid grid-cols-3 w-1/2 gap-8">
                                            <div>
                                                <p className="font-semibold text-lg">Address:</p>
                                                <p>There will go very very long long long long long long long address</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-lg">Phone:</p>
                                                <p>016465657878544</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-lg">Website:</p>
                                                <Link>Click here to view</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg pt-8">Open hours:</p>
                                            <div>
                                                <p>Mon - Tue : Closed</p>
                                                <p>Wed - Thu : 12pm - 3pm // 4pm - 8pm</p>
                                                <p>Fri - Sat: 12pm - 3pm //  4pm - 9pm</p>
                                                <p>Sun: 12pm - 3pm //  4pm - 8pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <p className="lg:w-1/2 w-full border-t pt-3 text-justify">{foodData?.description}</p>
                        </div>
                    </div>
                    <div className="lg:hidden block bg-white py-16 w-full">
                        {activeTab2 === 0 ?
                            <div>
                                <h3 className="text-3xl text-[#265582] font-semibold">Book a First Table</h3>
                                <p className="text-[#c7a77b]">Get 50% off the food bill or two to four people</p>
                                <div className="pt-5">
                                    <TabList className="flex justify-center text-center">
                                        <Tab className={`font-semibold text-xl cursor-pointer border-b-2 w-full pb-2 ${activeTab === 0 ? "font-semibold border-black" : "font-normal"}`} onClick={() => setActiveTab(0)} >
                                            Lunch
                                        </Tab>
                                        <Tab className={`font-semibold text-xl cursor-pointer border-b-2 w-full pb-2 ${activeTab === 1 ? "font-semibold border-black" : "font-normal"}`} onClick={() => setActiveTab(1)} >
                                            Dinner
                                        </Tab>
                                    </TabList>
                                    <Tabs selectedIndex={activeTab}>
                                        <TabPanel>
                                            <p className="text-xl font-semibold pt-5">Lunch</p>
                                            <p>2-4 people</p>
                                            <div className="grid grid-cols-4 gap-2 pt-2">
                                                <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">25 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">26 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">27 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">28 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div selected className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">29 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">30 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className={`relative mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">1 Jul</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                            </div>
                                            <div className="pt-5 flex cursor-pointer text-[#265582] font-semibold items-center text-xl justify-between" onClick={() => setActiveTab2(1)}>
                                                <p className="">Special Conditions</p>
                                                <FaAngleRight className="mt-1" />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <p className="text-xl font-semibold pt-5">First Table</p>
                                            <p>2-4 people</p>
                                            <div className="grid grid-cols-4 gap-2 pt-2">
                                                <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">25 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">26 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">27 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">28 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">29 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">30 Jun</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                                <div className="bg-[#265582] relative mb-2 text-white p-3">
                                                    <p className="border-b boder-white text-center">Tue</p>
                                                    <p className="text-center">1 Jul</p>
                                                    <p className="text-center">5:30 pm</p>
                                                    <p className="absolute text-sm px-1 bg-[#c7a77b]">50% off</p>
                                                </div>
                                            </div>
                                            <div className="pt-5 flex cursor-pointer text-[#265582] font-semibold items-center text-xl justify-between">
                                                <p>Special Conditions</p>
                                                <FaAngleRight />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div> :
                            <div>
                                <FaAngleLeft className="text-[#265582] text-xl cursor-pointer" onClick={() => setActiveTab2(0)} />
                                <h4 className="text-2xl py-5 text-[#265582] font-semibold">Special Conditions</h4>
                                <p>This venue has the following special conditions for First Table reservations:</p>
                                <ul className="py-5 list-disc ml-5">
                                    <li>The First Table offer applies to the A La carte menu</li>
                                    <li>Diners must order One Main and one beverage</li>
                                    <li>Banquets and Binnie Beef Wagyu 200g MBS9+ Striploin are excluded from the First Table offer</li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className={`${foodData?.description?.length > 30 ? 'pt-72' : 'pt-20'}`}>
                        <h1 className="text-[#265582] text-5xl font-semibold pb-2">What people say</h1>
                        <div className="pb-9 border-b">
                            <div className="flex gap-4 text-xl items-center">
                                <div className="flex gap-1">
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaRegStar className="text-slate-400" />
                                    <FaRegStar className="text-slate-400" />
                                </div>
                                <p className="text-slate-500 cursor-pointer hover:border-b border-slate-400">24 reviews</p>
                            </div>
                        </div>
                        <div className="py-5 border-b mb-">
                            <Link to={'/profile/update'} className="avatar absolute">
                                <div className="w-14 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </Link>
                            <div>
                                <div className="pl-[70px]">
                                    <div className="flex gap-3 items-center">
                                        <p className="text-xl font-semibold">Elina Gilbert</p>
                                        <div className="flex gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaRegStar className="text-slate-400" />
                                            <FaRegStar className="text-slate-400" />
                                        </div>
                                    </div>
                                    <p className="text-slate-500">Dined at Elixiba on 28 Apr 2024</p>
                                </div>
                                <p className="pt-5 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dignissimos, ratione incidunt explicabo deleniti corporis maiores cum nobis cupiditate tenetur maxime sed cumque harum totam culpa vero eos sequi saepe.</p>
                            </div>
                        </div>
                        <div className="py-5 border-b mb-">
                            <Link to={'/profile/update'} className="avatar absolute">
                                <div className="w-14 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </Link>
                            <div>
                                <div className="pl-[70px]">
                                    <div className="flex gap-3 items-center">
                                        <p className="text-xl font-semibold">Stefan Salvator</p>
                                        <div className="flex gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                        </div>
                                    </div>
                                    <p className="text-slate-500">Dined at Elixiba on 28 Apr 2024</p>
                                </div>
                                <p className="pt-5 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dignissimos, ratione incidunt explicabo deleniti corporis maiores cum nobis cupiditate tenetur maxime sed cumque harum totam culpa vero eos sequi saepe.</p>
                            </div>
                        </div>
                        <div className="py-5 border-b mb-">
                            <Link to={'/profile/update'} className="avatar absolute">
                                <div className="w-14 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </Link>
                            <div>
                                <div className="pl-[70px]">
                                    <div className="flex gap-3 items-center">
                                        <p className="text-xl font-semibold">Stefan Salvator</p>
                                        <div className="flex gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <FaStar className="text-yellow-400" />
                                            <FaRegStar className="text-slate-400" />
                                            <FaRegStar className="text-slate-400" />
                                            <FaRegStar className="text-slate-400" />
                                        </div>
                                    </div>
                                    <p className="text-slate-500">Dined at Elixiba on 28 Apr 2024</p>
                                </div>
                                <p className="pt-5 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dignissimos, ratione incidunt explicabo deleniti corporis maiores cum nobis cupiditate tenetur maxime sed cumque harum totam culpa vero eos sequi saepe.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`flex justify-between items-center pt-20`}>
                            <h1 className="text-[#265582] text-5xl font-semibold pb-5">Nearby Newcastle restaurants</h1>
                            <div className="flex gap-2 text-5xl text-[#265582]">
                                <FaAngleLeft onClick={handlePrev} className="cursor-pointer" />
                                <FaAngleRight onClick={handleNext} className="cursor-pointer" />
                            </div>
                        </div>
                        <div id="carousel-component" className="">
                            <div className="overflow-hidden w-full">
                                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                    {slides.map((slide, index) => (
                                        <div key={index} className="w-full px-2">
                                            <img className="w-[300px] h-[300px] object-cover" src={slide.img} alt={slide.title} />
                                            <div className="px-4 py-2">
                                                <h2 className="text-lg font-semibold text-[#265582]">{slide.title}</h2>
                                                <p className="text-slate-500">{slide.subtitle}</p>
                                                <div className="overflow-x-auto">
                                                    <table className="table table-xs mt-5">
                                                        <tbody>
                                                            <tr>
                                                                {slide.days.map((day, i) => (
                                                                    <td key={i}>{day}</td>
                                                                ))}
                                                            </tr>
                                                            <tr>
                                                                {slide.dates.map((date, i) => (
                                                                    <td key={i}>{date}</td>
                                                                ))}
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;