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
import doubleQuotation from "../../asserts/hands/number_row/cotetion.png"
import questionMark from "../../asserts/hands/number_row/questionMark.png"
import tide from "../../asserts/hands/number_row/tide.png"



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
import {Link, useParams} from "react-router-dom";

const code = [
  { code: 9, key: "tab"},
  { code: 16, key: "shift"},
  { code: 48, key: "0"},
  { code: 49, key: "1"},
  { code: 50, key: '2'}, { code: 50, isPressedShift: true, key: "@"},
  { code: 51, key: "3"},
  { code: 52, key: "4"},
  { code: 53, key: "5"},
  { code: 54, key: "6"},
  { code: 55, key: "7"},
  { code: 56, key: "8"},
  { code: 57, key: "9"},
  { code: 65, key: "A", isPressedShift: true},
  { code: 66, key: "B", isPressedShift: true},
  { code: 67, key: "C", isPressedShift: true},
  { code: 68, key: "D", isPressedShift: true},
  { code: 69, key: "E", isPressedShift: true},
  { code: 70, key: "F", isPressedShift: true},
  { code: 71, key: "G", isPressedShift: true},
  { code: 72, key: "H", isPressedShift: true},
  { code: 73, key: "I", isPressedShift: true},
  { code: 74, key: "J", isPressedShift: true},
  { code: 75, key: "K", isPressedShift: true},
  { code: 76, key: "L", isPressedShift: true},
  { code: 77, key: "M", isPressedShift: true},
  { code: 78, key: "N", isPressedShift: true},
  { code: 79, key: "O", isPressedShift: true},
  { code: 80, key: "P", isPressedShift: true},
  { code: 81, key: "Q", isPressedShift: true},
  { code: 82, key: "R", isPressedShift: true},
  { code: 83, key: "S", isPressedShift: true},
  { code: 84, key: "T", isPressedShift: true},
  { code: 85, key: "U", isPressedShift: true},
  { code: 86, key: "V", isPressedShift: true},
  { code: 87, key: "W", isPressedShift: true},
  { code: 88, key: "X", isPressedShift: true},
  { code: 89, key: "Y", isPressedShift: true},
  { code: 90, key: "Z", isPressedShift: true},
  { code: 222, key: "'"},
  { code: 188, key: ","},
  { code: 190, key: "."},
  { code: 191, key: "/"},
  {code: 65, key: "a"},
  {code: 66, key: "b"},
  {code: 67, key: "c"},
  {code: 68, key: "d"},
  {code: 69, key: "e"},
  {code: 70, key: "f"},
  {code: 71, key: "g"},
  {code: 72, key: "h"},
  {code: 73, key: "i"},
  {code: 74, key: "j"},
  {code: 75, key: "k"},
  {code: 76, key: "l"},
  {code: 77, key: "m"},
  {code: 78, key: "n"},
  {code: 79, key: "o"},
  {code: 80, key: "p"},
  {code: 81, key: "q"},
  {code: 82, key: "r"},
  {code: 83, key: "s"},
  {code: 84, key: "t"},
  {code: 85, key: "u"},
  {code: 86, key: "v"},
  {code: 87, key: "w"},
  {code: 88, key: "x"},
  {code: 89, key: "y"},
  {code: 90, key: "z"},
  {code: 32, key: ""}
]




function getLetter(keyCode){
  for (const codeKey in code) {
    if(keyCode === code[codeKey]){
      return codeKey
    }
  }
}

function isLeft(word) {
  let left = [
    "`", "!", "@", "#", "$", "%",
    "~", "1", "2", "3", "4", "5",
    "Q", "W", "E", "R", "R",
    "q", "w", "e", "r", "t",
    "A", "S", "T", "D", "F", "G",
    "a", "s", "t", "d", "f", "g",
    "Z", "X", "C", "V", "B",
    "z", "x", "c", "v", "b",
  ]
  return left.indexOf(word) !== -1
}


  let startTime = null
  let vals = ""

  let eventKeyCode = 0

let ii = 0

