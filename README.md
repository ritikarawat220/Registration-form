
# Event Registration Interface in React

## Objective

Design and implement an interactive registration form for a fictional event using React. This project demonstrates your React and front-end skills by creating a user-friendly and visually appealing application without relying on external UI libraries. The application allows users to register for the event and view registered users' details.

## Live demo 
[live link](https://registration-form-9z4t.onrender.com/)

## Features

1. **Registration Form (React Component):**

   - Fields for the user's full name, email address, contact number, and a short bio.
   - All fields are mandatory.
   - Form validation in React for email format, phone number format, and character limits.
   - Animations for focus events on input fields using CSS.

2. **Registered Users List (React Component):**

   - Displays a list of registered users' names and registration timestamps.
   - Each user has a "View Details" button to view their complete details.

3. **User Details Popup/Page (React Component):**

   - Clicking the "View Details" button shows a popup displaying the user's complete details: name, email, contact number, and bio.

4. **Data Persistence using Local Storage:**

   - User registration data is stored persistently in the browser's Local Storage.
   - On page load or refresh, previously registered user data is fetched from Local Storage and displayed.

## Constraints

- The entire project is implemented using React.
- External UI libraries like Material-UI or Bootstrap are not used. All styles and animations are created from scratch.
- React hooks (e.g., useState, useEffect) are used as needed.
- HTML, CSS, and React are used for animations. External animation libraries are not used.
- The project focuses on creating a user-friendly interface.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Clone this repository:

   ```bash
   git clone https://github.com/ritikarawat220/Registration-form.git

## Getting Started
1. Install the dependencies:
   ```bash
   npm install
   
2. Start the development server:
   ```bash
   npm start

3. Open your browser and go to http://localhost:3000 to see the application.

## Built With
React - The JavaScript library used for building the user interface.
HTML and CSS for styling and animations.
