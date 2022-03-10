import React from 'react';
import "./loader.scss"

const Loader = () => {
	
const Svg = ({className})=> <svg className={className} xmlns="http://www.w3.org/2000/svg"  width="30" height="44" viewBox="0 0 30 44">
	<defs>
		<linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1.078" gradientUnits="objectBoundingBox">
			<stop offset="0" stopColor="#fff"/>
			<stop offset="1" stopColor="#ff1de1"/>
		</linearGradient>
	</defs>
	<g id="Group_1" data-name="Group 1" transform="translate(-160 -310)">
		<path id="Polygon_4" data-name="Polygon 4" d="M22,0,44,30H0Z" transform="translate(190 310) rotate(90)" fill="url(#linear-gradient)"/>
	</g>
</svg>
	
	
	return (
		<div className="card max-w-sm mx-auto bg-blacks bg-opacity-20 mt-8 py-10">
			
			{/*<svg xmlns="http://www.w3.org/2000/svg" width="305.052" height="201.052" viewBox="0 0 305.052 201.052">*/}
			{/*	<defs>*/}
			{/*		<filter id="Path_1" x="0" y="37" width="79.052" height="164.052" filterUnits="userSpaceOnUse">*/}
			{/*			<feOffset dy="2" input="SourceAlpha"/>*/}
			{/*			<feGaussianBlur stdDeviation="3" result="blur"/>*/}
			{/*			<feFlood flood-color="#3996f5"/>*/}
			{/*			<feComposite operator="in" in2="blur"/>*/}
			{/*			<feComposite in="SourceGraphic"/>*/}
			{/*		</filter>*/}
			{/*		<filter id="Line_4" x="113" y="18" width="79.052" height="164.052" filterUnits="userSpaceOnUse">*/}
			{/*			<feOffset dy="2" input="SourceAlpha"/>*/}
			{/*			<feGaussianBlur stdDeviation="3" result="blur-2"/>*/}
			{/*			<feFlood flood-color="#3996f5"/>*/}
			{/*			<feComposite operator="in" in2="blur-2"/>*/}
			{/*			<feComposite in="SourceGraphic"/>*/}
			{/*		</filter>*/}
			{/*		<filter id="Line_6" x="226" y="0" width="79.052" height="164.052" filterUnits="userSpaceOnUse">*/}
			{/*			<feOffset dy="2" input="SourceAlpha"/>*/}
			{/*			<feGaussianBlur stdDeviation="3" result="blur-3"/>*/}
			{/*			<feFlood flood-color="#3996f5"/>*/}
			{/*			<feComposite operator="in" in2="blur-3"/>*/}
			{/*			<feComposite in="SourceGraphic"/>*/}
			{/*		</filter>*/}
			{/*		<filter id="Line_2" x="46.511" y="35.511" width="99.031" height="147.031" filterUnits="userSpaceOnUse">*/}
			{/*			<feOffset dy="2" input="SourceAlpha"/>*/}
			{/*			<feGaussianBlur stdDeviation="3" result="blur-4"/>*/}
			{/*			<feFlood flood-color="#3996f5"/>*/}
			{/*			<feComposite operator="in" in2="blur-4"/>*/}
			{/*			<feComposite in="SourceGraphic"/>*/}
			{/*		</filter>*/}
			{/*		<filter id="Line_5" x="159.511" y="17.511" width="99.031" height="147.031" filterUnits="userSpaceOnUse">*/}
			{/*			<feOffset dy="2" input="SourceAlpha"/>*/}
			{/*			<feGaussianBlur stdDeviation="3" result="blur-5"/>*/}
			{/*			<feFlood flood-color="#3996f5"/>*/}
			{/*			<feComposite operator="in" in2="blur-5"/>*/}
			{/*			<feComposite in="SourceGraphic"/>*/}
			{/*		</filter>*/}
			{/*	</defs>*/}
			{/*	<g id="Group_1" data-name="Group 1" transform="translate(-45.474 -473.474)">*/}
			{/*		<g transform="matrix(1, 0, 0, 1, 45.47, 473.47)" filter="url(#Path_1)">*/}
			{/*			<path id="Path_1-2" data-name="Path 1" d="M0,132,24.234,63.937,47,0" transform="translate(16.03 51.03)" fill="none" stroke="#5aacff" stroke-linecap="round" stroke-linejoin="round" stroke-width="11" stroke-dasharray="10 5"/>*/}
			{/*		</g>*/}
			{/*		<g transform="matrix(1, 0, 0, 1, 45.47, 473.47)" filter="url(#Line_4)">*/}
			{/*			<line id="Line_4-2" data-name="Line 4" y1="132" x2="47" transform="translate(129.03 32.03)" fill="none" stroke="#5aacff" stroke-linecap="round" stroke-width="11" stroke-dasharray="10 5"/>*/}
			{/*		</g>*/}
			{/*		<g transform="matrix(1, 0, 0, 1, 45.47, 473.47)" filter="url(#Line_6)">*/}
			{/*			<line id="Line_6-2" data-name="Line 6" y1="132" x2="47" transform="translate(242.03 14.03)" fill="none" stroke="#5aacff" stroke-linecap="round" stroke-width="11" stroke-dasharray="10 5"/>*/}
			{/*		</g>*/}
			{/*		<g transform="matrix(1, 0, 0, 1, 45.47, 473.47)" filter="url(#Line_2)">*/}
			{/*			<line id="Line_2-2" data-name="Line 2" x2="66" y2="114" transform="translate(63.03 50.03)" fill="none" stroke="#5aacff" stroke-linecap="round" stroke-width="11" stroke-dasharray="10 5"/>*/}
			{/*		</g>*/}
			{/*		<g transform="matrix(1, 0, 0, 1, 45.47, 473.47)" filter="url(#Line_5)">*/}
			{/*			<line id="Line_5-2" data-name="Line 5" x2="66" y2="114" transform="translate(176.03 32.03)" fill="none" stroke="#5aacff" stroke-linecap="round" stroke-width="11" stroke-dasharray="10 5"/>*/}
			{/*		</g>*/}
			{/*	</g>*/}
			{/*</svg>*/}
		
			
			<div className="wrapper">
				<div className="line-1 line">
					<div className="line-overlay"></div>
				</div>
				<div className="line-2 line"><div className="line-overlay" /></div>
				<div className="line-3 line"><div className="line-overlay" /></div>
				<div className="line-4 line"><div className="line-overlay" /></div>
				<div className="line-5 line"><div className="line-overlay" /></div>
				<div className="line-6 line"><div className="line-overlay" /></div>
				
				
			</div>
			
			
		
		</div>
	);
};

export default Loader;