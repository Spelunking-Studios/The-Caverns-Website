import Link from "next/link";
import ThemeToggle from "./theme-toggle.js";

export default function NavBar(props) {
  return (
    <nav className="z-40 w-full h-14 dark:bg-zinc-800 bg-zinc-300 flex gap-6 fixed dark:text-neutral-200">
      <span></span>
      <Link href="/">
        <a className="text-2xl transition ease-in-out duration-100 pt-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">The Caverns</a>
      </Link>
      <Link href="/download">
        <a className="text-2xl transition ease-in-out duration-100 pt-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">Download</a>
      </Link>
      <Link href="/gallery">
        <a className="text-2xl transition ease-in-out duration-100 pt-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">Gallery</a>
      </Link>
      <Link href="/game-info">
        <a className="text-2xl transition ease-in-out duration-100 pt-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">Game Info</a>
      </Link>
      <Link href="/game-info">
        <a className="text-2xl transition ease-in-out duration-100 pt-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">Feedback</a>
      </Link>
      <ThemeToggle forceRerender={props.forceRerender} />
      <span></span>
    </nav>
  )
}