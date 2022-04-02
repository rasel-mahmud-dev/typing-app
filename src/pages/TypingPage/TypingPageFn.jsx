import React from 'react';
import "./TypingPage.scss"


import keyPressSound from "../../asserts/sounds/zapsplat_multimedia_button_press_plastic_click_001_36868.mp3"
import badPressSound from "../../asserts/sounds/touch_sound.mp3"
import r from "../../asserts/hands/r.png"
import e from "../../asserts/hands/e.png"
import t from "../../asserts/hands/t.png"
import ltReset from "../../asserts/hands/left-resting-hand.png"
import rtReset from "../../asserts/hands/right-resting-hand.png"
import z from "../../asserts/hands/z.png"
import x from "../../asserts/hands/x.png"
import c from "../../asserts/hands/c.png"
import v from "../../asserts/hands/v.png"
import a from "../../asserts/hands/a.png"
import s from "../../asserts/hands/s.png"
import d from "../../asserts/hands/d.png"
import f from "../../asserts/hands/f.png"
import g from "../../asserts/hands/g.png"
import b from "../../asserts/hands/b.png"
import h from "../../asserts/hands/h.png"
import j from "../../asserts/hands/j.png"
import l from "../../asserts/hands/l.png"
import m from "../../asserts/hands/m.png"
import n from "../../asserts/hands/n.png"
import o from "../../asserts/hands/o.png"
import p from "../../asserts/hands/p.png"
import space from "../../asserts/hands/space.png"
import i from "../../asserts/hands/i.png"
import k from "../../asserts/hands/k.png"
import q from "../../asserts/hands/q.png"
import u from "../../asserts/hands/u.png"
import w from "../../asserts/hands/w.png"
import y from "../../asserts/hands/y.png"
import rightBrace from "../../asserts/hands/number_row/right_brace_enter.png"
import leftBrace from "../../asserts/hands/number_row/leftBrace.png"
import plus from "../../asserts/hands/number_row/plus.png"
import minus from "../../asserts/hands/number_row/minus.png"

import dot from "../../asserts/hands/number_row/dot.png"
import comma from "../../asserts/hands/number_row/comma.png"
import semiclone from "../../asserts/hands/number_row/semiclone.png"
import doubleQuotation from "../../asserts/hands/number_row/cotetion.png"
import questionMark from "../../asserts/hands/number_row/questionMark.png"
import tide from "../../asserts/hands/number_row/tide.png"
import enter from "../../asserts/hands/number_row/enter.png"
import rightShift from "../../asserts/hands/number_row/right-shift.png"
import leftShift from "../../asserts/hands/number_row/leftShift.png"


import zero from "../../asserts/hands/number_row/0.png"
import one from "../../asserts/hands/number_row/1.png"
import two from "../../asserts/hands/number_row/2.png"
import three from "../../asserts/hands/number_row/3.png"
import four from "../../asserts/hands/number_row/4.png"
import five from "../../asserts/hands/number_row/5.png"
import six from "../../asserts/hands/number_row/6.png"
import seven from "../../asserts/hands/number_row/7.png"
import eight from "../../asserts/hands/number_row/8.png"
import nine from "../../asserts/hands/number_row/9.png"


import Keyboard from "../../components/Keyboard/Keyboard";
import TypingContext from '../../state/TypingContext';
import {Link, useParams, useNavigate} from "react-router-dom";
import RenderTextBox from "../../components/RenderTextBox/RenderTextBox";
import TopBar from "./TopBar";

