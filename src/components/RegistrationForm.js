import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    bio: '',
  });

  const [errors, setErrors] = useState({
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
    let isValid = true;
    const updatedErrors = {
      name: '',
      email: '',
      contactNumber: '',
      bio: '',
    };

    // Validate Name
    if (formData.name.trim() === '') {
      updatedErrors.name = 'Full name is required';
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      updatedErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate Contact Number
    const phoneNumberRegex = /^\d{10}$/; // Change this regex as needed
    if (!phoneNumberRegex.test(formData.contactNumber)) {
      updatedErrors.contactNumber = 'Invalid contact number';
      isValid = false;
    }

    // Validate Bio
    if (formData.bio.trim() === '') {
      updatedErrors.bio = 'Bio is required';
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
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
        {errors.name && <span className="error">{errors.name}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
        />
        {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}

        <textarea
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleInputChange}
          required
        />
        {errors.bio && <span className="error">{errors.bio}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;