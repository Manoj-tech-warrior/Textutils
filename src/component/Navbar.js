import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();

  React.useEffect(() => {
    // Google Analytics
    console.log(location.pathname);
  }, [location]);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      style={{
        backgroundColor: props.mode === "light" ? "#07f07b" : "#333",
        color: props.mode === "light" ? "#333" : "#fff",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <b>{props.title}</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                } `}
                aria-current="page"
                to="/"
              >
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                } `}
                to="/about"
              >
                <b>About</b>
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={props.toggleMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.mode === "light"
                ? "Enable Dark Mode"
                : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Set Navbar Title",
  aboutText: "About Text",
};

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
// style={{color:props.mode === 'dark'?'white':'black'}}// about attribute
