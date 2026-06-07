
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BloodAvailability from "./pages/BloodAvailability";
import DonationProgram from "./pages/DonationProgram";
import Footer from "./components/Footer";


function App() {
  

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
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
