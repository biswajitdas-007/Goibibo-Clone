import { useState,useContext } from "react";
import "./Payment.css";
import { BusDetails } from "./BusDetails";

import Footer from "../Footer/Footer";
import {AuthContext} from "../../Context/FilterContext"

function Payment() {
    const [hide, setHide] = useState(true);
           const { seat1 } = useContext(AuthContext);

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
            let div = document.getElementById("coupons")
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
        <div>
            <div>
                <div className="main-div-cont">
                    <div className="header-cont">
                        <div>
                            <div>
                            <div>
                                <h2>Review your Booking</h2>
                            </div>
                            <div>
                                <h2>Bangalore, Karnataka | <span>28th September 2021</span> </h2>
                            </div>
                        </div>
                        
                        <div className="bus-div" >
                            <BusDetails/>
                            <div className="price-div" >
                                <div className="price-header">
                                    <div className="after-text price-collapse" onClick={() => {
                                    collapse("price")
                                }}>
                                    <h2 style={{padding:"10px"}}>Price</h2>
                                </div>
                                <hr />
                                <div className="collapse" id="hide">
                                    <div className="price-fare " style={{display:"flex", gap:"55%"}}>
                                    <div className=" base-fair">
                                        <h3 >Total Basefare</h3>
                                    </div>
                                    <div className="base-fair">
                                        <h3>945</h3>
                                    </div>
                                </div>
                                        <hr style={{marginTop:"10px"}} />
                                        <div style={{height:"10px", padding:"5px"}}></div>
                                <div className="price-fare" style={{height:"100%",}}>
                                    <div style={{display:"flex"}} className="price-fare price-fare-btn" >
                                        <div >
                                            <h3>Discount</h3>
                                        </div>
                                        <div style={{marginLeft:"30px"}}>
                                            <h3>149</h3>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="price-fare" style={{height:"100%",}}>
                                    <div  className="price-fare price-fare-btn" style={{display:"flex"}}>
                                        <div >
                                            <h3>Taxes & fees</h3>
                                        </div>
                                        <div>
                                            <h3>96</h3>
                                        </div>
                                    </div>
                                </div>
                                    </div>
                                    <div style={{ padding:"5px"}}></div>
                                <div className="price-fare " style={{display:"flex", gap:"55%"}}>
                                    <div className="base-fair">
                                        <h3>Total Basefare</h3>
                                    </div>
                                    <div className="base-fair">
                                                <h3>{seat1[0]}</h3>
                                    </div>
                                </div>
                                </div>
                                <div>
                                <div  style={{ backgroundColor: "white", marginTop:"20px"}}>
                                <div className="offers-collapse price-collapse" onClick={() => {
                                    collapse("traveller-details")
                                    
                                }}>
                                    <h2 style={{
                                            paddingLeft: "20px", paddingTop: "20px", fontSize: "20px", fontWeight: "600",
                                       
                                        }}>
                                            OFFERS/GOCASH+ <span style={{marginLeft:"100px"}}>  </span>
                                        </h2>
                                    </div>
                                            <hr style={{marginTop:"10px"}}/>
                                    <div id="coupons" style={{ backgroundColor: "white" }}>
                                        <div id="passenger">
                                            <div style={{display:"flex", gap:"10px", paddingTop:"10px 0"}}>
                                                <div>
                                                        <input name="coupon" type="radio" style={{
                                                            height: "20px",
                                                            width: "20px",
                                                        }}/>
                                                </div>
                                                <div >
                                                    <h3 style={{padding:"0", margin:"0", fontSize:"15px",}}>gobob</h3>
                                                </div>
                                                </div>
                                                    <hr style={{marginTop:"10px"}}/>
                                                <div style={{marginTop:"10px"}}>
                                                    <p style={{
                                                        color: "#777777",
                                                        fontSize: "15px",
                                                        fontWeight:"300",
                                                    }}>
                                                        GOBOB: Get FLAT 8% OFF on your Bus booking using BOB credit cards
                                                    </p>
                                                </div>
                                            </div>
                                            <div id="passenger">
                                            <div style={{display:"flex", gap:"10px", paddingTop:"10px 0"}}>
                                                <div>
                                                        <input name="coupon" type="radio" style={{
                                                            height: "20px",
                                                            width: "20px",
                                                        }}/>
                                                </div>
                                                <div >
                                                    <h3 style={{padding:"0", margin:"0", fontSize:"15px",}}>gobob</h3>
                                                </div>
                                                </div>
                                                    <hr style={{marginTop:"10px"}}/>
                                                <div style={{marginTop:"10px"}}>
                                                    <p style={{
                                                        color: "#777777",
                                                        fontSize: "15px",
                                                        fontWeight:"300",
                                                    }}>
                                                        GOBOB: Get FLAT 8% OFF on your Bus booking using BOB credit cards
                                                    </p>
                                                </div>
                                            </div>
                                        <div id="passenger">
                                            <div style={{display:"flex", gap:"10px", paddingTop:"10px 0"}}>
                                                <div>
                                                        <input name="coupon" type="radio" style={{
                                                            height: "20px",
                                                            width: "20px",
                                                        }}/>
                                                </div>
                                                <div >
                                                    <h3 style={{padding:"0", margin:"0", fontSize:"15px",}}>gobob</h3>
                                                </div>
                                                </div>
                                                    <hr style={{marginTop:"10px"}}/>
                                                <div style={{marginTop:"10px"}}>
                                                    <p style={{
                                                        color: "#777777",
                                                        fontSize: "15px",
                                                        fontWeight:"300",
                                                    }}>
                                                        GOBOB: Get FLAT 8% OFF on your Bus booking using BOB credit cards
                                                    </p>
                                                </div>
                                            </div>
                                            <div id="passenger">
                                            <div style={{display:"flex", gap:"10px"}}>
                                                <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="OffersIcon-sc-1e79akd-0 bbNIlD">
                                                            <path d="M32 16v-.047a5.808 5.808 0 00-3-5.086l-.03-.015a.334.334 0 01-.159-.386l-.001.002a5.888 5.888 0 00-7.321-7.271l.042-.01a.335.335 0 01-.383-.158l-.001-.002c-1.025-1.82-2.945-3.03-5.148-3.03s-4.123 1.209-5.132 3l-.015.029a.334.334 0 01-.386.159l.002.001A5.888 5.888 0 003.2 10.508l-.01-.042a.33.33 0 01-.16.384C1.21 11.875 0 13.795 0 15.998s1.209 4.123 3 5.132l.029.015a.333.333 0 01.16.384A5.888 5.888 0 0010.51 28.8l-.042.01a.33.33 0 01.384.16c1.025 1.819 2.945 3.028 5.147 3.028S20.12 30.789 21.13 29l.015-.029a.335.335 0 01.388-.16l-.002-.001a5.888 5.888 0 007.268-7.32l.01.042a.334.334 0 01.158-.385l.002-.001c1.818-1.005 3.03-2.911 3.03-5.1v-.051.003zm-11.123 7.315h-.001a2.438 2.438 0 01-.001-4.876h.001a2.438 2.438 0 01.001 4.876zm-10.439.132a1.333 1.333 0 01-1.88-1.883l-.001.001L21.562 8.562a1.332 1.332 0 111.882 1.88l-.001.001-13.005 13.001zm.685-14.762a2.438 2.438 0 110 4.876 2.438 2.438 0 110-4.876z"></path></svg>
                                                </div>
                                                <div >
                                                    <h3 style={{padding:"0", margin:"0", fontSize:"15px",}}>ENTER PROMO CODE</h3>
                                                </div>
                                                </div>
                                                    <hr style={{marginTop:"10px"}}/>
                                                <div className="date" style={{
                                                    padding: "10px",
                                                }}>
                                                    <div>
                                                        <input type="text" placeholder="Got A Promocode? Enter" />
                                                    </div>
                                                    <div>
                                                        <button><img src="https://pngmagic.com/product_images/arrow-png-download.png" alt="" /></button>
                                                    </div>
                                                </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        <div style={{
                            height: "100%",
                            marginTop:"95%",
                        }}>

                        </div>
                    </div>
                    <div style={{
                            display: "block",
                            marginTop:"15%",
                            color: "black",
                        }}>
                        <Footer/>
                </div>
                </div>
                
            </div>

            
        </div>
        
    );
}
export {Payment}