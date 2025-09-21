import React from 'react';
import Counter from './Counter';
import NameForm from './NameForm';

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
    </div>
  );
};

export default App;
