import React from 'react'
import "../../styles/Amenities.css"
import bottle from "../../public/bottle.svg";
import wifi from "../../public/wifi.svg";
import tv from "../../public/tv.svg";
import charge from "../../public/charge.svg";
import contact from "../../public/contact.svg";
import pillow from "../../public/pillow.svg";
import light from "../../public/light.svg";
import blankets from "../../public/blankets.svg";
import cctv from "../../public/cctv.svg";
import magazine from "../../public/magazine.svg";
import scanner from "../../public/scanner.svg";
export const Amenities = ({ bus }) => {
    return (
        <div>
            <div className="marginleft">Amenities</div>
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
            <img className="photos"  src="https://s3-ap-southeast-1.amazonaws.com/rbplus/BusImage/Domestic/9365_1087_3.png" alt=""></img>
        </div>
    )
}
