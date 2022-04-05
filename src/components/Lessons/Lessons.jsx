import React, { useContext } from 'react';
import TypingContext from '../../state/TypingContext';

import {faPlay} from "@fortawesome/pro-brands-svg-icons"
import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome"
import {Link} from "react-router-dom";

import PreloadLink from "../preloadLink/PreloadLink";

const Lessons = () => {

  let typingContext = useContext(TypingContext)

  return (
    <div>
      
      <div className="container">
        
       <div className="bg-white bg-opacity-20 px-4 py-2 mt-5 rounded">
         <p className="text-gray-800">
           typing.com inspired me to make this web application.
           It help these people who are related to programming or coding and they type randomly with few finger.
           To learn proper typing in this application help you so much.
         </p>
       </div>
        
        
        
        <h1 className="text-gray-700 font-bold text-xl  uppercase my-4">Typing Lessons</h1>
  
        
        <div className="">
          {typingContext.typingState.lessons && typingContext.typingState.lessons.map((lesson, i) => (
            <div className="px-3 py-2 mt-2 text-white bg-white bg-opacity-30 rounded" key={i}>
              <h1 className="text-lg text-white font-medium mb-2">{ lesson.level }</h1>
              <div className="grid md:grid-cols-2 gap-x-4">
                { lesson.practise.map((test, i)=>(
                  <div key={test.id + i} className=" flex items-center justify-between hover:bg-pink-500 hover:bg-opacity-20 py-2 px-3 ">
                    <div className="flex items-center">
                      <span className="border text-gray-100 border-primary bg-primary-400 w-5 h-5 p-2 text-xs items-center justify-center flex rounded-full " >{i + 1}</span>
                      <PreloadLink  className="text-sm" to={`/typing/${lesson.level}/${test.id}`}><h1 className="ml-4 text-gray-800 text-base">{test.title}</h1> </PreloadLink>
                    </div>
                    {/*<button className="bg-indigo-500 text-white px-2 my-0.5 rounded-sm"></button>*/}
                    <PreloadLink  className="text-sm font-medium" to={`/typing/${lesson.level}/${test.id}`}>
                      <FontAwesomeIcon  className="text-green-500" icon={faPlay} />
                    </PreloadLink>
                  </div>
                )) }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lessons;
