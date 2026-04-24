import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">40K Roster Builder</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/create">Create Units</Link>
        </li>

        <li>
          <Link to="/roster">Build Roster</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
