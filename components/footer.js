import Link from "next/link";

export default function Footer() {
	return (
		<div className="transition ease-in-out static bottom-0 w-full bg-zinc-300 grid grid-cols-4 mx-auto lg:grid-cols-4 py-5 px-4 lg:px-16 text-center gap-none dark:bg-zinc-800 dark:text-neutral-200">
			<div className="grid grid-cols-1 inline-block">
				<p className="text-lg col-span-1 font-semibold mb-2">Links</p>
				<p><Link href="/download" target="_blank"><a className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Download</a></Link></p>
				<p><a href="https://github.com/LGgameLAG/The-Caverns" target="_blank" className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">GitHub Repository</a></p>
				<p className="whitespace-pre"> </p>
				<p className="whitespace-pre lg:whitespace-normal"> </p>
				<p className="whitespace-pre lg:whitespace-normal"> </p>
			</div>
			<img class="max-h-28 mx-auto col-span-2" src="/images/SpelunkingStudios.webp"/>
			<div className="grid grid-cols-1 lg:grid-cols-2 inline-block">
				<p className="text-lg col-span-1 lg:col-span-2 font-semibold mb-2">Authors</p>
				<p><a href="https://github.com/LGgameLAB" target="_blank" className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Luke Gonsalves</a></p>
				<p className="text-sm lg:text-lg m-auto">Matthew Hosier</p>
				<p><a href="https://github.com/https123456789" target="_blank" className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Ben Landon</a></p>
				<p className="text-sm lg:text-lg m-auto">Aryan Upadhyaya</p>
				<p><a href="https://github.com/DevBro123" target="_blank" className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Deven McWhirk</a></p>
			</div>
		</div>
	)
}