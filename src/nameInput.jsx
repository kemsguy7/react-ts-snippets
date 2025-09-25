import { useState } from 'react';

const NameInput = ({ name, setName }) => {
  return (
    <div>
      <label>
        Enter your name :
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    </div>
  );
};

const Greeting = ({ name }) => {
  return <h1>Hello, {name}! </h1>;
};

const NameApp = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <NameInput name={name} setName={setName} />
      <Greeting name={name} />
    </div>
  );
};

export default NameApp;
