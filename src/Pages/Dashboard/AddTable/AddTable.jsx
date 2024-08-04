import React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';

const AddTable = () => {

    const { user } = useContext(AuthContext);


    const [date, setDate] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState('');
    const [breakfast, setBreakfast] = useState({ starts: '8:00 am', accomodations: '' });
    const [lunch, setLunch] = useState({ starts: '12:00 pm', accomodations: '' });
    const [dinnerFirstCall, setDinnerFirstCall] = useState({ starts: '6:00 pm', accomodations: '' });
    const [dinnerLastCall, setDinnerLastCall] = useState({ starts: '10:00 pm', accomodations: '' });
    const [restaurantId, setRestaurantId] = useState('');
    const [tables, setTables] = useState([]);

    useEffect(() => {
        // Fetch restaurant info to get the restaurant ID and tables
        const fetchRestaurantInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/restaurant/ownercall/${user?.user?.email}`);
                const restaurant = response.data;
                setRestaurantId(restaurant._id);
                setTables(restaurant.tables || []);
            } catch (error) {
                console.error('Error fetching restaurant info:', error);
            }
        };
        fetchRestaurantInfo();
    }, [user]);

    const handleInputChange = (e, setter) => {
        const { name, value } = e.target;
        setter(prevState => ({ ...prevState, [name]: value }));
    };

    const formatDate = (date) => {
        const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };

    const handleSubmit = async (e, isClosed = false) => {
        e.preventDefault();
        const formattedDate = formatDate(date);
        const tableData = {
            date: formattedDate,
            isclosed: isClosed,
            breakfast,
            lunch,
            dinnerfirstcall: dinnerFirstCall,
            dinnerlastcall: dinnerLastCall,
        };

        try {
            await axios.post(`http://localhost:4000/api/restaurant/addtable/${restaurantId}`, tableData);
            toast.success('Table data saved successfully!');
            document.getElementById('my_modal_3').close();
            fetchUpdatedTables();
        } catch (error) {
            console.error('Error saving table data:', error);
            toast.error('Failed to save table data.');
        }
    };

    const handleSubmitDay = async (e, isClosed = false) => {
        e.preventDefault();
        const dayOfWeek = selectedDay; // Directly use the selectedDay
        const dayData = {
            dayOfWeek,
            isclosed: isClosed,
            breakfast,
            lunch,
            dinnerfirstcall: dinnerFirstCall,
            dinnerlastcall: dinnerLastCall,
        };

        try {
            await axios.post(`http://localhost:4000/api/restaurant/addweekdaytables/${restaurantId}`, dayData);
            toast.success('Day table data saved successfully!');
            document.getElementById('day_modal').close();
            fetchUpdatedTables();
        } catch (error) {
            console.error('Error saving day table data:', error);
            toast.error('Failed to save day table data.');
        }
    };

    const fetchUpdatedTables = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/restaurant/${restaurantId}`);
            const restaurant = response.data;
            setTables(restaurant.tables || []);
        } catch (error) {
            console.error('Error fetching updated tables:', error);
        }
    };

    const handleToggleClose = async (date, isClosed) => {
        try {
            // Find the current table data for the specific date
            const tableToUpdate = tables.find(table => table.date === date);
            if (!tableToUpdate) {
                toast.error('Table data not found.');
                return;
            }

            // Update the isclosed status
            const updatedTableData = { ...tableToUpdate, isclosed: isClosed };

            await axios.post(`http://localhost:4000/api/restaurant/addtable/${restaurantId}`, updatedTableData);
            toast.success(`Table ${isClosed ? 'closed' : 'made available'} successfully!`);
            fetchUpdatedTables();
        } catch (error) {
            console.error(`Error ${isClosed ? 'closing' : 'making available'} table:`, error);
            toast.error(`Failed to ${isClosed ? 'close' : 'make available'} table.`);
        }
    };

    const pickDate = (date) => {
        setDate(date);
        document.getElementById('my_modal_3').showModal();
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
        document.getElementById('day_modal').showModal();
    };

    const groupedTables = tables.reduce((acc, table) => {
        if (!acc[table.date]) {
            acc[table.date] = [];
        }
        acc[table.date].push(table);
        return acc;
    }, {});

    const today = new Date();
    const upcomingTables = Object.keys(groupedTables)
        .filter(date => new Date(date) >= today)
        .sort((a, b) => new Date(a) - new Date(b))
        .slice(0, 7);

    return (
        <div className='flex flex-col justify-center items-center text-black pt-20'>
            <Toaster />
            <div className='flex space-x-4'>
                <Calendar onChange={pickDate} value={date} />
                <div className='flex flex-col space-y-2'>
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                        <button
                            key={day}
                            className='bg-blue-500 text-white p-2 rounded'
                            onClick={() => handleDayClick(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr className="text-black">
                                            <td className='text-center'>Category</td>
                                            <td className='text-center'>Starting Time</td>
                                            <td className='text-center'>Accomodations</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td className="text-center">Breakfast</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setBreakfast)} value={breakfast.starts}>
                                                    <option value="8:00 am">8:00 am</option>
                                                    <option value="9:00 am">9:00 am</option>
                                                    <option value="10:00 am">10:00 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setBreakfast)} value={breakfast.accomodations} />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td className="text-center">Lunch</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setLunch)} value={lunch.starts}>
                                                    <option value="12:00 pm">12:00 pm</option>
                                                    <option value="1:00 pm">1:00 pm</option>
                                                    <option value="2:00 pm">2:00 pm</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setLunch)} value={lunch.accomodations} />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td className="text-center">Dinner First Call</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setDinnerFirstCall)} value={dinnerFirstCall.starts}>
                                                    <option value="6:00 pm">6:00 pm</option>
                                                    <option value="7:00 pm">7:00 pm</option>
                                                    <option value="8:00 pm">8:00 pm</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setDinnerFirstCall)} value={dinnerFirstCall.accomodations} />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td className="text-center">Dinner Last Call</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setDinnerLastCall)} value={dinnerLastCall.starts}>
                                                    <option value="9:00 pm">9:00 pm</option>
                                                    <option value="10:00 pm">10:00 pm</option>
                                                    <option value="11:00 pm">11:00 pm</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setDinnerLastCall)} value={dinnerLastCall.accomodations} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className='text-right mr-4 mt-2 '>
                                <button type='submit' className='bg-[#3749a6] px-4 py-2 text-white rounded'>Save</button>
                            </div>
                            <div className='text-right mr-4 mt-2 '>
                                <button type='button' onClick={(e) => handleSubmit(e, true)} className='bg-red-500 px-4 py-2 text-white rounded'>Make Closed</button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
            <dialog id="day_modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleSubmitDay}>
                        <div>
                            <h3 className='text-xl font-bold mb-4 text-center'>{selectedDay}</h3>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr className="text-black">
                                            <td className='text-center'>Category</td>
                                            <td className='text-center'>Starting Time</td>
                                            <td className='text-center'>Accomodations</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td className="text-center">Breakfast</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setBreakfast)} value={breakfast.starts}>
                                                    <option value="8:00 am">8:00 am</option>
                                                    <option value="9:00 am">9:00 am</option>
                                                    <option value="10:00 am">10:00 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setBreakfast)} value={breakfast.accomodations} />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td className="text-center">Lunch</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setLunch)} value={lunch.starts}>
                                                    <option value="12:00 pm">12:00 pm</option>
                                                    <option value="1:00 pm">1:00 pm</option>
                                                    <option value="2:00 pm">2:00 pm</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setLunch)} value={lunch.accomodations} />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td className="text-center">Dinner First Call</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setDinnerFirstCall)} value={dinnerFirstCall.starts}>
                                                    <option value="6:00 pm">6:00 pm</option>
                                                    <option value="7:00 pm">7:00 pm</option>
                                                    <option value="8:00 pm">8:00 pm</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setDinnerFirstCall)} value={dinnerFirstCall.accomodations} />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td className="text-center">Dinner Last Call</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setDinnerLastCall)} value={dinnerLastCall.starts}>
                                                    <option value="9:00 pm">9:00 pm</option>
                                                    <option value="10:00 pm">10:00 pm</option>
                                                    <option value="11:00 pm">11:00 pm</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setDinnerLastCall)} value={dinnerLastCall.accomodations} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className='text-right mr-4 mt-2 '>
                                <button type='submit' className='bg-[#3749a6] px-4 py-2 text-white rounded'>Save</button>
                            </div>
                            <div className='text-right mr-4 mt-2 '>
                                <button type='button' onClick={(e) => handleSubmitDay(e, true)} className='bg-red-500 px-4 py-2 text-white rounded'>Make Closed</button>
                            </div>

                        </div>
                    </form>
                </div>
            </dialog>
            <div className='mt-8 w-full'>
                <h2 className='text-2xl mb-4 text-white text-center font-semibold'>Upcoming Tables</h2>
                <div className='flex flex-wrap justify-center'>
                    {upcomingTables.map((date) => (
                        <div key={date} className='bg-white shadow-md rounded-lg p-4 m-4 w-full md:w-1/2 lg:w-1/3'>
                            <h3 className='text-xl font-bold mb-2 text-center'>{date}</h3>
                            <table className='table'>
                                <thead>
                                    <tr className='text-black'>
                                        <td className='text-center'>Category</td>
                                        <td className='text-center'>Starting Time</td>
                                        <td className='text-center'>Accomodations</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupedTables[date].map((table, index) => (
                                        <React.Fragment key={index}>
                                            <tr className='hover:text-black hover:bg-white'>
                                                <td className='text-center'>Breakfast</td>
                                                <td className='text-center'>{table?.breakfast?.starts}</td>
                                                <td className='text-center'>{table?.breakfast?.accomodations}</td>
                                            </tr>
                                            <tr className='hover:text-black hover:bg-white'>
                                                <td className='text-center'>Lunch</td>
                                                <td className='text-center'>{table?.lunch?.starts}</td>
                                                <td className='text-center'>{table?.lunch?.accomodations}</td>
                                            </tr>
                                            <tr className='hover:text-black hover:bg-white'>
                                                <td className='text-center'>Dinner First Call</td>
                                                <td className='text-center'>{table?.dinnerfirstcall?.starts}</td>
                                                <td className='text-center'>{table?.dinnerfirstcall?.accomodations}</td>
                                            </tr>
                                            <tr className='hover:text-black hover:bg-white'>
                                                <td className='text-center'>Dinner Last Call</td>
                                                <td className='text-center'>{table?.dinnerlastcall?.starts}</td>
                                                <td className='text-center'>{table?.dinnerlastcall?.accomodations}</td>
                                            </tr>
                                            <div className="flex justify-center">
                                                {!table.isclosed ? (
                                                    <button className='mt-4 bg-red-500 text-white px-4 py-2 rounded' onClick={() => handleToggleClose(date, true)}>Close</button>
                                                ) : (
                                                    <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded' onClick={() => handleToggleClose(date, false)}>Make Available</button>
                                                )}
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddTable;
