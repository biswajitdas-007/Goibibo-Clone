import "./App.css";
import Bus from "./components/Bus/Bus";
import { Payment } from "./components/Payment/Payment";
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
