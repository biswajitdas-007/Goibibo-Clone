import './App.css';
import Bus from './Components/Bus/Bus';
import { Payment } from "./Components/Payment/Payment";
import { Route } from "react-router-dom";
import {BusDetails} from "./Components/BusDetails/BusDetails"
function App() {
  return (
    <div className="App">
      
      <Route exact path="/">
        <Bus />
      </Route>
      <Route path="/bus">
        <BusDetails />
      </Route>
    </div>
  );
}

export default App;
