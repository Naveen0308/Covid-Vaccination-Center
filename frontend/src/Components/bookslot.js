import React, { useEffect, useState, useContext } from "react";
import { Button, Radio, Label, TextInput, Textarea, Card } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
import Navigation from "./navbar";
import Mainfooter from "./footer";
import UserContext from "../UserContext";

const Bookslot = () => {
  const [center, setCenter] = useState({});
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [date,setDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dose, setDose] = useState("Dose1");
  const {userId} = useContext(UserContext);
  const navigate = useNavigate();

  const pathname = window.location.pathname;
  const match = pathname.split('/');
  const id = match ? match[3] : null;
  const centerId = match ? match[1] : 0;
  const fetchCenter = async () => {
    // const id = idslot[0];

    if (id != null) {
      try {
        const response = await fetch('http://localhost:5000/api/all-center');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error("fetch error");
        }

        // Find the specific center based on the id
        const selectedCenter = data.center.find(center => center.id === parseInt(id, 10));

        if (selectedCenter) {
          setCenter(selectedCenter);
        } else {
          console.error("Center not found for the given ID");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("No ID found in the URL");
    }
  };
  
  console.log("user's id",userId)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Ensure that center.id is available
      // if (!center || !center.id) {
        //   console.error('Invalid center data:', center);
      //   throw new Error('Invalid center data');
      // }
      const response = await fetch('http://localhost:5000/api/book-slot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          center_id: centerId,
          name,
          phonenumber,
          age,
          date,
          email,
          address,
          dose,
        }),
      });

      if (!response.ok) {
        throw new Error('Slot booking failed');
      }

      const data = await response.json();
      console.log(data); // You can handle success accordingly, e.g., show a success message, redirect to a confirmation page, etc.
      navigate('/result');
    } catch (error) {
      console.error('Error booking slot:', error);
      // Handle error, show an error message to the user, etc.
    }
  };


  useEffect(() => {
    fetchCenter();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Card className="w-full md:max-w-xl p-6 m-4">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Enter Form Details</h5>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Name" value="Patient Name:" />
              </div>
              <TextInput id="name" type="text" placeholder="Patient Name:" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phonenumber" value="Phone Number:" />
              </div>
              <TextInput id="phonenumber" type="text" placeholder="Phone Number:" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="age" value="Age:" />
              </div>
              <TextInput id="age" type="text" placeholder="Age:" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="date" value="Date:" />
              </div>
              <TextInput id="date" type="text" placeholder="DD/MM/YYYY" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Email:" />
              </div>
              <TextInput id="email1" type="email" placeholder="Email:" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="address" value="Your Address:" />
              </div>
              <Textarea id="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required rows={4} />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Radio id="dose1" name="dosage" value="Dose1" checked={dose === "Dose1"} onClick={(e) => setDose(e.target.value)} />
                <Label htmlFor="dose1">Dose 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="dose2" name="dosage" value="Dose2" checked={dose === "Dose2"} onClick={(e) => setDose(e.target.value)} />
                <Label htmlFor="dose2">Dose 2</Label>
              </div>
            </div>
            <Button type="submit" onClick={handleSubmit}>Confirm Slot</Button>
          </form>
        </Card>
      </div>
      <Mainfooter />
    </div>
  );
}

export default Bookslot;
