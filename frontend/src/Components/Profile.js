import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import Navigation from "./navbar";
import Mainfooter from "./footer";
import User from "./User";
import axios from "axios";
import UserContext from "../UserContext";

export default function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // Initialize with null
  const { userId } = useContext(UserContext);
  const [bookedSlots, setBookedSlots] = useState([]); // Initialize with an empty array

  const handleBackClick = () => {
    navigate('/mainindex');
  };
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/getUser/${userId}`);
          const { bookings, user } = response.data;
          console.log(userData,bookings)
          setBookedSlots(bookings);
          setUserData(user);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [userId]);
  
    useEffect(() => {
      console.log("bookedSlots:", bookedSlots);
      console.log("userData:", userData);
    }, [bookedSlots, userData]);
  
    if (userData === null) {
      // Render loading state while waiting for data
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <Navigation />
        <User userdata={userData} />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-full md:max-w-xl p-6 m-4">
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Booking History</h5>

            {bookedSlots.map(booking => (
              <Card key={booking.id} className="mb-4 p-4">
                <p className="text-lg font-semibold mb-2">Booking ID:#{booking.id}</p>
                <p className="text-sm text-gray-500 font-semibold">Name: {booking.user_name}</p>
                <p className="text-sm text-gray-500 font-semibold">Date: {booking.date}</p>
                <p className="text-sm text-gray-500 font-semibold">Dose: {booking.dose}</p>
                {/* Add more details as needed */}
              </Card>
            ))}
            {bookedSlots.length === 0 && (
              <p className="text-center text-gray-500">No booking history available.</p>
            )}


            <Button onClick={handleBackClick}>Go Back</Button>
          </div>
        </div>
        <Mainfooter />
      </div>
    );
  };


  