const code = [
  { code: 9, key: "tab"},
  { code: 13, key: '\n'}, // enter key press
  { code: 13, key: '⏎'},
  { code: 16, key: "shift", id: "rightShift"},
  { code: 32, key: ' ', id: "space-bar"}, // space key code
  { code: 48, key: "0", id: "0"}, { code: 48, key: ")", isPressedShift: true, id: ")" },
  { code: 49, key: "1", id: "1"}, { code: 49, key: "!", isPressedShift: true, id: "!" },
  { code: 50, key: '2', id: '2'}, { code: 50, key: "@", isPressedShift: true, id: "@" },
  { code: 51, key: "3", id: "3"}, { code: 51, key: "#", isPressedShift: true, id: "#" },
  { code: 52, key: "4", id: "4"}, { code: 52, key: "$", isPressedShift: true, id: "$" },
  { code: 53, key: "5", id: "5"}, { code: 57, key: "(", isPressedShift: true, id: "(" },
  { code: 54, key: "6", id: "6"}, { code: 54, key: "^", isPressedShift: true, id: "^" },
  { code: 55, key: "7", id: "7"}, { code: 55, key: "&", isPressedShift: true, id: "&" },
  { code: 56, key: "8", id: "8"}, { code: 56, key: "*", isPressedShift: true, id: "*" },
  { code: 57, key: "9", id: "9"}, { code: 57, key: "(", isPressedShift: true, id: "(" },
  
  {code: 65, key: "a", id: "a"}, { code: 65, key: "A", isPressedShift: true, id: "a"},
  {code: 66, key: "b", id: "b"}, { code: 66, key: "B", isPressedShift: true, id: "B"},
  {code: 67, key: "c", id: "c"}, { code: 67, key: "C", isPressedShift: true, id: "C"},
  {code: 68, key: "d", id: "d"}, { code: 68, key: "D", isPressedShift: true, id: "D"},
  {code: 69, key: "e", id: "e"}, { code: 69, key: "E", isPressedShift: true, id: "E"},
  {code: 70, key: "f", id: "f"}, { code: 70, key: "F", isPressedShift: true, id: "F"},
  {code: 71, key: "g", id: "g"}, { code: 71, key: "G", isPressedShift: true, id: "G"},
  {code: 72, key: "h", id: "h"}, { code: 72, key: "H", isPressedShift: true, id: "H"},
  {code: 73, key: "i", id: "i"}, { code: 73, key: "I", isPressedShift: true, id: "I"},
  {code: 74, key: "j", id: "j"}, { code: 74, key: "J", isPressedShift: true, id: "J"},
  {code: 75, key: "k", id: "k"}, { code: 75, key: "K", isPressedShift: true, id: "K"},
  {code: 76, key: "l", id: "l"}, { code: 76, key: "L", isPressedShift: true, id: "L"},
  {code: 77, key: "m", id: "m"}, { code: 77, key: "M", isPressedShift: true, id: "M"},
  {code: 78, key: "n", id: "n"}, { code: 78, key: "N", isPressedShift: true, id: "N"},
  {code: 79, key: "o", id: "o"}, { code: 79, key: "O", isPressedShift: true, id: "O"},
  {code: 80, key: "p", id: "p"}, { code: 80, key: "P", isPressedShift: true, id: "P"},
  {code: 81, key: "q", id: "q"}, { code: 81, key: "Q", isPressedShift: true, id: "Q"},
  {code: 82, key: "r", id: "r"}, { code: 82, key: "R", isPressedShift: true, id: "R"},
  {code: 83, key: "s", id: "s"}, { code: 83, key: "S", isPressedShift: true, id: "S"},
  {code: 84, key: "t", id: "t"}, { code: 84, key: "T", isPressedShift: true, id: "T"},
  {code: 85, key: "u", id: "u"}, { code: 85, key: "U", isPressedShift: true, id: "U"},
  {code: 86, key: "v", id: "v"}, { code: 86, key: "V", isPressedShift: true, id: "V"},
  {code: 87, key: "w", id: "w"}, { code: 87, key: "W", isPressedShift: true, id: "W"},
  {code: 88, key: "x", id: "x"}, { code: 88, key: "X", isPressedShift: true, id: "X"},
  {code: 89, key: "y", id: "y"}, { code: 89, key: "Y", isPressedShift: true, id: "Y"},
  {code: 90, key: "z", id: "z"}, { code: 90, key: "Z", isPressedShift: true, id: "Z"},
  
  { code: 222, key: "'", id: "'"}, { code: 222, key: `"`, isPressedShift: true, id: `"`},
  { code: 186, key: ";", id: ";"}, { code: 186, key: ":", isPressedShift: true, id: ":"},
  { code: 188, key: ",", id: ","}, { code: 188, key: "<", isPressedShift: true, id: "<"},
  { code: 190, key: ".", id: "."}, { code: 190, key: ">", isPressedShift: true, id: ">"},
  { code: 191, key: "/", id: "/"}, { code: 191, key: "?", isPressedShift: true, id: "?"},
  
  { code: 219, key: "[", id: "["}, { code: 219, key: "{", isPressedShift: true, id: "{" },
  { code: 221, key: "]", id: "]"}, { code: 221, key: "}", isPressedShift: true, id: "}" },
  { code: 187, key: "=", id: "="}, { code: 187, key: "+", isPressedShift: true, id: "+" },
]


