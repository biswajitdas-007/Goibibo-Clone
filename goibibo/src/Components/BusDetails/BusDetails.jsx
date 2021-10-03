import BusDetailsNav from "./BusDetailsNav";
import { BusDetailsBody } from "./BusDetailsBody";
import Footer from "../Footer/Footer"
function BusDetails() {
    return (
        <div>
            <BusDetailsNav />
            <BusDetailsBody />
            <Footer/>
        </div>
    );
}

export {BusDetails}