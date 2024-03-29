import React, { useEffect, useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function RectangleCard({ center, slot, centerId, date }) {

  const serverurl=process.env.REACT_APP_SERVERURL;

  const navigate = useNavigate();
  const slots = ["9:00 AM - 10:00 AM", "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM","3:00 PM - 4:00 PM"];
  const [slotsData, setSlotsData] = useState(2);
  useEffect(() => {
    const fetchData = async () => {
      try{
      console.log(date);
      const response= await fetch(serverurl+`/api/get-slot/${centerId}/${slot}/${date.toString()}`);
      const data = await response.json();
      console.log("data",data.data);
      setSlotsData(25 - data.data.length);
    
  }catch(err){
      console.log(err);
    }}
    fetchData();
  },[date])
  const handleBookSlotClick = () => {
    const datestring = date.toString();
    if(datestring.length>10){
      alert("Please select a valid date");
    }
    else{
    // const centerId = center?.id || ''; // Replace with the actual ID property of your center object
    navigate(`/${centerId}/bookslot/${slot}/${date}`);
    }
  };
  const handleNoslot = () => {
    alert("No slot avaliable for this center on this date");
  }

  return (
    <div className="mt-2 mb-2 ml-10 mr-10">
      <Card>
        <div className="p-6">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Slot-{slot}
          </h5>
          <p className="text-gray-700 dark:text-gray-400 mb-4 ">
            Available count: {slotsData}<br />
            Timing: {slots[slot - 1]} <br />
          </p>
        </div>
        {(slotsData!==0)?<div className="p-4 flex justify-left items-center">
          <Button className="w-md" onClick={handleBookSlotClick}>
            Book Slot
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>:<div className="p-4 flex justify-left items-center">
          <Button className="w-md" onClick={handleNoslot}>
            Slot not Available
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>}
      </Card>
    </div>
  );
}


// whitedevil2003.mysql.database.azure.com
// root_user
// Na03@08$7
