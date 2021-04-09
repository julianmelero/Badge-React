import React from "react";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };
  handleClick = (e) => {
    console.log("Button was clicled");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submit");
  };
  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">First Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="firstName"
            id=""
          />
          <button
            type="submit"                        
            onClick={this.handleClick}
            className="btn btn-primary"
          ></button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
