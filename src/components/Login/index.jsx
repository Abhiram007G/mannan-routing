import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { 
      username: this.state.username, 
      password: this.state.password 
    };

    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    console.log(response)
    const response_json = await response.json()
    console.log(response_json)

    if(response.ok === true){
      this.props.navigate("/")
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form-box">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}



export default LoginForm;