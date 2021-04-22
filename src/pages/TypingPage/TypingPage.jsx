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


const code = {
  "Shift": 16,
  "A": 65,
  "B": 66,
  "C": 67,
  "D": 68,
  "E": 69,
  "F": 70,
  "G": 71,
  "H": 72,
  "I": 73,
  "J": 74,
  "K": 75,
  "L": 76,
  "M": 77,
  "N": 78,
  "O": 79,
  "P": 80,
  "Q": 81,
  "R": 82,
  "S": 83,
  "T": 84,
  "U": 85,
  "V": 86,
  "W": 87,
  "X": 88,
  "Y": 89,
  "Z": 90,
  ",": 188,
  ".": 190,
  "/": 191,
  "Spacebar": 32
}

function getLetter(keyCode){
  for (const codeKey in code) {
    if(keyCode === code[codeKey]){
      return codeKey
    }
  }
}

function isLeft(word) {
  let left = ["Q", "W", "E", "R", "R", "A", "S", "T", "D", "F", "G", "Z", "X", "C", "V", "B"]
  return left.indexOf(word.toUpperCase()) !== -1
}

class TypingPage extends React.Component {
  static startTime = null
  state = {
    keys : {
      numberRow: [
        {up: "~", down: "`", code: 222},
        {up: "!", down: "1", code: 49},
        {up: "@", down: "2", code: 50 },
        {up: "#", down: "3", code: 51},
        {up: "$", down: "4", code: 52},
        {up: "%", down: "5", code: 53},
        {up: "^", down: "6", code: 54},
        {up: "&", down: "7", code: 55},
        {up: "*", down: "8", code: 56},
        {up: "(", down: "9", code: 57},
        {up: ")", down: "0", code: 48},
        {up: "_", down: "-", code: 189},
        {up: "+", down: "=", code: 187},
        {up: "backspace", code: 8},
      ],
      topRow: [
        {up: "Tab", down: "", code: 9},
        {up: "Q", code: code["Q"]},
        {up: "W", code: code["W"] },
        {up: "E", code: code["E"]},
        {up: "R", code: code["R"]},
        {up: "T", code: code["T"]},
        {up: "Y", code: code["Y"]},
        {up: "U", code: code["U"]},
        {up: "I", code: code["I"]},
        {up: "O", code: code["O"]},
        {up: "P", code: code["P"]},
        {up: "{", down: "[", code: 189},
        {up: "}", down: "]", code: 187},
        {up: "|", down: "\\", code: 220},
      ],
      homeRow: [
        {up: "Caps Lock", code: 20},
        {up: "A", code: 65},
        {up: "S", code: 83 },
        {up: "D", code: 68},
        {up: "F", code: 70},
        {up: "G", code: 71},
        {up: "H", code: 72},
        {up: "J", code: 74},
        {up: "K", code: 75},
        {up: "L", code: 76},
        {up: ":", down: ";", code: 186 },
        {up: '"', down: "'", code: 189},
        {up: "Enter", code: 13},
      ],
      bottomRow: [
        {up: "Shift", code: 16},
        {up: "Z", code: 90},
        {up: "X", code: 88 },
        {up: "C", code: 67},
        {up: "V", code: 86},
        {up: "B", code: 66},
        {up: "N", code: 78},
        {up: "M", code: 77},
        {up: ",", code: 188},
        {up: ".", code: 190},
        {up: "/", down: ";", code: 191 },
        {up: 'Shift', code: 16}
      ],
      controlRow: [
        {up: "Ctrl", code: 17},
        {up: "Alt", code: 18},
        {up: "CMD", code: 83 },
        {up: "Spacebar", code: 32},
        {up: "CMD", code: 83 },
        {up: "Alt", code: 18},
        {up: "Ctrl", code: 17},
      ]
      
    },
    imgs: {
      z,x,v,a,b,c,d,e,f,g,j,h,s,l,m,n,o,p,
      r: r,
      t: t,
      "rt-reset": rtReset,
      "lt-reset": ltReset,
      Spacebar: space,
    },
    isTyping: false,
    // text: ["t", "o", "r", " ", "f", "a", "l", "l" ],
    text: ["z", "i", "g", "z", "a", "g", " ",
      "z", "e", "b", "r", "a",
      " ", "z", "e", "r", "o", " ",
      "z", "i", "p", "p", "e", "r",
          " ",
      "z", "i", "n", "n", "i", "a", " ",
      "z", "o", "o", " ",
      "z", "i", "t", "h", "e", " ", "z", "a", "n", " ",
      "z", "a", "l", "a",
    "z", "a", "l", "a", "d", " ", "z", "a", "j", "a", " ", "r", "z", "a", "d", "d", "y", " ", "z", "a", "m", "o", "n", "o", " ",
     "z", "a", "k", "k", " ", "z", "a", "h", " ", "z", "o", "m", "o", " ", "z", "a", "n", "b", "y", " ", "z", "a", "b", "b", "a"],
    nextLetter: { i: 0, letter: "Z", image:{ rightHand: "", leftHand: ""  }},
    currentKey: { code: -1, i: 0, letter: ""},
    isCompleted: false,
    totalTimeConsume: 0,
    carrentWord: 0,
    rawText: {
      Z: ``
    },
    isActiveCustomTextBox: false,
    customText: "",
  }
  
  componentDidMount() {
   this.onReadyChooseFirstLetter(this.state.text)
  }
  
