import Head from 'next/head';
import NavBar from "../components/nav.js";
import { darkMode } from "../globalStates/theme.js";

export default function Credits(props) {
  return (
    <div className={`${(darkMode % 2) ? "dark" : ""}`}>
		<div className="flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
			<Head>
				<title>Credits - The Caverns</title>
			</Head>
			<NavBar forceRerender={props.forceRerender}/>
			<header className="h-fit w-full overflow-hidden">
				<h1 className="text-5xl lg:text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">CREDITS</h1>
			</header>
			<main className="flex-grow w-full mx-auto min-h-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 w-1/2 mx-auto text-center">
                    <p>Luke Gonsalves</p>
                    <p>Matthew Hoiser</p>
                    <p>Ben Landon</p>
                </div>
			</main>
		</div>
	</div>
  )
}
