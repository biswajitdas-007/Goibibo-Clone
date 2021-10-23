import React,{ useState } from "react"
import "./Payment.css";
import {AuthContext} from "../../Context/FilterContext"
import styles from "./BusDetails.module.css";

function BusDetails() {
    const [hide, setHide] = useState(true);
       const { seat1 } = React.useContext(AuthContext);
console.log("seat1",seat1);
    const [payment, setPayment] = useState(false);
    const collapse = (value) => {
        
        if (value === "price") {
            let div = document.getElementById("hide")
            if (hide) {
            div.style.display = "none";
            
            setHide(false)
            } else {
                div.style.display = "block";
                setHide(true)
            }
        }
        if (value === "insurance") {
            let div = document.getElementById("hide-insurance")
            if (hide) {
            div.style.display = "none";
            
            setHide(false)
            } else {
                div.style.display = "block";
                setHide(true)
            }
        }
        if (value === "traveller-details") {
            let div = document.getElementById("passenger");
            let div1 = document.getElementById("emailAndMobile");
            if (hide) {
            div.style.display = "none";
            div1.style.display = "none";
            setHide(false)
            } else {
                div.style.display = "block";
                div1.style.display = "block";
                setHide(true)
            }
        }
        
    }
    const displayPayment = () => {
        // window.backgroundColor = "#303132";
        setPayment(true)
        setTimeout(() => {
            setPayment(false)
        },10000)
  }
    return (
        <div className={styles.mainDiv}>
            <div className="bus-name">
                                    <div className={styles.busNameChildDiv} >
                                        <div className="details">
                                            <div className="bus-name-details">
                                                <h2 className={styles.busNameDetailsH2}>Shree Nilamadahba travels </h2>
                                                <p className={styles.busNameDetailsP}>A/C Seater / Sleeper (2+1)</p>
                                            </div>
                                            
                                            <div className="safety">
                                            <img src="https://gos3.ibcdn.com/goSafelogo-1591083260.png" alt="" />
                                            <p className={styles.safetyP}>High Safety and hygine</p>
                                        </div>
                                        </div>
                                        
                                        <div >
                                            <a href>Cancellation Policy</a>
                                        </div>
                                    </div>
                                    <hr/>
                                </div>
                                
                                <div className="seats-selected">
                                    <div>
                                        <p>Seats Selected </p>
                                    </div>
                                    <div>
                                        <p> <span>{seat1[1]}</span></p>
                                    </div>
                                </div>
                                <div className="departure-cont">
                                    <div className="departure">
                                    <div className={styles.boardingDetails}>
                                        <p>Boarding point details </p>
                                    </div>
                                    <div className="time">
                                            <p>{seat1[3]} , Oct 3, 2021</p>
                                    </div>
                                    <div>
                        <h2>{seat1[2]}</h2>
                                        </div>
                                        <div>
                                            <p>{seat1[2]}</p>
                                        </div>
                                </div>
                                <div className="departure">
                                <div className={styles.boardingDetails}>
                                        <p>Dropping point details </p>
                                    </div>
                                    <div className="time">
                                        <p>{seat1[5]}, Oct 5, 2021</p>
                                    </div>
                                    <div>
                                        <h2>{seat1[4]}</h2>
                                        </div>
                                        <div>
                                            <p>{seat1[4]}</p>
                                        </div>
                                </div>
                                </div>
                                 <div className="important-info">
                                    <div>
                                        <div className="img-cont">
                                            <img src="https://cdn.pixabay.com/photo/2017/03/17/05/20/info-2150938_960_720.png" alt=""/>
                                        </div>
                                        <div>
                                            Important Information
                                        </div>
                                    </div>
                                
                                </div>
                                <div className={styles.insuranceDetails}>
                                <div className="after-text price-collapse" onClick={() => {
                                    collapse("insurance")
                                    
                                }}>
                                    <h4 className={styles.insuranceH4}>TRIP INSURANCE AT 15 PER PERSON</h4>
                                </div>
                                    <div id="hide-insurance">
                                        <div style={{display:"flex"}} className="insurance">
                                            <div>
                                                <img src="https://gos3.ibcdn.com/ICICI_Lombard_Logo-1527582371.png" alt=""/>
                                            </div>
                                            <div>
                                                <p className={styles.iciciLoanP}>ICICI Lombard's Travel Insurance</p>
                                            </div>
                                        </div>
                                        <div className="insurance-option">
                                            <div>
                                                <div>
                                                    <img src="https://gos3.ibcdn.com/policy_bus_cancelled_by_operator-1580204422.png" alt="" />
                                                </div>
                                                <div>
                                                    <p>Trip Cancellation</p>
                                                </div>
                                                <div className="discount">Upto ₹1500</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <img src="https://gos3.ibcdn.com/policy_bus_cancelled_by_operator-1580204422.png" alt="" />
                                                </div>
                                                <div>
                                                    <p>Trip Cancellation</p>
                                                </div>
                                                <div className="discount">Upto ₹1500</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <img src="https://gos3.ibcdn.com/policy_bus_cancelled_by_operator-1580204422.png" alt="" />
                                                </div>
                                                <div>
                                                    <p>Trip Cancellation</p>
                                                </div>
                                                <div className="discount">Upto ₹1500</div>
                                            </div>
                                        </div>
                                        <div className="radio-accept">
                                            <div>
                                                <input type="radio" name="yes" /> <span><label className={styles.inputInsuranceLabel}>Yes, Secure my trip. I agree to the given <a href="/" className={styles.insuranceTermAndCond}>Terms and conditon</a></label></span>
                                            </div>
                                            <div>
                                                <input type="radio" name="yes"/> <span><label className={styles.inputInsuranceLabel}>No, I am willing to risk my trip.</label></span>
                                            </div>
                                        </div>
                                </div>
                                </div>
                                
                                <div  className={styles.forSpace}>
                                <div className="after-text price-collapse" onClick={() => {
                                    collapse("traveller-details")
                                    
                                }}>
                                    <h1 className={styles.travellerDetails}>
                                            TRAVELLER DETAILS
                                        </h1>
                                    </div>
                                    <hr />
                                    <div id="hide-travellerDetails">
                                        <div id="passenger">
                                            <div className={styles.passengerDiv}>
                                                <div><h5>1</h5>
                                                
                                                </div>
                                                <div className={styles.busSvg}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75"><path fill="#FFF" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path><path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg> 
                                                </div>
                                                
                                                <div>
                                                    <p className={styles.busSvgP}>B3</p>
                                                </div>
                                                <div>
                                                    <p className={styles.busSvgP}>Primary Passenger</p>
                                                </div>
                                                {/* <div className="user-details-header after-text">
                                                    <p style={{padding:"0", margin:"5px 0 0 0"}}></p>
                                                </div> */}
                                            </div>
                                            <hr />
                                            <div className={styles.userDetails} id="user-details">
                                                <div>
                                                    <label className={styles.genderLabel}>Gender</label><br />
                                                <select name="" id="" className={styles.genderSelect}>
                                                    <option value="">Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="" className={styles.nameLabel}>Full Name</label><br />
                                                <input type="text" className={styles.nameInput} placeholder="Enter name" />
                                                </div>
                                                <div>
                                                    <label htmlFor="" className={styles.ageLabel}>Age</label><br />
                                                <input type="text" className={styles.ageInput} placeholder="Enter age" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                         <div className={styles.emailMainDiv} id="emailAndMobile">
                                        <div className={styles.emailContainer}>
                                            <label htmlFor="" >Email</label><br />
                                            <input type="text"  placeholder="Enter Email Address" />
                                            </div>
                                            <div className={styles.mobileNumberMainDiv}>
                                                    <label htmlFor="" >Mobile Number</label>
                                                
                            <div className={styles.numberOptionsContainer}>
                                                    <div className={styles.numberSelect}>
                                                    <select name="" id="" >
                                                    <option value="">91</option>
                                            </select>
                                                </div>
                                                <div className={styles.numberSelectInput}>
                                                    <input type="text"  placeholder="Enter Email Address" />
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="pay" onClick={displayPayment}>
                                    <div>
                                        <h2>Pay {seat1[0]}</h2>
                    {payment?<div id="payment-success" className="payment-successful">
                                <img src="https://www.farehawker.com/airlines-group-booking/indigo/img/success.gif" alt="" />
          </div>:console.log("Payment Pending")}
                                    </div>
                                </div>
                                <div className={styles.divPadding}></div>
                            </div>
    );
}

export {BusDetails}