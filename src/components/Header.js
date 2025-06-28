import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {

  const  [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header rendered")

  useEffect(() => {
    console.log("useEffect called")
  }, [])

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about" >About Us</Link>
          </li>
          <li>
            <Link to="/contact" >Contact</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;