import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  return (
    <nav>
      <div className="container navCont">
        <div className={`navContent${navActive ? " navGet" : ""}`}>
          <div className="NavLogo">Eventoy</div>
          <ul>
            <li className="liActive">Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
          <div className="Register">
            <button className="DButton">Register</button>
          </div>
        </div>
      </div>
      <div
        className={`navToggle${navActive ? " navToggleActive" : ""}`}
        onClick={() => setNavActive(!navActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
