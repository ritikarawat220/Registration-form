import React, { useState } from 'react';
function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    bio: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Create a user object with the form data and a timestamp
      const user = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        bio: formData.bio,
        timestamp: new Date().toLocaleString(),
      };
      // Retrieve the existing users from local storage or initialize an empty array
      const storedUsers = JSON.parse(localStorage.getItem('eventUsers') || '[]');
      // Add the new user to the array of users
      storedUsers.push(user);
      // Save the updated array back to local storage
      localStorage.setItem('eventUsers', JSON.stringify(storedUsers));
      // Reset the form data
      setFormData({
        name: '',
        email: '',
        contactNumber: '',
        bio: '',
      });
    }
  };

  const validateForm = () => {
    return true; // You can add validation logic here if needed.
  };

  return (
    <div className="registration-form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default RegistrationForm;
