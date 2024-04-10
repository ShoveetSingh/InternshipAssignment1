 import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
      <div className="flex flex-col">
        <h1 className="font-serif text-pink-500 font-bold text-xl p-6">dribble</h1>
        <h2 className="font-serif py-4 justify-center items-center md:px-96 text-2xl font-semibold">Welcome! Let's create your profile</h2>
        <p className="font-sans md:px-96 text-gray-400 text-sm font-bold">Let others get to know you better!</p>
        <p className="font-serif py-6 md:px-96 text-lg font-semibold">Add an Avatar</p>
        <div className=" relative md:px-96">
        {selectedImage ? (
            <div className="flex items-center mt-4 py-6">
              <img src={selectedImage} alt="Selected" className="w-32 h-32 object-cover rounded-full" />
            </div>
          ) : (
            <div className="flex items-center mt-4 py-6">
              <img src="logo192.jpg" alt="Default" className="w-32 h-32 object-cover rounded-full" />
            </div>
          )}
          <input type="file" id="fileInput" name="fileInput" accept="image/*" className="hidden" onChange={handleImageChange} required/>
          <label htmlFor="fileInput" className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded cursor-pointer py-3 px-4">
            Choose Image
        </label>
        </div>  
        <div className = "sm:flex-row  md:px-96 py-8">
        <h1 className="font-bold text-lg font-serif">Add your location</h1>
        <input type="text" className="border-2 border-gray-300 rounded-md m-2 px-4 py-2" required/>
        <div className="flex flex-row p-2">
        <button onClick={() => {window.location.href = '/Information'}}
         className=
         {`border-2 px-10 py-2  bg-pink-600 text-white  m-2 rounded-md font-semibold
         ${
          selectedImage ? 'bg-pink-600' : 'opacity-50 cursor-not-allowed'
         }
          
         `}>
          Next
          </button>
        <h1 className="text-gray-400 font-serif text-sm py-4">or press 
        <Link to='/Signup' className="text-pink-500"> to return</Link>
        </h1>
        
        </div>        
        </div>
      </div>
  );
}

export default Profile;
