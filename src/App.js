import React from 'react';
import './App.css'; // Add your CSS imports here
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Registration App</h1>
      </header>
      <main>
        <Navbar />
      </main>
    </div>
  );
}

export default App;
