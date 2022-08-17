import Head from 'next/head';
import Footer from "../components/footer.js";
import NavBar from "../components/nav.js";
import ImageCarousel from "../components/imageCarousel.js";
import WordWheel from "../components/wordWheel.js";
import DownloadList from "../components/download.js";
import { darkMode } from "../globalStates/theme.js";
import { useState } from "react";
import styles from "../components/page.module.css";

export default function Home(props) {
	const [triggerRefresh, setTriggerRefresh] = useState(0);
	return (
		<div className={`${(darkMode % 2) ? "dark" : ""}`}>
		    <div className="min-h-screen w-full dark:bg-zinc-700 dark:text-neutral-200">
				<Head>
					<title>The Caverns</title>
				</Head>
				<NavBar forceRerender={props.forceRerender}/>
				<header className={`h-fit w-full overflow-hidden dark:bg-zinc-700 dark:text-neutral-200 ${styles.pagewdbg} min-h-screen`}>
					<h1 className="text-8xl text-center text-zinc-800 mt-16 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">THE CAVERNS</h1>
					<h2 className="text-3xl text-center text-zinc-500 mr-auto ml-auto dark:text-neutral-300">An exploration ARPG game</h2>
					<img src="https://inkarnate-api-as-production.s3.amazonaws.com/FFVY8PXXEmUMxRDRaQoy8c?disposition=attachment" className="w-auto h-auto sm:max-w-md sm:rounded ml-auto mr-auto mt-20 sm:mb-20 sm:mb-48"/>
				</header>
				<main className="ml-auto mr-auto mb-0 dark:bg-zinc-700 dark:text-neutral-200">
					<p className="text-center text-3xl pt-10 pb-10">Explore dark caverns, fight enemies.</p>
					<ImageCarousel images="/images/snap1.png;/images/snap2.png;/images/snap3.png" index={1}/>
					<section className="bg-zinc-000 mt-10 mb-10 ml-auto mr-auto rounded">
						<p className="text-center text-4xl w-11/12 mb-10 mt-10 ml-auto mr-auto border-b-4 border-blue-500">Downloads</p>
						<DownloadList/>
					</section>
					<Footer/>
				</main>
			</div>
		</div>
  	)
}
