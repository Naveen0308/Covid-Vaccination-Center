import { Avatar, Dropdown, Navbar,Carousel,Button,Card } from 'flowbite-react';

import { HiOutlineArrowRight } from 'react-icons/hi';
import Navigation from './navbar';
import Mainfooter from './footer';
import Page from './page';
import { useNavigate } from 'react-router-dom';
import logo from '../images/cc.png'
import logo1 from "../images/covid19-1.jpg";
import logo2 from "../images/covid19-2.jpg";
import logo3 from "../images/covid19-3.jpg";
import logo4 from "../images/covid19-4.jpg"
import logo5 from "../images/covid19-5.jpg"
import carouselImage from '../images/locationpointer.jpg'; // Assuming you have an image URL
const Mainpage = () => {

    const navigate = useNavigate();

    const handleCenterBookSlotClick = () => {
    // Redirect to the '/centerform' route
    navigate('/centerform');
    };
    // const handleBookSlotClick = () => {
    //     // Redirect to the '/Center' route
    //     console.log(center.id);
    //     navigate(`/center/:${center.id}`);
    // };
  return (
    <div>

        {/* Navbar */}
       <Navigation />
          {/* Carousel */}
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

    {/* Search */}

        <div className="flex flex-col h-full">
        <div className="flex justify-center items-center h-full">
            <form>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
                </div>
                <input
                type="search"
                id="default-search"
                className="block w-80 p-4 pl-10 pt-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
                />
                <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm leading-none px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                Search
                </button>
            </div>
            </form>
        </div>
        <div className="ml-auto mt-auto">
            <Button color="failure" onClick={handleCenterBookSlotClick}>
            Add Centers<HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
        </div>

        {/* Card */}

        <div className="flex justify-between">
        <div className="w-1/3 p-4">
            <Card className="max-w-sm">
            <img width={500} height={500} src={carouselImage} alt="image 1" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {/* {center.name} */}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Address: Your address<br/>
                Location: Your location<br/>
                Available Slot: 4
            </p>
            <Button >
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
        <Page />
      <Mainfooter />
    
    </div>
  )
}

export default Mainpage