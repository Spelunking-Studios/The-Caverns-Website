import { useState, useEffect } from "react";
import { darkMode, setDarkMode } from "../globalStates/theme.js";
import styles from "./theme-toggle.module.css";

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
		<button onClick={toggle} className={styles["theme-toggle-button"]}><span className="material-symbols-outlined">{ darkMode ? "dark_mode" : "light_mode" }</span></button>
	)
}