import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    bio: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    contactNumber: '',
    name: '',
    bio: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
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
    let valid = true;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const phoneRegex = /^[0-9]{10}$/;

    const newErrors = { email: '', contactNumber: '', name: '', bio: '' };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (formData.contactNumber.trim() === '') {
      newErrors.contactNumber = 'Contact Number is required';
      valid = false;
    } else if (!phoneRegex.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Invalid phone number format';
      valid = false;
    }

    if (formData.bio.trim() === '') {
      newErrors.bio = 'Bio is required';
      valid = false;
    } else if (formData.bio.length > 500) {
      newErrors.bio = 'Bio must be 500 characters or less';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
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
          className={errors.name ? 'error' : ''}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className={errors.email ? 'error' : ''}
        />

        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleInputChange}
          required
          className={errors.contactNumber ? 'error' : ''}
        />

        <textarea
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleInputChange}
          required
          className={errors.bio ? 'error' : ''}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
