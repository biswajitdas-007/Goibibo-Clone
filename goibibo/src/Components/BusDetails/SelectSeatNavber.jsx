import React from "react";
import axios from "axios"
import { Route } from "react-router-dom";
import { Home } from "./Home.jsx";
import { Seats } from "./Seats";
import { Amenities } from "./Amenities";
import { Reviews } from "./Reviews";
import { Policies } from "./Policies";
import { Points } from "./Points";
function SelectSeatNavbar() {
  const [Buses, setBuses] = React.useState([]);
  const [loading, setLoadding] = React.useState(true);

  const fetchBuses = () => {
    setLoadding(true);
    axios
      .get(`https://serene-dusk-24596.herokuapp.com/bus`)
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
  console.log("bus1: ", bus);
  return loading?<div>..loading</div>:(
    <div className="App">
      <Home></Home>
      <Route exact path="/bus">
        <Seats bus={bus}></Seats>
      </Route>
      <Route path="/bus/seats">
        <Seats bus={bus}></Seats>
      </Route>
      <Route path="/bus/amenities">
        <Amenities bus={bus}></Amenities>
      </Route>
      <Route path="/bus/reviews">
        <Reviews bus={bus}></Reviews>
      </Route>
      <Route path="/bus/policies">
        <Policies bus={bus}></Policies>
      </Route>
      <Route path="/bus/points">
        <Points bus={bus}></Points>
      </Route>
    </div>
  );
}

export {SelectSeatNavbar};
