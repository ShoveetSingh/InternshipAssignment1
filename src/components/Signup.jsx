import React from 'react'
//import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className="flex md:flex-row sm:flex-col">
      <div className="relative">
        <img src = "kees-streefkerk-Adl90-aXYwA-unsplash.jpg" alt = "signup" className="sm:w-full sm:h-half"/>
        <div className="absolute top-0 left-0  bg-opacity-50">
        <h1 className="text-sky-600 font-mono">dribble </h1>
        <p className="text-amber-300  p-16 font-bold md:text-3xl sm:text-4xl sm:italic sm:px-16 sm:py-32">Discover the world top designer and creatives. </p>
        </div>
      </div>
      <div className="flex flex-col md:px-16">
      <div className="flex flex-col justify-center items-center  py-8 text-xl font-semibold sm:py-3 sm:text-lg">
        Sign Up to dribble
        <input type="text" placeholder="First Name" required className=" border-2 border-gray-300 rounded-md p-2 m-2 sm:w-3/4"/>
        <input type="text" placeholder="Username" required className=" border-2 border-gray-300 rounded-md p-2 m-2 sm:w-3/4"/>
        <input type="email" placeholder="Email" required className="border-2 border-gray-300 rounded-md p-2 m-2 sm:w-3/4"/>
        <input type="password"  placeholder="Password" required className="border-2 border-gray-300 rounded-md p-2 m-2 sm:w-3/4"/></div>
        <div className="flex flex-row sm:px-16 sm:py-4">
        <input type="checkbox" className="m-2"/>
         I agree to the terms and conditions
        </div>
        <div>
        <button className="bg-pink-600 text-white p-2 m-2 rounded-md font-semibold sm:w-full md:w-full">Create Account</button>
        <div className=" flex flex-col text-sm p-4 px-8 font-semibold sm:px-16">
          <p>Already a member?
          <span className="text-sky-500">login</span>
        </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
