import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm'

class App extends Component {

  state = {
    email: "",
    password: "",
    repeatPass: "",
    validated: false,
    empty: false,
    validEmail: true,
    passesMatch: true
  }

  handleSubmit = (e) => {
    
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="App">
        <LoginForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} data={this.state} />
      </div>
    )
  }
}

export default App;
