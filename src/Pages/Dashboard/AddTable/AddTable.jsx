import React from 'react';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AddTable = () => {
    const [date, setDate] = useState(new Date());
    const [breakfast, setBreakfast] = useState({ starts: '8:00 am', accomodations: '' });
    const [lunch, setLunch] = useState({ starts: '12:00 pm', accomodations: '' });
    const [lastcall, setLastCall] = useState({ starts: '8:00 pm', accomodations: '' });
    const [restaurantId, setRestaurantId] = useState('');
    const [tables, setTables] = useState([]);

    useEffect(() => {
        // Fetch restaurant info to get the restaurant ID and tables
        const fetchRestaurantInfo = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/restaurant/ownercall/dr.addictstein@gmail.com');
                const restaurant = response.data;
                setRestaurantId(restaurant._id);
                setTables(restaurant.tables || []);
            } catch (error) {
                console.error('Error fetching restaurant info:', error);
            }
        };
        fetchRestaurantInfo();
    }, []);

    const handleInputChange = (e, setter) => {
        const { name, value } = e.target;
        setter(prevState => ({ ...prevState, [name]: value }));
    };

    const formatDate = (date) => {
        const options = { weekday: 'short', day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedDate = formatDate(date);
        const tableData = {
            date: formattedDate, // Format the date as "Wed 20 July 2024"
            breakfast,
            lunch,
            lastcall
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

    const fetchUpdatedTables = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/restaurant/${restaurantId}`);
            const restaurant = response.data;
            setTables(restaurant.tables || []);
        } catch (error) {
            console.error('Error fetching updated tables:', error);
        }
    };

    const handleDelete = async (date) => {
        try {
            await axios.post(`http://localhost:4000/api/restaurant/deletetable/${restaurantId}`, { data: { date } });
            toast.success('Table data deleted successfully!');
            fetchUpdatedTables();
        } catch (error) {
            console.error('Error deleting table data:', error);
            toast.error('Failed to delete table data.');
        }
    };

    const pickDate = (date) => {
        setDate(date);
        document.getElementById('my_modal_3').showModal();
    };

    const groupedTables = tables.reduce((acc, table) => {
        if (!acc[table.date]) {
            acc[table.date] = [];
        }
        acc[table.date].push(table);
        return acc;
    }, {});

    const sortedDates = Object.keys(groupedTables).sort((a, b) => new Date(b) - new Date(a));

    return (
        <div className='flex flex-col justify-center items-center text-black pt-20'>
            <Toaster />
            <Calendar onChange={pickDate} value={date} />
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
                                            <td className="text-center">Last Call</td>
                                            <td>
                                                <select name="starts" className='border w-full' onChange={(e) => handleInputChange(e, setLastCall)} value={lastcall.starts}>
                                                    <option value="8:00 pm">8:00 pm</option>
                                                    <option value="9:00 pm">9:00 pm</option>
                                                    <option value="10:00 pm">10:00 pm</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="accomodations" className='border w-full' onChange={(e) => handleInputChange(e, setLastCall)} value={lastcall.accomodations} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='text-right mr-4'>
                            <button type='submit' className='bg-[#3749a6] px-4 py-2 text-white'>Save</button>
                        </div>
                    </form>
                </div>
            </dialog>
            <div className='mt-8 w-full'>
                <h2 className='text-2xl mb-4 text-white text-center font-semibold'>Available Tables</h2>
                <div className='flex flex-wrap justify-center'>
                    {sortedDates.map((date) => (
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
                                                <td className='text-center'>Last Call</td>
                                                <td className='text-center'>{table?.lastcall?.starts}</td>
                                                <td className='text-center'>{table?.lastcall?.accomodations}</td>
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-center">
                                <button className='mt-4 bg-red-500 text-white px-4 py-2 rounded' onClick={() => handleDelete(date)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddTable;
