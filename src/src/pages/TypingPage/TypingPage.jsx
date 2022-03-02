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
  { code: 65, key: "A"},
  { code: 66, key: "B"},
  { code: 67, key: "C"},
  { code: 68, key: "D"},
  { code: 69, key: "E"},
  { code: 70, key: "F"},
  { code: 71, key: "G"},
  { code: 72, key: "H"},
  { code: 73, key: "I"},
  { code: 74, key: "J"},
  { code: 75, key: "K"},
  { code: 76, key: "L"},
  { code: 77, key: "M"},
  { code: 78, key: "N"},
  { code: 79, key: "O"},
  { code: 80, key: "P"},
  { code: 81, key: "Q"},
  { code: 82, key: "R"},
  { code: 83, key: "S"},
  { code: 84, key: "T"},
  { code: 85, key: "U"},
  { code: 86, key: "V"},
  { code: 87, key: "W"},
  { code: 88, key: "X"},
  { code: 89, key: "Y"},
  { code: 90, key: "Z"},
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
    "A", "S", "T", "D", "F", "G",
    "Z", "X", "C", "V", "B",
  ]
  return left.indexOf(word.toUpperCase()) !== -1
}

class TypingPage extends React.Component {
  static startTime = null
  state = {
    keys : {
      numberRow: [
        [{key: "~", code: this.getKeyCode("~")}, { key: "`", code: 222}],
        [{key: "!", code: this.getKeyCode("!")}, { key: "1", code: this.getKeyCode("1") }],
        [{key: "@", code: this.getKeyCode("@")}, { key: "2", code: this.getKeyCode("2")}],
        [{key: "#", code: this.getKeyCode("#")}, { key: "3", code: this.getKeyCode("3")}],
        [{key: "$", code: this.getKeyCode("$")}, { key: "4", code: this.getKeyCode("4")}],
        [{key: "%", code: this.getKeyCode("%")}, { key: "5", code: this.getKeyCode("5")}],
        [{key: "^", code: this.getKeyCode("^")}, { key: "6", code: this.getKeyCode("6")}],
        [{key: "&", code: this.getKeyCode("&")}, { key: "7", code: this.getKeyCode("7")}],
        [{key: "*", code: this.getKeyCode("*")}, { key: "8", code: this.getKeyCode("8")}],
        [{key: "(", code: this.getKeyCode("(")}, { key: "9", code: this.getKeyCode("9")}],
        [{key: ")", code: this.getKeyCode(")")}, { key: "0", code: this.getKeyCode("0")}],
        [{key: "_", code: this.getKeyCode("_")}, { key: "-", code: this.getKeyCode("-")}],
        [{key: "+", code: this.getKeyCode("+")}, { key: "=", code: this.getKeyCode("=")}],
        [{key: "", code:  this.getKeyCode("")}],
      ],
      // topRow: [
      //   [{key: "Tab", down: "", code: 9}],
      //   [{key: "Q", code: code["Q"]}],
      //   [{key: "W", code: code["W"] }],
      //   [{key: "E", code: code["E"]}],
      //   [{key: "R", code: code["R"]}],
      //   [{key: "T", code: code["T"]}],
      //   [{key: "Y", code: code["Y"]}],
      //   [{key: "U", code: code["U"]}],
      //   [{key: "I", code: code["I"]}],
      //   [{key: "O", code: code["O"]}],
      //   [{key: "P", code: code["P"]}],
      //   [{key: "{", down: "[", code: 189}],
      //   [{key: "}", down: "]", code: 187}],
      //   [{key: "|", down: "\\", code: 220}],
      // ],
      // homeRow: [
      //   [{key: "Caps Lock", code: 20}],
      //   [{key: "A", code: 65}],
      //   [{key: "S", code: 83 }],
      //   [{key: "D", code: 68}],
      //   [{key: "F", code: 70}],
      //   [{key: "G", code: 71}],
      //   [{key: "H", code: 72}],
      //   [{key: "J", code: 74}],
      //   [{key: "K", code: 75}],
      //   [{key: "L", code: 76}],
      //   [{key: ":", code: 186 }, {key: ";", code: 186 }],
      //   [{key: '"', code: 189}, {key:"'", code: ""}],
      //   [{key: "Enter", code: 13}],
      // ],
      // bottomRow: [
      //   [{key: "Shift", code: 16}],
      //   [{key: "Z", code: 90}],
      //   [{key: "X", code: 88 }],
      //   [{key: "C", code: 67}],
      //   [{key: "V", code: 86}],
      //   [{key: "B", code: 66}],
      //   [{key: "N", code: 78}],
      //   [{key: "M", code: 77}],
      //   [{key: "<", code: 188}, {key: ",", code: 188}],
      //   [{key: ">", code: 188}, {key: ".", code: 190}],
      //   [{key: "?", code: 188}, {key: "/", code: 191 }],
      //   [{key: 'Shift', code: 16}]
      // ],
      // controlRow: [
      //   [{key: "Ctrl", code: 17}],
      //   [{key: "Win", code: 18}],
      //   [{key: "Alt", code: 83 }],
      //   [{key: "Spacebar", code: 32}],
      //   [{key: "Alt", code: 83 }],
      //   [{key: "Win", code: 18}],
      //   [{key: "Ctrl", code: 17}],
      // ]
      
    },
    imgs: {
      z,x,v,a,b,c,d,e,f,g,j,h,s,l,m,n,o,p,
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
    // text: "add all alley aft agh ask art app arty arr aught".split(""),
    // text: "u v w x y z".split(" "),
    text: "2 1 2 3".split(" "),
    // text: "0 1 2 3 4 5 6 7 8 9".split(" "),
    // text: ["t", "o", "r", " ", "f", "a", "l", "l" ],
    // text: ["z", "i", "g", "z", "a", "g", " ",
    //   "z", "e", "b", "r", "a",
    //   " ", "z", "e", "r", "o", " ",
    //   "z", "i", "p", "p", "e", "r",
    //       " ",
    //   "z", "i", "n", "n", "i", "a", " ",
    //   "z", "o", "o", " ",
    //   "z", "i", "t", "h", "e", " ", "z", "a", "n", " ",
    //   "z", "a", "l", "a",
    // "z", "a", "l", "a", "d", " ", "z", "a", "j", "a", " ", "r", "z", "a", "d", "d", "y", " ", "z", "a", "m", "o", "n", "o", " ",
    //  "z", "a", "k", "k", " ", "z", "a", "h", " ", "z", "o", "m", "o", " ", "z", "a", "n", "b", "y", " ", "z", "a", "b", "b", "a"],
    //
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
  }
  
  getKeyCode(letter, isPressedShift=false){
    if(isPressedShift) {
      return code.find(c => c.key === letter && isPressedShift === c.isPressedShift)
    } else{
      return code.find(c => c.key === letter)
    }
  }
  
  componentDidMount() {
    this.onReadyChooseFirstLetter(this.state.text)
    let i = 0;
    
    var keyAllowed = {};
    window.addEventListener("keydown", (e)=>{
      e.preventDefault()
      // if (keyAllowed[e.which] === false) return;
      // keyAllowed[e.which] = false;
  
      if(this.state.isTyping) {
  
        const isPressedShift = !!e.shiftKey
        let keyCode = this.getKeyCode(this.state.nextLetter.letter, isPressedShift)
  
        if (e.keyCode === keyCode.code) {
    
          let isFinished = (this.state.nextLetter.i + 1) === this.state.text.length
    
          if (this.state.nextLetter.letter === " ") {
      
          } else {
            let isFinished = (this.state.nextLetter.i + 1) === this.state.text.length
      
            if (!isFinished) {
              // other letter keys...
              // increase paragraph index
              i++
              let nextWord = this.state.text.slice(1)[i - 1]
              if (nextWord) {
                this.setState(prevState => {
                  let image = {...prevState.nextLetter.image}
                  if (isLeft(nextWord.toLowerCase())) {
                    // change finger for left hand............
                    image.rightHand = prevState.imgs['rt-reset']
                    image.leftHand = prevState.imgs[nextWord.toLowerCase()]
              
                  } else {
                    // change finger for right hand
                    image.rightHand = prevState.imgs[nextWord.toLowerCase()]
                    image.leftHand = prevState.imgs["lt-reset"]
                  }
                  return {
                    nextLetter: {
                      i: i,
                      letter: nextWord.toLowerCase(),
                      image: image
                    },
                    currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
                  }
                })
              }
              this.keypressSound(true)
        
            } else {
              i = 0
              this.setState(prevState => {
                return {
                  nextLetter: {
                    ...prevState.nextLetter,
                    i: prevState.nextLetter.i + 1, /// so that make color last letter completed
                    image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
                  },
                  isCompleted: true,
                  isTyping: false,
                  currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]},
                  totalTimeConsume: Date.now() - this.startTime
                }
              })
              this.keypressSound(true)
            }
          }
        } else {
          //  wrong keypress
          this.keypressSound(false)
    
        }
      }
  
      if(this.state.isCompleted){
        if(e.keyCode === 13){
          this.restartTyping()
        }
      }
      
    })
  
