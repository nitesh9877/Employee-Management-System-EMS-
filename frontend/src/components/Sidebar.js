import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'fas fa-home', label: 'Dashboard' },
    { path: '/employees', icon: 'fas fa-users', label: 'Employees' },
    { path: '/departments', icon: 'fas fa-building', label: 'Departments' },
    { path: '/reports', icon: 'fas fa-chart-line', label: 'Reports' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h5 className="text-white mb-3 px-3">Menu</h5>
      </div>
      <ul className="nav flex-column">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link 
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`} 
              to={item.path}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar; 