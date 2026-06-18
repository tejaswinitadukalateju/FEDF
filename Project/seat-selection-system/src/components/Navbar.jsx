import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Seat Selection System</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;