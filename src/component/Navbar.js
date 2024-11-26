import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg  custom-navbar"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1",
          fontSize: "22px",
          height: "80px",
          width: "100%",
          fontWeight: "600",
          backgroundColor: "#9aa0a6",
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{ fontSize: "35px", color: "white" }}
          >
            Current News
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: '#9aa0a6',justifyContent: 'center'
          }}
           >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  justify-content-center" style={{flexWrap : 'nowrap',
            position: 'relative',
            left: '7%',}}>
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
            {/* Log in */}
            <button
              className="signup"
              style={{
                outline: "none",
                backgroungColor: "#F5F5DC",
                border: "none",
                cursor: "pointer",  
                fontSize: "20px",
                color: "black",
                textDecoration: "none",
                marginRight: "20px",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "20px",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            >
              Log in
            </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
