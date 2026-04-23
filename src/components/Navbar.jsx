import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">My Portfolio</h2>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/about"> About </NavLink>

        <NavLink to="/portfolio"> Portfolio </NavLink>

        <NavLink to="/contact"> Contact </NavLink>
      </div>
    </nav>
  );
}
