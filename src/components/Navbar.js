import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import RegisteredUsersList from './RegisteredUsersList';

function Navbar() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="right">
            <Link to="/registered-users">Registered Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/registered-users" element={<RegisteredUsersList />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
