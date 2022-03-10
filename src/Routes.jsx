import React, {Suspense} from 'react';
import {Route, Routes } from "react-router-dom";
import ReactLazyPreload from "./components/preloadLink/ReactLazyPreload";
import Loader from "./components/Loader/Loader";
import TopBarProgress from "./components/TopBarProgress/TopBarProgress";

const Lessons = ReactLazyPreload(()=>import("./components/Lessons/Lessons"));
const TypingPageFn = ReactLazyPreload(()=>import("./pages/TypingPage/TypingPageFn"));


export const routes = [{
	path: "/", component: Lessons,
}, {
	path: "/typing/:id", component:TypingPageFn
}]


const RouteMy = () => {
	return (
		<Suspense fallback={<TopBarProgress />}>
			<Routes>
				{/*<Route path="/" element={<Lessons />} />*/}
				{/*<Route path="/typing/:id" element={<TypingPageFn  />} />*/}
				 { routes.map((route, i)=>(
					 <Route path={route.path} key={i} element={<route.component  />} />
				
				 )) }
			</Routes>
		</Suspense>
	);
};

export default RouteMy;