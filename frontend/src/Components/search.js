import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../UserContext';

export default function Search({ allCenters, setFilteredCenters }) {
  const navigate = useNavigate();
  const { userId } = useContext(UserContext);
  console.log("search userid",userId);
  const [searchLocation, setSearchLocation] = useState('');

  const handleCenterBookSlotClick = () => {
    navigate('/centerform');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchLocation.trim() === '') {
      // If the search location is empty, show all centers
      setFilteredCenters(allCenters);
    } else {
      // Filter centers based on the entered location
      const filteredCenters = allCenters.filter((center) =>
        center.location.toLowerCase().includes(searchLocation.toLowerCase())
      );

      // Set the filtered centers using the provided setter function
      setFilteredCenters(filteredCenters);

      // Handle the filtered centers (you can pass them to the parent component, etc.)
      console.log(filteredCenters);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center items-center h-full">
        <form onSubmit={handleSearchSubmit}>
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
                setSearchLocation(e.target.value)
                handleSearchSubmit(e);
              }
              } 
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
        {userId === 0 ? (
          <Button color="failure" onClick={handleCenterBookSlotClick}>
            Add Centers<HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        ) : null}
      </div>
    </div>
  );
}
