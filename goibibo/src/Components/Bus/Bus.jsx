import React from "react";
import "./Bus.css";
import Footer from "../Footer/Footer";

export default function Bus() {
    return (
        <div style={{padding:"0", margin:"0"}}>   
            <div className="Home">
             <div className="background-col" ></div>
            <div className="background-col2"></div>
            <div className="bus-headline">
                <h2 className="bus-headline-h1">Bus Ticket Booking</h2>
                
            
            <div className="destination-crousal-div">
                <div className="destination">
                    <div>
                        <div className="from-section">
                            <label>FROM</label>
                            <input type="text" name="" className="input-from" />

                        </div>
                        
                    </div>
                    <div>
                        <div className="from-section">
                            <label>TO</label>
                            <input type="text" name="" className="input-from" />

                        </div>
                        
                    </div>
                    <div className="date-travel">
                        <label htmlFor="">Travel Date</label>
                        <div className="datewrapper">
                            <input className="inp-date" type="text" name="" id=""/>
                            <div className="date-tomorrow">
                                <span className="span"  >Today,29 sep</span>
                                <span className="span">Tommorrow</span>

                            </div>

                        </div>
                    </div>
                    <div className="lower-part-destination">
                    
                                    <div style={{ display:"flex", height:"30px", background:"#E8F7EA", paddingRight:"5px"}}>
                                        <img  src="https://gos3.ibcdn.com/social-distance-small-1592916992.png" alt="" style={{height:"20px", marginTop:"5px"}} />
                            <span style={{fontSize:"14px", marginTop:"5px", fontWeight:"600"}}>Social Distancing</span>
                        </div>
                                <div style={{ width:"70%" }}>
                                        <span className="pad">Introducing Distancing in select bus. <a href="">know more</a></span>
                            </div>
                        

                    </div>
                    <div className="div-sersch-bus">
                        < button className="btn-search-bus">SEARCH BUS</button>
                    </div>
                </div>
                
                        
                         <div className="rightSection">

                    <div className="rightSection1">
                    <img src="https://gos3.ibcdn.com/gosafe1-1593079151.png" alt="" />
                    </div>


                    <div className="rightSection2">
                    <div className="r1">
                            <img src="https://gos3.ibcdn.com/img-1625069014.jpg" alt="" />
                        </div>
                        
                        <div className="r2">
                          <img src="https://gos3.ibcdn.com/img-1626751565.jpg" alt="" />
                        </div>
                    </div>


                </div>
            </div>
                </div>
                </div>
            <div className="popularBusRoutesHeading">
                <h2>Popular Bus Routes</h2>
            </div>
            <div className="popularBusRoutes">

                <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Delhi Buses</h4>
                    <p className="to">To:
                        <a href="">Manali, Chandigarh, Jaipur, Dehradun</a>
                    </p>
                    </div>
                </div>
                

                <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Mumbai Buses</h4>
                    <p className="to">To:
                        <a href="">Goa, Pune, Bangalore, Shirdi</a>
                    </p>
                    </div>
                </div>
                
                <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Chennai Buses</h4>
                    <p className="to">To:
                        <a href="">Coimbatore, Pondicherry, Bangalore</a>
                    </p>
                    </div>
                </div>

                <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Bangalore Buses</h4>
                    <p className="to">To:
                        <a href="">Mumbai, Hyderabad, Chennai, Goa</a>
                    </p>
                    </div>
                </div>
                
                 <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Hyderabad Buses</h4>
                    <p className="to">To:
                        <a href="">Mumbai, Chennai, Bangalore, Goa</a>
                    </p>
                    </div>
                </div>
                
                  <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Pune Buses</h4>
                    <p className="to">To:
                        <a href="">Mumbai, Shirdi, Bangalore, Goa</a>
                    </p>
                    </div>
                </div>

                
                <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Kolkata Buses </h4>
                    <p className="to">To:
                        <a href="">Digha, Siliguri, Durgapur, Asansol</a>
                    </p>
                    </div>
                </div>
               
                
                <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Chandigarh Buses </h4>
                    <p className="to">To:
                        <a href="">Manali, Delhi, Shimla, Dehradun</a>
                    </p>
                    </div>
                </div>
               
                <div className="busLogo">
               <div className="busLogo1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2276e3" class="BusIcon-sc-106t34v-0 bSKyoo"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z"></path><path fill="#647a97" fill-rule="nonzero" d="M2.667 10.667c0 .586.26 1.113.666 1.48V13a1 1 0 102 0v-.333h5.334V13c0 .547.446 1 1 1 .546 0 1-.447 1-1v-.853c.406-.367.666-.894.666-1.48V4c0-2.333-2.386-2.667-5.333-2.667S2.667 1.667 2.667 4v6.667zM5 11.333a1 1 0 111-1c0 .554-.447 1-1 1zm6 0a1 1 0 111-1c0 .554-.447 1-1 1zm1-4H4V4h8v3.333z"></path></g></svg></div>
                <div>
               <h4> Coimbatore Busess </h4>
                    <p className="to">To:
                        <a href="">Chennai, Ooty, Bangalore, Mysore</a>
                    </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}