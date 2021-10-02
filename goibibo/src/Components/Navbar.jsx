import React from "react";

import { Route } from "react-router-dom";
import { Home } from "./Home.jsx";
import { Seats } from "./Seats";
import { Amenities } from "./Amenities";
import { Reviews } from "./Reviews";
import { Policies } from "./Policies";
import { Points } from "./Points";
function Navbar({bus}) {
  console.log(bus);
  return(
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

export default Navbar;
