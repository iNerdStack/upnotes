import React, { ForwardRefRenderFunction } from 'react';
import { InputProps } from '../../types';


const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label,dense, ...otherProps }, ref) => {
    return ( 
        <div className={`${dense ? '' : 'm-3'}`}>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">{label}</label>
            <input
                className="bg-white-500 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...otherProps}
                name={name}
            />
      </div>
    );
};

const FormInput = React.forwardRef(Input);

export default FormInput;