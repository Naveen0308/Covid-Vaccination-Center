import Navigation from "./navbar";
import Mainfooter from "./footer";
import RectangleCard from "./rectanglecard";
import logo1 from '../images/locationpointer.jpg'
import { Carousel } from 'flowbite-react';
import { useEffect, useState } from "react";

export default function Center(){
    const [center, setCenter] = useState();
    const [id,setId] = useState();
    const [date,setDate] = useState(Date.now());
    console.log(date);
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
      const response = await fetch(`http://localhost:5000/api/get-center/${id}`);
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
        setDate(Date.now());
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
            <div className="text-right mb-4 mr-5">
               <label className="mr-2">Date:</label>
                  <input type="date" name="date" className="border border-gray-300 p-1 rounded-md" value={date} onChange={(e) => setDate(e.target.value)}/>
              </div>

            <RectangleCard center={center} slot={1} centerId={id} date={date}/>
            <RectangleCard center={center} slot={2} centerId={id} date={date}/>
            <RectangleCard center={center} slot={3} centerId={id} date={date}/>
            <RectangleCard center={center} slot={4} centerId={id} date={date}/>
            <Mainfooter />
        </div>
    );
}