import { Route } from "react-router-dom"
import { BusMain } from "../Component/Bus/BusMain"
import { Showbuses } from "../Component/Bus/Showbuses"
export function Router() {
    return (
        <>
            <Route exact path="/">
                <Showbuses/>
           
        </Route>
        
            </>
    )
}
//<BusMain/>