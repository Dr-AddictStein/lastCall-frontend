import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ViewReservations = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr className="text-white hover:text-black hover:bg-white">
                        <th>Sl. No.</th>
                        <th>Region Name</th>
                        <th>Cities</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:text-black hover:bg-white">
                        <td>1</td>
                        <td>name</td>
                        <td>
                            <ul className="list-disc list-inside">
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </td>
                        <td className="">
                            <div className="flex gap-2">
                                <FaRegEdit
                                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                                // onClick={() => handleEdit(region)}
                                />
                                <RiDeleteBin6Line
                                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                                // onClick={() => handleDelete(region._id)}
                                />

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ViewReservations;