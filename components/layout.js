import NavBar from "./nav.js";
import { useState, useEffect } from "react";
import React from "react";
import NextNProgress from "nextjs-progressbar";
import Footer from "./footer.js";
import styles from "./layout.module.css";
import Head from "next/head";
import { useTheme } from "../providers/theme.js";
import useLocalStorage from "use-local-storage";

export default function Layout( { children }) {
	const [theme, setTheme] = useTheme();
	const [themeStorage, setThemeStorage] = useLocalStorage("theme", "light");
	const [r, sr] = useState(0);
	useEffect(() => {
		document.querySelector("html").setAttribute("data-theme", theme);
	});
	return (
		<div>
			<NextNProgress options={{ showSpinner: false }} showSpinner={false} color={`${theme == "dark" ? "#1d4ed8" : "#3b82f6"}`}/>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
			<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Cinzel:wght@900&family=Raleway&family=Titillium+Web&display=swap" rel="stylesheet"/>
			{/*
				darkMode ? <link rel="stylesheet" href="/dark.css"/> : <link rel="stylesheet" href="/light.css"/>
			*/}
			{/*<Head>
				<html data-theme={theme}/>
			</Head>*/}
			<div className={styles.contentWrapper}>
				<div className={styles.contentContainer}>
					{ children }
				</div>
				<Footer/>
			</div>
		</div>
	)
}