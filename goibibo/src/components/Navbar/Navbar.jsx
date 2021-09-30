import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar () {
    return (
        <div className="Navbar">
                <div className="NavbarLeft">
                    <div className="NavbarLeft1">
                         <img className="logo" src="https://invitereferral.com/wp-content/uploads/2020/05/goibibo-com-mumbai-customer-care-y8mwshklb3.jpg" alt="kdk" />
                    </div>

                    <div className="NavbarLeft2">
                    <a><i class="fas fa-plane-departure"></i> Flights</a>
                    <a><i class="fas fa-hotel"></i> Hotels</a>
                    <a><i class="fas fa-train"></i> Trains</a>
                    <a><i class="fas fa-taxi"></i> Cabs</a>
                    <Link to="/payment"><i class="fas fa-bus"></i> Bus</Link>
                    </div>
                    
                </div>

            <div className="NavbarRight">
                <div className="NavbarRight1"><a><i class="fas fa-suitcase"></i> My trips</a></div>
                  <div className="NavbarRight2"><a><i class="fas fa-user-plus"></i> Login or SignUp</a></div> 
                </div>
                
            </div>
    )
}