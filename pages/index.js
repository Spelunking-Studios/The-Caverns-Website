import Head from 'next/head';
import NavBar from "../components/nav.js";
import ImageCarousel from "../components/imageCarousel.js";
import WordWheel from "../components/wordWheel.js";
import DownloadList from "../components/download.js";
import { useState } from "react";
import styles from "../styles/pages/index.module.css";

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
				<header className={`h-fit w-full overflow-hidden dark:bg-zinc-700 dark:text-neutral-200`}>	
					<img className={styles["main-image"]} src="/images/CavernsLogo.webp"/>
				</header>
				<main className="flex-grow w-full mx-auto mb-0 dark:bg-zinc-700 dark:text-neutral-200">
				<p style={{
					textAlign: "center",
					fontSize: "1.75rem",
					paddingTop: "0.5rem",
					paddingBottom: "0.5rem",
					marginLeft: "auto",
					marginRight: "auto",
					maxWidth: "75%"
				}}>A top down indie action-adventure RPG.</p>
                    <p style={{
					textAlign: "center",
					fontSize: "1.75rem",
					paddingTop: "0.5rem",
					paddingBottom: "2.5rem",
					marginLeft: "auto",
					marginRight: "auto",
					maxWidth: "75%",
				}}>Venture through dark caverns, fighting many enemies along the way.</p>
					<ImageCarousel images="/images/snap1.png;/images/snap2.png;/images/snap3.png" index={1}/>
					<section className="mt-40 mx-auto rounded">
						<p className="page-section-title" style={{ marginTop: "7.5rem", marginBottom: "5rem", borderBottom: "0.25rem solid rgb(14 165 233)", width: "50%", marginLeft: "auto", marginRight: "auto" }}>Downloads</p>
						<DownloadList/>
					</section>
				</main>
			</div>
		</div>
  	)
}
