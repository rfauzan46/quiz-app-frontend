import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Add this line to include Bootstrap's JavaScript

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          Online Quiz App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Change data-bs-toggle to data-toggle
          data-bs-target="#navbarNav" // Change data-bs-target to data-target
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/admin"}>
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/quiz-stepper"}>
                Take Quiz
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
