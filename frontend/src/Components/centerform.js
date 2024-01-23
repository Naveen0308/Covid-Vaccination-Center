import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea, Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function CenterForm() {
  const navigate = useNavigate();
  const [centerData, setCenterData] = useState({
    centerName: '',
    location: '',
    centerAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCenterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCenter = async () => {
    try {
      const { centerName, location, centerAddress } = centerData;

      const response = await fetch('http://localhost:5000/api/add-center', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          centerName,
          location,
          centerAddress,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Center added successfully, navigate back to the mainindex
        navigate('/mainindex');
      } else {
        // Handle errors
        alert(data.error || 'Failed to add center');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        COVID VACCINATION CENTER
      </h5>
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-half md:max-w-2xl p-8 m-4">
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Enter Center Details
          </h5>
          <form className="flex flex-col gap-4">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="CenterName" value="Center Name:" />
              </div>
              <TextInput
                id="CenterName"
                type="text"
                placeholder="Center Name:"
                required
                name="centerName"
                value={centerData.centerName}
                onChange={handleInputChange}
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="Location" value="Location:" />
              </div>
              <TextInput
                id="Location"
                type="text"
                placeholder="Location:"
                required
                name="location"
                value={centerData.location}
                onChange={handleInputChange}
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="CenterAddress" value="Center Address:" />
              </div>
              <Textarea
                id="CenterAddress"
                placeholder="Address"
                required
                rows={4}
                name="centerAddress"
                value={centerData.centerAddress}
                onChange={handleInputChange}
              />
            </div>
            <Button type="button" onClick={handleAddCenter}>
              Add Center
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
