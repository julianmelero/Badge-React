import React from "react";

import "./styles/Navbar.css";
import "./styles/BadgeNew.css";

import Badge from "../Badge";
import BadgeForm from "../BadgeForm.jsx";

import header from "../../images/badge-header.svg";
import Navbar from "../NavBar.jsx";

class BadgeNew extends React.Component {
  state = { form: {
    firstName:'',
    lastName:'',
    email:'',
    jobTitle:'',
    Twitter:'',
  } };

  handleChange = (e) => {
    /* Al renderizar, coge el último valor, y no el de cada uno.
  Por lo que debemos hacer que coja cada valor por separado de varias formas */

    // Sobreescribiendo los valores
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;

    

    this.setState({
      //form: nextForm,
      

      // Otra forma es pasarle todos los valores anteriores + el nuevo
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  };
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
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                Twitter={this.state.form.Twitter}
                email= {this.state.form.email}
                jobTitle= {this.state.form.jobTitle}
              ></Badge>
            </div>
            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
