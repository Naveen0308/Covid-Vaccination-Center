import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
export default function RectangleCard({center, slot}){
    const navigate = useNavigate();
    const slots = ["9:00 AM - 10:00 AM", "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM","3:00 PM - 4:00 PM"];

    const handleBookSlotClick = () => {
        console.log(center);
      console.log(`/center/bookslot/:${center.id}-${slot}`);
      navigate(`/center/bookslot/:${center.id}-${slot}`);
    };
    return(
        <div>
            <div className="mt-2 mb-2 ml-10 mr-10">
            <Card>
                <div className="p-6">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Slot-{slot}
                    </h5>
                    <p className="text-gray-700 dark:text-gray-400 mb-4 ">
                    Available count: 25<br />
                    Timing: {slots[slot-1]} <br />
                    </p>
                </div>
                <div className="p-4 flex justify-left items-center">
                    <Button className="w-md" onClick={handleBookSlotClick}>
                    Book Slot
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
                </div>
            </Card>
            </div>
        </div>
    );
}

// whitedevil2003.mysql.database.azure.com
// root_user
// Na03@08$7