    // document.addEventListener("keyup", (e)=>{
    //   keyAllowed [e.which] = true;
    //   keyAllowed = {};
    // })
    //
  }
  
  onReadyChooseFirstLetter=(textArr)=>{
    
    this.setState((prevState)=>{
      let firstLetter = textArr[0]
      
      if(firstLetter !== "") {
        let image = {...prevState.nextLetter.image}
      
        if (isLeft(firstLetter)) {
          image.leftHand = prevState.imgs[firstLetter.toLowerCase()]
          image.rightHand = prevState.imgs["rt-reset"]
        } else {
          image.leftHand = prevState.imgs["lt-reset"]
          image.rightHand = prevState.imgs[firstLetter.toLowerCase()]
        }
  
        return {
          nextLetter: {
            ...prevState.nextLetter,
            letter: firstLetter.toLowerCase(),
            image: image
          },
          // currentKey: { code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
        }
        
      } else {
        let image = {...prevState.nextLetter.image}
        image.leftHand = prevState.imgs[firstLetter]
        image.leftHand = prevState.imgs["lt-reset"]
        image.rightHand = prevState.imgs[firstLetter.toLowerCase()]
        
        return {
          nextLetter: {
            ...prevState.nextLetter,
            letter: firstLetter.toLowerCase(),
            image: image
          },
          // currentKey: { code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
        }
      }
    })
  }
  
  
  
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //
  //   let i = 0
  //
  //   var keyAllowed = {};
  //
  //   if(this.state.isTyping !== prevState.isTyping ){
  //     document.addEventListener("keydown", (e)=>{
  //
  //       e.preventDefault()
  //       if (keyAllowed[e.which] === false) return;
  //       keyAllowed[e.which] = false;
  //       // code to be executed goes here
  //
  //
  //       const isPressedShift = !!e.shiftKey
  //       let keyCode = this.getKeyCode(this.state.nextLetter.letter, isPressedShift)
  //
  //       if(e.keyCode === keyCode.code){
  //         if (this.state.nextLetter.letter === " ") {
  //           i++
  //           let nextWord = this.state.text.slice(1)[i - 1]
  //           if(nextWord){
  //             this.setState(prevState => {
  //               let image = {...prevState.nextLetter.image}
  //               if (isLeft(nextWord.toLowerCase())) {
  //                 // change finger for left hand............
  //                 image.rightHand = prevState.imgs['rt-reset']
  //                 image.leftHand = prevState.imgs[nextWord.toLowerCase()]
  //
  //               } else {
  //                 // change finger for right hand
  //                 image.rightHand = prevState.imgs[nextWord.toLowerCase()]
  //                 image.leftHand = prevState.imgs["lt-reset"]
  //               }
  //               return {
  //                 nextLetter: {
  //                   i: i,
  //                   letter: nextWord.toLowerCase(),
  //                   image: image
  //                 },
  //                 currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //               }
  //             })
  //           }
  //           this.keypressSound(true)
  //
  //         } else {
  //           let isFinished = (this.state.nextLetter.i + 1) === this.state.text.length
  //           if(!isFinished){
  //             // other letter keys...
  //             // increase paragraph index
  //             i++
  //             let nextWord = this.state.text.slice(1)[i - 1]
  //             if(nextWord){
  //               this.setState(prevState => {
  //                 let image = {...prevState.nextLetter.image}
  //                 if (isLeft(nextWord.toLowerCase())) {
  //                   // change finger for left hand............
  //                   image.rightHand = prevState.imgs['rt-reset']
  //                   image.leftHand = prevState.imgs[nextWord.toLowerCase()]
  //
  //                 } else {
  //                   // change finger for right hand
  //                   image.rightHand = prevState.imgs[nextWord.toLowerCase()]
  //                   image.leftHand = prevState.imgs["lt-reset"]
  //                 }
  //                 return {
  //                   nextLetter: {
  //                     i: i,
  //                     letter: nextWord.toLowerCase(),
  //                     image: image
  //                   },
  //                   currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //                 }
  //               })
  //             }
  //             this.keypressSound(true)
  //
  //           } else {
  //             this.setState(prevState => {
  //               return {
  //                 nextLetter: {
  //                   ...prevState.nextLetter,
  //                   i: prevState.nextLetter.i + 1, /// so that make color last letter completed
  //                   image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
  //                 },
  //                 isCompleted: true,
  //                 isTyping: false,
  //                 currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]},
  //                 totalTimeConsume: Date.now() - this.startTime
  //               }
  //             })
  //           }
  //         }
  //       } else {
  //         //  wrong keypress
  //         this.keypressSound(false)
  //
  //       }
  //
  //
  //
  //     })
  //
  //
  //     document.addEventListener("keyup", (e)=>{
  //       keyAllowed [e.which] = true;
  //       keyAllowed = {};
  //     })
  //
  //
  //   }
  //
  // }
  
  // typingProgress=(e)=>{
  //   let i = 0
  //
  //   const isPressedShift = !!e.shiftKey
  //   let keyCode = this.getKeyCode(this.state.nextLetter.letter, isPressedShift)
  //
  //   if(e.keyCode === keyCode.code){
  //     if (this.state.nextLetter.letter === " ") {
  //       i++
  //       let nextWord = this.state.text.slice(1)[i - 1]
  //       if(nextWord){
  //         this.setState(prevState => {
  //           let image = {...prevState.nextLetter.image}
  //           if (isLeft(nextWord.toLowerCase())) {
  //             // change finger for left hand............
  //             image.rightHand = prevState.imgs['rt-reset']
  //             image.leftHand = prevState.imgs[nextWord.toLowerCase()]
  //
  //           } else {
  //             // change finger for right hand
  //             image.rightHand = prevState.imgs[nextWord.toLowerCase()]
  //             image.leftHand = prevState.imgs["lt-reset"]
  //           }
  //           return {
  //             nextLetter: {
  //               i: i,
  //               letter: nextWord.toLowerCase(),
  //               image: image
  //             },
  //             currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //           }
  //         })
  //       }
  //       this.keypressSound(true)
  //
  //     } else {
  //       let isFinished = (this.state.nextLetter.i + 1) === this.state.text.length
  //       if(!isFinished){
  //         // other letter keys...
  //         // increase paragraph index
  //         i++
  //         let nextWord = this.state.text.slice(1)[i - 1]
  //         if(nextWord){
  //           this.setState(prevState => {
  //             let image = {...prevState.nextLetter.image}
  //             if (isLeft(nextWord.toLowerCase())) {
  //               // change finger for left hand............
  //               image.rightHand = prevState.imgs['rt-reset']
  //               image.leftHand = prevState.imgs[nextWord.toLowerCase()]
  //
  //             } else {
  //               // change finger for right hand
  //               image.rightHand = prevState.imgs[nextWord.toLowerCase()]
  //               image.leftHand = prevState.imgs["lt-reset"]
  //             }
  //             return {
  //               nextLetter: {
  //                 i: i,
  //                 letter: nextWord.toLowerCase(),
  //                 image: image
  //               },
  //               currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //             }
  //           })
  //         }
  //         this.keypressSound(true)
  //
  //       } else {
  //         this.setState(prevState => {
  //           return {
  //             nextLetter: {
  //               ...prevState.nextLetter,
  //               i: prevState.nextLetter.i + 1, /// so that make color last letter completed
  //               image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
  //             },
  //             isCompleted: true,
  //             isTyping: false,
  //             currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]},
  //             totalTimeConsume: Date.now() - this.startTime
  //           }
  //         })
  //       }
  //     }
  //   } else {
  //     //  wrong keypress
  //     this.keypressSound(false)
  //
  //   }
  //
  //
  //   // if(letter) {
  //   //   if(letter === "Spacebar"){
  //   //     if (this.state.nextLetter.letter === " ") {
  //   //
  //   //       // increase paragraph index
  //   //       i++
  //   //       let nextWord = this.state.text.slice(1)[i - 1]
  //   //       if(nextWord){
  //   //         this.setState(prevState => {
  //   //           let image = {...prevState.nextLetter.image}
  //   //           if (isLeft(nextWord.toLowerCase())) {
  //   //             // change finger for left hand............
  //   //             image.rightHand = prevState.imgs['rt-reset']
  //   //             image.leftHand = prevState.imgs[nextWord.toLowerCase()]
  //   //
  //   //           } else {
  //   //             // change finger for right hand
  //   //             image.rightHand = prevState.imgs[nextWord.toLowerCase()]
  //   //             image.leftHand = prevState.imgs["lt-reset"]
  //   //           }
  //   //           return {
  //   //             nextLetter: {
  //   //               i: i,
  //   //               letter: nextWord.toLowerCase(),
  //   //               image: image
  //   //             },
  //   //             currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //   //           }
  //   //         })
  //   //       }
  //   //       this.keypressSound(true)
  //   //
  //   //     } else{
  //   //       this.keypressSound(false)
  //   //     }
  //   //   } else {
  //   //     // click right key............
  //   //     if (letter.toLowerCase() === this.state.nextLetter.letter.toLowerCase()) {
  //   //
  //   //       // increase paragraph index
  //   //       i++
  //   //       let nextWord = this.state.text.slice(1)[i - 1]
  //   //
  //   //       // if remain next letter................
  //   //       if (nextWord && nextWord !== " ") {
  //   //         this.setState(prevState => {
  //   //           let image = {...prevState.nextLetter.image}
  //   //           if (isLeft(nextWord.toLowerCase())) {
  //   //             // change finger for left hand............
  //   //             image.rightHand = prevState.imgs['rt-reset']
  //   //             image.leftHand = prevState.imgs[nextWord.toLowerCase()]
  //   //
  //   //           } else {
  //   //             // change finger for right hand
  //   //             image.rightHand = prevState.imgs[nextWord.toLowerCase()]
  //   //             image.leftHand = prevState.imgs["lt-reset"]
  //   //           }
  //   //           return {
  //   //             nextLetter: {
  //   //               i: i,
  //   //               letter: nextWord.toLowerCase(),
  //   //               image: image
  //   //             },
  //   //             currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //   //           }
  //   //         })
  //   //       }
  //   //
  //   //       else if (nextWord === " ") {
  //   //
  //   //         this.setState(prevState => {
  //   //           let image = {...prevState.nextLetter.image}
  //   //           let l = "Spacebar"
  //   //           if (isLeft(l)) {
  //   //             // change finger for left hand............
  //   //             image.rightHand = prevState.imgs['rt-reset']
  //   //             image.leftHand = prevState.imgs[l]
  //   //
  //   //           } else {
  //   //             // change finger for right hand
  //   //             image.rightHand = prevState.imgs[l]
  //   //             image.leftHand = prevState.imgs["lt-reset"]
  //   //           }
  //   //
  //   //           return {
  //   //             nextLetter: {
  //   //               i: i,
  //   //               letter: " ",
  //   //               image: image
  //   //             },
  //   //             currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
  //   //           }
  //   //         })
  //   //
  //   //       } else {
  //   //         console.log("finished.......")
  //   //         this.setState(prevState => {
  //   //           return {
  //   //             nextLetter: {
  //   //               ...prevState.nextLetter,
  //   //               i: prevState.nextLetter.i + 1, /// so that make color last letter completed
  //   //               image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
  //   //             },
  //   //             isCompleted: true,
  //   //             isTyping: false,
  //   //             totalTimeConsume: Date.now() - this.startTime
  //   //           }
  //   //         })
  //   //       }
  //   //
  //   //       this.keypressSound(true)
  //   //
  //   //
  //   //     } else {
  //   //       this.keypressSound(false)
  //   //     }
  //   //   }
  //   //
  //   // }
  //
  //
  //   // remove audio after clicking.............
  //
  //
  //   // setTimeout(()=>{
  //   //   let g = document.querySelectorAll(".focus")
  //   //   g.forEach(item=>{
  //   //     item.classList.remove("focus")
  //   //   })
  //   // }, 100)
  // }
  
  
  keypressSound(isValid){
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
  
  renderParaText=()=>{
    const { nextLetter, text, isTyping}= this.state
    return <div onClick={this.handleStartTyping} className={["para-text-box", isTyping ? "active-border":""].join(" ")}>
      <p>{this.state.text.map((t, index)=> {
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
  }
  
  renderCustomTextBox=()=>{
    return (
      <div className="para-text-box input-wrapper">
        <textarea
          onChange={(e)=>this.setState({customText: e.target.value})}
          className="custom-text-input"
        >
          {this.state.customText}
        </textarea>
      </div>
    )
  }
  
  
  handleStartTyping=(e)=>{
    this.startTime = Date.now()
    this.setState({isTyping: true})
  }
  
  makeTextToTyingWord=()=>{
    let letterArr =  this.state.customText.split("")
    this.setState({
      isActiveCustomTextBox: false,
      text: letterArr,
      isTyping: false,
    })
    this.onReadyChooseFirstLetter(letterArr)
  }
  
  
  restartTyping=()=>{
    let letterArr =  this.state.text
    this.setState({
      ...this.state,
      isTyping: true,
      nextLetter: { i: 0, letter: letterArr[0], image:{ rightHand: "", leftHand: ""  }},
      currentKey: { code: -1, i: 0, letter: ""},
      isCompleted: false,
      totalTimeConsume: 0,
      currentWord: 0,
      rawText: {
        Z: ``
      },
      isActiveCustomTextBox: false,
    })
    // this.setState({
    //   isTyping: true,
    //   isCompleted: false,
    //   isActiveCustomTextBox: false,
    //   text: letterArr,
    //   nextLetter: { i: 0, letter: this.state.text[0], image:{ rightHand: "", leftHand: ""  }},
    //   currentKey: { code: -1, i: 0, letter: ""},
    // })
    // this.onReadyChooseFirstLetter(letterArr)
    // this.startTime = Date.now()
  }
  
  
  render() {
    let wpm = 0
    let min = ( (Date.now() - this.startTime ) / 1000  )
    if(min !== 0) {
      let word = 0;
      this.state.text.forEach(l => {
        if (l === " ") {
          word++
        }
      })
      wpm = Math.round(((word + 1) / min) * 60) || 0
    }
    
    return (
      <div className="container">
        <div className="">
          <h1 className="big-title">Learn Typing </h1>
        </div>
        <div className="">
          { this.state.isActiveCustomTextBox
            ? this.renderCustomTextBox()
            : this.renderParaText()
          }
          
          { this.state.isActiveCustomTextBox ? (
            <div className="row justify-end">
              <button onClick={this.makeTextToTyingWord} className="btn ml-0">Use This Word</button>
              <button className="btn ml-1">Cancel</button>
            </div>
          ) : (
            <button onClick={()=>this.setState({isActiveCustomTextBox: true})} className="btn">Custom Word</button>
          ) }
        </div>
        <div className="row">
          <div className={["modal", this.state.isCompleted ? "show-modal  p-2" : ""].join(" ")}>
            <div>
              <h3 className="modal-title">Accuracy 70%</h3>
              <h3 className="modal-title">Typing Speed {wpm}WPM</h3>
              <div className="row justify-space-between p-2">
                <button onClick={this.makeTextToTyingWord} className="btn">Previews Level</button>
                <button onClick={this.restartTyping} className="btn">Restart</button>
                <button onClick={this.makeTextToTyingWord} className="btn">Next Level</button>
              </div>
            </div>
          </div>
        </div>
        
        
        { !this.state.isCompleted && <Keyboard
          text={this.state.text}
          getKeyCode={this.getKeyCode}
          keys={this.state.keys}
          currentKey={this.state.currentKey}
          nextLetter={this.state.nextLetter}
        /> }
      
      </div>
    );
  };
}
export default TypingPage;