import Navigation from "./navbar";
import Carousell from "./carousel";
import Search from "./search";
import Cardcontent1 from "./card1";
import Cardcontent2 from "./card2";
import Cardcontent3 from "./card3";
import Page from "./page";
import Mainfooter from "./footer";
import { useState } from "react";

export default function Mainindex(){
    const [center , setCenter] = useState([{name: "bgcvbew"}, {name: "werdtfcvg"}]);


    return(
        <div>
            <Navigation />
            <Carousell />
            <Search />
            {center.map((c, ind) => (<Cardcontent1 center={c} key={ind}/>))}
            {/* <Cardcontent2 /> */}
            {/* <Cardcontent3 /> */}
            <Page />
            <Mainfooter />
        </div>
    );
}