import React, { useEffect, useState, useContext } from "react";
import { Card } from "flowbite-react";
import Navigation from "./navbar";
import Mainfooter from "./footer";
import UserContext from "../UserContext";
import { Alert } from 'flowbite-react';

const Result = () => {
  const [userDetails, setUserDetails] = useState({});
  const [bookings, setBookings] = useState([]);
  const { userId } = useContext(UserContext);
  const slots = ["9:00 AM - 10:00 AM", "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM", "3:00 PM - 4:00 PM"];

  useEffect(() => {
    // Fetch user details and bookings when the component mounts
    const fetchUserDetails = async () => {
      try {
        // Replace '1' with the actual user ID you want to fetch
        const response = await fetch(`http://localhost:5000/api/getUser/currentBooking/${userId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error("fetch error");
        }

        setUserDetails(data.user);
        setBookings(data.bookings);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      <div className="flex flex-col items-center justify-center">
        <Card className="w-full md:max-w-2xl p-6 m-4 bg-white rounded-md shadow-md">
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">User Details and Bookings</h5>
          <div className="mb-4">
            <h6 className="text-xl font-semibold mb-2">User Details:</h6>
            <ul>
              <li><strong>Name:</strong> {userDetails.name}</li>
              <li><strong>User Name:</strong> {userDetails.username}</li>
              <li><strong>Email:</strong> {userDetails.email}</li>
              {/* Add other user details here */}
            </ul>
          </div>
          <hr className="my-4" />
          <Alert color="success" className="mb-4">
            <span className="font-medium">Successfully Booked...!!!!</span> <br />
            Take The Screenshot of the Booking for your Use.
          </Alert>
          <div>
           
            <h6 className="text-xl font-semibold mb-4">Bookings:</h6>
            {bookings.map((booking, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-semibold">Center Details:</p>
                <p><strong>Center Name:</strong> {booking.name}</p>
                <p><strong>Center Location:</strong> {booking.location}</p>
                <p><strong>Center Address:</strong> {booking.address}</p>
                <p className="text-lg font-semibold mt-4">Booking Details:</p>
                <p><strong>Slot ID:</strong> {booking.slot_id}</p>
                <p><strong>Slot Timing:</strong> {slots[booking.slot_id - 1]}</p>
                <p><strong>Patient Name:</strong> {booking.user_name}</p>
                <p><strong>Phone Number:</strong> {booking.phone_number}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Patient Dose:</strong> {booking.dose}</p>
                {/* Add other booking details here */}
              </div>
            ))}
             <hr className="my-4" />
          </div>
        </Card>
      </div>
      <Mainfooter />
    </div>
  );
};

export default Result;
