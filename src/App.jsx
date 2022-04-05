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
    // setTypingState(getState())
    let s = getState()
    if(s){
       setTypingState({
         ...s,
         lessons: typingState.lessons
       })
    }
  }, [])

  
  const [typingState, setTypingState] = useState({
    lessons: [
  
      { level: "Beginner-Level", practise: [
          { id: 1, title: "J, F, and Space", text: "F J J FF jf jfj fjjfff jff fjf fjf jjjfff jfjfjfjjfjfjjfffjfjfffjjfjfjfj".toLocaleLowerCase()},
          { id: 2, title: "U, R, and K Keys", text: "u r k r u k" },
          { id: 3, title: "D, E, and I Keys", text: "d d d d f e e e f i i d d f f e e" },
          { id: 4, title: "C, G, and N Keys", text: "c d c d c c d d" },
          { id: 5, title: "Period and Comma", text: ";::::...;:::...;;;,,,,.," },
          { id: 6, title: "Brackets", text: "[]()()(){}[]{[(({[))){{]]}}]}}}[[}[}{]]{}]{}[[}[]}}()()()))))()(())(()))((()))))(((" },
          { id: 7, title: "Dash, underscore and plus & Equal", text: "--- +=++++---___--__-++++-- ====-- __--____---__+++==++==++==__--+__====++---===-++++=___--==++" },
          { id: 8, title: "Beginner Review 1", text: "jjj fff uuu rrr kkk ddd eee iii ccc ggg nnn jjj j f u r k d e i c g n j r d k u f e j i g n c r"},
          { id: 9, title: "Beginner Review 2", text: "ab ae ah ai al am as a. ba be i. bo eh el em es ha h. hi hm il is it la le li o. ma me mi mo oe"},
          { id: 10, title: "Period and Comma", text: "t h e o f t o a n d a i n i s i t y o u t h a t h e w a s f o r o n" },
        ]},
        { 
          level: "numbers-letters-numbers", practise: [    // inter
            { 
              id: 1, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 1 of 16", 
              text: "aaa 111 aaa 111 aaa 111 aaa 111 aa1 11a sss 222 sss 222 sss 222 sss 222 ss2 22s a1 1a a1 1a a1 1a a1 1a a1 1a aa1 11a s2 2s s2 2s s2 2s s2 2s s2 2s ss2 22s 12 21 12 21 12 21 12 21 12 21 112 221"
            },
            { 
              id: 2, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 2 of 16", 
              text: "aaa 111 aaa 111 aaa 111 aaa 111 aa1 11a sss 222 sss 222 sss 222 sss 222 ss2 22s a1 1a a1 1a a1 1a a1 1a a1 1a aa1 11a s2 2s s2 2s s2 2s s2 2s s2 2s ss2 22s 12 21 12 21 12 21 12 21 12 21 112 221"
            },
            { 
              id: 3, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 3 of 16", 
              text: "fff 555 fff 555 fff 555 fff 555 ff5 55f jjjj 666 jjjj 666 jjj 666 jjj 666 jj6 f5 5f f5 5f f5 5f f5 5f f5 5f ff5 55f j6 6j j6 6j j6 6j j6 6j j6 6j jj6 66j 56 65 56 65 56 65 56 65 56 65 556 665"
            },
            { 
              id: 4, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 4 of 16", 
              text: "jjj 777 jjj 777 jjj 777 jjj 777 jj7 77j kkk 888 kkk 888 kkk 888 kkk 888 kk8 88k j7 7j j7 7j j7 7j j7 7j j7 7j jj7 77j k8 8k k8 8k k8 8k k8 8k k8 8k kk8 88k 78 87 78 87 78 87 78 87 78 87 778 887"
            },
            { 
              id: 5, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 5 of 16", 
              text: "lll 999 lll 999 lll 999 lll 999 ll9 99l ;;; 000 ;;; 000 ;;; 000 ;;; 000 ;;0 00; l9 9l l9 9l l9 9l l9 9l l9 9l ll9 99l ;0 0; ;0 0; ;0 0; ;0 0; ;0 0; ;;0 00; 90 09 90 09 90 09 90 09 90 09 990 009"
            },
            { 
              id: 6, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 6 of 16", 
              text: "alpha 1 bravo 1 charlie 1 delta 1 echo 1 foxtrot 1 golf 1 hotel 1 india 1 juliet 1 kilo 1 lima 1 mike 1 november 1 oscar 1 papa 1 quebec 1 romeo 1 sierra 1 tango 1 uniform 1 victor 1 whiskey 1 xray 1 yankee 1 zulu 1"
            },
            { 
              id: 7, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 7 of 16", 
              text: "alpha 2 bravo 2 charlie 2 delta 2 echo 2 foxtrot 2 golf 2 hotel 2 india 2 juliet 2 kilo 2 lima 2 mike 2 november 2 oscar 2 papa 2 quebec 2 romeo 2 sierra 2 tango 2 uniform 2 victor 2 whiskey 2 xray 2 yankee 2 zulu 2"
            },
            { 
              id: 8, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 8 of 16", 
              text: "alpha 3 bravo 3 charlie 3 delta 3 echo 3 foxtrot 3 golf 3 hotel 3 india 3 juliet 3 kilo 3 lima 3 mike 3 november 3 oscar 3 papa 3 quebec 3 romeo 3 sierra 3 tango 3 uniform 3 victor 3 whiskey 3 xray 3 yankee 3 zulu 3"
            },
            { 
              id: 9, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 9 of 16", 
              text: "alpha 4 bravo 4 charlie 4 delta 4 echo 4 foxtrot 4 golf 4 hotel 4 india 4 juliet 4 kilo 4 lima 4 mike 4 november 4 oscar 4 papa 4 quebec 4 romeo 4 sierra 4 tango 4 uniform 4 victor 4 whiskey 4 xray 4 yankee 4 zulu 4"
            },
            { 
              id: 10, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 10 of 16", 
              text: "alpha 5 bravo 5 charlie 5 delta 5 echo 5 foxtrot 5 golf 5 hotel 5 india 5 juliet 5 kilo 5 lima 5 mike 5 november 5 oscar 5 papa 5 quebec 5 romeo 5 sierra 5 tango 5 uniform 5 victor 5 whiskey 5 xray 5 yankee 5 zulu 5"
            },{ 
              id: 11, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 11 of 16", 
              text: "alpha 6 bravo 6 charlie 6 delta 6 echo 6 foxtrot 6 golf 6 hotel 6 india 6 juliet 6 kilo 6 lima 6 mike 6 november 6 oscar 6 papa 6 quebec 6 romeo 6 sierra 6 tango 6 uniform 6 victor 6 whiskey 6 xray 6 yankee 6 zulu 6"
            },
            { 
              id: 12, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 12 of 16", 
              text: "alpha 7 bravo 7 charlie 7 delta 7 echo 7 foxtrot 7 golf 7 hotel 7 india 7 juliet 7 kilo 7 lima 7 mike 7 november 7 oscar 7 papa 7 quebec 7 romeo 7 sierra 7 tango 7 uniform 7 victor 7 whiskey 7 xray 7 yankee 7 zulu 7"
            },
            { 
              id: 13, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 13 of 16", 
              text: "alpha 8 bravo 8 charlie 8 delta 8 echo 8 foxtrot 8 golf 8 hotel 8 india 8 juliet 8 kilo 8 lima 8 mike 8 november 8 oscar 8 papa 8 quebec 8 romeo 8 sierra 8 tango 8 uniform 8 victor 8 whiskey 8 xray 8 yankee 8 zulu 8"
            },
            { 
              id: 14, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 14 of 16", 
              text: "alpha 9 bravo 9 charlie 9 delta 9 echo 9 foxtrot 9 golf 9 hotel 9 india 9 juliet 9 kilo 9 lima 9 mike 9 november 9 oscar 9 papa 9 quebec 9 romeo 9 sierra 9 tango 9 uniform 9 victor 9 whiskey 9 xray 9 yankee 9 zulu 9"
            },
            { 
              id: 15, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 15 of 16", 
              text: "alpha 0 bravo 0 charlie 0 delta 0 echo 0 foxtrot 0 golf 0 hotel 0 india 0 juliet 0 kilo 0 lima 0 mike 0 november 0 oscar 0 papa 0 quebec 0 romeo 0 sierra 0 tango 0 uniform 0 victor 0 whiskey 0 xray 0 yankee 0 zulu 0"
            },
            { 
              id: 16, 
              type: "word",
              title: "Numbers Letters Numbers - Screen 16 of 16", 
              text: "23424 03 4092 83 048203 09283 4082 2309 2093 798167 9652345 1337 9877 243 68 4 767 6747 685 4674 67464 2 2 2908 203 49 02 3702 602 18 02 02"
            },
          ]
        },
        { 
          level: "advanced-symbols", practise: [    // inter
            { 
              id: 1, 
              title: "Advanced Symbols - Screen 1 of 7", 
              text: "a!!! a!!! a!!! a!!! a!!! a!!! a!!! a!!! a!a a!a a!a a!a a!a a!a !a! !a! !a! !a!"
            },
            { 
              id: 2, 
              title: "Advanced Symbols - Screen 2 of 7", 
              text: "s@@@ s@@@ s@@@ s@@@ s@@@ s@@@ s@@@ s@@@ s@s s@s s@s s@s s@s s@s @s@ @s@ @s@ @s@"
            },
            { 
              id: 3, 
              title: "Advanced Symbols - Screen 3 of 7", 
              text: "d### d### d### d### d### d### d### d### d#d d#d d#d d#d d#d d#d #d# #d# #d# #d#"
            },
            { 
              id: 4, 
              title: "Advanced Symbols - Screen 3 of 7", 
              text: "f$$$ f$$$ f$$$ f$$$ f$$$ f$$$ f$$$ f$$$ f$f f$f f$f f$f f$f f$f $f$ $f$ $f$ $f$"
            },
            { 
              id: 5, 
              title: "Advanced Symbols - Screen 3 of 7", 
              text: "f%%% f%%% f%%% f%%% f%%% f%%% f%%% f%%% f%f f%f f%f f%f f%f f%f %f% %f% %f% %f"
            },
            { 
              id: 6, 
              title: "Advanced Symbols - Screen 3 of 7", 
              text: "j&&& j&&& j&&& j&&& j&&& j&&& j&&& j&&& j&j j&j j&j j&j j&j j&j &j& &j& &j& &j&"
            },
            { 
              id: 7, 
              title: "Advanced Symbols - Screen 3 of 7", 
              text: "k*** k*** k*** k*** k*** k*** k*** k*** k*k k*k k*k k*k k*k k*k *k* *k* *k* *k*"
            }
           
            
          ]
        },
  
      { level: "intermediate-level", practise: [    // inter
          { id: 1, title: "Easy Home Row Words", text: "add all alley aft agh ask afford ajar adapt arf ate art app arty awe aww apt arr aught apt award abs acct among aztec ant am avenue acorn axe ach"},
          { id: 2, title: "Easy Top Row Words", text: "quartz quail quart quiver queen quilt quit quack quell qua quadev quest quint quaint quab" },
          { id: 2, title: "Easy Bottom Row Words", text: "zigzag zebra zero zipper zinnia zoo zithe zan zala zalad zajar zaddy zamono zakk zah zomo zanby zabba zamna zaxy zamn" },
          { id: 3, title: "Shift Key and Capitalization", text: "Jzjjj Jjjj Jjjj Jjjj Jjjj Ffff Ffff Ffff Ffff Ffff jJj jJj jJj jJj jJj jJj fFf fFf fFf fFf fFf fFf" },
          { id: 4, title: "Basic Punctuation", text: "won't can't ain't he's he'd it's isn't she'd let's" },
          { id: 5, title: "Intermediate Punctuation", text: "; ??? ; ??? ; ??? ; ??? ; ??? ; ??? ; ??? ; ??? ??? ;;; ??? ;;; ??? ;;;" },
          { id: 6, title: "Quick Sentences", text: "Whatever you are, be a good one" },
          { id: 7, title: "Short Paragraphs", text: "Tracy looked at the flag. The flag is red, white, and blue. It has fifty white stars, seven red stripes, and six white stripes." },
          { id: 8, title: "Speed Drills", text: "The quick brown fox jumped over the lazy dogs." },
          { id: 9, title: "Intermediate Wrap-up", text: "Dear Sirs,⏎Thank you for sending the diskettes so promptly.⏎However, the diskettes which you sent are for soft sectored drives. As I stated in my original letter my system accepts only ten sector, hard sectored diskettes. I will return these two boxes as soon as I receive the correct ones." },
          { id: 10, title: "Intermediate Assessment", text: "The serve is the most important stroke in tennis. A good player can serve the ball to any spot on the service court.⏎A ball can also be made to bounce in different ways when it hits the ground. This is done by turning the racket in the hand and putting a spin on the ball when it is struck by the racket.⏎A perfect serve is called an ace. This happens when a serve is so well placed or is hit so hard that it is impossible for the receiver to return the ball. A let is a serve that strikes the top of the net before landing in the proper service court.⏎Because the normal flight of the ball has been interrupted"},
          { id: 11, title: "Accuracy Focus", text: "Dear Dan,⏎Yes, I came out of the corn back to the city, both to draw and to do copy on the new cars. To date, I am able to put cash in the bank and bear a bill or two. The new deed has done it." },
          { id: 12, title: "Number", text: "01785513535 5d 4p 56 pv 4" },
          { id: 13, title: "Brackets", type: "word", text: "{} [] "}
      ]
      },
  
      { level: "advance-level", practise: [ 
          { id: 1, title: "make a variable", type: "word", text: `const name = 'rasel mahmud' ` },
          { id: 2, title: "make a function", type: "word", text: "function printName(name){\nconsole.log(name)\n}"},
          { id: 3, title: "create HTML H1 ELEMENT", type: "word", text: "<h1>I am H1 Tag</h1>"},
          // { id: 25, title: "create HTML H1 ELEMENT", type: "word", text: `:; " ' ? <h1>I am H1 Tag</h1>`}
          { id: 4, title: "Enter button", type: "word", text: "\nname"},
          { id: 5, title: "<>>><<<", type: "text", text: ",,,,,>>>><<....<>>><<>>>><<<<,,,,<<<>>>......<<>.,.<><.<<>,.<.<><.<><.<><<><>,.,.<><.,.<><..<<.<><.<><.,.,>>><.,<<<>,,...,.,<<>.,>><>>,.,.,.<><.<.<"}
        ]
      }
    ],

    fontSize: 20,
    soundOff: false
  })
  
  const params = useParams()
  
  function setState(state){
    localStorage.setItem("state", JSON.stringify(state))
  }
  
  function getState(){
    let s = localStorage.getItem("state")
    return JSON.parse(s)
  }


  const handleChangeFontSize=(inc=true)=>{
    let updatedState = {...typingState}
    if(inc){
      if(typingState.fontSize < 90) {
        updatedState.fontSize = typingState.fontSize + 4
      }
    } else {
      if(typingState.fontSize > 10) {
        updatedState.fontSize = typingState.fontSize - 4
      }
    }
    setState(updatedState)
    setTypingState(updatedState)
  }
  const handleToggleSpeaker=()=>{
    let updatedState = {...typingState}
    if(typingState.soundOff){
      updatedState.soundOff = false
    } else {
      updatedState.soundOff = true
    }
    setState(updatedState)
    setTypingState(updatedState)
  }
  
  function getLesson(level, id) {
   


    let lesson = null
    typingState.lessons.forEach(l => {
      if(l.level === level){
        l.practise.map(item=>{
          if(item.id == id) {
            lesson = item
          }
        })
      }
    })
    console.log(lesson)
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