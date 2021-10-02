import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import {signInWithPhoneNumber } from "firebase/auth";
      
export default function Navbar() {
const [token, setToken] = useState(false);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO_M8g7oaBq43RFN5-xG75g9CMfvijRKo",
  authDomain: "goibibo-clone.firebaseapp.com",
  projectId: "goibibo-clone",
  storageBucket: "goibibo-clone.appspot.com",
  messagingSenderId: "1042125734610",
  appId: "1:1042125734610:web:e1cc2059a6dd3a471ee30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const [number, setNumber] = useState("");
    const handleChange = (e) => {
      console.log(e.target.value)
    setNumber(e.target.value)
  }
  const configureCaptcha = () => {
  const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  },
  defaultCountry:"IN"
}, auth);
}
  const onSignInSubmit = (e) => {
      e.preventDefault();
    const phoneNumber = "+91" + number;
    configureCaptcha()
const appVerifier = window.recaptchaVerifier;

      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      console.log("otpsent")
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      console.log('err: ',error)
    });
  }
  const onSubmitOtp = (e) => {
    e.preventDefault();
    const code = number;
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
        console.log(JSON.stringify(user))
        displayNone()
        setToken(true)
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log("otpError: ", error)
    });
  }
    const displayNone = () => {
        document.getElementById('id01').style.display = 'none'
    }
    const displaySignIn = () => {
        // window.backgroundColor = "#303132";
      document.getElementById('id01').style.display = 'block';
    }
    return (
        <div>
            <div className="class">
            <Link to="/"><div className="logo"></div></Link>
            <ul class="happy-nav">
                <li class="  ">
                    <span className="header-sprite nav-icon-flights gr-append-right5">
                    </span>Flights</li><li class="  ">
                
                    <span className="header-sprite nav-icon-hotels gr-append-right5">
                    </span>Hotels</li><li class="  ">
                
                    <span className="header-sprite nav-icon-trains gr-append-right5">
                    </span>Trains</li><li class="  ">
                
                    <span className="header-sprite nav-icon-cabs gr-append-right5">
                    </span>Cabs</li><li class="active  ">
                
                    <span className="header-sprite nav-icon-bus gr-append-right5">
                    </span><Link to="/bus">Bus</Link></li>
            </ul>
            <div className="gr-make-flex hrtl-center gr-push-right">
               
                    <div className="mytrip__tab gr-append-right20" role="presentation">
                        <span className="header-sprite mytrip-icon gr-append-right10">
                        </span>
                        <span>
                            <div><p className="gr-font10 gr-light gr-helvetica gr-color666">Manage Booking</p>
                                <p className="gr-font14 gr-quicksand gr-bold gr-color333 hype">My Trips</p>
                            </div></span><div className="tooltip gr-grey-text--dark">
                            <p>Access your bookings, easy cancellation, date change and much more</p>
                        </div></div>
                <div className="login__tab gotrible" role="presentation">
                    <span className="header-sprite user-icon gr-append-right5">
                    </span>
                    <div className="gr-font10" role="presentation" id="get_sign_in">
                {token?<p className="gr-cap-text gr-blue-text gr-bold" onClick={displayNone}>Signout</p>:<p className="gr-cap-text gr-blue-text gr-bold" onClick={displaySignIn}>Login or Signup</p>}
                    </div></div></div>
            
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
                            <form onSubmit={onSignInSubmit}>
                                <div className="login-details-div">
                                    <span className="mobile-number">Enter your Mobile Number</span>
                                    <span className="india-code">+91 -</span>
                                    <input onChange={handleChange} name="mobile" className="input-box-for-login" type="text" maxlength="10" required />
                                </div>
                                <div>
                                    <button type="submit" className="login-button">Continue</button>
                                </div>
                            </form>
                            <div style={{
                                height: "20px"
                            }}></div>
                            <form onSubmit={onSubmitOtp}>
                                <div id="sign-in-button"></div>
                                <div className="login-details-div">
                                    <span className="mobile-number">Enter your OTP</span>
                                    <span className="india-code">OTP : </span>
                                    <input type="number"  onChange={handleChange} name="otp" className="input-box-for-login" maxlength="10" required/>
                                </div>
                                <div>
                                    <button type="submit" className="login-button">Login</button>
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
            </div>
    )
}