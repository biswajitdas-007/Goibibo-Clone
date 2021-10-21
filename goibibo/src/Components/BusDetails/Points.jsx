import React from 'react';
import "../../styles/point.css";
export const Points = ({bus}) => {
  return (
      
    <div className="points">
      <div>
            <div className="boarding">
              <h3 className="h3">Boarding Point</h3>
                      <div className="boarding_point">
              
                              {bus.boarding_point.map((i) =>
                              (<div >
                                    <label className="time1">{i.time}</label><br />
                                  <label className="point">{i.point}</label><br />
                                  <label className="info">{i.info}</label><br />
                              </div>))}
            </div>
            </div>
            <div className="dropping">
              <h3 className="h3">Dropping Point</h3>
                      <div className="boarding_point">
                              {bus.dropping_point.map((i) =>
                              (<div >
                                    <label className="time1">{i.time}</label><br />
                                  <label className="point">{i.point}</label><br />
                                  <label className="info">{i.info}</label><br />
                              </div>))}
                      </div>
        </div>
        </div>
        <br/>
      </div>
      
    )
}
