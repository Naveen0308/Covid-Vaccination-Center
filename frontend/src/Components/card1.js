import React from 'react';
import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import carouselImage from '../images/locationpointer.jpg';
import { useContext } from 'react';
import UserContext from '../UserContext';
import axios from 'axios';

const Cardcontent1 = ({ center,centerId }) => {
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);

  const serverurl=process.env.REACT_APP_SERVERURL;

  const handleBookSlotClick = () => {
    // Assuming your center object has an 'id' property
    console.log(centerId);
    navigate(`/center/${centerId}`);
  };

  const handleDeleteCenter=async()=>{
    try{
      const response=await axios.post(serverurl+`/api/deleteCenter/${centerId}`);
      console.log(response);
// Force a complete reload, ignoring the cache
window.location.reload(true);
    }catch (error) {
      console.error('Error fetching data:', error);  
    }
  };



  return (
    <div className="w-1/3 p-4">
      <Card className="max-w-sm">
        <img width={500} height={500} src={carouselImage} alt="Center" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {center.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Address: {center.address}<br />
          Location: {center.location}<br />
          Available Slot: 4
        </p>
        {userId === 0 ? (
        <Button color="dark" onClick={handleDeleteCenter}>
          Delete Center
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
        ):null}
        {userId === 0?null:(
        <Button onClick={handleBookSlotClick}>
          Book Center
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
        </Button>)}
      </Card>
    </div>
  );
};

export default Cardcontent1;
