import Head from 'next/head';
import NavBar from "../components/nav.js";
import DownloadList from "../components/download.js";

export default function Download(props) {
  return (
    <div>
		<div className="transition ease-in-out flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
			<Head>
				<title>Download - The Caverns</title>
			</Head>
			<NavBar forceRerender={props.forceRerender}/>
			<header className="h-fit w-full overflow-hidden">
				<h1 className="page-title">DOWNLOAD</h1>
			</header>
			<main className="flex-grow w-full mx-auto min-h-full">
				<DownloadList/>
			</main>
		</div>
	</div>
  )
}
