import React,{useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import { FaEnvelopeCircleCheck } from 'react-icons/fa6'
import { FaInstagram,FaTwitter,FaFacebook,FaPinterest } from 'react-icons/fa6'

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
        <div className="relative">
          <FiSearch className = "text-gray-400  absolute top-3 left-100 ml-3 mt-2"/>
          <input type="search" placeholder="Search" className="border-2 border-gray-300 rounded-md m-2 px-10 py-2 font-serif bg-gray-100"/>
        </div>
        <div className="px-10"></div>
        <div className="py-4 px-8">
        <img src="logo192.jpg" alt="logo" className="w-10 h-10 object-cover rounded-full"/>
        </div>
       <button className="px-2 bg-pink-500 text-white font-semibold rounded-md m-3 font-serif text-sm">Upload</button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" py-6 font-semibold font-serif text-2xl">Please verify your email address</h1>
        <FaEnvelopeCircleCheck className="text-pink-500 text-7xl py-2 "/>
      </div>
      <p1 className="flex items-center justify-center py-4 text-sm font-serif text-gray-500 font-semibold italic">Please verify your email address. We have sent a conformation email to.</p1>
      <p1 className="flex items-center justify-center font-bold font-sans text-sm">account@refero.design</p1>
      <p1 className="flex items-center justify-center py-4 text-sm font-serif text-gray-500 font-semibold">Click the confirmation link in that email to begin with dribble.</p1>
      <div className="flex items-center justify-center py-4 text-sm font-serif font-semibold text-gray-500">
      Didnt recieve the email? Check the spam folder, it may have been caught by the filter.
      If you still dont see it, you can resend the <p1 className="text-pink-400">conformation email.</p1>
      </div>
      <div className="flex items-center justify-center py-4 font-semibold text-sm text-gray-500 font-serif">
      Wrong email address?<p1 className="text-pink-400">Change it</p1>
      </div>
      <div className="bg-gray-100">
        <div className="flex flex-row">
        <div className="text-pink-400 font-semibold text-xl font-serif px-6 py-8">dribble</div>
        <div className=" font-serif font-bold py-9 px-14 text-xs">For Designers</div>
        <div className=" font-serif font-bold py-9 px-14 text-xs">Hire designers</div>
        <div className=" font-serif font-bold py-9 px-14 text-xs">Company</div>
        <div className=" font-serif font-bold py-9 px-14 text-xs">Directories</div>
        <div className=" font-serif font-bold py-9 px-14 text-xs">Company Resources</div>
        </div>
       <div className="font-serif text-xs  py-2 px-6">
        Dribble is the world<br/> leading community <br/>for creatives to share,<br/>grow,and get hired.
        </div>
        <div className="flex flex-row py-2 items-center px-6">
         <FaInstagram className="text-pink-400 font-xs"/>
          <FaTwitter className="text-pink-400 font-xs"/>
          <FaFacebook className="text-pink-400 font-xs"/>
          <FaPinterest className="text-pink-400 font-xs"/>
        </div>
        </div>
    </div>
  )
}
    
export default Verify  