import React, {useState} from 'react'

import './App.css'
// import TypingPage from "./pages/TypingPage/TypingPage";
import TypingContext from "./state/TypingContext"

import {  useParams} from "react-router-dom";
import Lessons from './components/Lessons/Lessons';
import TypingPageFn from "./pages/TypingPage/TypingPageFn";

import Routes from "./Routes"


function App() {
  //
  let total = 20
  let curr = 10
  
  React.useEffect(()=>{
    const loader = document.querySelector(".loader_viewport")
    loader?.parentNode && loader.parentNode.removeChild(loader)
    
  }, [])
  
  
  const [typingState, setTypingState] = useState({
    lessons: [
  
      { level: "Beginner Level", practise: [
          { id: 1, title: "J, F, and Space", text: "F J F F F J J F J F J F".toLocaleLowerCase()},
          { id: 2, title: "U, R, and K Keys", text: "u r k r u k" },
          { id: 3, title: "D, E, and I Keys", text: "d d d d f e e e f i i d d f f e e" },
          { id: 4, title: "C, G, and N Keys", text: "c d c d c c d d" },
          { id: 5, title: "Period and Comma", text: "; : ; , . ," },
          { id: 6, title: "Beginner Review 1", text: "jjj fff uuu rrr kkk ddd eee iii ccc ggg nnn jjj j f u r k d e i c g n j r d k u f e j i g n c r"},
          { id: 6, title: "Beginner Review 2", text: "ab ae ah ai al am as a. ba be i. bo eh el em es ha h. hi hm il is it la le li o. ma me mi mo oe"},
          { id: 7, title: "Period and Comma", text: "t h e o f t o a n d a i n i s i t y o u t h a t h e w a s f o r o n" },
        ]},
  
      { level: "Intermediate Level", practise: [    // inter
          { id: 8, title: "Easy Home Row Words", text: "add all alley aft agh ask afford ajar adapt arf ate art app arty awe aww apt arr aught apt award abs acct among aztec ant am avenue acorn axe ach"},
          { id: 9, title: "Easy Top Row Words", text: "quartz quail quart quiver queen quilt quit quack quell qua quadev quest quint quaint quab" },
          { id: 10, title: "Easy Bottom Row Words", text: "zigzag zebra zero zipper zinnia zoo zithe zan zala zalad zajar zaddy zamono zakk zah zomo zanby zabba zamna zaxy zamn" },
          { id: 11, title: "Shift Key and Capitalization", text: "Jzjjj Jjjj Jjjj Jjjj Jjjj Ffff Ffff Ffff Ffff Ffff jJj jJj jJj jJj jJj jJj fFf fFf fFf fFf fFf fFf" },
          { id: 12, title: "Basic Punctuation", text: "won't can't ain't he's he'd it's isn't she'd let's" },
          { id: 13, title: "Intermediate Punctuation", text: "; ??? ; ??? ; ??? ; ??? ; ??? ; ??? ; ??? ; ??? ??? ;;; ??? ;;; ??? ;;;" },
          { id: 14, title: "Quick Sentences", text: "Whatever you are, be a good one" },
          { id: 15, title: "Short Paragraphs", text: "Tracy looked at the flag. The flag is red, white, and blue. It has fifty white stars, seven red stripes, and six white stripes." },
          { id: 16, title: "Speed Drills", text: "The quick brown fox jumped over the lazy dogs." },
          { id: 17, title: "Intermediate Wrap-up", text: "Dear Sirs,⏎Thank you for sending the diskettes so promptly.⏎However, the diskettes which you sent are for soft sectored drives. As I stated in my original letter my system accepts only ten sector, hard sectored diskettes. I will return these two boxes as soon as I receive the correct ones." },
          { id: 18, title: "Intermediate Assessment", text: "The serve is the most important stroke in tennis. A good player can serve the ball to any spot on the service court.⏎A ball can also be made to bounce in different ways when it hits the ground. This is done by turning the racket in the hand and putting a spin on the ball when it is struck by the racket.⏎A perfect serve is called an ace. This happens when a serve is so well placed or is hit so hard that it is impossible for the receiver to return the ball. A let is a serve that strikes the top of the net before landing in the proper service court.⏎Because the normal flight of the ball has been interrupted"},
          { id: 20, title: "Accuracy Focus", text: "Dear Dan,⏎Yes, I came out of the corn back to the city, both to draw and to do copy on the new cars. To date, I am able to put cash in the bank and bear a bill or two. The new deed has done it." },
          { id: 21, title: "Number", text: "01785513535 5d 4p 56 pv 4" },
          { id: 26, title: "Brackets", type: "word", text: "{} [] "}
      ]
      },
  
      { level: "Advance Level", practise: [ { id: 22, title: "make a variable", type: "word", text: `const name = 'rasel mahmud' ` },
          { id: 23, title: "make a function", type: "word", text: "function printName(name){\nconsole.log(name)\n}"},
          { id: 24, title: "create HTML H1 ELEMENT", type: "word", text: "<h1>I am H1 Tag</h1>"},
          // { id: 25, title: "create HTML H1 ELEMENT", type: "word", text: `:; " ' ? <h1>I am H1 Tag</h1>`}
          { id: 25, title: "Enter button", type: "word", text: "\nname"}
        
        
        ]}
    ],
    
    fontSize: 20,
    soundOff: false
  })
  
  const params = useParams()
  
  const handleChangeFontSize=(inc=true)=>{
    if(inc){
      if(typingState.fontSize < 90) {
        setTypingState({...typingState, fontSize: typingState.fontSize + 4})
      }
    } else {
      if(typingState.fontSize > 10) {
        setTypingState({...typingState, fontSize: typingState.fontSize - 4})
      }
    }
  }
  const handleToggleSpeaker=()=>{
 
    if(typingState.soundOff){
        setTypingState({...typingState, soundOff: false})
    } else {
      setTypingState({...typingState, soundOff: true})
    }
  }
  
  function getLesson(id) {
    let lesson = null
    typingState.lessons.forEach(l => {
      l.practise.map(item=>{
        if(item.id === id) {
          lesson = item
        }
      })
    })
    return lesson
  }
  
  return (
    <div className="App">

      <div className="">
        
        <TypingContext.Provider value={{typingState, getLesson, handleToggleSpeaker, handleChangeFontSize}}>
          <Routes />
        </TypingContext.Provider>

      </div>

    </div>
  )
}

export default App