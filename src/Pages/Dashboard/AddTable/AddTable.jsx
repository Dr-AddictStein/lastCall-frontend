import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AddTable = () => {
    const [date, setDate] = useState(new Date());

    const pickDate = (date) => {
        setDate(date);
        document.getElementById('my_modal_3').showModal();
    }

    return (
        <div className='flex justify-center items-center text-black'>
            <Calendar onChange={pickDate} value={date} />
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="">
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr className="text-black">
                                            <td>Category</td>
                                            <td>Starting Time</td>
                                            <td>Ending Time</td>
                                            <td>Max People</td>
                                            <td>Min People</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td>Breakfast</td>
                                            <td>
                                                <select name="startingTime" className='border w-full' id="">
                                                    <option value="">8:00 am</option>
                                                    <option value="">9:00 am</option>
                                                    <option value="">10:00 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select name="endingTime" className='border w-full' id="">
                                                    <option value="">8:30 am</option>
                                                    <option value="">9:30 am</option>
                                                    <option value="">10:30 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" className='border w-full' />
                                            </td>
                                            <td>
                                                <input type="text" className='border w-full' />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td>Lunch</td>
                                            <td>
                                                <select name="startingTime" className='border w-full' id="">
                                                    <option value="">8:00 am</option>
                                                    <option value="">9:00 am</option>
                                                    <option value="">10:00 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select name="endingTime" className='border w-full' id="">
                                                    <option value="">8:30 am</option>
                                                    <option value="">9:30 am</option>
                                                    <option value="">10:30 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" className='border w-full' />
                                            </td>
                                            <td>
                                                <input type="text" className='border w-full' />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td>First Table</td>
                                            <td>
                                                <select name="startingTime" className='border w-full' id="">
                                                    <option value="">8:00 am</option>
                                                    <option value="">9:00 am</option>
                                                    <option value="">10:00 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select name="endingTime" className='border w-full' id="">
                                                    <option value="">8:30 am</option>
                                                    <option value="">9:30 am</option>
                                                    <option value="">10:30 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" className='border w-full' />
                                            </td>
                                            <td>
                                                <input type="text" className='border w-full' />
                                            </td>
                                        </tr>
                                        <tr className="hover:text-black hover:bg-white">
                                            <td>Last Table</td>
                                            <td>
                                                <select name="startingTime" className='border w-full' id="">
                                                    <option value="">8:00 am</option>
                                                    <option value="">9:00 am</option>
                                                    <option value="">10:00 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select name="endingTime" className='border w-full' id="">
                                                    <option value="">8:30 am</option>
                                                    <option value="">9:30 am</option>
                                                    <option value="">10:30 am</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" className='border w-full' />
                                            </td>
                                            <td>
                                                <input type="text" className='border w-full' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='text-right mr-4'>
                            <button className='bg-[#3749a6] px-4 py-2 text-white'>Save</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddTable;
