import React from 'react';
import Counter from './components/chap2/Counter';
import NameForm from './components/chap2/NameForm';
import NameApp from './components/chap2/nameInput';
import UserCard from './components/chap2/UserCard';
import Button from './components/chap2/Button';
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
      {/* <UserCard user={user} onClick={handleUserClick} /> */}
      <UserCard />
      <Counter />
      <NameForm />
      <NameApp />
      <Button label='Click Me' onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default App;
