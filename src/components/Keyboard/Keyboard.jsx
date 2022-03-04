import React from 'react';

import "./keyboard.scss"

const Keyboard = (props) => {
	let { currentKey, nextLetter, keys, getKeyCode, text, } = props;
	
	function renderKey(eachKey) {
		let k = getKeyCode(nextLetter.letter, false)
		
		let keyCode = eachKey[1]
		if(eachKey.length > 1){
			let c = keyCode.code && keyCode.code.code && keyCode.code.code
			let isFocused = false
			if(c && k){
				isFocused = k.code ===  keyCode.code.code
			}
			return  (
				<div className={["key", 'key-'+c, isFocused ? "focus": ""].join(" ")}>
					{/*<div className={["key", 'key-'+key.code.toString(), currentKey.code === key.code ? "focus": ""].join(" ")}>*/}
					<span className={'key-'+eachKey[0].key}>{eachKey[0].key}</span>
					<span className={'key-'+eachKey[1].key}>{eachKey[1].key}</span>
				</div>
			)
		} else {
			return  (
				<div className={["key", 'key'+eachKey[0].key, currentKey.code === eachKey[0].code ? "focus": ""].join(" ")}>
					<span className={'key-'+eachKey[0].key}>{eachKey[0].key}</span>
				</div>
			)
		}
		
	}
	
	function renderEachRow(eachRow, index){
		return  (
			<div key={index} className='keyboard-row number-row'>
				{ eachRow && eachRow.map((eachKey)=> renderKey(eachKey)) }
			</div>
		)
	}
	
	return (
		<div>
			<div className="keyboard-box">
				<div className="">
					{ Object.keys(keys).map((eachRow, index)=>renderEachRow(keys[eachRow], index)) }
				</div>
				<div className="hands">
					<img className={"left-img"} src={nextLetter.image.leftHand} alt=""/>
					<img className={"right-img"} src={nextLetter.image.rightHand} alt=""/>
				</div>
			
			</div>
			
		</div>
	);
};

export default Keyboard;

