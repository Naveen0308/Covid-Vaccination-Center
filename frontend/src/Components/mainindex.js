import React, { useEffect, useState } from 'react';
import Navigation from './navbar';
import Carousell from './carousel';
import Search from './search';
import Cardcontent1 from './card1';
import Page from './page';
import Mainfooter from './footer';

export default function Mainindex() {
  const [center, setCenter] = useState([]);
  const [filteredCenters, setFilteredCenters] = useState([]);

  const fetchCenter = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/all-center');
      const data = await response.json();
      console.log(data);
      setCenter(data.center);
      setFilteredCenters(data.center); // Initialize filteredCenters with all centers
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCenter();
  }, []);

  return (
    <div>
      <Navigation />
      <Carousell />
      <Search allCenters={center} setFilteredCenters={setFilteredCenters} />
      <div className="flex flex-wrap justify-around p-4">
        {filteredCenters.length > 0 ? (
          filteredCenters.map((c, ind) => <Cardcontent1 center={c} key={ind} />)
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300">
            No center is available in that place.
          </p>
        )}
      </div>
      <Page />
      <Mainfooter />
    </div>
  );
}
