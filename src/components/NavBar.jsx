import React from "react";

import logo from "../images/badge-header.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid"></div>
        <a className="Navbar__brand" href="">
          <img className="Navbar__brand-logo" src={logo} alt="" />
          <span className="">Platzi</span>
          <span>Conf</span>
        </a>
      </div>
    );
  }
}

export default Navbar;
