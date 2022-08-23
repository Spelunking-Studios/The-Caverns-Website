import Head from 'next/head';
import NavBar from "../components/nav.js";
import Footer from "../components/footer.js";
import DownloadList from "../components/download.js";
import { darkMode } from "../globalStates/theme.js";

export default function Download(props) {
  return (
    <div className={`${(darkMode % 2) ? "dark" : ""}`}>
		<div className="min-h-screen w-full dark:bg-zinc-700 dark:text-neutral-200">
			<Head>
				<title>Download - The Caverns</title>
			</Head>
			<NavBar forceRerender={props.forceRerender}/>
			<header className="h-fit w-full overflow-hidden">
				<h1 className="text-7xl text-center text-zinc-800 mt-28 mb-6 mr-auto ml-auto dark:text-neutral-200 font-cinzel">DOWNLOAD</h1>
			</header>
			<main className="mx-auto min-h-full">
				<DownloadList/>
				<div className="absolute bottom-0 w-full"><Footer/></div>
			</main>
		</div>
	</div>
  )
}
