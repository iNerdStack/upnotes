import React from 'react'
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
      <div className='h-screen flex flex-row bg-green-400'>
       
          <Sidebar />
        
      
       
   
          <div className='bg-green-400 w-100'>
              Here
        </div>
      </div>
  )
}
