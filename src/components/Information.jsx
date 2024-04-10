import React,{useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Information = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  const navigate = useNavigate();

  const handleClick = () => {
    if (selectedOption) {
      navigate('/Verify');
    }
  }

  const array =[['I am a designer looking to ',<br/>, 'share my work'], 'I am looking for a designer',['I am looking for design',<br/>, 'inspiration']]
  const array2 = [['Showcase your work',<br/>,'and start working with us'],['Find designers to work with'],['With over 1 million from a vast community',<br/>,' of designer']];
  const array3 = ['kelly-sikkema-v9FQR4tbIq8-unsplash.jpg','luca-bravo-9l_326FISzk-unsplash.jpg','ricardo-gomez-angel-5YM26lUicfU-unsplash.jpg'];

  return (
    <div>
        <div className= "flex flex-row px-6 py-6">
        <h1 className="font-serif text-xl text-pink-400 font-semibold py-1">dribble</h1>
        <div className="px-6 py-2">
        <FaBars className="text-pink-400 text-lg"/>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl font-serif">What brings you to dribble?</h1>
          <p1 className="font-serif font-semibold text-xs text-gray-500 py-2">Select the options that best describes you.Dont worry you can explore other options later</p1>
        </div>
        <div className="flex flex-col justify-center py-10">
          <div className='flex flex-row justify-center items-center'>
      {[1, 2, 3].map((option) => (
        <div
          key={option}
          className={`option rounded-md p-4 m-2 border border-gray-300 cursor-pointer ${
            selectedOption === option ? 'border-pink-400' : ''
          }`} 
          onClick={() => handleOptionClick(option)}
        >
          <img src={array3[option-1]} alt="designer" className="w-40 h-40"/>
          <div className="text-sm font-bold font-serif">
            <h1>{array[option-1]}</h1>
            {selectedOption === option && <p1 className="text-xs font-normal italic text-gray-400">{array2[option - 1]}</p1>}
          </div>
        </div>
      ))}
      </div>
      <div className=" flex justify-center items-center">
      <button
        className={` py-4 px-4 mt-4 rounded-md text-white bg-pink-500 ${
          selectedOption ? 'bg-pink-500' : 'opacity-50  cursor-not-allowed bg-gray-300'
        }`}
        onClick={handleClick}
        // disabled={!selectedOption}
      >
        Next
      </button>
      </div>
    </div>
    </div>
  )
}    

export default Information