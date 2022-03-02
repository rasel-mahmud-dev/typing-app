import React, { useState, useContext } from 'react'

import './App.css'
import TypingPage from "./pages/TypingPage/TypingPage";
import TypingState from "./state/typing";



function TypingList() {
  
  let typingState = useContext(TypingState)

  return (
    <div>
      { typingState.typing &&  typingState.typing.map((typing, i)=>(
        <div>
          <div className="flex items-center">
            <span className="border border-primary bg-primary-400 px-5 flex w-10" >{i + 1}</span>
            <h1 className="text-red-700">{typing.title}</h1>
          </div>
        </div>
      ))  }
    </div>
  )
}




function App() {
  const [typingState, setTypingState] = useState({
    typing: [
      { title: "J, F, and Space" }
    ]
  })

  return (
    <div className="App">
      
      <TypingState.Provider value={typingState}>
        <div>
          <TypingList />
          <TypingPage />
        </div>
      </TypingState.Provider>
      
      
      
    </div>
  )
}

export default App