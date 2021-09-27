import React from "react";
import Logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-header">
          <img src={Logo} alt="logo" />
          <h3>My alerts </h3>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
