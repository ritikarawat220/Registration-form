import React from 'react';

function UserDetailsPopup({ user, onClose }) {
  return (
    <div className="user-details-popup">
      <div className="user-details-container">
        <h2 className="user-details">User Details</h2>
        <p className="user-details">Name: {user.name}</p>
        <p className="user-details">Email: {user.email}</p>
        <p className="user-details">Contact Number: {user.contactNumber}</p>
        <p className="user-details">Bio: {user.bio}</p>
        <p className="user-details">Registered On: {user.timestamp}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default UserDetailsPopup;
