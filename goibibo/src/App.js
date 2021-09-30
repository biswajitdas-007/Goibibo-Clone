import './App.css';
import Bus from './Components/Bus/Bus';
import { Payment } from "./Components/Payment/Payment";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <Route exact path="/">
        <Bus />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
    </div>
  );
}

export default App;
