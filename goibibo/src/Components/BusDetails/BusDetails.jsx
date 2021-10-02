import BusDetailsNav from "./BusDetailsNav";
import Navbar from "../Navbar/Navbar";
import {BusDetailsBody} from "./BusDetailsBody"
function BusDetails() {
    return (
        <div>
            <Navbar/>
            <BusDetailsNav />
            <BusDetailsBody/>
        </div>
    );
}

export {BusDetails}