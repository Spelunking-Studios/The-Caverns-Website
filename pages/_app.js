import '../styles/globals.css';
import '../styles/scrollbars.css';
import Layout from "../components/layout.js";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "../providers/theme.js";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  	return (
        <SessionProvider session={session}>
			<ThemeProvider>
				<Layout>
	    			<Component {...pageProps}/>
	    		</Layout>
			</ThemeProvider>
        </SessionProvider>
	)
}

export default MyApp;