function isLeft(word) {
  let left = [
    "`", "!", "@", "#", "$", "%",
    "~", "1", "2", "3", "4", "5",
    "Q", "W", "E", "R", "R",
    "q", "w", "e", "r", "t",
    "A", "S", "T", "D", "F", "G",
    "a", "s", "t", "d", "f", "g",
    "Z", "X", "C", "V", "B",
    "z", "x", "c", "v", "b"
  ]
  return left.indexOf(word) !== -1
}
  
let startTime = null
let vals = ""
let ii = 0
let isPressedShift2;


const TypingPage = (props)=> {

  const textInput = React.useRef();
  const context = React.useContext(TypingContext)
  
  const [isMobile, setMobile] = React.useState(true)
  
  React.useEffect(()=>{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setMobile(isMobile)
    return ()=> resetState()
  }, [])
  
  const [state, setState] = React.useState({
    keys : {
      numberRow: [
        [{key: "~", code: getKeyCode("~")}, { key: "`", code: 222, label: ["~"]}],
        [{key: "!", code: getKeyCode("!")}, { key: "1", code: getKeyCode("1") , label: ["!"]}],
        [{key: "@", code: getKeyCode("@")}, { key: "2", code: getKeyCode("2"), label: ["@"]}],
        [{key: "#", code: getKeyCode("#")}, { key: "3", code: getKeyCode("3"), label: ["#"]}],
        [{key: "$", code: getKeyCode("$")}, { key: "4", code: getKeyCode("4"), label: ["$"]}],
        [{key: "%", code: getKeyCode("%")}, { key: "5", code: getKeyCode("5"), label: ["%"]}],
        [{key: "^", code: getKeyCode("^")}, { key: "6", code: getKeyCode("6"), label: ["^"]}],
        [{key: "&", code: getKeyCode("&")}, { key: "7", code: getKeyCode("7"), label: ["&"]}],
        [{key: "*", code: getKeyCode("*")}, { key: "8", code: getKeyCode("8"), label: ["*"]}],
        [{key: "(", code: getKeyCode("(")}, { key: "9", code: getKeyCode("9"), label: ["("]}],
        [{key: ")", code: getKeyCode(")")}, { key: "0", code: getKeyCode("0"), label: [")"]}],
        [{key: "_", code: getKeyCode("_")}, { key: "-", code: getKeyCode("-"), label: ["_"]}],
        [{key: "+", code: getKeyCode("+")}, { key: "=", code: getKeyCode("="), label: ["+"]}],
        [{key: "Backspace", code:  getKeyCode("backspace"), label: [ "Backspace", "⌫"]}],
      ],
      topRow: [
        [{key: "Tab", down: "", code: 9, label: ["Tab", "↹"]}],
        [{key: "Q", code: code["Q"], label: ["Q"]}],
        [{key: "W", id: "w", code: code["W"] , label: ["W"]}],
        [{key: "E", id: "e", code: code["E"], label: ["E"]}],
        [{key: "R", id: "r", code: code["R"], label: ["R"]}],
        [{key: "T", id: "t", code: code["T"], label: ["T"]}],
        [{key: "Y", id: "y", code: code["Y"], label: ["Y"]}],
        [{key: "U", id: "u", code: code["U"], label: ["U"]}],
        [{key: "I", id: "i", code: code["I"], label: ["I"]}],
        [{key: "O", id: "o", code: code["O"], label: ["O"]}],
        [{key: "P", id: "p", code: code["P"], label: ["P"]}],
        [{key: "{", code: getKeyCode(189), label: ["{"], id: "{"}, { key: "[", code: getKeyCode(189), label: ["["]}],
        [{key: "}", code: getKeyCode(187), label: ["}"]}, { key: "]", code: getKeyCode(187), label: ["]"]}],
        [{key: "|", down: "\\", code: 220, label: ["|"]}],
      ],
      homeRow: [
        [{key: "Caps Lock", code: 20, label: ["Caps", "⇪"], id: "Caps"}],
        [{key: "A", code: getKeyCode("A"), id: "a", label: ["A"]}],
        [{key: "S", code: 83, id: "s", label: ["s"]}],
        [{key: "D", code: 68, label: ["D"], id: "d"}],
        [{key: "F", code: 70, label: ["F"], id: "f"}],
        [{key: "G", code: 71, label: ["G"], id: "g"}],
        [{key: "H", code: 72, label: ["H"], id: "h"}],
        [{key: "J", code: getKeyCode("J"), label: ["J"], id: "j"}],
        [{key: "K", code: 75, label: ["K"], id: "k"}],
        [{key: "L", code: 76, label: ["L"], id: "l"}],
        [{key: ":", code: getKeyCode(":") }, {key: ";", code: getKeyCode(";") , label: [":"], id: ":"}],
        [{key: '"', code: getKeyCode(`"`)}, {key:"'", code: "", label: ["'"], id: "'"}],
        [{key: 'enter', code: getKeyCode('⏎'), label: ["Enter", "⏎"], id: "⏎"}],
      ],
      bottomRow: [
        [{key: "Shift", code: 16, label: ["Shift", "⇧"]}],
        [{key: "Z", code: 90, id: "z", label: ["z"]}],
        [{key: "X", code: 88, id: "x", label: ["x"]}],
        [{key: "C", code: 67, id: "c", label: ["c"]}],
        [{key: "V", code: 86, id: "v", label: ["v"]}],
        [{key: "B", code: 66, id: "b", label: ["b"]}],
        [{key: "N", code: 78, id: "n", label: ["n"]}],
        [{key: "M", code: 77, id: "m", label: ["m"]}],
        [{key: "<", code: 188, id: "<", label: ["<"]}, {key: ",", code: 188, label: [","]}],
        [{key: ">", code: 188, id: ">", label: ["<"]}, {key: ".", code: 190, label: ["."]}],
        [
          {key: "?", code: getKeyCode("?"), label: ["?"]},
          {key: "/", code: getKeyCode("/"), label: ["/"] }
        ],
        [{key: "Shift", code: 16, label: ["Shift", "⇧"]}],
      ],
      controlRow: [
        [{key: "Ctrl", code: 17, label: ["Ctrl"]}],
        [{key: "Win", code: 18, label: ["Win"]}],
        [{key: "Alt", code: 83, label: ["Alt"] }],
        [{key: "Spacebar", code: 32, id: "space-bar", label: ["Spacebar", ""]}],
        [{key: "Alt", code: 83, label: ["Alt"] }],
        [{key: "Win", code: 18, label: ["Win"]}],
        [{key: "Ctrl", code: 17, label: ["Ctrl"]}],
      ]
    },
    imgs: {
      z, Z:z,
      x, X:x,
      v, V:v,
      a, A:a,
      b, B: b,
      c, C: c,
      d, D:d,
      e, E:e,
      f, F:f,
      g, G:g,
      j, J:j,
      h, H:h, s, S:s, l, L:l, m, M:m, n, N:n, o, O:o, p, P:p,
      i, I: i,
      k, K: k,
      "[": leftBrace,"{": leftBrace,
      "]": rightBrace, "}": leftBrace,
      "=": plus, "+": plus,
      "-": minus, "_": minus,
      q, Q: q,
      r: r, R: r,
      t: t, T: t,
      u, U:u,
      y, Y: y,
      w, W: w,
      "1": one, "!": one,
      "2": two, "@": two,
      "3": three, "#": three,
      "4": four, "$": four,
      "5": five, "%": five,
      "6": six, "^": six,
      "7": seven, "&": seven,
      "8": eight, "*": eight,
      "9": nine, "(": nine,
      "0": zero, ")": zero,
      ".": dot, ">": dot,
      ",": comma, "<": dot,
      "?": questionMark, "/": questionMark,
      "''": doubleQuotation, "'": doubleQuotation,
      ":": semiclone, ";": semiclone,
      "`": tide, "~": tide,
      // "''": doubleQuotation, "'": doubleQuotation,
      "rt-reset": rtReset,
      "lt-reset": ltReset,
      " ": space,
      rightShift,
      leftShift,
      "\n": enter
    },
    isTyping: false,
    text: [],
    title: "",
    wrongPress: 0,
    nextLetter: { i: 0, letter: "", image:{ rightHand: "", leftHand: "" }, activeKeys: []},
    currentKey: { code: -1, i: 0, letter: ""},
    isCompleted: false,
    totalTimeConsume: 0,
    typedText: "",
  })
  const [wrongPress, setWrongPress] = React.useState(0)
  const params = useParams()
  const navigate = useNavigate()
  
  function getKeyCode(letter, isPressedShift=false){

    if(letter) {
      if (isPressedShift) {
        return code.find(c => c.key === letter && isPressedShift === c.isPressedShift)
        
      } else if(letter === "\n"){
        return code.find(c => c.key === letter)
      } else {
        let space = letter === " "
        if (space) {
          return code.find(c => c.key === " ")
        } else {
          return code.find(c => c.key === letter)
        }
      }
    } else {
      return false
    }
  }
  
  React.useEffect(()=>{
    if(params.id){
      resetState()
      // onReadyChooseFirstLetter()
      onReadyChooseFirstLetter()
    }
  }, [params.id])
  
  React.useEffect(()=>{
    if(state.isCompleted) {
      window.addEventListener("keydown", handleWindowKeyPress)
    }
    return ()=> window.removeEventListener("keydown", handleWindowKeyPress)
  }, [state.isCompleted])
  
  function resetState(){
    setState({
      ...state,
      isTyping: false,
      text: [],
      title: "",
      wrongPress: 0,
      nextLetter: { i: 0, letter: "", image:{ rightHand: "", leftHand: "" }, activeKeys: []},
      currentKey: { code: -1, i: 0, letter: ""},
      isCompleted: false,
      totalTimeConsume: 0,
      typedText: "",
    })
  }
  
  function handleWindowKeyPress(e){
    if(e.keyCode === 16){
      isPressedShift2 = true
    } 

    if(state.isCompleted && !isPressedShift2 &&  e.keyCode === 13){
      isPressedShift2 = false
      setTimeout(()=>{
        onReadyChooseFirstLetter(true)
      }, 0)
    }

    // if press shift + enter than go to next lesson
    if(state.isCompleted && isPressedShift2 &&  e.keyCode === 13){
      onReadyChooseFirstLetter(true, true)
      isPressedShift2 = false
    }
  }
  
  function chooseHand(firstLetter){
    let updatedState = {...state}
  
    let activeKeys = []
    
    updatedState.nextLetter.i = 0
    updatedState.nextLetter.letter = firstLetter
  
    
    /** Check letter info like it capital or lowercase */
    let firstLetterInfo = code.find(code=>code.key === firstLetter)
    if(firstLetterInfo && firstLetterInfo.id){
      activeKeys.push(firstLetterInfo.id)
    }
    
  
    if(firstLetter !== "") {
      let image = {...updatedState.nextLetter.image}
  
      if (isLeft(firstLetter)) {
     
        image.leftHand = updatedState.imgs[firstLetter]
        
        if(firstLetterInfo && firstLetterInfo.isPressedShift){
          activeKeys.push('rightShift')
          image.rightHand = updatedState.imgs.rightShift
        } else {
          // place finger in space-bar
          image.rightHand = updatedState.imgs["rt-reset"]
        }
      } else {
        
        if(firstLetterInfo && firstLetterInfo.isPressedShift){ // true when only uppercase letter on right Side
          activeKeys.push('leftShift')
          image.leftHand = updatedState.imgs.leftShift        // left hand press shift
          image.rightHand = updatedState.imgs[firstLetter]   // right hand press next word
         
        } else {
          // place finger in space-bar
          // true when only lowercase letter on right Side
          // image.rightHand = updatedState.imgs["rt-reset"]
          image.leftHand = updatedState.imgs["lt-reset"]
          image.rightHand = updatedState.imgs[firstLetter]
        }
      
        // image.leftHand = updatedState.imgs["lt-reset"]
      }
    
      updatedState.nextLetter = {
        ...updatedState.nextLetter,
        image: image
      }
    
    } else {
      let image = {...updatedState.nextLetter.image}
      // image.leftHand = updatedState.imgs[firstLetter]
      
      
      image.leftHand = updatedState.imgs["lt-reset"]
      image.rightHand = updatedState.imgs[firstLetter]
    
      updatedState.nextLetter = {
        ...updatedState.nextLetter,
        image: image
      }
    }
  
    updatedState.nextLetter = {
      ...updatedState.nextLetter,
      activeKeys
    }
  
  
    return updatedState
  
  }
  
  
  function onReadyChooseFirstLetter(isEnterPressed, nextLesson){
    let post = context.getLesson(Number(params.id))
    let updatedState = {...state, ...chooseHand(post.text.split("")[0])}
    startTime = Date.now()

    if(isEnterPressed && nextLesson){
      navigate("/typing/" + (Number(params.id) + 1))
        post = context.getLesson(Number(params.id) + 1)
        updatedState = {...state, ...chooseHand(post.text.split("")[0])}

    } else if(isEnterPressed && !nextLesson) {
      post = context.getLesson(Number(params.id))
    }

    startTime = Date.now()
    updatedState.isTyping =  true
    textInput?.current?.focus()
    updatedState.text = post.text.split("")
    updatedState.type = post.type ? post.type : "char"
    updatedState.title = post.title

  updatedState.currentKey = { code: -1, i: 0, letter: ""}
    updatedState.isCompleted = false
    updatedState.totalTimeConsume = 0
    updatedState.currentWord = 0
    
    updatedState.isTyping = true
    setState(updatedState)
    setWrongPress(0)
    textInput?.current?.focus()


  }
  
  function keypressSound(isValid){
  
    if (!isValid) {
      setWrongPress(wrongPress + 1)
    }
    
    if(!context.typingState.soundOff) {
      let audio = document.createElement("audio")
      audio.style.opacity = 0
      audio.src =  isValid ? keyPressSound : badPressSound
      document.body.appendChild(audio)
      
      audio.play().then((_) => {
        setTimeout(() => {
          document.body.removeChild(audio)
        }, 200)
      })
    }
  }

  
  function progress(state,  e, options){
    if(options.key === 'enter') {
      let isFinished = (state.nextLetter.i + 1) === state.text.length
      if (!isFinished) {
        // other letter keys...
        // increase paragraph index
        // console.log(state.nextLetter, state.text)
        ii += 1
        let nextWord = state.text[ii]
        if (nextWord) {
          const updatedState = {...state, ...chooseHand(nextWord)}
          updatedState.nextLetter = {
            ...updatedState.nextLetter,
            i: ii,
            letter: nextWord,
          }
          updatedState.currentKey = {
            code: e.keyCode,
            i: ii,
            letter: updatedState.text[ii]
          }
          setState(updatedState)
          keypressSound(true)
          // ii += 1 // skip line break space after click enter button
        }

      } else {
        finalHit(state, e, options)
    
      }
    } else {
      
      let updatedState = {...state}
      let isFinished = (state.nextLetter.i + 1) === state.text.length
      if (!isFinished) {
        ii++
        let nextWord = state.text[ii]
        if (nextWord) {
          updatedState = {...updatedState, ...chooseHand(nextWord)}
          updatedState.nextLetter = {
            ...updatedState.nextLetter,
            i: ii,
            letter: nextWord,
          }
          
          updatedState.currentKey = {
            code: e.keyCode,
            i: ii - 1,
            letter: updatedState.text[ii - 1]
          }
          setState(updatedState)
          keypressSound(true)
        }
        
      } else{
        // finished
        finalHit(state, e, options)
      }
    }
  }
  
  function finalHit(state,  e, options){
    ii++
    let nextWord = state.text.slice(1)[ii - 1]
    let updatedState = {...state}
    let image = {...updatedState.nextLetter.image}
    if (isLeft(nextWord)) {
      // change finger for left hand............
      image.rightHand = updatedState.imgs['rt-reset']
      image.leftHand = updatedState.imgs[nextWord]
    
    } else {
      // change finger for right hand
      image.rightHand = updatedState.imgs[nextWord]
      image.leftHand = updatedState.imgs["lt-reset"]
    }
    setState({
      ...updatedState,
      isCompleted: true,
      isTyping: false,
      totalTimeConsume: (Date.now() - startTime) / 1000,
      nextLetter: {
        i: ii,
        letter: nextWord,
        image: image
      },
      currentKey: {code: e.keyCode, i: ii - 1, letter: updatedState.text.slice(1)[ii - 1]}
    })
    ii = 0 // reset index number;
    keypressSound(true)
  }
  
  
  function handleKeyPress(e){
  
    console.log(e.key + " = " + e.keyCode)
    if(state.isTyping) {
      let keyCode = getKeyCode(state.nextLetter.letter, e.shiftKey)
      console.log(keyCode, state.nextLetter.letter)
     
      if (keyCode && (e.keyCode === keyCode.code)) {
        
        // handle when enter key but it not any letter
        // cause e.key === Enter && state.nextLetter.letter === ⏎
        
        if (state.nextLetter.letter === e.key) {
          let isFinished = (state.nextLetter.i + 1) === state.text.length
          progress(state,  e, {})
          
          
        } else if(state.nextLetter.letter === (e.key === "enter" ?  "12323" : "\n") ){
          progress(state,  e, {key: "enter" })
        }
        
        // when state.nextLetter.letter === ⏎
        else if(state.nextLetter.letter === "⏎") {
          // progress(state,  e, { key: "enter" })
          
        } else {
          // wrong key press
          keypressSound(false)
        }
        
      } else {
    
        if(!e.shiftKey) {
          keypressSound(false)
        } else if(!keyCode && e.shiftKey) {
          keypressSound(false)
        }
      }
    } else {
      // alert("please focus text box")
    }
    
  }
  
  function handleChange(e){
    vals = textInput.current?.value
  }
  
  function handleStartTyping(e){
    onReadyChooseFirstLetter()
    // textInput.current?.focus()
  }
  
  function handleFocus(){
    setState({
      ...state,
      isTyping: true
    })
    textInput?.current?.focus()
  }
  
  function handleBlur(){
    setState({
      ...state,
      isTyping: false
    })
  }
  
  function calculateTimeNeed(){
  
    let charPS = 0
    let sec = (Date.now() - startTime) / 1000
  
    let totalLetter = state.text.length || 1
    charPS = (totalLetter / (sec) || 0 )
  
    let result = "0"
    let acc = state.text.length -  wrongPress
    if(wrongPress > state.text.length){
      result  = "0"
    } else {
      result = (acc / state.text.length ) * 100
    }
    
    return {
      charPS: Math.round(charPS),
      time: sec,
      accuracy: result
    }
    
  }
  function handleNextLesson(e){

  }
  
  return (
    <div>
      <TopBar
        handleToggleSpeaker={context.handleToggleSpeaker}
        soundOff={context.typingState.soundOff}
        handleChangeFontSize={context.handleChangeFontSize} />
      <div className="container">
        <div className="flex my-4">
          <h2 className="text-xl font-medium mr-2 text-gray-50">Lesson </h2>
          <h1 className="text-xl font-medium text-gray-50">
            { params.id } :
            <span className="text-xl font-medium ml-4 text-pink-500 font-bold">{state.title}</span>
          </h1>
          
        </div>
  
        { isMobile && (
          <div style={{color: "#e4ff00"}} className="bg-red-500 px-2 py-1.5 mt-3 mb-2 rounded bg-opacity-10 text-sm font-medium">
            <span className="font-medium inline-block mr-1">NB:</span>
            <span>currently you are using mobile browser.
            You have to plug physical keyboard via OTG Cable</span>
          </div>
        )}
        
        { wrongPress > 0 &&  <div className="glass-card error_glass">
          <h1 className="text-2xl text-center">wrong: {wrongPress}</h1>
        </div> }
        
        
        <CountDown isCompleted={state.isCompleted}  isTyping={state.isTyping} />
        
        <input
          onBlur={handleBlur}
          className="input-typing"
          hidden={false}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          ref={textInput}
          value={state.typedText}
        />
        <div className="">
          <RenderTextBox
            onFocus={handleFocus}
            paraType={state.type}
            nextLetter={state.nextLetter}
            text={state.text}
            isTyping={state.isTyping}
            handleStartTyping={handleStartTyping}
          />
        </div>
  
  
        <div className="row">
          <div className={["modal", state.isCompleted ? "show-modal  p-2" : ""].join(" ")}>
            <div>
              <h3 className="modal-title">Accuracy {calculateTimeNeed().accuracy}%</h3>
              {state.isCompleted && <h3 className="modal-title">Typing Speed {calculateTimeNeed().charPS} letter per second (lps)</h3> }
              {state.isCompleted && <h3 className="modal-title">Total Consume {state.totalTimeConsume}S</h3> }
              <div className="row justify-space-between p-2">
                {/*<button onClick={this.makeTextToTyingWord} className="btn">Previews Level</button>*/}
                <button onClick={handleStartTyping} className="btn">Restart</button>
                <button className="btn">
                  {/* <Link onClick={handleNextLesson} to={`/typing/${Number(params.id) + 1}`}>Next Level</Link> */}
                  <span onClick={handleNextLesson}>Next Level</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        
        {!state.isCompleted && <Keyboard
          text={state.text}
          getKeyCode={getKeyCode}
          keys={state.keys}
          currentKey={state.currentKey}
          nextLetter={state.nextLetter}
        />}
        
        
        
      </div>
    </div>
  )
}


let timeId
function CountDown(props){
  const { isCompleted,  isTyping}  = props
  
  const [second, setSecond] = React.useState(0)
  
  React.useEffect(()=>{
    if(isTyping) {
      calculateCountDown()
    } else {
      clearTimeout(timeId)
    }
  }, [second, isTyping])
  
  React.useEffect(()=>{
    clearTimeout(timeId)
    setSecond(0)
  }, [isCompleted])
  
  function calculateCountDown(){
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      setSecond(second + 1)
    }, 1000)
  }
  
  function handlePause(e) {
    if(!isTyping) {
      clearTimeout(timeId)
    } else{
      console.log("thi")
    }
  }
  
  function handleCountDown(){
    if(isTyping) {
      calculateCountDown()
    }
  }

  
  return (
    <div>
      { <h1 className="text-md text-center font-medium">start on: {second} Second</h1> }
    </div>
  )
}


export default TypingPage;




