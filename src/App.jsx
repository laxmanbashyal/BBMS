import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BloodAvailability from "./pages/BloodAvailability";
import DonationProgram from "./pages/DonationProgram";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blood-availability" element={<BloodAvailability />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donation-program" element={<DonationProgram/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
