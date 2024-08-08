import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import moment from 'moment';

const UpcomingBookings = () => {
  const { user } = useContext(AuthContext);
  const [filteredReservations, setFilteredReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/reservation');
        const data = response.data;

        // Filter reservations for the logged-in user
        const userReservations = data.filter(reservation => reservation.reservedForMail === user?.user?.email);

        // Further filter reservations to only include future reservations
        const upcomingReservations = userReservations.filter(reservation => {
          const reservationDateTime = moment(`${reservation.date} ${reservation.time}`, 'ddd DD MMMM YYYY h:mm a');
          return reservationDateTime.isAfter(moment());
        });

        setFilteredReservations(upcomingReservations);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    if (user?.user?.email) {
      fetchReservations();
    }
  }, [user]);

  return (
    <div className="container mx-auto py-10">
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
                <th className="py-2 px-4 border-b">Review</th>
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
                  <td className="py-2 px-4 border-b">{reservation.leaveReview ? 'Yes' : 'No'}</td>
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
