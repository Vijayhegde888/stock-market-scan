import {Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import "./App.css";
import Criteria from "./components/Criteria";
import StockState from "./store/StockState";
function App() {
  return (
    <>
      <StockState >
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="details/:stockId" element={<Criteria/>} />
      </Routes>
    </StockState>      
      </>
  );
}

export default App;
