import React, { useEffect, useRef } from 'react'
import FormInputSelect from '../components/elements/select';
import FormInputTextArea from '../components/elements/text-area';
import FormInput from '../components/elements/text-field';
import AppLayout from '../layouts/app';

export default function CreateNote() {
  
    const [title, setTitle] = React.useState('');

    return (
        <AppLayout>
            <div className='h-full'>
                <div className='flex justify-center align-center mt-15  w-4/5 m-10 flex-col'>
                    <div className='flex flex-col text-center'>
                        <span className='text-header font-bold'>Create Note </span>
                        <span className='text-gray-500 text-sm'>Create a note and save</span>
                        {title}
                    </div>
                    <div className='flex flex-col'>
                        <div className="grid grid-flow-row grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2">
                            <FormInput label="title"
                                value={title}
                                onChange={((event) => setTitle(event.target.value))} />
                            
                            <FormInputSelect options={['Favorites', 'Personal']} label="Select Folders"/>

                            <FormInputTextArea label="Write a note" value={title}
                                onChange={((event) => setTitle(event.target.value))} />      

                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}