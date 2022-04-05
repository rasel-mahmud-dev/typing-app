import React, {useContext} from 'react';
import p from "../../asserts/hands/p.png";
import TypingContext from "../../state/TypingContext";

import "./renderTextBox.scss";

const RenderTextBox = (props) => {
	const { nextLetter, text, isTyping, paraType, handleStartTyping, onFocus} = props
	
	const context = useContext(TypingContext)
	
	
	function isNewLine(letter){
		return letter === "\n"
	}
	
	function letterStyles(fontSize){
		let styles = {fontSize: fontSize + "px", minWidth: fontSize}
		if(paraType && paraType === "word"){
			styles.minWidth = "max-content"
		}
		if(fontSize >= 60){
			styles.fontWeight = 900
		}	else if(fontSize >= 40){
			styles.fontWeight = 600
		} else if(fontSize < 40){
			styles.fontWeight = 400
		}
		return styles
	}

	return (
		<div onClick={onFocus} className={[
			"para-text-box",
			isTyping ? "active-border":"",
			// context.typingState.fontSize > 35 ?  "letter-view" : "word-view",
			paraType === "word" ? "word-view" : "letter-view",
		].join(" ")}>
		
			<p
				
				style={{fontSize: context.typingState.fontSize}}
			>{text && text.map((t, index)=> {
				let line = isNewLine(t)
				
					if(!line) {
						if (nextLetter.i === index) {
							return (
								<div style={letterStyles(context.typingState.fontSize)} key={index} className={["letter", t.trim() === "" ? "white-space" : "", isTyping ? "active-letter" : ""].join(" ")}>
									<span><span>{t === " " ? '\u00A0' : t }</span></span>
									<span style={{position: "absolute"}} className="cursor"/>
								</div>
							)
							
						} else if (nextLetter.i > index) {
							return (
								<span  style={letterStyles(context.typingState.fontSize)} key={index}  className={["letter", t.trim() === "" ? "white-space" : "", "letter passed-letter-parent"].join(" ")}>
              		<div className="passed-letter"><span> <span>{t}</span></span></div>
            		</span>
							)
						} else {
							return <span 
								style={letterStyles(context.typingState.fontSize)} 
								key={index}
								className={["letter", t.trim() === "" ? "white-space" : ""].join(" ")}>
									<div>{t} 
								
								</div>
							</span>
						}
					} else {
						return  (
							<>
								<div  style={letterStyles(context.typingState.fontSize)} className={[
									t.trim() === "" ? "white-space" : "",
									"letter", nextLetter.i === index && "active-letter",
									nextLetter.i > index && "passed-letter-parent"
								].join(" ")}>
									<span className={[nextLetter.i > index && "passed-letter"].join(" ")} >⏎</span>
									<span style={{position: "absolute"}} className="cursor"/>
								</div>
								{/*{ console.log(nextLetter.i, index) }*/}
								<div key={index} className="w-full" />
							</>
							
						)
					}
			})
	
			}</p>
		</div>
	)
};

export default RenderTextBox;