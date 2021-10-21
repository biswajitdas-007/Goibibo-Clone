import React from "react";
import { useEffect, useState,useContext } from "react"
import "./Businfo.css"
import { AuthContext } from "../../Context/FilterContext";
import { Link } from "react-router-dom";
import { SelectSeatNavbar } from "./SelectSeatNavber";


export default function Businfo() {
     
    const { fetchdata,empty } = useContext(AuthContext);
     const [data, SetData] = useState([])
  const [seat_status, setseat_status] = useState(false);
    const [card, setCard] = useState([]);
    

    // useEffect(() => {
    //     axios.get("http://localhost:3001/bus")
    //         .then((res) => {
                
    //             console.log(res.data.data);
    //              SetData(res.data.data);
    //     })
    // },[])
    useEffect(() => {
        SetData(fetchdata)
        
    },[fetchdata])

      useEffect(() => {
        console.log("card:",card)
    },[seat_status,card])
    return empty ? (
        <div>
            <div class="NoResultsstyles__NoResultsCard-sc-g9lvxg-0 bkNanZ">
                <img src="https://gos3.ibcdn.com/busnoresultimg-1591617244.png" width="110px" height="110px" alt=""/>
                    <p class="NoResultsstyles__ErrorMsg-sc-g9lvxg-3 dKWUaD">No bus found for the filter(s) applied.</p>
                    <p class="NoResultsstyles__SmallText-sc-g9lvxg-2 jDppvj">Reset filter(s) to see all 10 buses.</p>
                    <button class="NoResultsstyles__ResetButton-sc-g9lvxg-1 eTFrLs">RESET FILTERS</button>
                    </div>
        </div>
    ) : (
        <>
            {console.log(fetchdata,data)}
            {fetchdata.map((el) => (
                <div className="iHanPL">
                    <div className="bnygpK ">
                        <div className="ceHzJh"></div>
                        <div className="rKspQ ">
                            <p className="busname-style">{el.company}</p>
                            <p className="bus-category">{el.type[0]}/{el.type[1]}</p>
                            <p className="rating-area">
                                <span className="rating-box">
                                    <span className="rating-number">{el.rating}</span>/5
                                </span>
                                <span className="lines-rating"></span>
                                <span className="count-rating">398 ratings</span>
                            </p>
                        </div>
                        <div className="fuhYuT">
                            <div className="start-time">
                                <p className="start-time-p1">{el.source_t}</p>
                                <p className="start-time-p2">{el.source_l }</p>
                            </div>
                            <div className="middle">
                                <span className="middle-span1">{ el.duration}</span>
                                <div className="middle-div">
                                    <span className="middle-div-span1"></span>
                                    <span className="middle-div-span2"></span>
                                     <span  className="middle-div-span1" ></span>
                                </div>
                                <span className="middle-span2">2 stopage point</span>
                            </div>
                            <div className="end-time">
                                <p className="end-time-p1">1st oct</p>
                                <p className="end-time-p2">{ el.destination_t}</p>
                                <p className="end-time-p3">{ el.destination_l}</p>
                            </div>
                        </div>
                        <div className="iEZJwA">
                            <div className="hCgAgC">
                                <div className="price-box">
                                    <div className="price-tag-div">
                                        <span>₹</span>
                                        <span className="price-actual">1500</span>
                                    </div>
                                </div>
                                <div className="seat-box">
                                    <div className="seat-div">
                                        <p className="seat-div-p">
                                            <span>3 window seat</span>
                                        </p>
                                        <p className="total-seat-left">Total 5 seat left</p>
                                        <div className="btn-div">
                                            <button className="btn-seat" onClick={() => {
                                                setCard(el.id)
                                                            setseat_status(!seat_status)
                                        }}>
                                                <div className="div-inside">
                                                    <span>{seat_status&&el.id===card?"HIDE SEAT":"SELECT SEAT"}</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bottom-part">
                        <div className="jQlYhQ">
                            <div className="ftIqRK">
                                <span>{el.popular[0]} {el.popular[1]}</span>
                            </div>
                        </div>
                        <div className="jQlYhQ ">
                            <Link className=" bQcslY" to="/bus/points" onClick={() => {
                                                            setseat_status(!seat_status)
                                        }}>{seat_status&&el.id===card?"":"Boarding & Dropping Points"}</Link>
                            <Link className=" bQcslY" to="/bus/amenities" onClick={() => {
                                                            setseat_status(!seat_status)
                                        }}>{seat_status&&el.id===card?"":"Amenities, Policies & Bus Details"}</Link>
                        </div>
                    </div>
                    {seat_status&&el.id===card?<SelectSeatNavbar bus={el}></SelectSeatNavbar>:""}
                </div>
                
               
            ))}
        </>
    )
}
 