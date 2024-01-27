import React from "react";
import { Card } from "flowbite-react";
import Navigation from "./navbar";
import Mainfooter from "./footer";

export default function Result(){
    return(
        <div>
            <Navigation />
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <Card className="w-full md:max-w-xl p-6 m-4">
                        
                    </Card>
                </div>
                <Mainfooter />
        </div>
    );
}