import React from 'react';
import Counter from './Counter';
import NameForm from './NameForm';
import NameApp from './nameInput';
import './App.css';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1> Hello, {name}! </h1>;
};

const App: React.FC = () => {
  return (
    <div>
      <Greeting name='React Developer' />
      <Counter />
      <NameForm />
      <NameApp />
    </div>
  );
};

export default App;
