import React from 'react';

function UserDetails({ user }) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Contact Number: {user.contactNumber}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

export default UserDetails;
