import Navigation from "./navbar";
import Mainfooter from "./footer";
import RectangleCard from "./rectanglecard";
import logo1 from '../images/locationpointer.jpg'
import { Carousel } from 'flowbite-react';

export default function Center(){
    return(
        <div>
            <Navigation />
            <div className="flex justify-center items-center h-80 sm:h-96 xl:h-120 2xl:h-140 mr-5 ml-5 ">
                <Carousel pauseOnHover>
                    <img src= {logo1} alt="..." />
                </Carousel>
            </div>
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Available Slots</h5>

            <RectangleCard />
            <RectangleCard />
            <RectangleCard />
            <RectangleCard />
            <Mainfooter />
        </div>
    );
}