  onReadyChooseFirstLetter=(textArr)=>{
    
    this.setState((prevState)=>{
      let firstLetter = textArr[0]
    
      let image = { ...prevState.nextLetter.image }
      if(isLeft(firstLetter)){
        image.leftHand = prevState.imgs[firstLetter.toLowerCase()]
        image.rightHand = prevState.imgs["rt-reset"]
      } else{
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
    })
  }
  
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    
    let i = 0
    if(this.state.isTyping !== prevState.isTyping ){
      document.addEventListener("keydown", (e)=>{
        e.preventDefault()
        
        let letter = getLetter(e.keyCode)
        // console.log(letter.toLowerCase(), this.state.nextLetter.letter.toLowerCase())
       
        
        if(letter) {
          if(letter === "Spacebar"){
            if (this.state.nextLetter.letter === " ") {
             
              // increase paragraph index
              i++
              let nextWord = this.state.text.slice(1)[i - 1]
              if(nextWord){
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
              
            } else{
              this.keypressSound(false)
            }
          } else {
            // click right key............
            if (letter.toLowerCase() === this.state.nextLetter.letter.toLowerCase()) {
    
              // increase paragraph index
              i++
              let nextWord = this.state.text.slice(1)[i - 1]
    
              // if remain next letter................
              if (nextWord && nextWord !== " ") {
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
              } else if (nextWord === " ") {
      
                this.setState(prevState => {
                  let image = {...prevState.nextLetter.image}
                  let l = "Spacebar"
                  if (isLeft(l)) {
                    // change finger for left hand............
                    image.rightHand = prevState.imgs['rt-reset']
                    image.leftHand = prevState.imgs[l]
          
                  } else {
                    // change finger for right hand
                    image.rightHand = prevState.imgs[l]
                    image.leftHand = prevState.imgs["lt-reset"]
                  }
        
                  return {
                    nextLetter: {
                      i: i,
                      letter: " ",
                      image: image
                    },
                    currentKey: {code: e.keyCode, i: i - 1, letter: this.state.text.slice(1)[i - 1]}
                  }
                })
      
              } else {
                console.log("finished.......")
                this.setState(prevState => {
                  return {
                    nextLetter: {
                      ...prevState.nextLetter,
                      i: prevState.nextLetter.i + 1, /// so that make color last letter completed
                      image: {leftHand: this.state.imgs["lt-reset"], rightHand: this.state.imgs["rt-reset"]}
                    },
                    isCompleted: true,
                    isTyping: false,
                    totalTimeConsume: Date.now() - this.startTime
                  }
                })
              }
  
              this.keypressSound(true)
             
    
            } else {
              this.keypressSound(false)
            }
          }
          
        }
  
        // remove audio after clicking.............
        // if(audio){
        //   setTimeout(()=>{
        //     document.body.removeChild(audio)
        //   }, 600)
        // }
        
        setTimeout(()=>{
          let g = document.querySelectorAll(".focus")
          g.forEach(item=>{
            item.classList.remove("focus")
          })
        }, 100)
       
      })
    }
    
  }
  
  keypressSound(isValid){
    let audio = document.createElement("audio")
    audio.style.opacity = 0
    audio.src = isValid ? keyPressSound : badPressSound
    document.body.appendChild(audio)
    audio.play()
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
  
  renderKeyboard=()=>{
    const { currentKey, nextLetter } = this.state
    return (
      <div className="keyboard-box">
        <div className="keyboard-row number-row">
          { this.state.keys.numberRow.map(key=>(
            <div className={["key", 'key-'+key.code.toString(), currentKey.code === key.code ? "focus": ""].join(" ")}>
              <span>{key.up}</span>
              <span>{key.down}</span>
            </div>
          )) }
        </div>
        <div className="keyboard-row top-row">
          { this.state.keys.topRow.map(key=>(
            <div className={["key", 'key-'+key.code.toString(), currentKey.code === key.code ? "focus": ""].join(" ")}>
              <span>{key.up}</span>
              <span>{key.down}</span>
            </div>
          )) }
        </div>
        <div className="keyboard-row home-row">
          { this.state.keys.homeRow.map(key=>{
            return <div className={["key", 'key-'+key.code.toString(), currentKey.code === key.code ? "focus": ""].join(" ")}>
              <span>{key.up}</span>
              <span>{key.down}</span>
            </div>
          }) }
        </div>
        <div className="keyboard-row bottom-row">
          { this.state.keys.bottomRow.map(key=>(
            <div className={["key", 'key-'+key.code.toString(), currentKey.code === key.code ? "focus": ""].join(" ")}>
              <span>{key.up}</span>
              <span>{key.down}</span>
            </div>
          )) }
        </div>
        <div className="keyboard-row control-row">
          { this.state.keys.controlRow.map(key=>(
            <div className={["key", "ctrl-row-key", 'key-'+key.code.toString(), currentKey.code === key.code ? "focus": ""].join(" ")}>
              <span>{key.up}</span>
              <span>{key.down}</span>
            </div>
          )) }
        </div>
        
        <div className="hands">
          <img className={"left-img"} src={nextLetter.image.leftHand} alt=""/>
          <img className={"right-img"} src={nextLetter.image.rightHand} alt=""/>
        </div>
        
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
      isTyping: true,
      isCompleted: false,
      isActiveCustomTextBox: false,
      text: letterArr,
      nextLetter: { i: 0, letter: "Z", image:{ rightHand: "", leftHand: ""  }},
      currentKey: { code: -1, i: 0, letter: ""},
    })
    this.onReadyChooseFirstLetter(letterArr)
    this.startTime = Date.now()
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
        
        
        { !this.state.isCompleted && this.renderKeyboard() }
      </div>
    );
  };
}
export default TypingPage;