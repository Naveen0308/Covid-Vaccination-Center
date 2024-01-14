import Navigation from "./navbar";
import Mainfooter from "./footer";
import { Button, Label, TextInput,Textarea, Card } from 'flowbite-react';

export default function centerform(){
    
    return(
        <div>
        <Navigation />
        <div className="flex flex-col items-center justify-center min-h-screen">
                <Card className="w-full md:max-w-xl p-6 m-4">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">Enter Center Details</h5>
                    <form className="flex flex-col gap-4">
                        
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="CenterName" value="Center Name:" />
                        </div>
                        <TextInput id="Centername" type="text" placeholder="Patient Name:" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                        <Label htmlFor="Location" value="Location:" />
                        </div>
                        <TextInput id="Location" type="text" placeholder="Location:" required />
                    </div>
                    <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="CenterAddress" value="Center Address:" />
                            </div>
                            <Textarea id="CenterAddress" placeholder="Address" required rows={4} />
                            </div>
                    <Button type="submit" >Add Center</Button>
                    </form>
                </Card>
                </div>
        <Mainfooter />
        </div>
    )
}