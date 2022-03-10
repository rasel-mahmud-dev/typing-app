import React from 'react';
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/pro-regular-svg-icons";
import PreloadLink from "../../components/preloadLink/PreloadLink";
import {faMusicAlt} from "@fortawesome/pro-solid-svg-icons";
import {faMusicSlash} from "@fortawesome/pro-light-svg-icons";


const TopBar = ({handleChangeFontSize, handleToggleSpeaker, soundOff}) => {
	return (
		<div className="">
			
			<header className="bg-gray-50 bg-opacity-20 py-2 shadow-sm">
				<div className="container">
					<div className="flex justify-between items-center ">
						
						<PreloadLink to="/" className="text-blue-500 bg-white px-4 py-1.5 bg-opacity-50 font-medium rounded shadow-md">
							<FontAwesomeIcon icon={faArrowLeft} className="mr-1 text-sm" />
							<a className="select-none">Back To Home </a>
						</PreloadLink>
						
						<div className="flex">
							<button onClick={()=>handleToggleSpeaker(false)}
											className="mr-1 select-none cursor-pointer w-max text-blue-500 bg-white px-2.5 py-1 bg-opacity-50 font-medium rounded shadow-md">
								
								<FontAwesomeIcon icon={soundOff ? faMusicSlash : faMusicAlt} />
							</button>
							<button onClick={()=>handleChangeFontSize(false)} className="mr-1 select-none cursor-pointer w-max text-blue-500 bg-white px-2.5 py-1 bg-opacity-50 font-medium rounded shadow-md">A-</button>
							<button onClick={handleChangeFontSize} className="w-max select-none text-blue-500 bg-white cursor-pointer  px-2.5 py-1 bg-opacity-50 font-medium rounded shadow-md">A+</button>
						</div>
						{/*<FontAwesomeIcon icon={faKeyboard} />*/}
					</div>
				</div>
			</header>
			
			
		</div>
	);
};

export default TopBar;

