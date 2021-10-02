import Bus1 from "./landing_page_Components/Bus/Bus1";
import { Showbuses } from "./Component/Bus/Showbuses";
import { Route } from "react-router-dom";
import Bus from "./payment_page_Components/Bus/Bus";
import { Payment } from "./payment_page_Components/Payment/Payment";
function App() {
  return (
    <>
      <Route path="/bus">
        <Showbuses />
      </Route>
      <Route exact path="/">
        <div className="App">
          <Bus1 />
        </div>
      </Route>
      <Route exact path="/payment">
        <Bus />
      </Route>
      <Route path="/payment1">
        <Payment />
      </Route>
    </>
  );
}

export default App;
