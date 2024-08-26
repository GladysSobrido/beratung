import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css";
//Authentication with clerk
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src="/logo_white_inverted.svg"></img>
      </Link>

      <div className="elements">
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
        <div className="loginButton">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
