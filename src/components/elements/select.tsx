import React, { ForwardRefRenderFunction } from 'react';
import { InputSelectProps } from '../../types';

const InputSelect: ForwardRefRenderFunction<HTMLInputElement, InputSelectProps> = ({ name, label,dense,options=[], ...otherProps }, ref) => {
    return ( 
        <div className={`${dense ? '' : 'm-3'}`}>
            <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <select id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            >
            {options.map((value: string) => (
        <option value={value} key={value}>
          {value}
        </option>
            ))}
             
            </select>
      </div>
    );
};

const FormInputSelect = React.forwardRef(InputSelect);

export default FormInputSelect;