import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpcomingBookings = () => {
  const { user } = useContext(AuthContext);
  const [filteredReservations, setFilteredReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/reservation');
      const data = response.data;
  
      // Filter reservations for the logged-in user
      const userReservations = data.filter(reservation => reservation.reservedForMail === user?.user?.email);
  
      // Further filter reservations to only include future reservations
      const upcomingReservations = userReservations.filter(reservation => {
        const reservationDateTime = moment(reservation.date, 'ddd MMM DD YYYY'); // Adjust the format to match your database date format
        return reservationDateTime.isAfter(moment(), 'day'); // Compare with the current date, ignoring the time part
      });
  
      console.log("Upcoming Reservations:", upcomingReservations);
  
      setFilteredReservations(upcomingReservations);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };
  useEffect(() => {

    if (user?.user?.email) {
      fetchReservations();
    }
  }, [user]);

  const handleCancelReservation = async (reservationId) => {
    try {
      await axios.delete(`http://localhost:4000/api/reservation/${reservationId}`);
      // Refresh the reservations after canceling
      setFilteredReservations(prevReservations => prevReservations.filter(reservation => reservation._id !== reservationId));
      // Show success toast notification
      fetchReservations();
      toast.success('Reservation canceled successfully');
    } catch (error) {
      console.error('Error canceling reservation:', error);
      // Show error toast notification
      toast.error('Failed to cancel reservation');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <ToastContainer />
      <h2 className="text-center text-3xl font-semibold mb-6">Upcoming Reservations</h2>
      {filteredReservations.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Restaurant Name</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time</th>
                <th className="py-2 px-4 border-b">People</th>
                <th className="py-2 px-4 border-b">Table Type</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Cancel Reservation</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map((reservation, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2 px-4 border-b">{reservation.restaurant.name}</td>
                  <td className="py-2 px-4 border-b">{reservation.date}</td>
                  <td className="py-2 px-4 border-b">{reservation.time}</td>
                  <td className="py-2 px-4 border-b">{reservation.people}</td>
                  <td className="py-2 px-4 border-b">{reservation.tableType}</td>
                  <td className="py-2 px-4 border-b">{reservation.reservedForPhone}</td>
                  <td className="py-2 px-4 border-b">{reservation.reservedForMail}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleCancelReservation(reservation._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">No upcoming reservations.</p>
      )}
    </div>
  );
};

export default UpcomingBookings;
