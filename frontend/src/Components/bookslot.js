import Navigation from "./navbar";
import Mainfooter from "./footer";
import { Button, Radio, Label, TextInput,Textarea,Card } from 'flowbite-react';
import { useEffect, useState } from "react";




export default function Bookslot(){
    const [center, setCenter] = useState();

    const fetchCenter = async() => {
        // Get the pathname from the current URL
        const pathname = window.location.pathname;
    
        // Extract the id from the pathname using a regular expression or other methods
        const match = pathname.split('/')
        console.log(match);
        const idslot = match ? match[3].split("-") : null;
        console.log(idslot);
        const id = idslot[0];
        const slot = idslot[1];
        // Call the function to fetch the center based on the extracted ID
        if (id!=null) {
            try {
                console.log("ertfvgbh");
                const response = await fetch(`http://localhost:5000/api/get-center/${id.substring(1)}`);
                console.log(response);
                const data = await response.json();
                if(!response.ok) throw new Error("fetch error");
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
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Card className="w-full md:max-w-xl p-6 m-4">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Enter Form Details</h5>
                    <form className="flex flex-col gap-4">
                        
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="Name" value="Patient Name:" />
                        </div>
                        <TextInput id="name" type="text" placeholder="Patient Name:" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="phonenumber" value="Phone Number:" />
                        </div>
                        <TextInput id="phonenumber" type="text" placeholder="Phone Number:" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="age" value="Age:" />
                        </div>
                        <TextInput id="age" type="text" placeholder="Age:" required  />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your Email:" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="Email:" required />
                    </div>
                    <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="address" value="Your Address:" />
                            </div>
                            <Textarea id="address" placeholder="Address" required rows={4} />
                            </div>
                    <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Radio id="dose1" name="dosage" value="Dose1" />
                        <Label htmlFor="dose1">Dose 1</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Radio id="dose2" name="dosage" value="Dose2" />
                        <Label htmlFor="dose2">Dose 2</Label>
                    </div>
                    </div>
                    <Button type="submit">Confirm Slot</Button>
                    </form>
                </Card>
                </div>
            <Mainfooter />
        </div>
    );
}