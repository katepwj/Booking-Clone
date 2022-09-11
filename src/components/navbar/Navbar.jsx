import "./navbar.css"
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link
          exact="true"
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          <span className="logo">Booking</span>
        </Link>

        <div className="navItems">
          <Link className="navButton" to="/register">Register</Link>
          <Link className="navButton" to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar