import React from 'react';

function UserDetails({ user }) {
  return (
    <div className="user-details-container">
      <h2 className="user-details">User Details</h2>
      <p className="user-details">Name: {user.name}</p>
      <p className="user-details">Email: {user.email}</p>
      <p className="user-details">Contact Number: {user.contactNumber}</p>
      <p className="user-details">Bio: {user.bio}</p>
      <p className="user-details">Registered On: {user.timestamp}</p>
    </div>
  );
}

export default UserDetails;
