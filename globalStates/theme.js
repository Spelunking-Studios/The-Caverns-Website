let darkMode = false;
if (typeof window != "undefined") {
	darkMode = localStorage.getItem("darkMode");
}

const setDarkMode = (v) => {
	darkMode = v;
}

export default {
	darkMode: darkMode,
	setDarkMode: setDarkMode
}