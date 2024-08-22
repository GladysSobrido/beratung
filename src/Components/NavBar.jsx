import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";
export function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src="src/assets/logo_white_inverted.svg"></img>
      </Link>

      <div>
        <ul className="menu">
          <div>
            <NavLink to={"/Leistungen"}>Leistungen</NavLink>
          </div>
          <div>
            <NavLink to={"/Unternehme"}>Über Uns</NavLink>
          </div>
          <div>
            <NavLink to={"/Kontakt"}>Kontakt</NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
