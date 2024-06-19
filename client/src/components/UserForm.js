import React, { useState } from 'react';

const UserForm = ({ onSubmit, responseMessage, errorMessage }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit({ name, age });
      setName('');
      setAge('');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
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
      {responseMessage && <p>{responseMessage}</p>}
      {errorMessage && <p>Error: {errorMessage}</p>}
    </form>
  );
};

export default UserForm;
