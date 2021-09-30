import React from 'react';
import "./seats.css";
import Logo from "./seat.svg";
export const Seats = ({ bus}) => {
 let c1=1
  return  (<>
    
        <>
        <div style={{float:"left"}}>
            <div className="navbar">1</div>
            <div className="navbar_options">Select boarding and dropping point</div>
            <br />
            <br/>
            <div className="boarding">
              <div style={{marginBottom: "10px"}}>Boarding Point</div>
                      <div className="boarding_point">
                        <form >
                              {bus.boarding_point.map((i) =>
                              (<div >
                                  <input className="input"type="radio" id={i.point} name="bus"  ></input>
                                    <label className="time">{i.time}</label><br />
                                  <label className="point">{i.point}</label><br />
                                  <label className="info">{i.info}</label><br />
                              </div>))}
                        </form>
            </div>
            </div>
            <div className="dropping">
              <div style={{marginBottom: "10px"}}>Dropping Point</div>
                      <div className="boarding_point">
                        <form >
                              {bus.dropping_point.map((i) =>
                              (<div >
                                  <input className="input" value={i.id} type="radio"  name="bus"  ></input>
                                    <label className="time">{i.time}</label><br />
                                  <label className="point">{i.point}</label><br />
                                  <label className="info">{i.info}</label><br />
                              </div>))}
                              </form>
                              </div>
            </div>
            </div>
        </>
        
        <><div style={{float:'left',clear:"right"}}>
          <div className="navbar">2</div>
          <div className="navbar_options">Select your seat</div>
          <br/><br/>
          <div className="box box1"></div><span style={{ marginLeft: "5px",float: "left" }}>Booked</span>
          <div className="box box2"></div><span style={{ marginLeft: "5px", float: "left" }}>Available</span>
          <div className="box box3"></div><span style={{ marginLeft: "5px", float: "left" }}>Ladies</span>
          <div className="box box4"></div><span style={{ marginLeft: "5px", float: "left" }}>Men</span>
          <div className="box5" style={{ clear: "left" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="SeatBlockedViewIcon-sc-gw722q-0 iGmCcx">
              <g fill="none" fillRule="evenodd"><rect width="11" height="11" x="0.5" y="0.5" fill="#D8D8D8" stroke="#979797" rx="3"></rect>
                <path stroke="#2BAC36" strokeLinecap="round" d="M10 10L2 2m0 8l8-8"></path></g>
            </svg></div><span style={{ marginLeft: "5px", float: "left" }}>Blocked for social Distancing</span>
          
          
        
          <div className="seats">
            <div className="seat_selection">
              <aside   className="header">
                <span className="upper">UPPER</span>
              </aside>
              {}
              <div>{bus.seats.map((e) => (
                c1 % 6 === 0 ? <><div value={c1++} style={{ clear: "both" }} >{console.log(c1)}</div><br /></> : <img src={Logo} alt="" value={c1++}></img> 
              ))}
                </div>
              </div>
          </div>
          <div className="seats">
            <div className="seat_selection">
              <aside   className="header">
                <span className="upper">Lower</span>
              </aside>
              </div>
          </div>
          </div>
      </>
    </>
    
    )
}
