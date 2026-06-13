import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">🩸 BBMS</h1>
        <ul className="flex gap-8 items-center font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-red-600 transition mar">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blood-availability"
              className="hover:text-red-600 transition"
            >
              Blood Availability
            </Link>
          </li>
          <li>
            <Link
              to="/donation-program"
              className="hover:text-red-600 transition"
            >
              Donation
            </Link>
          </li>
        </ul>{" "}
        <div>
          {" "}
          <button>
            {" "}
            <Link
              to="/login"
              className="hover:text-red-600 border p-2 rounded-md transition"
            >
              LOGIN
            </Link>
          </button>
          <button className="">
            {" "}
            <Link
              to="/register"
              className="text-white rounded-md p-2  bg-red-600 m-5"
            >
              REGISTER
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
