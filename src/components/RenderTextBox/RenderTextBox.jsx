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
								<div key={index} className={["letter", isTyping ? "active-letter" : ""].join(" ")}>
									<span> <span>{t === " " ? '\u00A0' : t}</span></span>
									<span style={{position: "absolute"}} className="cursor"/>
								</div>
							)
							
						} else if (nextLetter.i > index) {
							return (
								<span key={index} className="letter passed-letter-parent">
              		<div className="passed-letter"><span> <span>{t}</span></span></div>
            		</span>
							)
						} else {
							return <span key={index} className="letter"><div>{t}</div></span>
						}
					} else {
						return  (
							<>
								<div className={[
									"letter letter", nextLetter.i === index && "active-letter",
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