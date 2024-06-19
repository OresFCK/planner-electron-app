import React, { useState } from 'react';
import './App.css';

function App({ api }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const data = await response.json();
      setResponseMessage(`User created with name ${data.name}`);
      setName('');
      setAge('');
    } catch (error) {
      setErrorMessage('Error creating user');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
        {errorMessage && <p>Error: {errorMessage}</p>}
      </header>
    </div>
  );
}

export default App;
