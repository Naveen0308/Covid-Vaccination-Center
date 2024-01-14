import Navigation from "./navbar";
import Mainfooter from "./footer";
import { Button, Radio, Label, TextInput,Textarea,Card } from 'flowbite-react';




export default function Bookslot(){

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