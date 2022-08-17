import Link from "next/link";
import ThemeToggle from "./theme-toggle.js";

export default function NavBar(props) {
	return (
		<nav className="z-50 w-full h-10 dark:bg-zinc-800 bg-zinc-300 flex gap-4 fixed dark:text-neutral-200">
			<span></span>
			<Link href="/" className="ml-3">
				<a className="text-2xl hover:text-blue-500 align-middle leading-10">The Caverns</a>
			</Link>
			<Link href="/download" className="ml-3">
				<a className="text-2xl hover:text-blue-500 align-middle leading-10">Download</a>
			</Link>
			<Link href="/gallery" className="ml-3">
				<a className="text-2xl hover:text-blue-500 align-middle leading-10">Gallery</a>
			</Link>
			<Link href="/game-info" className="ml-3">
				<a className="text-2xl hover:text-blue-500 align-middle leading-10">Game Info</a>
			</Link>
			<ThemeToggle forceRerender={props.forceRerender}/>
			<span></span>
		</nav>
	)
}