import React from 'react';

interface ButtonProps {
  label: string; //The text displayed on the button
  onClick?: () => void; //optional click handler
  disabled?: boolean; //Optionally diasable the button
  variant?: 'primary' | 'secondary'; //Variant for styling purposes
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, variant = 'primary' }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`button${variant}`}>
      {' '}
      {label}{' '}
    </button>
  );
};

export default Button;
