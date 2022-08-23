import '../styles/globals.css';
import '../styles/scrollbars.css';
import Layout from "../components/layout.js";

function MyApp({ Component, pageProps }) {
  	return (
		<Layout>
			<Component {...pageProps}/>
		</Layout>
	)
}

export default MyApp;