import React from 'react';
import { IconType } from 'react-icons';
import './Button.css';

interface ButtonProps {
  label: string; //The text displayed on the button
  onClick?: () => void; //optional click handler
  disabled?: boolean; //Optionally disable the button
  variant?: 'primary' | 'secondary'; //Variant for styling purposes
  size?: 'small' | 'medium' | 'large'; //Size of the button
  // icon?: IconType; //Optional icon from react-icons
  loading?: boolean; //New Loading prop to indicate loading state
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  variant = 'primary',
  size = 'medium',
  loading,
  // icon: Icon,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`button ${variant} ${size}`}>
      {/* {Icon && (
        <span className='button-icon'>
          <Icon {...({} as any)} />
        </span>
      )} */}
      {/* {loading ? <span className='loader' /> : icon && <span className='button-icon'> {icon}</span>} */}
      {/* assuming button icon works*/}
      {loading ? <span className='loader' /> : label}
      {!loading && label} {/* Show label only when not loading */}
    </button>
  );
};

export default Button;
