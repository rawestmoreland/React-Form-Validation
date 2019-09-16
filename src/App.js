import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";

// TODO: signup form state to the signup form

class App extends Component {
  state = {
    email: "",
    password: "",
    repeatPass: "",
    valid: false,
    errors: {
      emailError: "",
      passwordError: "",
      repeatPassError: "",
      passMatchError: ""
    }
  };

  handleSubmit = e => {};

  handleChange = e => {
    e.preventDefault();

    // Regex for a valid email address
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    // Destructure the event
    const { name, value } = e.target;

    // Copy of the errors state to change within the switch statement
    let errors = this.state.errors;

    // Check each field for errors
    switch (name) {
      case "email":
        errors.emailError =
          validEmailRegex.test(value) || !value.length > 0
            ? ""
            : "email is not valid";
        break;
      case "password":
        errors.passwordError =
          !value.length > 0 || value.length > 6
            ? ""
            : "password must be at least 6 characters";
        break;
      case "repeatPass":
        errors.passMatchError = (!value.length > 0 || value === this.state.password) ? "" : "passwords do not match"
        break;
      default:
        break;
    }

    // If there are no errors, set the valid state to true to enable the submit button
    if (errors.emailError === "" && errors.passMatchError === "" && errors.passwordError === "") {
      this.setState({
        valid: true
      })
    }
    
    // Set the state with each keystroke
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <LoginForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          data={this.state}
        />
      </div>
    );
  }
}

export default App;
