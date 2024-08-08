import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';
import { Link, useParams } from "react-router-dom";

const ViewReservationsForAdmin = () => {

  const { user } = useContext(AuthContext);

  const { id } = useParams();

  const [restu, setRestu] = useState(null);
  const [resvs, setResvs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/restaurant/reservations/${user?.user?.email}`);
        console.log("Fetched data:", response.data); // Log the fetched data
        setResvs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reservations:", error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchReservations();
  }, [restu]);

  useEffect(() => {
    console.log("Updated reservations:", resvs);
    if (resvs) {
      setLoading(false);

    }
  }, [resvs]);


  const fetchRestaurantData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/restaurant/${id}`);
      const data = response.data;

      setRestu(data);


    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };

  useEffect(() => {

    fetchRestaurantData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="overflow-x-auto m-10">
      <div className=" pt-16 mb-10">
        <ul className='flex justify-center gap-6'>
          <li>
            <Link to={`/dashboard/adminRestaurant/restaurantBuilder/${restu?._id}`} className='bg-white text-black px-4 py-2 rounded font-semibold'>Basic Info</Link>
          </li>
          <li>
            <Link to={`/dashboard/adminRestaurant/viewReservations/${restu?._id}`} className='bg-white text-black px-4 py-2 rounded font-semibold'>View Reservation</Link>
          </li>
          <li>
            <Link to={`/dashboard/adminRestaurant/addTable/${restu?._id}`} className='bg-white text-black px-4 py-2 rounded font-semibold'>Manage Tables</Link>
          </li>
          <li>
            <Link to={`/dashboard/adminRestaurant/viewEmployees/${restu?._id}`} className='bg-white text-black px-4 py-2 rounded font-semibold'>Employees</Link>
          </li>
        </ul>
      </div>
      <table className="table">
        <thead>
          <tr className="text-white hover:text-black hover:bg-white">
            <th>Sl. No.</th>
            <th>Restaurant Name</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Phone</th>
            <th>No. of People</th>
            <th>Date</th>
            <th>Time</th>
            <th>Table Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {resvs.map((resv, index) => (
            <tr key={resv._id} className="hover:text-black hover:bg-white">
              <td>{index + 1}</td>
              <td>{resv.restaurant.name}</td>
              <td>{resv.reservedFor}</td>
              <td>{resv.reservedForMail}</td>
              <td>{resv.reservedForPhone}</td>
              <td>{resv.people}</td>
              <td>{resv.date}</td>
              <td>{resv.time}</td>
              <td>{resv.tableType}</td>
              <td>
                <div className="flex gap-2">
                  <FaRegEdit
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                  // onClick={() => handleEdit(resv)}
                  />
                  <RiDeleteBin6Line
                    className="border cursor-pointer border-white p-1 text-2xl rounded-md"
                  // onClick={() => handleDelete(resv._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewReservationsForAdmin;
