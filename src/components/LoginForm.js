import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = (event) => {
    event.preventDefault()
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
  
    if (username != "" && password!=""){
      this.setState({
        username: username,
        password: password
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleInputChange}>
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
            /> 
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
