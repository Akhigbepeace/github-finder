import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  static defaultProps = {
    icon: "fab fa-github",
    title: "Github Finder",
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <i className={this.props.icon}></i>
        <h1>{this.props.title}</h1>
      </nav>
    );
  }
}
