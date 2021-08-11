import React, {Component} from "react";
import {
  BrowserRouter,
  Route,
  NavLink
} from "react-router-dom";

// Import CSS stylesheets
import "./index.css"

// Import API key
import APIKey from "./config";

export default class App extends Component {

  render () {
    return (
      <h1>Hello!</h1>
    );
  }
}
