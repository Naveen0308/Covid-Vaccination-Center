import { Card, Button } from 'flowbite-react';
import carouselImage from '../images/locationpointer.jpg'; // Assuming you have an image URL
import { useNavigate } from 'react-router-dom';



export default function Cardcontent1({center}) {
  const navigate = useNavigate();

  const handleBookSlotClick = () => {
    // Redirect to the '/Center' route
    navigate(`/center/:${center.id}`);
  };
  return (
    <div className="flex justify-between">
      {/* First Card */}
      <div className="w-1/3 p-4">
        <Card className="max-w-sm">
          <img width={500} height={500} src={carouselImage} alt="image 1" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {center.name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Address: Your address<br/>
            Location: Your location<br/>
            Available Slot: 4
          </p>
          <Button onClick={handleBookSlotClick}>
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
        </Card>
      </div>
    </div>
  
  );
}
