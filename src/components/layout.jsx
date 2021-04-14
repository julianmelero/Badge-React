import React from "react";
import Navbar from "./NavBar";

function Layout(props) {
  //const children = props.children;

  return (
    <React.Fragment>
      <Navbar></Navbar>
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
