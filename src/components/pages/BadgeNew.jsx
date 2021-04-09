import React from "react";

import "./styles/Navbar.css";
import "./styles/BadgeNew.css";

import Badge from "../Badge";
import BadgeForm from '../BadgeForm.jsx';

import header from "../../images/badge-header.svg";
import Navbar from "../NavBar.jsx";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge firstName="Julián" lastName="Melero" socialName="julianmelero_"></Badge>
            </div>
            <div className="col-6">
                <BadgeForm>

                </BadgeForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
