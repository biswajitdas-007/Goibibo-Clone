import React from 'react'
import "./Amenities.css"
import bottle from "./bottle.svg";
import wifi from "./wifi.svg";
import tv from "./tv.svg";
import charge from "./charge.svg";
import contact from "./contact.svg";
import pillow from "./pillow.svg";
import light from "./light.svg";
import blankets from "./blankets.svg";
import cctv from "./cctv.svg";
import magazine from "./magazine.svg";
import scanner from "./scanner.svg";
export const Amenities = ({ bus }) => {
    console.log("Amenities:", bus);
    return (
        <div>
            <div style={{ marginLeft: "20px" }}>Amenities</div>
            <br/>
            <div className="Amenities">
                
                {bus.amenities.map((amen) => <>
                    {amen === "water bottle" ? 
                        <img className="aimg" src={bottle} alt="">

                        </img> : amen === "wifi" ? <img className="aimg" src={wifi} alt="">
                            
                        </img> : amen === "Personal TV" ? <img className="aimg" src={tv} alt="">
                                
                        </img> : amen === "Charging Point" ? <img className="aimg" src={charge} alt="">
                                    
                        </img> : amen === "Emergency Contact Number" ? <img className="aimg" src={contact} alt="">
                                        
                        </img> : amen === "Reading Light" ? <img className="aimg" src={light} alt="">
                                            
                        </img> : amen === "Pillow" ? <img className="aimg" src={pillow} alt="">
                         
                        </img> : amen === "blankets" ? <img className="aimg" src={blankets} alt="">
                                                    
                        </img> : amen === "CCTV" ? <img className="aimg" src={cctv} alt="">
                                                        
                        </img> : amen === "Magazine Pouch" ? <img className="aimg" src={magazine} alt="">
                                                            
                        </img> : amen === "Thermal Scanner" ? <img className="aimg" src={scanner} alt=""></img> : ""}
                    
                    <div className="AText">{amen}</div>
                </>)}
                
                
            </div>
            <br />
            <div className="pText"> Photos</div><br/>
                <img className="photos" src="https://s3-ap-southeast-1.amazonaws.com/rbplus/BusImage/Domestic/20218_1093_3.png" alt=""></img>
            <img  className="photos" src="https://s3-ap-southeast-1.amazonaws.com/rbplus/BusImage/Domestic/20218_1093_1.png" alt=""></img>
            <img className="photos" src="https://s3-ap-southeast-1.amazonaws.com/rbplus/BusImage/Domestic/3620_1060_2.png" alt=""></img>
        </div>
    )
}