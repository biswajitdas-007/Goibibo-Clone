import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
    const [token, setToken] = useState(false);
    const [text, setText] = useState("");
    const displayNone = () => {
        document.getElementById('id01').style.display = 'none'
    }
    const displaySignIn = () => {
        // window.backgroundColor = "#303132";
        document.getElementById('id01').style.display='block'
    }
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
                <div className="NavbarRight1"><a><i className="fas fa-suitcase"></i> My trips</a></div>
                {token ? <div className="NavbarRight2" onClick={()=>setToken(false)}><a><i className="fas fa-user-plus"></i>SignOut</a></div>: <div className="NavbarRight2" onClick={displaySignIn}><a><i className="fas fa-user-plus"></i> Login or SignUp</a></div>}
            </div>
            <div id="id01" className="sign-in">
                <div className="modal-content" action="">
                    <div className="left-container">
                        <div>
                            <h3>
                                <span>Smooth</span> Bus Rides
                            </h3>
                            
                            <ul className="benefits-container">
                                <li className="items">
                                    <span className="benefits-img"></span>
                                    <span className="benefits">Track live bus location</span>
                                </li>
                                <li className="items">
                                    <span className="benefits-img"></span>
                                    <span className="benefits">Exclusive bus operator deals</span>
                                </li>
                                <li className="items">
                                    <span className="benefits-img"></span>
                                    <span className="benefits">Manage and modify bookings</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="close-login-page" onClick={displayNone}>
                            <span>x</span>
                        </div>
                        <div>
                            <h2>Login/SignUp</h2>
                            <form>
                                <div className="login-details-div">
                                    <span className="mobile-number">Enter your Mobile Number</span>
                                    <span className="india-code">+91 -</span>
                                    <input onChange={(e) => {
                                        console.log(e.target.value)
                                        setText(e.target.value)
                                    }} className="input-box-for-login" type="text" maxlength="10" />
                                </div>
                                <div>
                                    <button className="login-button" onClick={(e) => {
                                        e.preventDefault()
                                        setToken(true)
                                    }}>Continue</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <p className="privacy-policy">By proceeding, you agree to GoIbibo’s <a href="">Privacy Policy</a>, <a href="">User Agreement</a>  and <a href="">Terms of Service</a></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}