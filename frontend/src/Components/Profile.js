import React, { useContext, useEffect, useState } from "react";
import { Card, Button,Spinner } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import Navigation from "./navbar";
import Mainfooter from "./footer";
import User from "./User";
import axios from "axios";
import UserContext from "../UserContext";

export default function Profile() {

  const serverurl=process.env.REACT_APP_SERVERURL;

  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // Initialize with null
  const { userId } = useContext(UserContext);
  const [bookedSlots, setBookedSlots] = useState([]); // Initialize with an empty array
  const slots = ["9:00 AM - 10:00 AM", "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM","3:00 PM - 4:00 PM"];
  const handleBackClick = () => {
    navigate('/mainindex');
  };
  const fetchData2 = async () => {
    try {
      const response = await axios.get(serverurl+`/api/getUser/${userId}`);
      const { bookings, user } = response.data;
      console.log(userData,bookings)
      setBookedSlots(bookings);
      setUserData(user);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    useEffect(() => { 
      
      const fetchData = async () => {
        try {
          const response = await axios.get(serverurl+`/api/getUser/${userId}`);
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
  
    const handleCancel=async(id)=>{
      try{
        console.log("htjfgkhgk");
        const response=await axios.post(serverurl+`/api/cancelBooking/${id}`);
        console.log(response);
        fetchData2();
      }catch (error) {
        console.error('Error fetching data:', error);  
      }
    };
  
    if (userData === null) {
      // Render loading state while waiting for data
      return <div className="flex justify-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
        <p className="text-lg font-semibold">Loading...</p>
        </div>;
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
                <p className="text-lg font-semibold ">Center Name: {booking.name}</p>
                <p className="text-lg font-semibold ">Slot ID: {booking.slot_id}</p>
                <p className="text-lg font-semibold mb-1">Slot Timing: {slots[booking.slot_id-1]}</p>
                <p className="text-sm text-gray-500 font-semibold">Name: {booking.user_name}</p>
                <p className="text-sm text-gray-500 font-semibold">Date: {booking.date}</p>
                <p className="text-sm text-gray-500 font-semibold">Dose: {booking.dose}</p>
                {/* Add more details as needed */}
                <Button color="dark"   onClick={()=>{handleCancel(booking.id)}}>
                    Cancel Booking
                    <svg
                      className="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
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


  