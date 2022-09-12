import '../styles/globals.css';
import '../styles/scrollbars.css';
import Layout from "../components/layout.js";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  	return (
        <SessionProvider session={session}>
    		<Layout>
    			<Component {...pageProps}/>
    		</Layout>
        </SessionProvider>
	)
}

export default MyApp;