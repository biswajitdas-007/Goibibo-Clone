import React from 'react'

export const Points = ({bus}) => {
    return (
        <div>
            <div className="boarding">
              <h3 style={{marginBottom: "10px"}}>Boarding Point</h3>
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
              <h3 style={{marginBottom: "10px"}}>Dropping Point</h3>
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
    )
}
