import React, { useState, useEffect } from 'react';
import UserDetails from './UserDetails';

function RegisteredUsersList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const viewUserDetails = (index) => {
    // When a user clicks "View Details," set the selected user to display details
    setSelectedUser(users[index]);
  };

  useEffect(() => {
    // Retrieve the registered users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('eventUsers') || '[]');
    setUsers(storedUsers);
  }, []);

  return (
    <div>
      <h2>Registered Users for the Event</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.timestamp}){' '}
            <button onClick={() => viewUserDetails(index)}>View Details</button>
          </li>
        ))}
      </ul>
      {selectedUser && <UserDetails user={selectedUser} />}
    </div>
  );
}

export default RegisteredUsersList;
