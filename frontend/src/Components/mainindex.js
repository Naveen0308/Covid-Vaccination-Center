import Navigation from "./navbar";
import Carousell from "./carousel";
import Search from "./search";
import Cardcontent1 from "./card1";
import Cardcontent2 from "./card2";
import Cardcontent3 from "./card3";
import Page from "./page";
import Mainfooter from "./footer";

export default function Mainindex(){
    return(
        <div>
            <Navigation />
            <Carousell />
            <Search />
            <Cardcontent1 />
            <Cardcontent2 />
            <Cardcontent3 />
            <Page />
            <Mainfooter />
        </div>
    );
}