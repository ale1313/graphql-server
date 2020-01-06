// REACT
import React from "react";

// NAVIGATION
import { Link } from "react-router-dom";

// ────────────────────────────────────────────────────────────────────────────────────────────────

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4">
    <div className="container">
      <Link className="navbar-brand text-light font-weight-bold" to="/">
        CRM
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navegacion"
        aria-controls="navegacion"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navegacion">
        <ul className="navbar-nav ml-auto text-right">
          <li className="nav-item dropdown mr-md-2 mb-2 mb-md-0">
            <button
              className="nav-link dropdown-toggle btn btn-block btn-success"
              data-toggle="dropdown"
            >
              Clients
            </button>
            <div className="dropdown-menu" aria-labelledby="navegacion">
              <Link to="/clients" className="dropdown-item">
                View clients
              </Link>
              <Link to="/clients/new" className="dropdown-item">
                New client
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <button
              className="nav-link dropdown-toggle btn btn-block btn-success"
              data-toggle="dropdown"
            >
              Products
            </button>
            <div className="dropdown-menu" aria-labelledby="navegacion">
              <Link to="/products" className="dropdown-item">
                View products
              </Link>
              <Link to="/products/new" className="dropdown-item">
                New product
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
