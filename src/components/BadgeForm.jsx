import React from "react";

class BadgeForm extends React.Component {
  // Iniciamos los valores de los formularios
  //state = {};
  /*handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };*/
  handleClick = (e) => {
    console.log("Button was clicled");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={this.props.onChange}
            type="text"
            name="firstName"
            id="firstName"
            value={this.props.formValues.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={this.props.onChange}
            type="text"
            name="lastName"
            id="lastName"
            value={this.props.formValues.lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={this.props.onChange}
            type="email"
            name="email"
            id="email"
            value={this.props.formValues.email}
          />
          <label htmlFor="jobTitle">Job Title</label>
          <input
            onChange={this.props.onChange}
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={this.props.formValues.jobTitle}
          />
          <label htmlFor="Twitter">Twitter</label>
          <input
            onChange={this.props.onChange}
            type="text"
            name="Twitter"
            id="Twitter"
            value={this.props.formValues.Twitter}
          />
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
