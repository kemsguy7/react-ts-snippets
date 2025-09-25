import { useState } from 'react';

const NameInput = (props) => {
  return (
    <div>
      <label>
        Enter your name :
        <input type='text' value={props.name} onChange={(e) => props.setName(e.target.value)} />
      </label>
    </div>
  );
};

const Greeting = (props) => {
  return <h1>Hello, {props.name}! </h1>;
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
