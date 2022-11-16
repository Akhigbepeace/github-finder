import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <i className={icon}></i>
      <h1>{title}</h1>
    </nav>
  );
};

Navbar.defaultProps = {
  icon: "fab fa-github fa-2x",
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
