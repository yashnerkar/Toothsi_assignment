import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Thanks from "./components/thanks/Thanks";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
