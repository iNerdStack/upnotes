import React from 'react';
import { ButtonProps } from '../../types';


// button component, consuming props
const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  color = 'secondary',
  size = 'md',
  disabled,
  type="normal",
  shadow = false,
  ...rest
}) => {
  return (
   
    <button
      type="button"
      className={`text-white 
      ${color === 'primary' ? 'bg-primary' : color === 'secondary' ? 'bg-secondary' : ''}
      font-medium ${type === 'circle' ? 'rounded-full p-3' : 'rounded-lg  px-6 py-3 mr-2 mb-2'}
       ${shadow ? 'shadow-md  shadow-primary' : ''}
        text-sm`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;