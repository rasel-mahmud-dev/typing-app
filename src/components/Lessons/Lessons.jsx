import React, { useContext } from 'react';
import TypingContext from '../../state/TypingContext';

import {Link} from "react-router-dom"


const Lessons = () => {

  let typingContext = useContext(TypingContext)

  return (
    <div>
      <div className="">
        <h1 className="text-red-600 font-bold text-4xl mt-4 mb-2 uppercase">Typing Lessons</h1>
  
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {typingContext.typingState.lessons && typingContext.typingState.lessons.map((lesson, i) => (
            <div className="flex justify-between bg-indigo-800 bg-opacity-40 my-4 py-2 px-2 shadow-md">
              <div className="flex items-center">
                <span className="border text-gray-100 border-primary bg-primary-400 w-5 h-5 p-2 text-xs items-center justify-center flex rounded-full " >{i + 1}</span>
                <h1 className="ml-4 text-gray-50 text-2xl">{lesson.title}</h1>
              </div>
              <button className="bg-indigo-500 text-white px-2 my-0.5 rounded-sm">
                <Link className="text-sm font-medium" to={`/typing/${lesson.id}`}>Start Typing</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lessons;
