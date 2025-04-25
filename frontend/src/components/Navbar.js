import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="fw-bold">EMS</span>
        </Link>
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <button className="btn btn-link text-white text-decoration-none dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown">
              <i className="fas fa-user-circle fa-lg"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#"><i className="fas fa-user me-2"></i>Profile</a></li>
              <li><a className="dropdown-item" href="#"><i className="fas fa-cog me-2"></i>Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt me-2"></i>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 