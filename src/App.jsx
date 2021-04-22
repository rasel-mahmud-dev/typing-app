import React, { useState } from 'react'

import './App.css'
import TypingPage from "./pages/TypingPage/TypingPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TypingPage />
    </div>
  )
}

export default App
