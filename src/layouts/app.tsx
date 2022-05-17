import * as React from 'react';
import Sidebar from '../components/Sidebar';

interface Props {
    children: React.ReactNode
}

const AppLayout: React.FunctionComponent<Props> = (props:Props) => {
    return <>
        <div className='h-screen flex flex-row'>
            <Sidebar />
            <div className='w-full justify-start'>
         
                {props.children}
            </div>
        </div>
    </>
}


export default AppLayout;