import React from 'react';
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome"
import "./keyboard.scss"
import {faLeafHeart} from "@fortawesome/pro-light-svg-icons";
import {faCog} from "@fortawesome/pro-solid-svg-icons";

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
					<span className={'label key-'+eachKey[0].key}>{eachKey[0].key}</span>
					<span className={'key-'+eachKey[1].key}>{eachKey[1].key}</span>
				</div>
			)
		} else {
			return  (
				<div className={["key", 'key'+eachKey[0].key, nextLetter.activeKeys.indexOf(eachKey[0].id)  !== -1 ? "focus": ""].join(" ")}>
					
					<div className={[eachKey[0].label.length > 1 ? "labels":  ""].join(" ")}>
						{ eachKey[0].label && eachKey[0].label.map((label, i)=>(
						<span className={'key-'+eachKey[0].key + " label-"+i}>{label}</span>
					))}
					</div>
					
					{/*<span className={'key-'+eachKey[0].key}>{eachKey[0].key}</span>*/}
				</div>
			)
		}
		
	}
	
	function renderEachRow(eachRow, index){
		return  (
			<div key={index} className='keyboard-row'>
				{ eachRow && eachRow.map((eachKey)=> renderKey(eachKey)) }
			</div>
		)
	}
	
	return (
		<div>
			<div className="keyboard-box">
				
				<div className="flex items-center justify-center text-blue-400 font-medium text-sm ">
					<FontAwesomeIcon icon={faCog} className="mr-1" />
				<h1 className="text-center py-1 text-strike cursor-pointer">Keyboard Settings</h1>
				</div>
				
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

