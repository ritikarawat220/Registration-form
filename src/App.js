import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import RegisteredUsersList from './components/RegisteredUsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationForm />
        <RegisteredUsersList />
      </header>
    </div>
  );
}

export default App;
