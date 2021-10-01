import React from "react";
import { useEffect, useState,useContext } from "react"
import axios from "axios";
import "./Businfo.css"
import { AuthContext } from "../../context/FilterContext";

export function Businfo() {
     
    const { fetchdata } = useContext(AuthContext);
     const [data, SetData] = useState([])
  
    

    // useEffect(() => {
    //     axios.get("http://localhost:3001/bus")
    //         .then((res) => {
                
    //             console.log(res.data.data);
    //              SetData(res.data.data);
    //     })
    // },[])
    useEffect(() => {
        SetData(fetchdata)
        
    },[])


    return (
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
                                            <button className="btn-seat">
                                                <div className="div-inside">
                                                    <span>SELECT SEAT</span>
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
                            <a class=" bQcslY">Boarding &amp; Dropping Points</a>
                            <a class=" bQcslY">Amenities, Policies &amp; Bus Details</a>

                        </div>
                    </div>
                </div>
                
               
            ))}
        </>
    )
}
 