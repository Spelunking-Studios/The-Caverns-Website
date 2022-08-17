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
				<h1 className="text-8xl text-center text-zinc-800 mt-20 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel-decorative">Download</h1>
			</header>
			<main className="pt-20 ml-auto mr-auto min-h-full">
				{/*<div className="w-9/12 rounded border-4 border-blue-500 p-5 mr-auto ml-auto mt-5 mb-5 md:flex md:flex-row overflow-hidden md:gap-x-10 sm:gap-y-10">
					<div className="md:shrink xl:w-5/12">
						<img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Windows_11_logo.svg" className="flex-1 rounded"/>
					</div>
					<div className="flex md:flex-row gap-4">
						<div className="bg-green-500 rounded w-48 h-10 flex-1 mt-auto mb-auto ml-auto mr-auto">
							<a href="/downloads/window/current/The Caverns.exe" className="text-center ml-auto mr-auto block leading-10 text-2xl">Download</a>
						</div>
					</div>
				</div>*/}
				<DownloadList/>
				<Footer/>
			</main>
		</div>
	</div>
  )
}