const TypingPage = (props)=> {
  let isShiftKeyPressed = false
  const textInput = React.useRef();
  
  const context = React.useContext(TypingContext)
  
  const [state, setState] = React.useState({
    keys : {
      numberRow: [
        [{key: "~", code: getKeyCode("~")}, { key: "`", code: 222}],
        [{key: "!", code: getKeyCode("!")}, { key: "1", code: getKeyCode("1") }],
        [{key: "@", code: getKeyCode("@")}, { key: "2", code: getKeyCode("2")}],
        [{key: "#", code: getKeyCode("#")}, { key: "3", code: getKeyCode("3")}],
        [{key: "$", code: getKeyCode("$")}, { key: "4", code: getKeyCode("4")}],
        [{key: "%", code: getKeyCode("%")}, { key: "5", code: getKeyCode("5")}],
        [{key: "^", code: getKeyCode("^")}, { key: "6", code: getKeyCode("6")}],
        [{key: "&", code: getKeyCode("&")}, { key: "7", code: getKeyCode("7")}],
        [{key: "*", code: getKeyCode("*")}, { key: "8", code: getKeyCode("8")}],
        [{key: "(", code: getKeyCode("(")}, { key: "9", code: getKeyCode("9")}],
        [{key: ")", code: getKeyCode(")")}, { key: "0", code: getKeyCode("0")}],
        [{key: "_", code: getKeyCode("_")}, { key: "-", code: getKeyCode("-")}],
        [{key: "+", code: getKeyCode("+")}, { key: "=", code: getKeyCode("=")}],
        [{key: "", code:  getKeyCode("")}],
      ],
      topRow: [
        [{key: "Tab", down: "", code: 9}],
        [{key: "Q", code: code["Q"]}],
        [{key: "W", code: code["W"] }],
        [{key: "E", code: code["E"]}],
        [{key: "R", code: code["R"]}],
        [{key: "T", code: code["T"]}],
        [{key: "Y", code: code["Y"]}],
        [{key: "U", code: code["U"]}],
        [{key: "I", code: code["I"]}],
        [{key: "O", code: code["O"]}],
        [{key: "P", code: code["P"]}],
        [{key: "{", down: "[", code: 189}],
        [{key: "}", down: "]", code: 187}],
        [{key: "|", down: "\\", code: 220}],
      ],
      homeRow: [
        [{key: "Caps Lock", code: 20}],
        [{key: "A", code: 65}],
        [{key: "S", code: 83 }],
        [{key: "D", code: 68}],
        [{key: "F", code: 70}],
        [{key: "G", code: 71}],
        [{key: "H", code: 72}],
        [{key: "J", code: getKeyCode("J")}],
        [{key: "K", code: 75}],
        [{key: "L", code: 76}],
        [{key: ":", code: 186 }, {key: ";", code: 186 }],
        [{key: '"', code: 189}, {key:"'", code: ""}],
        [{key: "Enter", code: 13}],
      ],
      bottomRow: [
        [{key: "Shift", code: 16}],
        [{key: "Z", code: 90}],
        [{key: "X", code: 88 }],
        [{key: "C", code: 67}],
        [{key: "V", code: 86}],
        [{key: "B", code: 66}],
        [{key: "N", code: 78}],
        [{key: "M", code: 77}],
        [{key: "<", code: 188}, {key: ",", code: 188}],
        [{key: ">", code: 188}, {key: ".", code: 190}],
        [{key: "?", code: 188}, {key: "/", code: 191 }],
        [{key: 'Shift', code: 16}]
      ],
      controlRow: [
        [{key: "Ctrl", code: 17}],
        [{key: "Win", code: 18}],
        [{key: "Alt", code: 83 }],
        [{key: "Spacebar", code: 32}],
        [{key: "Alt", code: 83 }],
        [{key: "Win", code: 18}],
        [{key: "Ctrl", code: 17}],
      ]
    },
    imgs: {
      z, Z:z,
      x, X:x,
      v, V:v,
      a, A:a,
      b,
      c,
      d,
      e,
      f,
      g,
      j,
      J: j,
      h,s,l,m,n,o,p,
      i,
      k,
      "[": leftBrace,
      "]": rightBrace,
      "=": plus,
      "-": minus,
      q,
      r: r,
      t: t,
      u,
      y,
      w,
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
      "`": tide, "~": tide,
      // "''": doubleQuotation, "'": doubleQuotation,
      "rt-reset": rtReset,
      "lt-reset": ltReset,
      "": space,
    },
    isTyping: false,
    text: [],
    nextLetter: { i: 0, letter: "", image:{ rightHand: "", leftHand: ""  }},
    currentKey: { code: -1, i: 0, letter: ""},
    isCompleted: false,
    totalTimeConsume: 0,
    currentWord: 0,
    rawText: {
      Z: ``
    },
    isActiveCustomTextBox: false,
    customText: "",
    typedText: "",
    event: {
      keyCode: "",
      shiftKey: false
    },
    ok: false
  })
  
  let [val, setVal] = React.useState("");
  
  const params = useParams()
  
  function getKeyCode(letter, isPressedShift=false){
    if(letter) {
      if (isPressedShift) {
        return code.find(c => c.key === letter && isPressedShift === c.isPressedShift)
      } else {
        let space = letter.trim() === "".trim()
        if (space) {
          return code.find(c => c.key === "")
        } else {
          return code.find(c => c.key === letter)
        }
      }
    } else {
      return false
    }
  }
  
  // componentDidMount() {
  
  React.useEffect(()=>{
    if(params.id){
      let post = context.getLesson(Number(params.id))
      // onReadyChooseFirstLetter(post.text.split(""))
      setState({
        ...state,
        text: post.text.split("")
      })
    }
  }, [params.id])
  

  React.useEffect(()=>{

    // window.addEventListener("keydown", handler)
    // return ()=> window.removeEventListener("keydown", handler)
    
  }, [val, setVal])
  
  
  //   let lesson = this.context.getLesson(Number(this.props.params.id))
  //   this.setState({
  //     ...this.state,
  //     text: lesson.text.split("")
  //   })
  //
  //   // this.onReadyChooseFirstLetter("AA BB".split(""))
  //   this.onReadyChooseFirstLetter(lesson.text ? lesson.text.split("") : [] )
  //
  //   let keyAllowed = {};
  //   window.addEventListener("keydown", (e)=>{
  //     // e.preventDefault()
  //     // if (keyAllowed[e.which] === false) return;
  //     // keyAllowed[e.which] = false;
  //
  //     if(this.state.isTyping) {
  //
  //       this.isShiftKeyPressed = e.shiftKey
  //       if(e.keyCode !== 16) {
  //         this.eventKeyCode = e.keyCode
  //         // this.setState({
  //         //   ...this.state,
  //         //   event: {
  //         //     shiftKey: e.shiftKey,
  //         //     keyCode: e.keyCode,
  //         //   }
  //         // })
  //       }
  //     }
  //
  //     // if(this.state.isCompleted){
  //     //   if(e.keyCode === 13){
  //     //     this.restartTyping()
  //     //   }
  //     // }
  //
  //   })
  // }
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //
  //   let i = 0;
  //
  //   if(prevState.typedText !== this.val){
  //
  //     // if(prevState.event !== this.state.event){
  //     //   const isPressedShift = this.state.event.shiftKey
  //     //   let keyCode = this.getKeyCode(this.state.nextLetter.letter, isPressedShift)
  //     //
  //     //   if (this.state.event.keyCode === keyCode.code) {
  //     //
  //     //     let isFinished = (this.state.nextLetter.i + 1) === this.state.text.length
  //     //
  //     //     if (!isFinished) {
  //     //       // other letter keys...
  //     //       // increase paragraph index
  //     //       i++
  //     //       let nextWord = this.state.text.slice(1)[i - 1]
  //     //       console.log(this.state.typedText)
  //     //       console.log(nextWord)
  //     //       // if (nextWord) {
  //     //       //   this.setState(prevState => {
  //     //       //     let image = {...prevState.nextLetter.image}
  //     //       //     if (isLeft(nextWord)) {
  //     //       //       // change finger for left hand............
  //     //       //       image.rightHand = prevState.imgs['rt-reset']
  //     //       //       image.leftHand = prevState.imgs[nextWord]
  //     //       //
  //     //       //     } else {
  //     //       //       // change finger for right hand
  //     //       //       image.rightHand = prevState.imgs[nextWord]
  //     //       //       image.leftHand = prevState.imgs["lt-reset"]
  //     //       //     }
  //     //       //     return {
  //     //       //       nextLetter: {
  //     //       //         i: i,
  //     //       //         letter: nextWord,
  //     //       //         image: image
  //     //       //       },
  //     //       //       currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //     //       //     }
  //     //       //   })
  //     //       // }
  //     //       this.keypressSound(true)
  //     //
  //     //     } else {
  //     //       i = 0
  //     //       // this.setState(prevState => {
  //     //       //   return {
  //     //       //     nextLetter: {
  //     //       //       ...prevState.nextLetter,
  //     //       //       i: prevState.nextLetter.i + 1, /// so that make color last letter completed
  //     //       //       image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
  //     //       //     },
  //     //       //     isCompleted: true,
  //     //       //     isTyping: false,
  //     //       //     currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]},
  //     //       //     totalTimeConsume: Date.now() - this.startTime
  //     //       //   }
  //     //       // })
  //     //       this.keypressSound(true)
  //     //     }
  //     //
  //     //   } else {
  //     //     //  wrong keypress
  //     //     this.keypressSound(false)
  //     //
  //     //   }
  //     //
  //     // }
  //   }
  //
  //   if(this.state.nextLetter !== prevState.nextLetter) {
  //
  //     let keyCode = this.getKeyCode(this.state.typedText, this.isShiftKeyPressed)
  //
  //     if (keyCode && keyCode.key === this.state.typedText) {
  //       if (this.state.nextLetter.letter === this.state.typedText) {
  //         // press right key...
  //
  //         let isFinished = (this.state.nextLetter.i + 1) === this.state.text.length
  //         if (!isFinished) {
  //           // other letter keys...
  //           // increase paragraph index
  //
  //           i++
  //           let nextWord = this.state.text.slice(1)[i - 1]
  //           this.setState({
  //             ...this.state,
  //             nextLetter: {
  //               i: i,
  //               letter: nextWord,
  //               image: this.state.imgs[nextWord]
  //             },
  //           })
  //
  //           // if(this.state.nextLetter.i !== i){
  //           //   let nextWord = this.state.text.slice(1)[i - 1]
  //           //
  //           //   this.setState(updatedState => {
  //           //     let image = {...updatedState.nextLetter.image}
  //           //     if (isLeft(nextWord)) {
  //           //       // change finger for left hand............
  //           //       image.rightHand = updatedState.imgs['rt-reset']
  //           //       image.leftHand = updatedState.imgs[nextWord]
  //           //
  //           //     } else {
  //           //       // change finger for right hand
  //           //       image.rightHand = updatedState.imgs[nextWord]
  //           //       image.leftHand = updatedState.imgs["lt-reset"]
  //           //     }
  //           //     return {
  //           //       ...updatedState,
  //           //       nextLetter: {
  //           //         i: i,
  //           //         letter: nextWord,
  //           //         image: image
  //           //       },
  //           //       currentKey: {code: this.eventKeyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //           //     }
  //           //   })
  //           // }
  //
  //
  //           this.keypressSound(true)
  //
  //         }
  //
  //         // else {
  //         //     // press wrong key ...
  //         //
  //         //     this.keypressSound(false)
  //         //
  //         //
  //         //   }
  //
  //         //   // if (nextWord) {
  //         //   //   this.setState(prevState => {
  //         //   //     let image = {...prevState.nextLetter.image}
  //         //   //     if (isLeft(nextWord)) {
  //         //   //       // change finger for left hand............
  //         //   //       image.rightHand = prevState.imgs['rt-reset']
  //         //   //       image.leftHand = prevState.imgs[nextWord]
  //         //   //
  //         //   //     } else {
  //         //   //       // change finger for right hand
  //         //   //       image.rightHand = prevState.imgs[nextWord]
  //         //   //       image.leftHand = prevState.imgs["lt-reset"]
  //         //   //     }
  //         //   //     return {
  //         //   //       nextLetter: {
  //         //   //         i: i,
  //         //   //         letter: nextWord,
  //         //   //         image: image
  //         //   //       },
  //         //   //       currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //         //   //     }
  //         //   //   })
  //         //   // }
  //         //
  //         //
  //         // } else {
  //         //   // i = 0
  //         //   // this.setState(prevState => {
  //         //   //   return {
  //         //   //     nextLetter: {
  //         //   //       ...prevState.nextLetter,
  //         //   //       i: prevState.nextLetter.i + 1, /// so that make color last letter completed
  //         //   //       image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
  //         //   //     },
  //         //   //     isCompleted: true,
  //         //   //     isTyping: false,
  //         //   //     currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]},
  //         //   //     totalTimeConsume: Date.now() - this.startTime
  //         //   //   }
  //         //   // })
  //         //   // this.keypressSound(true)
  //         // }
  //
  //       } else {
  //         this.keypressSound(false)
  //       }
  //     } else {
  //       //  wrong keypress
  //       this.keypressSound(false)
  //     }
  //   }
  //
  //
  // }
  //
  // handleChange=(val)=>{
  //   this.setState({
  //     ...this.state,
  //     typedText: val
  //   })
  // }
  //
  
  function onReadyChooseFirstLetter(textArr){
    let updatedState = {...state}
    let firstLetter = textArr[0]
  
    if(firstLetter !== "") {
   
      let image = {...updatedState.nextLetter.image}
    
      if (isLeft(firstLetter)) {
        image.leftHand = updatedState.imgs[firstLetter]
        image.rightHand = updatedState.imgs["rt-reset"]
      } else {
        image.leftHand = updatedState.imgs["lt-reset"]
        image.rightHand = updatedState.imgs[firstLetter]
      }

      updatedState.nextLetter = {
        ...updatedState.nextLetter,
        letter: firstLetter,
        image: image
      }

    } else {
      let image = {...updatedState.nextLetter.image}
      image.leftHand = updatedState.imgs[firstLetter]
      image.leftHand = updatedState.imgs["lt-reset"]
      image.rightHand = updatedState.imgs[firstLetter]
  
      updatedState.nextLetter = {
        ...updatedState.nextLetter,
        letter: firstLetter,
        image: image
      }
    }

    return {
      nextLetter: updatedState.nextLetter,
    }
  
  }
  
  
  function keypressSound(isValid){
    let audio = document.createElement("audio")
    audio.style.opacity = 0
    audio.src = isValid ? keyPressSound : badPressSound
    document.body.appendChild(audio)
    audio.play().then((_)=>{
      setTimeout(()=>{
        document.body.removeChild(audio)
      }, 200)
    })
  }

  function renderParaText(){
    const { nextLetter, text, isTyping} = state
  
    return (
      <div onClick={handleStartTyping} className={["para-text-box", isTyping ? "active-border":""].join(" ")}>
        <p>{text && text.map((t, index)=> {
          if(nextLetter.i === index){
            return <div className={["letter", isTyping ? "active-letter" : ""].join(" ")}>
              <span> <span>{t === " " ? '\u00A0' : t}</span></span>
              <span style={{position: "absolute"}} className="cursor"/>
            </div>
          } else if(nextLetter.i > index){
            return (
              <span className="letter passed-letter-parent">
              <div className="passed-letter"><span> <span>{t === " " ? '\u00A0' : t}</span></span></div>
            </span>
            )
          } else{
            return <span className="letter"><div>{t === " " ? '\u00A0' : t}</div></span>
          }
        })
        }</p>
      </div>
    )
  }
  
  
  function handleKeyPress(e){

    
    if(state.isTyping) {
  
      let keyCode = getKeyCode(state.nextLetter.letter, e.shiftKey)
  
      // console.log(keyCode, e.keyCode, e.shiftKey)
      
      if (keyCode && (e.keyCode === keyCode.code)) {
  
        if (state.nextLetter.letter === e.key) {
  
          let isFinished = (state.nextLetter.i + 1) === state.text.length
          if (!isFinished) {
            // other letter keys...
            // increase paragraph index
            
            ii++
            let nextWord = state.text.slice(1)[ii - 1]
    
            if (nextWord) {
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
                nextLetter: {
                  i: ii,
                  letter: nextWord,
                  image: image
                },
                currentKey: {code: e.keyCode, i: ii - 1, letter: updatedState.text.slice(1)[ii - 1]}
              })
              keypressSound(true)
      
            } else {
              // i = 0
              // this.setState(prevState => {
              //   return {
              //     nextLetter: {
              //       ...prevState.nextLetter,
              //       i: prevState.nextLetter.i + 1, /// so that make color last letter completed
              //       image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
              //     },
              //     isCompleted: true,
              //     isTyping: false,
              //     currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]},
              //     totalTimeConsume: Date.now() - this.startTime
              //   }
              // })
              // keypressSound(true)
            }
    
          } else {
            // finished
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
              totalTimeConsume: Date.now() - startTime,
              nextLetter: {
                i: ii,
                letter: nextWord,
                image: image
              },
              currentKey: {code: e.keyCode, i: ii - 1, letter: updatedState.text.slice(1)[ii - 1]}
            })
            keypressSound(true)
  
            // return {
            //    nextLetter: {
            //      ...prevState.nextLetter,
            //      i: prevState.nextLetter.i + 1, /// so that make color last letter completed
            //      image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
            //    },
            //    isCompleted: true,
            //    isTyping: false,
            //    currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]},
            //    totalTimeConsume: Date.now() - this.startTime
            // }
  
          }
          
        } else {
          // wrong key press
          keypressSound(false)
        }
        
      } else {
        if(!e.shiftKey) {
          keypressSound(false)
        }
      }
    }
    
  }
  
  function handleChange(e){
    let val = textInput.current?.value
    vals = val
    setVal(val)
  }
  
  
  function handleStartTyping(e){
    let post = context.getLesson(Number(params.id))
    let updatedState = onReadyChooseFirstLetter(post.text.split("")[0])
    
    startTime = Date.now()
    setState({...state, ...updatedState, isTyping: true})
    textInput.current?.focus()
  }

  function makeTextToTyingWord(){
    let letterArr =  state.customText.split("")
    setState({
      ...state,
      isActiveCustomTextBox: false,
      text: letterArr,
      isTyping: false,
    })
    // onReadyChooseFirstLetter(letterArr)
  }
  
 
  // restartTyping=()=>{
  //   let letterArr =  this.state.text
  //   this.setState({
  //     ...this.state,
  //     isTyping: true,
  //     nextLetter: { i: 0, letter: letterArr[0], image:{ rightHand: "", leftHand: ""  }},
  //     currentKey: { code: -1, i: 0, letter: ""},
  //     isCompleted: false,
  //     totalTimeConsume: 0,
  //     currentWord: 0,
  //     rawText: {
  //       Z: ``
  //     },
  //     isActiveCustomTextBox: false,
  //   })
  //   // this.setState({
  //   //   isTyping: true,
  //   //   isCompleted: false,
  //   //   isActiveCustomTextBox: false,
  //   //   text: letterArr,
  //   //   nextLetter: { i: 0, letter: this.state.text[0], image:{ rightHand: "", leftHand: ""  }},
  //   //   currentKey: { code: -1, i: 0, letter: ""},
  //   // })
  //   // this.onReadyChooseFirstLetter(letterArr)
  //   // this.startTime = Date.now()
  // }
  //
  //
  // render() {
  //   console.log(this.state)
  //   let wpm = 0
  //   let min = ( (Date.now() - this.startTime ) / 1000  )
  //   if(min !== 0) {
  //     let word = 0;
  //     this.state.text.forEach(l => {
  //       if (l === " ") {
  //         word++
  //       }
  //     })
  //     wpm = Math.round(((word + 1) / min) * 60) || 0
  //   }
  //
  //   return (
  //     <div className="">
  //       <div className="">
  //         <h1 className="big-title text-4xl font-bold text-center mt-8 text-red-500">Learn Typing </h1>
  //       </div>
  //
  //
  //
  //       <button className="bg-pink-500 text-white px-2 my-0.5 py-1 rounded-sm">
  //         <Link className="text-sm font-medium" to={`/`}>Go Home</Link>
  //       </button>
  //
  //       <Input onChange={this.handleChange} ref={this.textInput} />
  //
  //       <div className="">
  //         { this.state.isActiveCustomTextBox
  //           ? this.renderCustomTextBox()
  //           : this.renderParaText()
  //         }
  //
  //         { this.state.isActiveCustomTextBox ? (
  //           <div className="row justify-end">
  //             <button onClick={this.makeTextToTyingWord} className="btn ml-0">Use This Word</button>
  //             <button className="btn ml-1">Cancel</button>
  //           </div>
  //         ) : (
  //           <button onClick={()=>this.setState({isActiveCustomTextBox: true})} className="btn">Custom Word</button>
  //         ) }
  //       </div>
  //
  //       <div className="row">
  //         <div className={["modal", this.state.isCompleted ? "show-modal  p-2" : ""].join(" ")}>
  //           <div>
  //             <h3 className="modal-title">Accuracy 70%</h3>
  //             <h3 className="modal-title">Typing Speed {wpm}WPM</h3>
  //             <div className="row justify-space-between p-2">
  //               <button onClick={this.makeTextToTyingWord} className="btn">Previews Level</button>
  //               <button onClick={this.restartTyping} className="btn">Restart</button>
  //               <button onClick={this.makeTextToTyingWord} className="btn">Next Level</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //
  //
  //       {!this.state.isCompleted && <Keyboard
  //         text={this.state.text}
  //         getKeyCode={this.getKeyCode}
  //         keys={this.state.keys}
  //         currentKey={this.state.currentKey}
  //         nextLetter={this.state.nextLetter}
  //       />}
  //
  //     </div>
  //   );
  // };
  
  
  return (
    <div>
      <div className="">
        <div className="">
          <h1 className="big-title text-4xl font-bold text-center mt-8 text-red-500">Learn Typing </h1>
        </div>
        <button className="bg-pink-500 text-white px-2 my-0.5 py-1 rounded-sm">
          <Link className="text-sm font-medium" to={`/`}>Go Home</Link>
        </button>
        <input
          className="input-typing"
          hidden={false}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          ref={textInput}
          value={state.typedText}
        />
        <div className="">
          { renderParaText() }
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

export default TypingPage;




