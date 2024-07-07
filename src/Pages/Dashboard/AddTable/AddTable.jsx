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
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form action="">
                        <div className='flex items-center gap-4'>
                            <p className='text-nowrap pr-2'>Breakfast :</p>
                            <select name="startingTime" className='border w-full mb-5' id="">
                                <option value="">8:00 am</option>
                                <option value="">9:00 am</option>
                                <option value="">10:00 am</option>
                            </select>
                            <select name="endingTime" className='border w-full mb-5' id="">
                                <option value="">8:30 am</option>
                                <option value="">9:30 am</option>
                                <option value="">10:30 am</option>
                            </select>
                            <p className='text-nowrap'>6-10 people</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='text-nowrap pr-7'>Lunch :</p>
                            <select name="startingTime" className='border w-full mb-5' id="">
                                <option value="">8:00 am</option>
                                <option value="">9:00 am</option>
                                <option value="">10:00 am</option>
                            </select>
                            <select name="endingTime" className='border w-full mb-5' id="">
                                <option value="">8:30 am</option>
                                <option value="">9:30 am</option>
                                <option value="">10:30 am</option>
                            </select>
                            <p className='text-nowrap'>6-10 people</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='text-nowrap'>First Table :</p>
                            <select name="startingTime" className='border w-full mb-5' id="">
                                <option value="">8:00 am</option>
                                <option value="">9:00 am</option>
                                <option value="">10:00 am</option>
                            </select>
                            <select name="endingTime" className='border w-full mb-5' id="">
                                <option value="">8:30 am</option>
                                <option value="">9:30 am</option>
                                <option value="">10:30 am</option>
                            </select>
                            <p className='text-nowrap'>6-10 people</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='text-nowrap'>Last Table :</p>
                            <select name="startingTime" className='border w-full mb-5' id="">
                                <option value="">8:00 am</option>
                                <option value="">9:00 am</option>
                                <option value="">10:00 am</option>
                            </select>
                            <select name="endingTime" className='border w-full mb-5' id="">
                                <option value="">8:30 am</option>
                                <option value="">9:30 am</option>
                                <option value="">10:30 am</option>
                            </select>
                            <p className='text-nowrap'>6-10 people</p>
                        </div>
                        <div className='text-right'>
                            <button className='bg-[#3749a6] px-4 py-2 text-white'>Save</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddTable;
