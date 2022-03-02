import React from 'react';


const Input = React.forwardRef(({onChange}, ref) => {
	
	let [value, setValue] = React.useState("")
	let [value2, setValue2] = React.useState("")
	
	
	function handleChange(e){
		onChange(e.target.value)
	}
	
	return (
		<div>
			<input ref={ref} type="text" value={value} onChange={handleChange}/>
		</div>
	);
});

export default Input;