import React from "react";

import "../styles/home.css"

import {Link} from "react-router-dom"
export const Home = () => {
 
  return (
    <>
  <>
    <header className="ToolBar">
      
      <div className="Links">
        <Link className="DrawerItem" to="/seats" >SELECT SEATS</Link>
        <Link className="DrawerItem" to="/amenities" > AMENITIES AND PHOTOS </Link>
        <Link className="DrawerItem" to="/reviews"> REVIEWS  </Link>
        <Link className="DrawerItem" to="/policies"> POLICIES </Link>
        <Link className="DrawerItem" to="/points"> BOARDING AND DROPPING </Link>
      </div>
    </header>    
      </>
      
    </>
  );
};
