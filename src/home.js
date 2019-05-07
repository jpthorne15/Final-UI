import React, { Component } from "react";
import { Link } from "react-router-dom";
// import './home.css'

// Login This is where users interact with the page after logging in
class Home extends Component {
  render() {
    return (
      <div className="App">
        <p>hi from Home</p>
        {/* Confirms on localhost this is the Home Page */}
        <Link to="/forms">Form</Link>
        <br />
        <Link to="/people">People</Link>

        {/* <form> */}
          {/* <h2>Login</h2>
          Username:
          <br />
          <input type="text" name="username" />
          <br />
          Password:
          <br />
          <input type="password" name="Pwd" />
          <br />
        </form> */}
      </div>
    );
  }
}

export default Home;