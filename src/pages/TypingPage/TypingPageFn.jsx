import React, {lazy} from 'react';
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
import enter from "../../asserts/hands/number_row/enter.png"



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
import RenderTextBox from "../../components/RenderTextBox/RenderTextBox";

const code = [
  { code: 9, key: "tab"},
  { code: 13, key: '\n'}, // enter key press
  { code: 13, key: '⏎'},
  { code: 16, key: "shift"},
  { code: 32, key: ''}, // space key code
  { code: 48, key: "0"}, { code: 48, key: ")", isPressedShift: true },
  { code: 49, key: "1"}, { code: 49, key: "!", isPressedShift: true },
  { code: 50, key: '2'}, { code: 50, key: "@", isPressedShift: true },
  { code: 51, key: "3"}, { code: 51, key: "#", isPressedShift: true },
  { code: 52, key: "4"}, { code: 52, key: "$", isPressedShift: true },
  { code: 53, key: "5"}, { code: 57, key: "(", isPressedShift: true },
  { code: 54, key: "6"}, { code: 54, key: "^", isPressedShift: true },
  { code: 55, key: "7"}, { code: 55, key: "&", isPressedShift: true },
  { code: 56, key: "8"}, { code: 56, key: "*", isPressedShift: true },
  { code: 57, key: "9"}, { code: 57, key: "(", isPressedShift: true },
  
  {code: 65, key: "a"}, { code: 65, key: "A", isPressedShift: true},
  {code: 66, key: "b"}, { code: 66, key: "B", isPressedShift: true},
  {code: 67, key: "c"}, { code: 67, key: "C", isPressedShift: true},
  {code: 68, key: "d"}, { code: 68, key: "D", isPressedShift: true},
  {code: 69, key: "e"}, { code: 69, key: "E", isPressedShift: true},
  {code: 70, key: "f"}, { code: 70, key: "F", isPressedShift: true},
  {code: 71, key: "g"}, { code: 71, key: "G", isPressedShift: true},
  {code: 72, key: "h"}, { code: 72, key: "H", isPressedShift: true},
  {code: 73, key: "i"}, { code: 73, key: "I", isPressedShift: true},
  {code: 74, key: "j"}, { code: 74, key: "J", isPressedShift: true},
  {code: 75, key: "k"}, { code: 75, key: "K", isPressedShift: true},
  {code: 76, key: "l"}, { code: 76, key: "L", isPressedShift: true},
  {code: 77, key: "m"}, { code: 77, key: "M", isPressedShift: true},
  {code: 78, key: "n"}, { code: 78, key: "N", isPressedShift: true},
  {code: 79, key: "o"}, { code: 79, key: "O", isPressedShift: true},
  {code: 80, key: "p"}, { code: 80, key: "P", isPressedShift: true},
  {code: 81, key: "q"}, { code: 81, key: "Q", isPressedShift: true},
  {code: 82, key: "r"}, { code: 82, key: "R", isPressedShift: true},
  {code: 83, key: "s"}, { code: 83, key: "S", isPressedShift: true},
  {code: 84, key: "t"}, { code: 84, key: "T", isPressedShift: true},
  {code: 85, key: "u"}, { code: 85, key: "U", isPressedShift: true},
  {code: 86, key: "v"}, { code: 86, key: "V", isPressedShift: true},
  {code: 87, key: "w"}, { code: 87, key: "W", isPressedShift: true},
  {code: 88, key: "x"}, { code: 88, key: "X", isPressedShift: true},
  {code: 89, key: "y"}, { code: 89, key: "Y", isPressedShift: true},
  {code: 90, key: "z"}, { code: 90, key: "Z", isPressedShift: true},
  
  { code: 222, key: "'"}, { code: 222, key: `"`, isPressedShift: true},
  { code: 186, key: ";"}, { code: 186, key: ":", isPressedShift: true},
  { code: 188, key: ","}, { code: 188, key: "<", isPressedShift: true},
  { code: 190, key: "."}, { code: 190, key: ">", isPressedShift: true},
  { code: 191, key: "/"}, { code: 191, key: "?", isPressedShift: true},
  
  { code: 219, key: "["}, { code: 219, key: "{", isPressedShift: true},
  { code: 221, key: "]"}, { code: 221, key: "}", isPressedShift: true},
  {code: 187, key: "="}, { code: 187, key: "+", isPressedShift: true},
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

  let eventKeyCode = 0

let ii = 0

const TypingPage = (props)=> {

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
        [{key: "Backspace", code:  getKeyCode("backspace")}],
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
        
        // [{key: "{", down: "[", code: 189}],
        // [{key: "}", down: "]", code: 187}],
  
        [{key: "{", code: getKeyCode(189)}, { key: "[", code: getKeyCode(189)}],
        [{key: "}", code: getKeyCode(187)}, { key: "]", code: getKeyCode(187)}],
        
        [{key: "|", down: "\\", code: 220}],
      ],
      homeRow: [
        [{key: "Caps Lock", code: 20}],
        [{key: "A", code: getKeyCode("A")}],
        [{key: "S", code: 83 }],
        [{key: "D", code: 68}],
        [{key: "F", code: 70}],
        [{key: "G", code: 71}],
        [{key: "H", code: 72}],
        [{key: "J", code: getKeyCode("J")}],
        [{key: "K", code: 75}],
        [{key: "L", code: 76}],
        [{key: ":", code: getKeyCode(":") }, {key: ";", code: getKeyCode(";") }],
        [{key: '"', code: getKeyCode(`"`)}, {key:"'", code: ""}],
        [{key: '⏎', code: getKeyCode('⏎')}],
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
        [{key: "?", code: getKeyCode("?")}, {key: "/", code: getKeyCode("/") }],
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
      "[": leftBrace,
      "]": rightBrace,
      "=": plus,
      "-": minus,
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
      "`": tide, "~": tide,
      // "''": doubleQuotation, "'": doubleQuotation,
      "rt-reset": rtReset,
      "lt-reset": ltReset,
      " ": space,
      "\n": enter
    },
    isTyping: false,
    text: [],
    title: "",
    wrongPress: 0,
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
  const [wrongPress, setWrongPress] = React.useState(0)
  
  const params = useParams()
  
  function getKeyCode(letter, isPressedShift=false){

    if(letter) {
      if (isPressedShift) {
        return code.find(c => c.key === letter && isPressedShift === c.isPressedShift)
        
      } else if(letter === "\n"){
        return code.find(c => c.key === letter)
      } else {
        let space = letter === " "
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
  
  React.useEffect(()=>{
    if(params.id){
      // let post = context.getLesson(Number(params.id))
      // onReadyChooseFirstLetter(post.text.split(""))
      // setState({
      //   ...state,
      //   title: post.title,
      //   text: post.text.split("")
      // })
      onReadyChooseFirstLetter()
    }
  }, [params.id])
  
  React.useEffect(()=>{
    if(state.isCompleted) {
      window.addEventListener("keydown", handleWindowKeyPress)
    }
    return ()=> window.removeEventListener("keydown", handleWindowKeyPress)
  }, [state.isCompleted])
  
  function handleWindowKeyPress(e){
    if(state.isCompleted &&  e.keyCode === 13){
      setTimeout(()=>{
        onReadyChooseFirstLetter(true)
      }, 0)
    }
  }
  
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
  
  function onReadyChooseFirstLetter(isEnterPressed){
  
    let post = context.getLesson(Number(params.id))

    let updatedState = {...state}
    let firstLetter = post.text.split("")[0]
    updatedState.nextLetter.i = 0
    updatedState.nextLetter.letter = firstLetter
  
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
        image: image
      }

    } else {
      let image = {...updatedState.nextLetter.image}
      image.leftHand = updatedState.imgs[firstLetter]
      image.leftHand = updatedState.imgs["lt-reset"]
      image.rightHand = updatedState.imgs[firstLetter]
  
      updatedState.nextLetter = {
        ...updatedState.nextLetter,
        image: image
      }
    }
  
  
    startTime = Date.now()

    updatedState.text = post.text.split("")
    updatedState.type = post.type ? post.type : "char"
    updatedState.title = post.title
    if(isEnterPressed){
      updatedState.isTyping =  true
      textInput?.current?.focus()
    }
    updatedState.currentKey = { code: -1, i: 0, letter: ""}
    updatedState.isCompleted = false
    updatedState.totalTimeConsume = 0
    updatedState.currentWord = 0
    setState(updatedState)
    setWrongPress(0)
  }
  
  
  function keypressSound(isValid){
    let audio = document.createElement("audio")
    audio.style.opacity = 0
    audio.src = isValid ? keyPressSound : badPressSound
    document.body.appendChild(audio)
    if(!isValid) {
      setWrongPress(wrongPress + 1)
    }
    audio.play().then((_)=>{
      setTimeout(()=>{
        document.body.removeChild(audio)
      }, 200)
    })
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
      
          updatedState.nextLetter = {
            i: ii,
            letter: nextWord,
            image: image
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
        // finished
        // ii++
        // let nextWord = state.text.slice(1)[ii - 1]
        // let updatedState = {...state}
        // let image = {...updatedState.nextLetter.image}
        // if (isLeft(nextWord)) {
        //   // change finger for left hand............
        //   image.rightHand = updatedState.imgs['rt-reset']
        //   image.leftHand = updatedState.imgs[nextWord]
        //
        // } else {
        //   // change finger for right hand
        //   image.rightHand = updatedState.imgs[nextWord]
        //   image.leftHand = updatedState.imgs["lt-reset"]
        // }
        // setState({
        //   ...updatedState,
        //   isCompleted: true,
        //   isTyping: false,
        //   totalTimeConsume: Date.now() - startTime,
        //   nextLetter: {
        //     i: ii,
        //     letter: nextWord,
        //     image: image
        //   },
        //   currentKey: {code: e.keyCode, i: ii - 1, letter: updatedState.text.slice(1)[ii - 1]}
        // })
        //
        // ii = 0
        // // startTime = ""
        //
        // keypressSound(true)
    
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
      let isFinished = (state.nextLetter.i + 1) === state.text.length
      if (!isFinished) {
        ii++
        let nextWord = state.text[ii]
  
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
    
          updatedState.nextLetter = {
            i: ii,
            letter: nextWord,
            image: image
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
    let val = textInput.current?.value
    vals = val
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

    // let totalWord = 20
    // let wpm = (60 * 60)s ? 20
    //
    // let wpm = 0
    // let sec = (Date.now() - startTime) / 1000
    //
    // let totalLetter = state.text.length || 1
    // wpm = (totalLetter / (sec / 60) || 0 )
    //
    // // if(min !== 0) {
    // //   let word = 0;
    // //   state.text.forEach(l => {
    // //     if (l === " ") {
    // //       word++
    // //     }
    // //   })
    // //
    // //   wpm = Math.round(((word + 1) / min) * 60) || 0
    // // }
    // return wpm
    //
  
    let charPS = 0
    let sec = (Date.now() - startTime) / 1000
  
    let totalLetter = state.text.length || 1
    charPS = (totalLetter / (sec) || 0 )
  
    // if(min !== 0) {
    //   let word = 0;
    //   state.text.forEach(l => {
    //     if (l === " ") {
    //       word++
    //     }
    //   })
    //
    //   wpm = Math.round(((word + 1) / min) * 60) || 0
    // }
    
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
  
  return (
    <div>
      <div className="">
        <div className="">
          <h1 className="big-title text-4xl font-bold text-center mt-8 text-red-500">Learn Typing </h1>
        </div>
        <button className="bg-pink-500 text-white px-2 my-0.5 py-1 rounded-sm">
          <Link className="text-sm font-medium" to={`/`}>Go Home</Link>
        </button>
        
        <div className="flex mt-3">
          <h2 className="text-xl font-medium mr-2 text-gray-50">Lesson </h2>
          <h1 className="text-xl font-medium text-gray-50">
            { params.id } :
            <span className="text-xl font-medium ml-4 text-pink-500 font-bold">{state.title}</span>
          </h1>
          
        </div>
  
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
                  <Link to={`/typing/${Number(params.id) + 1}`}>Next Level</Link>
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
    }
  }
  
  function handleCountDown(){
    if(isTyping) {
      calculateCountDown()
    }
  }

  
  return (
    <div>
      {  <h1 className="text-2xl text-center">Start on: {second} Second</h1> }
    </div>
  )
}


export default TypingPage;




