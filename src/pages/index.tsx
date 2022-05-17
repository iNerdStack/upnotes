import React from 'react'
import AppLayout from '../layouts/app';

export default function Home() {
  return (
      <AppLayout>
          <div className="bg-black-500">
        <span className='text-red-500 font-black p-10 bg-green text-secondary '>Here12</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Enable
  </button>
          </div>
        </AppLayout>
  )
}
