import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blood-avalebility">BA</Link>
        </li>
        <li>
          {" "}
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/register">REGISTER</Link>
        </li>
        <li>
          <Link to="donation-program">Donation</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
