import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaInstagram, FaRegStar, FaStar } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const FoodDetails = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selected, setSelected] = useState('false');

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
                    <h1 className="text-[#265582] text-5xl font-semibold">Demo Menu Name <span className="text-white bg-[#ff675c] px-2 text-2xl">New</span></h1>
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
                        <div className="col-span-2 relative">
                            <img className="h-[430px] w-full object-cover" src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" alt="" />
                            <div className="flex gap-2 border-8 bg-white border-white md:absolute mx-auto w-[430px] left-0 right-0 -bottom-10">
                                <div className="w-24 h-16 overflow-hidden">
                                    <img src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" alt="" />
                                </div>
                                <div className="w-24 h-16 overflow-hidden">
                                    <img src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" alt="" />
                                </div>
                                <div className="w-24 h-16 overflow-hidden">
                                    <img src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" alt="" />
                                </div>
                                <div className="w-24 h-16 overflow-hidden">
                                    <img src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 relative">
                            <div className="flex">
                                <div className="">
                                    <img className="h-[215px] object-cover" src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" alt="" />
                                    <img className="h-[215px] object-cover" src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" alt="" />
                                </div>
                                <img className="w-1/2 hidden lg:block h-[430px] object-cover" src="https://zahramediagroup.com/wp-content/uploads/2021/09/Blog-september.jpg" alt="" />
                            </div>
                            <div className="hidden md:block bg-white px-10 py-7 absolute mx-auto w-[430px] left-0 right-0 -bottom-[479px]">
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
                                            <div className="pt-5 flex cursor-pointer text-[#265582] font-semibold items-center text-xl justify-between">
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
                            </div>
                        </div>
                    </div>
                    <div className="pt-14 lg:pb-60">
                        <div className="">
                            <h1 className="text-[#265582] text-5xl font-semibold pb-5">Overview</h1>
                            <p className="lg:w-1/2 w-full text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit unde, officia possimus magnam porro officiis, ea laborum exercitationem autem reprehenderit accusamus totam facilis, eligendi libero? Maiores, amet consequatur nemo culpa inventore in doloribus, odit id voluptas corrupti voluptatem earum ducimus pariatur iste tempore. Amet sed quod atque beatae nisi cum?</p>
                        </div>
                    </div>
                    <div className="md:hidden block bg-white py-16 w-full">
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
                                        <div className={`mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">25 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className={`mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">26 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className={`mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">27 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className={`mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">28 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className={`mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">29 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className={`mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">30 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className={`mb-2 text-white p-3 ${selected ? 'bg-slate-300' : 'bg-[#265582]'}`}>
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">1 Jul</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 flex cursor-pointer text-[#265582] font-semibold items-center text-xl justify-between">
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
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">26 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">27 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">28 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">29 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">30 Jun</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                        <div className="bg-[#265582] relative mb-2 text-white p-3">
                                            <p className="border-b boder-white text-center">Tue</p>
                                            <p className="text-center">1 Jul</p>
                                            <p className="text-center">5:30 pm</p>
                                            <p className="absolute text-sm px-1 bg-[#c7a77b] text-center">50% off</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 flex cursor-pointer text-[#265582] font-semibold items-center text-xl justify-between">
                                        <p>Special Conditions</p>
                                        <FaAngleRight />
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
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