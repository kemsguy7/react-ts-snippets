import React from 'react';
import Counter from './Counter';
import NameForm from './NameForm';
import NameApp from './nameInput';
import UserCard from './UserCard';
import './App.css';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1> Hello, {name}! </h1>;
};

const handleUserClick = (id: number) => {
  alert(`User with ID ${id} clicked!`);
};
const user = { id: 4, name: 'Kemsguy7', email: 'mattidungafa@gmail.com' };

const App: React.FC = () => {
  return (
    <div>
      <Greeting name='React Developer' />
      <UserCard user={user} onClick={handleUserClick} />
      <Counter />
      <NameForm />
      <NameApp />
    </div>
  );
};

export default App;
