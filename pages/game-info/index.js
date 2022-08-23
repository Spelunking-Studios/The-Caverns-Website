import Head from 'next/head';
import Link from "next/link";
import NavBar from "../../components/nav.js";
import Footer from "../../components/footer.js";
import { darkMode } from "../../globalStates/theme.js";

export default function GameInfo(props) {
	return (
		<div className={`${(darkMode % 2) ? "dark" : ""}`}>
		<div className="min-h-screen w-full dark:bg-zinc-700 dark:text-neutral-200">
			<Head>
				<title>Game Info - The Caverns</title>
			</Head>
			<NavBar forceRerender={props.forceRerender}/>
			<header className="h-fit w-full overflow-hidden min-h-full">
				<h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">GAME INFO</h1>
				<h2 className="text-3xl text-center text-zinc-500 mr-auto ml-auto dark:text-neutral-300">This is the home of all sorts of information about the game, from enemies, to the level progression.</h2>
			</header>
			<main className="pt-20 ml-auto mr-auto min-h-full">
				<div className="grid grid-cols-3 gap-10 w-11/12 ml-auto mr-auto pt-10 pb-10">
					<div className="rounded border-4 border-zinc-900 dark:border-zinc-500 p-3 col-span-3">
						<Link href="/game-info/enemy-stats">
							<a className="text-2xl ml-5 hover:text-blue-700">Enemy Stats</a>
						</Link>
						<p className="text-lg">Learn about different enemys, and the best ways to defeat them.</p>
					</div>
				</div>
				<div className="absolute bottom-0 w-full"><Footer/></div>
			</main>
		</div>
	</div>
	)
}