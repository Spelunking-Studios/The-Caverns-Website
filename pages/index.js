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
				<header className={`h-fit w-full overflow-hidden dark:bg-zinc-700 dark:text-neutral-200 ${styles.pagewdbg}`}>	
					<img className="h-64 mx-auto mt-16 mb-10" src="/images/TheCaverns.png"/>
					<h2 className="text-3xl text-center mx-auto dark:text-neutral-300">A top down indie action-adventure RPG</h2>
				</header>
				<main className="mx-auto mb-0 dark:bg-zinc-700 dark:text-neutral-200">
					<p className="text-center text-3xl pt-2 pb-12">Venture through dark caverns, fighting many enemies along the way.</p>
					<ImageCarousel images="/images/snap1.png;/images/snap2.png;/images/snap3.png" index={1}/>
					<section className="mt-40 mx-auto rounded">
						<p className="text-center text-4xl w-11/12 mb-10 mt-10 mx-auto pb-4 border-b-4 border-sky-500">Downloads</p>
						<DownloadList/>
						<Footer/>
					</section>
				</main>
			</div>
		</div>
  	)
}
