import Link from "next/link";
import ThemeToggle from "./theme-toggle.js";
import dropdownStyles from "./dropdown.module.css";
import { useState } from "react";

export default function NavBar(props) {
    const [dropdownActive, setDropdownActive] = useState(false);
    const dropdownClick = () => {
        setDropdownActive(!dropdownActive);
    }
    return (
        <nav className="z-40 w-full h-14 dark:bg-zinc-800 bg-zinc-300 flex gap-6 fixed dark:text-neutral-200">
            <span></span>
            <button id="dropdownMenu" data-dropdown-toggle="dropdown" type="button" class={`${dropdownStyles.dropdownToggle}`} onClick={dropdownClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="transition ease-in-out w-8 hover:scale-125" active={"" + dropdownActive}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <div id="dropdown" class={`absolute top-14 ${dropdownStyles.dropdown}`} active={"" + dropdownActive}>
                <ul className="grid grid-col-1 py-1 text-sm dark:bg-zinc-900 bg-zinc-200 rounded-b-lg pr-5 pl-3 dark:text-gray-200 dark:text-neutral-300 text-neutral-700 w-40" aria-labelledby="dropdownMenu">
                    <Link href="/download">
                        <a className="text-lg transition ease-in-out duration-100 p-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">Download</a>
                    </Link>
                    <Link href="/gallery">
                        <a className="text-lg transition ease-in-out duration-100 p-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">Gallery</a>
                    </Link>
                    <Link href="/game-info">
                        <a className="text-lg transition ease-in-out duration-100 p-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">Game Info</a>
                    </Link>
                    <Link href="/game-info">
                        <a className="text-lg transition ease-in-out duration-100 p-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">Feedback</a>
                    </Link>
                </ul>
            </div>

            <Link href="/">
                <a className="text-2xl transition ease-in-out duration-100 pt-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose">The Caverns</a>
            </Link>

            <ThemeToggle forceRerender={props.forceRerender} />
            <span></span>
        </nav>
    )
}