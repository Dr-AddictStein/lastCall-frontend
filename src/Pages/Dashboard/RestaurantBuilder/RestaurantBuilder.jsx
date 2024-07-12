import { useState } from 'react';

const RestaurantBuilder = () => {
    const [conditions, setConditions] = useState([]);

    const addCondition = () => {
        setConditions([...conditions, { id: conditions.length, text: '' }]);
    };

    const handleConditionChange = (id, value) => {
        const updatedConditions = conditions.map(condition =>
            condition.id === id ? { ...condition, text: value } : condition
        );
        setConditions(updatedConditions);
    };

    return (
        <div>
            <div className="py-5">
                <h3 className="text-2xl font-semibold">Basic Info</h3>
                <div className="grid grid-cols-2 gap-5 py-5">
                    <div className="">
                        <p>Name</p>
                        <input type="text" className="p-2 mt-2 border border-white rounded-md w-full" />
                    </div>
                    <div className="">
                        <p>Region</p>
                        <select className="p-2 mt-2 text-black border border-white rounded-md w-full" name="" id="">
                            <option value="">region 1</option>
                            <option value="">region 2</option>
                            <option value="">region 3</option>
                        </select>
                    </div>
                    <div className="">
                        <p>City</p>
                        <select className="p-2 mt-2 text-black border border-white rounded-md w-full" name="" id="">
                            <option value="">region 1</option>
                            <option value="">region 2</option>
                            <option value="">region 3</option>
                        </select>
                    </div>
                    <div className="">
                        <p>Phone</p>
                        <input type="text" className="p-2 mt-2 border border-white rounded-md w-full" />
                    </div>
                    <div className="">
                        <p>Website</p>
                        <input type="text" className="p-2 mt-2 border border-white rounded-md w-full" />
                    </div>
                    <div className="">
                        <p>Operating hours</p>
                        <input type="text" className="p-2 mt-2 border border-white rounded-md w-full" />
                    </div>
                    <div className="">
                        <p>Description</p>
                        <input type="text" className="p-2 mt-2 border border-white rounded-md w-full" />
                    </div>
                    <div className="">
                        <p>Social media links</p>
                        <input type="text" className="p-2 mt-2 border border-white rounded-md w-full" />
                    </div>
                </div>
            </div>
            <div className="py-5">
                <h3 className="text-2xl font-semibold">Media</h3>
                <div className="flex gap-5 py-5">
                    <div className="">
                        <p>Thumbnail</p>
                        <input type="file" className="file-input file-input-bordered text-black mt-2 w-full max-w-xs" />
                    </div>
                    <div className="">
                        <p>Banner</p>
                        <input type="file" className="file-input file-input-bordered text-black mt-2 w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex gap-5 pb-5">
                    <div className="">
                        <p>Image 1</p>
                        <input type="file" className="file-input file-input-bordered text-black mt-2 w-full max-w-xs" />
                    </div>
                    <div className="">
                        <p>Image 2</p>
                        <input type="file" className="file-input file-input-bordered text-black mt-2 w-full max-w-xs" />
                    </div>
                    <div className="">
                        <p>Image 3</p>
                        <input type="file" className="file-input file-input-bordered text-black mt-2 w-full max-w-xs" />
                    </div>
                    <div className="">
                        <p>Image 4</p>
                        <input type="file" className="file-input file-input-bordered text-black mt-2 w-full max-w-xs" />
                    </div>
                </div>
            </div>
            <div className="py-5">
                <h3 className="text-2xl font-semibold">Special Conditions</h3>
                <button onClick={addCondition} className="mt-4 border border-white text-black bg-white py-2 px-4 rounded-lg">
                    Add Special Condition
                </button>
                <div className="grid grid-cols-2 gap-5 py-5">
                    {conditions.map(condition => (
                        <div key={condition.id} className="">
                            <p>Condition {condition.id + 1}</p>
                            <input
                                type="text"
                                value={condition.text}
                                onChange={e => handleConditionChange(condition.id, e.target.value)}
                                className="p-2 mt-2 border border-white rounded-md w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='text-center pb-5'>
                <button className="mt-4 border border-white text-black bg-white py-2 px-4 rounded-lg">Add Restaurent</button>
            </div>
        </div>
    );
};

export default RestaurantBuilder;
