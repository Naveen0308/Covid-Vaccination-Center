import Navigation from "./navbar";
import Carousell from "./carousel";
import Search from "./search";
import Cardcontent1 from "./card1";
import Cardcontent2 from "./card2";
import Cardcontent3 from "./card3";
import Page from "./page";
import Mainfooter from "./footer";
import { useEffect, useState } from "react";

export default function Mainindex(){
    const [center , setCenter] = useState([{name: "bgcvbew"}, {name: "werdtfcvg"}]);

    const fetchCenter = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/all-center");
            const data = await response.json();
            console.log(data);
            setCenter(data.center);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCenter();
    },[])

    return(
        <div>
            <Navigation />
            <Carousell />
            <Search />
            {center.map((c, ind) => (<Cardcontent1 center={c} key={ind}/>))}
            <Page />
            <Mainfooter />
        </div>
    );
}