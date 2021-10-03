import React from "react";
import "../../styles/home.css";
import {useLocation} from "react-router-dom"

import { Link } from "react-router-dom";

export const Home = () => {
  let loc = useLocation();
  console.log("loc:", loc)

  return (
    <>
        <div className="home">
    <header className="ToolBar">
      
      <div className="Links">
        <Link className="DrawerItem" to="/bus/seats" >SELECT SEATS</Link>
        <Link className="DrawerItem" to="/bus/amenities" > AMENITIES AND PHOTOS </Link>
        <Link className="DrawerItem" to="/bus/reviews"> REVIEWS  </Link>
        <Link className="DrawerItem" to="/bus/policies"> POLICIES </Link>
        <Link className="DrawerItem" to="/bus/points"> BOARDING AND DROPPING </Link>
      </div>
    </header>    
     </div> 
    </>
  );
};
