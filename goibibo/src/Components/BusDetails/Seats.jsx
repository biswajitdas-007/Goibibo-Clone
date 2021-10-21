import React from 'react';
import "../../styles/seats.css";
import { Link } from "react-router-dom";
import {AuthContext} from "../../Context/FilterContext"

export const Seats = ({ bus }) => {
  let c1 = 1;
  let c2 = 1;
  const [book, setBook] = React.useState(false);
  const [seat, setseat] = React.useState("");
  const [cost, setcost] = React.useState("");
  const { handle_seat } = React.useContext(AuthContext);
  const [b1, setb1] = React.useState("");
  const [b2, setb2] = React.useState("");
  const [d1, setd1] = React.useState("");
  const [d2, setd2] = React.useState("");
  let arr = []
  const handleChange = () => {
    setBook(!book);
  }
  React.useEffect(() => {
  }, [book]);
  const handle_boarding_point = (e) => {
    setb1(e.target.value);
    setb2(e.target.id)
  }
  const handle_dropping_point = (e) => {
    setd1(e.target.value);
    setd2(e.target.id);
}
  const handle_seat_click = () => {
    arr.push(cost,seat,b1,b2,d1,d2);
  handle_seat(arr)
}
 
  return  (<>
    
        <>
        <div className="seat_div">
            <div className="navbar">1</div>
            <div className="navbar_options">Select boarding and dropping point</div>
            <br />
            <br/>
            <div className="boarding">
              <div className="margin-bottom">Boarding Point</div>
                      <div className="boarding_point">
                        <form >
                              {bus.boarding_point.map((i) =>
                              (<div >
                                  <input className="input"type="radio" id={i.time} name="bus" value={i.point} onChange={handle_boarding_point}  ></input>
                                    <label className="time">{i.time}</label><br />
                                  <label className="point">{i.point}</label><br />
                                  <label className="info">{i.info}</label><br />
                              </div>))}
                        </form>
            </div>
            </div>
            <div className="dropping">
              <div className="margin-bottom">Dropping Point</div>
                      <div className="boarding_point">
                        <form >
                              {bus.dropping_point.map((i) =>
                              (<div >
                                  <input className="input" value={i.point} type="radio" id={i.time} name="bus" onChange={handle_dropping_point}  ></input>
                                    <label className="time">{i.time}</label><br />
                                  <label className="point">{i.point}</label><br />
                                  <label className="info">{i.info}</label><br />
                              </div>))}
                              </form>
                              </div>
            </div>
            </div>
        </>
        
        <><div className="floatClear">
          <div className="navbar">2</div>
          <div className="navbar_options">Select your seat</div>
          <br/><br/>
          <div className="box box1"></div><span className="margin">Booked</span>
          <div className="box box2"></div><span className="margin">Available</span>
          <div className="box box3"></div><span className="margin">Ladies</span>
          <div className="box box4"></div><span className="margin">Men</span>
          <div className="box5" style={{ clear: "left" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="SeatBlockedViewIcon-sc-gw722q-0 iGmCcx">
              <g fill="none" fillRule="evenodd"><rect width="11" height="11" x="0.5" y="0.5" fill="#D8D8D8" stroke="#979797" rx="3"></rect>
                <path stroke="#2BAC36" strokeLinecap="round" d="M10 10L2 2m0 8l8-8"></path></g>
            </svg></div><span className="margin">Blocked for social Distancing</span>
          
      <br />
      <br/>
        
          <div className="seats">
            <div className="seat_selection">
              <aside   className="header">
                <span className="upper">UPPER</span>
              </aside>
          <div className="bus_icon">{bus.seats.map((e) => (
          
            (e.pos.includes("U") ? (
              c1 % 6 === 0 ? <>
                <div value={c1++} className="clear" >
                </div><br /></> : e.status && book === false ?
                  
                  <svg className="bus_icon1" onClick={() => {
                    setseat(e.pos)
                    setcost(e.cost)
    setBook(!book)
  }} name={e.pos} value={ c1++}xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75">
<path fill="#FFF" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path>
<path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg>
  : book &&seat===e.pos?
                     <svg className="bus_icon1" onClick={handleChange} value={ c1++}xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75">
<path fill="#A6D273" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path>
                    <path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg>
                                   

            :e.status===false? <svg className="bus_icon1"  value={c1++} xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75">
<path fill="#C7C7C2" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path>
<path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg>
:<svg  className="bus_icon1" value={c1++} xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75">
<path fill="#FFF" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path>
<path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg>

                  
              ):"")))}
                </div>
              </div>
          </div>
          <div className="seats">
            <div className="seat_selection">
              <aside   className="header">
                <span className="upper">Lower</span>
          </aside>
          <div className="bus_icon">{bus.seats.map((e) => (e.pos.includes("L") || e.pos.includes("A1") || e.pos.includes("A2")
            || e.pos.includes("A3")|| e.pos.includes("A4")|| e.pos.includes("A5")?(
              c2 % 6 === 0 ? <><div  value={c2++} className="clear" >
                </div><br /></> : e.status && book === false ?
                  
                  <svg className="bus_icon1" onClick={() => {
                    setseat(e.pos)
    setBook(!book)
  }} name={e.pos} value={ c2++}xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75">
<path fill="#FFF" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path>
<path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg>
  : book &&seat===e.pos?
                     <svg className="bus_icon1" onClick={handleChange} value={ c2++}xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75">
<path fill="#A6D273" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path>
                    <path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg>
                                   

            :e.status===false? <svg className="bus_icon1" value={c2++} xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75">
<path fill="#C7C7C2" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path>
<path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg>
:<svg className="bus_icon1" value={c2++} xmlns="http://www.w3.org/2000/svg" width="44" height="18" viewBox="0 0 51 22" class="BusSleeperIcon-sc-ha5qpg-0 cdzSbl"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="0.75">
<path fill="#FFF" d="M47.11.711H3.162c-.724 0-1.378.293-1.85.767a2.61 2.61 0 00-.767 1.855v15.235c0 .724.293 1.38.767 1.854a2.61 2.61 0 001.85.768H47.11a2.615 2.615 0 002.618-2.622V3.333c0-.724-.294-1.38-.768-1.854a2.61 2.61 0 00-1.85-.768z"></path>
<path fill="#C7C7C2" d="M42.377 3.032h2.319c.445 0 .851.184 1.146.479.294.294.477.7.477 1.147v12.585a1.62 1.62 0 01-1.623 1.626h-2.319a1.62 1.62 0 01-1.146-.479 1.62 1.62 0 01-.477-1.147V4.658a1.62 1.62 0 011.623-1.626z"></path></g></svg>

                  
              ):""))}
                </div>
              </div>
      </div>
      
      <Link to="/payment" bus={bus}><button onClick={handle_seat_click} className="proceed_button" disabled={!book} style={book?{backgroundColor:"rgb(255, 109, 56)"}:{backgroundColor:"rgb(199, 199, 194)"}}>{book?"Continue": "Select Seat to Proceed"}</button></Link>
      
      <br />
      {book ?
        <>
        <div className="floating"><p className="selT">Seat Selected</p>
            <p className="selT1">{seat}</p>
          </div>
          <div className="floating1">
          <span className="cost">₹{ cost}</span></div>
        </>
        : ""}
      <br />
      <br/>
    </div>
    
      
      
      </>
    </>
    
    )
}
