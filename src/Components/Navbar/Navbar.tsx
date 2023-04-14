import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="container navCont">
      <nav>
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
      </nav>
    </div>
  );
}
