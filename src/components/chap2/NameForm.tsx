import React, { useState } from 'react';

const NameForm: React.FC = () => {
  const [name, setName] = useState<string>(''); // The name state  is initialized to an empty string
  const [keyTyped, setKeyTyped] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    alert(`Hello, ${name}!`);
  };

  const handleKeyUp = (event: React.FormEvent) => {
    setKeyTyped((event.currentTarget as HTMLInputElement).value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <p> You have typed: {keyTyped} </p>
      </label>
      <button type='submit'> Submit </button>
    </form>
  );
};

export default NameForm;
