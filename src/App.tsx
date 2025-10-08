import React, { useState } from 'react';
import Counter from './components/chap2/Counter';
import NameForm from './components/chap2/NameForm';
import NameApp from './components/chap2/nameInput';
import UserCard from './components/chap2/UserCard';
import Button from './components/chap2/Button';
import EffectComponent from './components/chap3/effect';
import './App.css';
// import { FaCheck } from 'react-icons/fa';

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

{
  /* setting stage for button loader*/
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Action completed!');
    }, 2000); //Simulate a 2-second loading time
  };
  return (
    <div>
      <Greeting name='React Developer' />
      {/* <UserCard user={user} onClick={handleUserClick} /> */}
      <UserCard />
      <Counter />
      <NameForm />
      <NameApp />
      <Button label='Click Me' onClick={() => alert('Button clicked!')} />
      <Button
        label='Secondary Button'
        variant='secondary'
        size='medium'
        onClick={handleClick}
        loading={loading}
      />
      <Button
        label='Disabled Button'
        disabled={true}
        onClick={() => alert('Button clicked!')}

        // Pass the component directly without JSX
      />
      <Button label='Small Button' size='small' variant='secondary' />
      <EffectComponent />
    </div>
  );
};

export default App;
