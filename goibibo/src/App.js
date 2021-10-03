import "./App.css";
import Bus from "./Components/Bus/Bus";
import { Payment } from "./Components/Payment/Payment";
import { Route } from "react-router-dom";
import { BusDetails } from "./Components/BusDetails/BusDetails";

import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Bus />
      </Route>
      <Route path="/bus">
        <BusDetails />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
      <Route path="/flights">
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--oEn9BS42--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/http://ahimsa.co.za/wp-content/uploads/2018/11/en-construction.gif"></img>
        </div>
      </Route>
      <Route path="/hotels">
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--oEn9BS42--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/http://ahimsa.co.za/wp-content/uploads/2018/11/en-construction.gif"></img>
        </div>
      </Route>
      <Route path="/trains">
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--oEn9BS42--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/http://ahimsa.co.za/wp-content/uploads/2018/11/en-construction.gif"></img>
        </div>
      </Route>
      <Route path="/cabs">
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--oEn9BS42--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/http://ahimsa.co.za/wp-content/uploads/2018/11/en-construction.gif"></img>
        </div>
      </Route>
    </div>
  );
}

export default App;
