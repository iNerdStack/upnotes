import React, { ForwardRefRenderFunction } from 'react';
import { InputTextAreaProps } from '../../types';

const InputTextArea: ForwardRefRenderFunction<HTMLTextAreaElement, InputTextAreaProps> = ({ name, label,dense,  ...otherProps }, ref) => {
    return ( 
        <div className={`${dense ? '' : 'm-3'}`}>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">{label}</label>
            <textarea
                className="h-20 resize bg-white-500 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...otherProps}
                name={name}

            ></textarea>
      </div>
    );
};

const FormInputTextArea = React.forwardRef(InputTextArea);

export default FormInputTextArea;