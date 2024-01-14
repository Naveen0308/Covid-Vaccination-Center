import { Carousel } from 'flowbite-react';
import logo1 from "../images/covid19-1.jpg";
import logo2 from "../images/covid19-2.jpg";
import logo3 from "../images/covid19-3.jpg";
import logo4 from "../images/covid19-4.jpg"
import logo5 from "../images/covid19-5.jpg"

export default function Carousell() {
  return (
  <div>
    <div className="flex justify-center items-center h-80 sm:h-96 xl:h-120 2xl:h-140 mr-5 ml-5 ">
      <Carousel pauseOnHover>
        <img src= {logo1} alt="..." />
        <img src= {logo2} alt="..." />
        <img src= {logo3} alt="..." />
        <img src = {logo4} alt="..." />
        <img src = {logo5} alt="..." />
      </Carousel>
    </div>
    <div>
      <br></br>
    </div>
  </div>
  )};