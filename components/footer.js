import Link from "next/link";

export default function Footer() {
    let linksContent = (
        <div className="grid grid-cols-1 inline-block md:col-span-2">
            <p className="text-lg col-span-1 font-semibold mb-2">Links</p>
            <p><Link href="/download" target="_blank"><a className=" transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Download</a></Link></p>
            <p><a href="https://github.com/LGgameLAG/The-Caverns" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">GitHub Repository</a></p>
            <p><Link href="/credits"><a className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Credits</a></Link></p>
            <p className="whitespace-pre"> </p>
        </div>
    );
    let authorsContent = (
        <div className="grid grid-cols-2 md:grid-cols-2 inline-block md:col-span-2">
            <p className="text-lg col-span-2 font-semibold mb-2">Authors</p>
            <p><a href="https://github.com/LGgameLAB" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Luke Gonsalves</a></p>
            <p>Matthew Hosier</p>
            <p><a href="https://github.com/https123456789" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Ben Landon</a></p>
            <p><a href="https://github.com/AryanUPA" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Aryan Upadhyaya</a></p>
            <p><a href="https://github.com/DevBro123" target="_blank" className="transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Deven McWhirk</a></p>
        </div>
    );
	return (
		<div className="static bottom-0 w-full bg-zinc-300 grid grid-cols-none grid-rows-3 md:grid-rows-none md:grid-cols-4 py-5 px-16 text-center gap-none dark:bg-zinc-800 dark:text-neutral-200">
			<p className="text-2xl md:col-span-4 font-cinzel">THE CAVERNS</p>
            { linksContent }
            { authorsContent }
		</div>
	)
}