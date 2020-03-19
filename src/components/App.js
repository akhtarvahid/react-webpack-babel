import React, { Component } from "react";
import theme from "../assets/theme.png";
import "./App.scss";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="sass-container">
        <div className="sass-form">
          <form>
            <input
              type="text"
              value={name}
              onChange={this.handleChange}
              placeholder="Please Enter"
            />
            <h2 className="sass-text-color">
              {name === "" ? "Start typing..." : name}
            </h2>
          </form>
          <img className="apply-css" src={theme} alt="theme-image" />
        </div>
      </div>
    );
  }
}
export default App;
