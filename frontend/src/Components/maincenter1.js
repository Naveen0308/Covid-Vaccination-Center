import Navigation from "./navbar";
import Mainfooter from "./footer";
import RectangleCard from "./rectanglecard";
import logo1 from '../images/locationpointer.jpg'
import { Carousel } from 'flowbite-react';
import { useEffect, useState } from "react";

export default function Center(){
    const [center, setCenter] = useState();
    const [id,setId] = useState();

    const fetchCenter = async() => {
        // Get the pathname from the current URL
        const pathname = window.location.pathname;
    
        // Extract the id from the pathname using a regular expression or other methods

        
        const match = pathname.split('/')
        console.log(match);
        const id = match ? match[2] : null;
        console.log(id);
        setId(id);
        console.log("centerId:",id);
        // Call the function to fetch the center based on the extracted ID
  if (id != null) {
    try {
      const response = await fetch(`http://localhost:5000/api/get-center/${id.substring(1)}`);
      console.log(response);

      if (!response.ok) throw new Error("fetch error");

      const data = await response.json();
      console.log(data);

      setCenter(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.error("No ID found in the URL");
  }
};
    useEffect(() => {
        fetchCenter();
    }, [])
    
    return(
        <div>
            <Navigation />
            <div className="flex justify-center items-center h-80 sm:h-96 xl:h-120 2xl:h-140 mr-5 ml-5 ">
                <Carousel pauseOnHover>
                    <img src= {logo1} alt="..." />
                </Carousel>
            </div>
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Available Slots</h5>

            <RectangleCard center={center} slot={1} centerId={id}/>
            <RectangleCard center={center} slot={2} centerId={id}/>
            <RectangleCard center={center} slot={3} centerId={id}/>
            <RectangleCard center={center} slot={4} centerId={id}/>
            <Mainfooter />
        </div>
    );
}