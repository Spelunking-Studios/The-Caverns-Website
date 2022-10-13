import Head from 'next/head';
import NavBar from "../components/nav.js";
import ImageCarousel from "../components/imageCarousel.js";
import WordWheel from "../components/wordWheel.js";
import DownloadList from "../components/download.js";
import { useState } from "react";
import styles from "../components/page.module.css";

export default function Home(props) {
	const [triggerRefresh, setTriggerRefresh] = useState(0);
	return (
		<div>
		    <div className="transition ease-in-out flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
				<Head>
					<title>The Caverns</title>
					<link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
				</Head>
				<NavBar forceRerender={props.forceRerender}/>
				<header className={`h-fit w-full overflow-hidden dark:bg-zinc-700 dark:text-neutral-200 ${styles.pagewdbg}`}>	
					<img className="max-h-72 mx-auto mt-16 mb-10 w-auto h-auto aspect-auto" src="/images/CavernsLogo.webp"/>
				</header>
				<main className="flex-grow w-full mx-auto mb-0 dark:bg-zinc-700 dark:text-neutral-200">
				<p className="text-center text-3xl pt-2 pb-2 mx-auto max-w-9/12">A top down indie action-adventure RPG.</p>
                    <p className="text-center text-3xl pt-2 pb-2 mx-auto max-w-9/12">Venture through dark caverns, fighting many enemies along the way.</p>
					<ImageCarousel images="/images/snap1.png;/images/snap2.png;/images/snap3.png" index={1}/>
					<section className="mt-40 mx-auto rounded">
						<p className="text-center text-4xl w-11/12 mb-20 mt-10 mx-auto pb-8 border-b-4 border-sky-500">Downloads</p>
						<DownloadList/>
					</section>
				</main>
			</div>
		</div>
  	)
}
