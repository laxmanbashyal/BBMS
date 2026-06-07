import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex  justify-between text-white bg-[#0F172A]  h-32 sm:h-48 md:h-64 lg:h-96 " >

      <div className="ml-20">
               <h2 className="text-2xl font-bold text-red-600">🩸 BBMS</h2>
               <span className="inline-block w-50 ">
          Connecting donor with those in need . 
          Every drop counts .save lives
          through voluntery blood donation
        </span>
        <div className="flex gap-1.5 ">
          {" "}
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
       
      </div>  
         </div>
       
        
        
      <div>
        <h2 className="text-xl font-bold ">Quick links</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blood-availability">BLood Availability</Link>
          </li>
          <li>
            <Link to="/donation-program">Donation</Link>
          </li>
        </ul>
      </div>

      <div className="w-70">
        <p className="text-xl font-bold ">Blood Group Available</p>
      
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">A+</button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">A-</button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md " >B+</button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">B-</button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">O+</button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md " >O-</button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">AB+</button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">AB-</button>
      </div>
      <div>
        <p className="text-xl font-bold">Contact US</p>
        <span className="flex gap-1.5 ">
          <FaLocationDot /> Butwal Amarpath
        </span>
        <span className="flex gap-1.5 ">
          <FaPhone /> 9843708968
        </span>
        <span className="flex gap-1.5 ">
          <BiLogoGmail /> bloodbankbutwal@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
