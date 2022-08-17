import Link from "next/link";

export default function Footer() {
	return (
		<div className="bg-zinc-300 grid grid-cols-3 pt-5 pb-5 text-center gap-none dark:bg-zinc-800 dark:text-neutral-200">
			<p className="col-span-3 text-2xl max-h-10 font-cinzel-decorative">The Caverns</p>
			{/*<p className="col-span-3 text-xl">Created by: Luke Gonsalves, Matthew Hoiser, Ben Landon, and Aryan Upadhyaya</p>*/}
			<div className="grid grid-cols-1">
				<p className="text-lg">Links</p>
				<p><Link href="/download" target="_blank"><a className="hover:text-blue-700 hover:underline">Download</a></Link></p>
				<p><a href="https://github.com/LGgameLAG/The-Caverns" target="_blank" className="hover:text-blue-700 hover:underline">GitHub Repository</a></p>
			</div>
			<p className="text-lg"></p>
			<div className="grid grid-cols-2 inline-block">
				<p className="text-lg col-span-2">Authors</p>
				<p><a href="https://github.com/LGgameLAB" target="_blank" className="hover:text-blue-700 hover:underline">Luke Gonsalves</a></p>
				<p>Matthew Hosier</p>
				<p><a href="https://github.com/https123456789" target="_blank" className="hover:text-blue-700 hover:underline">Ben Landon</a></p>
				<p>Aryan Upadhyaya</p>
			</div>
			<p></p>
			<p></p>
			<div>
				{/*<p className="text-lg col-span-2">Web Design</p>*/}
				<p>Consultant: Deven McWhirk</p>
			</div>
		</div>
	)
}