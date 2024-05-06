import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {

  let navTxtColor=(props.mode==="dark" || props.mode==="success") ? 'dark' : 'light'

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${navTxtColor} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.buttonText}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" onClick={()=>{props.changeTheme("Dark")}} value="dark">
                    Dark
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={()=>{props.changeTheme("Blue")}}>
                    Blue
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={()=>{props.changeTheme("Green")}}>
                    Green
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" onClick={()=>{props.changeTheme("Light")}}>
                    Light
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text",
};
