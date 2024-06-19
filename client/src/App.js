import React, { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App({ api }) {
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async ({ name, age }) => {
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
    } catch (error) {
      setErrorMessage('Error creating user');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <UserForm
          onSubmit={handleSubmit}
          responseMessage={responseMessage}
          errorMessage={errorMessage}
        />
      </header>
    </div>
  );
}

export default App;
