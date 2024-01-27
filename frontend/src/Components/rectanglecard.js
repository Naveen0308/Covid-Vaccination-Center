import React from 'react';
import { Card, Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function RectangleCard({ center, slot, centerId }) {
  const navigate = useNavigate();
  const slots = ["9:00 AM - 10:00 AM", "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM","3:00 PM - 4:00 PM"];

  const handleBookSlotClick = () => {
    // const centerId = center?.id || ''; // Replace with the actual ID property of your center object
    navigate(`/${centerId}/bookslot/${slot}`);
  };

  return (
    <div className="mt-2 mb-2 ml-10 mr-10">
      <Card>
        <div className="p-6">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Slot-{slot}
          </h5>
          <p className="text-gray-700 dark:text-gray-400 mb-4 ">
            Available count: 25<br />
            Timing: {slots[slot - 1]} <br />
          </p>
        </div>
        <div className="p-4 flex justify-left items-center">
          <Button className="w-md" onClick={handleBookSlotClick}>
            Book Slot
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Card>
    </div>
  );
}


// whitedevil2003.mysql.database.azure.com
// root_user
// Na03@08$7
