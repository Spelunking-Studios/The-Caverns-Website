import NavBar from "./nav.js";
import { useState } from "react";
import React from "react";
import NextNProgress from "nextjs-progressbar";
import { darkMode } from "../globalStates/theme.js";

export default function Layout( { children }) {
	const [r, sr] = useState(0);
	const forceRerender = () => {
		sr(r + 1);
	}
	const childrenWithProps = React.Children.map(children, child => {
		return React.cloneElement(child, { forceRerender })
	});
	return (
		<div className="font-raleway">
			<NextNProgress options={{ showSpinner: false }} showSpinner={false} color={`${darkMode ? "#1d4ed8" : "#3b82f6"}`}/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
			<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cinzel:wght@900&family=Raleway&family=Titillium+Web&display=swap" rel="stylesheet"/>
			<div className="scrollbar-thin scrollbar-thumb-blue-700">
				{ childrenWithProps }
			</div>
		</div>
	)
}