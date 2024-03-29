import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './navbar';
import Carousell from './carousel';
// import Search from './search';
import Cardcontent1 from './card1';
import Page from './page';
import Mainfooter from './footer';
import UserContext from '../UserContext';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import About from './About';

export default function Mainindex() {

  const serverurl=process.env.REACT_APP_SERVERURL;

  const [allCenters, setAllCenters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [centersPerPage] = useState(9);
  const { userId } = useContext(UserContext);
  console.log("search userid",userId);
  const navigate = useNavigate();

    const [searchLocation, setSearchLocation] = useState('');
  
    const handleCenterBookSlotClick = () => {
      navigate('/centerform');
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log("ws",searchLocation.trim());
      if (searchLocation.trim() === '') {
        // If the search location is empty, show all centers
        fetchCenters();
        console.log("all centers",allCenters);
        // setAllCenters(allCenters);
      } else {
        // Filter centers based on the entered location
        const filteredCenters = allCenters.filter((center) =>
          center.location.toLowerCase().includes(searchLocation.toLowerCase())
        );
        console.log("filtered centers",filteredCenters);
  
        // Set the filtered centers using the provided setter function
        setAllCenters(filteredCenters);
  
      }
    };


    const [init, setInit]= useState(true);

  const fetchCenters = async () => {
    try {
      const response = await fetch(serverurl+`/api/all-center`);
      const data = await response.json();
      setAllCenters(data.center);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCenters();
    if(init){
      window.scrollTo(0, 0);
      setInit(false);
    }
    
  }, []);

  // Calculate the indexes of the first and last centers on the current page
  const indexOfLastCenter = currentPage * centersPerPage;
  const indexOfFirstCenter = indexOfLastCenter - centersPerPage;
  const currentCenters = allCenters.slice(indexOfFirstCenter, indexOfLastCenter);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // useEffect(() => {
  //   // Scroll to the section with id 'sec-about' when the component mounts
  //   const section = document.getElementById('sec-about');
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, []);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // })


  return (
    <div>
      <Navigation />
      <Carousell />
      {/* <Search allCenters={allCenters} setAllCenters={setAllCenters} />
      */}
      <section id='sec-about'>
        <About />
        </section>
        
<div className="flex flex-col h-full">
      <div className="flex justify-center items-center h-full">
        <section id='sec-services'>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
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
              placeholder="Search by Location"
              value={searchLocation}
              onChange={(e) =>{
                if(e.target.value.trim() === ''){
                  fetchCenters();
                }
                setSearchLocation(e.target.value)
              }
            } 
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm leading-none px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
              onClick={(e)=>handleSearchSubmit(e)}
            >
              Search
            </button>
          </div>
        </form>
        </section>
      </div>
      
      <div className="ml-auto mt-auto">
        {userId === 0 ? (
          <Button color="failure" onClick={handleCenterBookSlotClick}>
            Add Centers<HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        ) : null}
      </div>
    </div>




      <div className="flex flex-wrap justify-around p-4">
        {currentCenters.length > 0 ? (
          currentCenters.map((c, ind) => <Cardcontent1 center={c} key={ind} centerId={c.id} />)
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300">
            No center is available in that place.
          </p>
        )}
      </div>
      <Page
        centersPerPage={centersPerPage}
        totalCenters={allCenters.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <section id='sec-contact'>
      <Mainfooter />
      </section>
    </div>
  );
}
