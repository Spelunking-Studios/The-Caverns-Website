import { useState, useEffect } from "react";
import { darkMode, setDarkMode } from "../globalStates/theme.js";

export default function ThemeToggle(props) {
	const [dark, setDark] = useState(false);
	const toggle = () => {
		darkMode = !dark;
		if (typeof window != "undefined") {
			localStorage.setItem("darkMode", darkMode);
		}
		setDark(!dark);
		props.forceRerender();
	}
	useEffect(() => {
		if (typeof window != "undefined") {
			if (localStorage.getItem("darkMode") &&
				JSON.parse(
					localStorage.getItem("darkMode")
						.toLowerCase()
				) && dark == false
			) {
				toggle();
			}
		}
	})
	return (
		<button onClick={toggle} className="grid-col-span-1 leading-5 align-middle pt-2 pb-2 ml-auto"><span className="material-symbols-outlined">{ darkMode ? "dark_mode" : "light_mode" }</span></button>
	)
}