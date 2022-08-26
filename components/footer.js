import Link from "next/link";

export default function Footer() {
	return (
		<div className="static bottom-0 w-full bg-zinc-300 grid grid-cols-4 py-5 px-16 text-center gap-none dark:bg-zinc-800 dark:text-neutral-200">
			<div className="grid grid-cols-1 inline-block">
				<p className="text-lg col-span-1 font-semibold mb-2">Links</p>
				<p><Link href="/download" target="_blank"><a className=" transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Download</a></Link></p>
				<p><a href="https://github.com/LGgameLAG/The-Caverns" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">GitHub Repository</a></p>
				<p className="whitespace-pre"> </p>
			</div>
			<p className="text-2xl col-span-2 font-cinzel">THE CAVERNS</p>
			<div className="grid grid-cols-2 inline-block">
				<p className="text-lg col-span-2 font-semibold mb-2">Authors</p>
				<p><a href="https://github.com/LGgameLAB" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Luke Gonsalves</a></p>
				<p>Matthew Hosier</p>
				<p><a href="https://github.com/https123456789" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Ben Landon</a></p>
				<p>Aryan Upadhyaya</p>
				<p><a href="https://github.com/DevBro123" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Deven McWhirk</a></p>
			</div>
		</div>
	)
}