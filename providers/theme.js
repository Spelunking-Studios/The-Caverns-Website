import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");
	return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}

export { ThemeProvider, useTheme };