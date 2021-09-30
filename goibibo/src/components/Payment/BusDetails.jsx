import { useState } from "react"
import "./Payment.css"
function BusDetails() {
    const [hide, setHide] = useState(true)
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
        
    }
    return (
        <div >
                                <div className="bus-name">
                                    <div style={{height:"90px"}}>
                                        <div>
                                            <div>
                                                <h2 style={{marginBottom:"0",paddingBottom:"0", fontWeight:"500" }}>Shree Nilamadahba travels </h2>
                                                <p style={{marginTop:"0", }}>A/C Seater / Sleeper (2+1)</p>
                                            </div>
                                            
                                            <div style={{display:"flex"}} className="safety">
                                            <img src="https://gos3.ibcdn.com/goSafelogo-1591083260.png" alt="" />
                                            <p style={{
                                                padding: "0",
                                                margin: "0",
                                            }}>High Safety and hygine</p>
                                        </div>
                                        </div>
                                        
                                        <div style={{marginLeft:"60px"}}>
                                            <a href="">Cancellation Policy</a>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{width:"100%"}}/>
                                <div style={{ display:"flex"}} className="seats-selected">
                                    <div>
                                        <p>Seats Selected </p>
                                    </div>
                                    <div>
                                        <p>.B3 <span>.18</span></p>
                                    </div>
                                </div>
                                <div className="departure-cont">
                                    <div className="departure">
                                    <div>
                                        <p>Boarding point details </p>
                                    </div>
                                    <div className="time">
                                            <p>9:00 PM, 28th Sep 2021</p>
                                    </div>
                                    <div>
                                        <h2>Bermunda Bus Stand</h2>
                                        </div>
                                        <div>
                                            <p>Bermunda Bus Stand</p>
                                        </div>
                                </div>
                                <div className="departure">
                                    <div>
                                        <p>Boarding point details </p>
                                    </div>
                                    <div className="time">
                                        <p>9:00 PM, 28th Sep 2021</p>
                                    </div>
                                    <div>
                                        <h2>Bermunda Bus Stand</h2>
                                        </div>
                                        <div>
                                            <p>Bermunda Bus Stand</p>
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
                                <div style={{ backgroundColor: "white",}}>
                                <div className="after-text price-collapse" onClick={() => {
                                    collapse("insurance")
                                    
                                }}>
                                    <h1 style={{paddingLeft:"20px", paddingTop:"20px"}}>TRIP INSURANCE AT 15 PER PERSON</h1>
                                </div>
                                    <div id="hide-insurance" style={{backgroundColor:"white",paddingLeft:"20px",paddingTop:"20px", paddingBottom:"20px"}}>
                                        <div style={{display:"flex"}} className="insurance">
                                            <div>
                                                <img src="https://gos3.ibcdn.com/ICICI_Lombard_Logo-1527582371.png" alt=""/>
                                            </div>
                                            <div>
                                                <p style={{
                                                    margin: "0",
                                                    padding: "0",
                                                    marginTop: "8px",
                                                    fontSize: "17px",
                                                    fontWeight:"600",
                                                }}>ICICI Lombard's Travel Insurance</p>
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
                                                <input type="radio" name="yes" /> <span><label>Yes, Secure my trip. I agree to the given <a href="/" style={{
                                                    color: "#2276E3",
                                                    fontWeight:"400",
                                                }}>Terms and conditon</a></label></span>
                                            </div>
                                            <div>
                                                <input type="radio" name="yes"/> <span><label>No, I am willing to risk my trip.</label></span>
                                            </div>
                                        </div>
                                </div>
                                </div>
                                
                                <div  style={{ backgroundColor: "white" }}>
                                <div className="after-text price-collapse" onClick={() => {
                                    collapse("traveller-details")
                                    
                                }}>
                                    <h1 style={{
                                            paddingLeft: "20px", paddingTop: "20px", fontSize: "25px", fontWeight: "600",
                                       
                                        }}>
                                            TRAVELLER DETAILS <span style={{marginLeft:"70px"}}>  </span>
                                        </h1>
                                    </div>
                                    <hr />
                                    <div id="hide-travellerDetails" style={{ backgroundColor: "white" }}>
                                        <div id="passenger">
                                            <div style={{display:"flex", gap:"10px"}}>
                                                <div style={{ backgroundColor: "#F3F3F4", padding: "7px", borderRadius: "50%", height: "15px", width: "15px", textAlign: "center", color: "#898B91" }}><h5 style={{ padding: "0", margin: "0" }}>1</h5>
                                                
                                                </div>
                                                <div style={{margin:"5px 0 0 0"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75"><path fill="#FFF" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path><path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg> 
                                                </div>
                                                
                                                <div>
                                                    <p style={{padding:"0", margin:"5px 0 0 0", fontWeight:"bold"}}>B3</p>
                                                </div>
                                                <div >
                                                    <p style={{padding:"0", margin:"5px 0 0 0"}}>Primary Passenger</p>
                                                </div>
                                                <div className="user-details-header after-text">
                                                    <p style={{padding:"0", margin:"5px 0 0 0"}}></p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div style={{padding:"10px", display:"flex", gap:"10px"}} id="user-details">
                                                <div>
                                                    <label htmlFor="" style={{fontSize:"18px", fontWeight:"300"}}>Gender</label><br />
                                                <select name="" id="" style={{
                                                    border: "1px solid rgb(138, 138, 138)",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    appearance: "none",
                                                    width: "150px",
                                                    marginTop:"10px"
                                                }}>
                                                    <option value="">Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="" style={{fontSize:"18px", fontWeight:"300"}}>Full Name</label><br />
                                                <input type="text" style={{
                                                    border: "1px solid rgb(138, 138, 138)",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    appearance: "none",
                                                    width: "300px",
                                                    marginTop:"10px"
                                                }} placeholder="Enter name" />
                                                </div>
                                                <div>
                                                    <label htmlFor="" style={{fontSize:"18px", fontWeight:"300"}}>Age</label><br />
                                                <input type="text" style={{
                                                    border: "1px solid rgb(138, 138, 138)",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    appearance: "none",
                                                   
                                                    marginTop:"10px"
                                                }} placeholder="Enter age" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                         <div style={{ backgroundColor: "white", padding:"10px" }}>
                                        <div style={{marginLeft:"10px"}}>
                                            <label htmlFor="" style={{fontSize:"18px", fontWeight:"300"}}>Email</label><br />
                                            <input type="text" style={{
                                                    border: "1px solid rgb(138, 138, 138)",
                                                    padding: "10px",
                                                    borderRadius: "5px",
                                                    appearance: "none",
                                                   width: "95%",
                                                    marginTop:"10px"
                                                }} placeholder="Enter Email Address" />
                                            </div>
                                            <div style={{marginLeft:"10px", marginTop:"10px", }}>
                                                    <label htmlFor="" style={{ fontSize: "18px", fontWeight: "300", display: "block" }}>Mobile Number</label>
                                                
                                                <div style={{display:"flex",}}>
                                                    <div>
                                                    <select name="" id="" style={{
                                                    border: "1px solid rgb(138, 138, 138)",
                                                    backgroundColor: "#EEF4FD",
                                                    height: "40px",
                                                    borderRight:"0",
                                                            borderTopLeftRadius: "5px",
                                                   borderBottomLeftRadius: "5px",
                                                   width: "70px",
                                                   fontSize:"15px",
                                                    marginTop:"11px"
                                                }} >
                                                    <option value="">91</option>
                                            </select>
                                                </div>
                                                <div style={{marginTop:"1px"}}>
                                                    <input type="text" style={{
                                                    border: "1px solid rgb(138, 138, 138)",
                                                    padding: "9px",
                                                    borderTopRightRadius:"5px",
                                                    borderBottomRightRadius:"5px",
                                                    borderLeft:"0",
                                                    appearance: "none",
                                                    width: "640px",
                                                    height: "20px",
                                                    marginBottom: "20px",
                                                //    marginLeft:"30px",
                                                    marginTop:"10px"
                                                }} placeholder="Enter Email Address" />
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="pay">
                                    <div>
                                        <h2>Pay 1470</h2>
                                    </div>
                                </div>
                                <div style={{padding:"10px" }}></div>
                            </div>
    );
}

export {BusDetails}