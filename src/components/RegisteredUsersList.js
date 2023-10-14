import React, { useState, useEffect } from 'react';
import UserDetailsPopup from './UserDetailsPopup';

function RegisteredUsersList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const viewUserDetails = (index) => {
    setSelectedUser(users[index]);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    // Retrieve the registered users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('eventUsers') || '[]');
    setUsers(storedUsers);
  }, []);

  return (
    <div>
      <h2 className='event'>Registered Users for the Event</h2>
      <ul className='map'>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.timestamp}){' '}
            <button className='view-details' onClick={() => viewUserDetails(index)}>View Details</button>
          </li>
        ))}
      </ul>
      {isPopupOpen && (
        <UserDetailsPopup user={selectedUser} onClose={closePopup} />
      )}
    </div>
  );
}

export default RegisteredUsersList;
