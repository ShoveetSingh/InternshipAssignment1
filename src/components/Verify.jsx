import React,{useState} from 'react'
import { FiSearch } from 'react-icons/fi'

const Verify = () => {
  return (
    <div>
      <div className="flex flex-row">
      <div className="font-semibold text-black-600 text-lg font-serif p-4">dribble</div>
       <div className="text-gray-400 text-sm font-serif font-bold py-5 px-2">Inspiration</div>
       <div className="text-gray-400 text-sm font-seif font-bold py-5 px-2">Find Work</div>
       <div className="text-gray-400 text-sm font-seif font-bold py-5 px-2">Learn Design</div>
       <div className="text-gray-400 text-sm font-seif font-bold py-5 px-2">Go Pro</div>
       <div className="text-gray-400 text-sm font-seif font-bold py-5 px-2">Hire Designers</div>
        <div className="px-10"></div>
        <div classname="relative">
          <FiSearch className = "text-gray-400  absolute top-4 left-100 ml-3 mt-2"/>
          <input type="search" placeholder="Search" className="border-2 border-gray-300 rounded-md m-2 px-10 py-2 font-serif bg-gray-100"/>
        </div>
        <div className="px-10"></div>
      <button className="px-2 bg-pink-500 text-white font-semibold rounded-md m-3 font-serif text-sm">Upload</button>
      </div>
    </div>
  )
}
  
export default Verify  