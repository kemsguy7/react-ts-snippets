{
  /* Typing Event Handlers */
}
import React from 'react';
import { useState } from 'react';

interface ButtonProps {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label = 'Click Me' }) => {
  return <button> {label} </button>;
};

const ClickButton: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button Clicked');
  };
  return <button onClick={handleClick}> Click Me </button>;
};

//typing input field event handler
export const InputField: React.FC = () => {
  const [value, setValue] = useState<string>('');

  {
    /* React.changeEvent<HTMLInputElement> ensures that the event is correctly typed for an input field */
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return <input type='text' value={value} onChange={handleChange} />;
};

export default ClickButton;
