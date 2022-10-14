import { useEffect } from "react";
import styles from "./theme-toggle.module.css";
import { useTheme } from "../providers/theme.js";
import useLocalStorage from "use-local-storage";

export default function ThemeToggle() {
	let [theme, setTheme] = useTheme();
	const [themeStorage, setThemeStorage] = useLocalStorage("theme", "light");
	let themeBindings = {
		"light": "light_mode",
		"dark": "dark_mode"
	}
	const st = () => {
		setTheme(() => {
			return themeStorage;
		});
	}
	useEffect(st);
	const toggle = () => {
		let ret = "light";
		if (theme == "light") {
			ret = "dark";
		}
		setThemeStorage(ret);
		st();
	}
	return (
		<button onClick={toggle} className={styles["theme-toggle-button"]}><span className="material-symbols-outlined">{ themeBindings[theme] }</span></button>
	)
}