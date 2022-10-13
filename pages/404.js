import Head from 'next/head';
import NavBar from "../components/nav.js";
import { darkMode } from "../globalStates/theme.js";

export default function Custom404(props) {
    return (
        <div className={`${(darkMode % 2) ? "dark" : ""}`}>
		<div className="flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
			<Head>
				<title>404 - The Caverns</title>
			</Head>
			<NavBar forceRerender={props.forceRerender}/>
			<header className="h-fit w-full overflow-hidden">
				<h1 className="text-5xl lg:text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">404</h1>
			</header>
			<main className="flex-grow w-full mx-auto min-h-full">
				<p className="text-center text-2xl">Thats a 404.</p>
			</main>
		</div>
	</div>
    )
}