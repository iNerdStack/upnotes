import React from 'react'
import Button from './elements/button';
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg';
import { useNavigate } from "react-router-dom";


export default function Sidebar() {
    let navigate = useNavigate();


  return (
      <div className='w-1/4 bg-secondary flex flex-col h-screen p-10'
       >
    
          <div className='flex flex-row '>
              {/* <div> 
                  <span  className='font-black text-header'>
                  UP NOTES 
                  </span> 
         </div> */}
          </div>
         <div className=' flex flex-col mt-10'>
              <div className='mt-3'> Saved </div>
              <div className='mt-3'> Favorites </div>
              <div>  
              </div>
          </div>

          <div className='flex justify-center align-center mt-auto'>
          <div className='w-10'>
              <Button type={'circle'} shadow={true} onClick={() =>  navigate(`/create-note`)} color='primary'>
                      <div>
                      <PlusIcon fill='white' width={'30px'} />
                      </div>  
          </Button>
         </div>
               
          </div>
      </div>
  )
}
