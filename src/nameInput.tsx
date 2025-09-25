import { useState } from 'react';

interface GreetingProps {
  name: string;
}

interface NameInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameInput: React.FC<NameInputProps> = ({ name, setName }) => {
  return (
    <div>
      <label>
        Enter your name :
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
    </div>
  );
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
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
