import React, { createContext } from 'react'
import axios from 'axios';
export const BusContext = createContext({
 
})
export const BusContextProvider = ({ children}) => {
    const [Buses, setBuses] = React.useState([]);
console.log("At Context");
  const fetchBuses = () => {
    axios
      .get(`https://serene-dusk-24596.herokuapp.com/bus`)
        .then((res) => {
           console.log("res: ", res.data);
        setBuses(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const value={Buses,fetchBuses}
    return (
      <BusContext.Provider value={value}>{ children}</BusContext.Provider>
    )
}
