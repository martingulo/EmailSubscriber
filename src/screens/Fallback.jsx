import React from 'react'
import Header from './Header'

const Fallback = () => {
  return (
    <div className=' grid'>
      <Header/>
      <div className=' flex flex-col bg-slate-900 text-amber-50 items-center h-screen w-full align-middle justify-center'>
        <h1 className=' animate-pulse text-9xl font-bold'>404</h1>
        <p className=' text-red-400'>Route not found</p>
        <a href="/" 
          className=' mt-3 cursor-pointer  py-4 hover:bg-slate-500 active:bg-slate-700 bg-slate-600 px-13 shadow-sm rounded-2xl'>go back Home</a>
      </div>  


    </div>
  )
}

export default Fallback
