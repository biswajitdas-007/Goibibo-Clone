import React from "react";
import axios from "axios";

import { Route } from "react-router-dom";
import { Home } from "./Home.jsx";
import { Seats } from "./Seats";
import { Amenities } from "./Amenities";
import { Reviews } from "./Reviews";
import { Policies } from "./Policies";
import { Points } from "./Points";
function Navbar() {
  const [Buses, setBuses] = React.useState([]);
  const [loading, setLoadding] = React.useState(true);

  const fetchBuses = () => {
    setLoadding(true);
    axios
      .get(`http://localhost:3001/bus`)
      .then((res) => {
        console.log(res.data);
        setBuses(res.data.data);
        setLoadding(false);
      })
      .catch((err) => {
        setLoadding(false);
      });
  };
  React.useEffect(() => {
    fetchBuses();
  }, []);
  const bus1 = Buses.filter((bus) => bus.id === 1);
  const bus = bus1[0];
  console.log("bus1", bus);
  return loading?<div>..loading</div>:(
    <div className="App">
      <Home></Home>
      <Route exact path="/">
        <Seats bus={bus}></Seats>
      </Route>
      <Route path="/seats">
        <Seats bus={bus}></Seats>
      </Route>
      <Route path="/amenities">
        <Amenities bus={bus}></Amenities>
      </Route>
      <Route path="/reviews">
        <Reviews bus={bus}></Reviews>
      </Route>
      <Route path="/policies">
        <Policies bus={bus}></Policies>
      </Route>
      <Route path="/points">
        <Points bus={bus}></Points>
      </Route>
    </div>
  );
}

export default Navbar;
