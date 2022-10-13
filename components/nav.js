import Link from "next/link";
import ThemeToggle from "./theme-toggle.js";
import dropdownStyles from "./dropdown.module.css";
import { useState } from "react";
import styles from "./nav.module.css";

export default function NavBar(props) {
    const [dropdownActive, setDropdownActive] = useState(false);
    const dropdownClick = () => {
        setDropdownActive(!dropdownActive);
    }
    return (
        <nav className={styles.nav}>
            <span></span>
            <button id="dropdownMenu" data-dropdown-toggle="dropdown" type="button" className={dropdownStyles.dropdownToggle} onClick={dropdownClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-8" active={"" + dropdownActive}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            <div id="dropdown" className={dropdownStyles.dropdown} active={"" + dropdownActive} style={{ position: "absolute", top: "3.5rem" }}>
                <ul className="transition ease-in-out grid grid-col-1 py-1 text-sm dark:bg-zinc-900 bg-zinc-200 rounded-b-lg pr-5 pl-3 dark:text-gray-200 dark:text-neutral-300 text-neutral-700 w-40" aria-labelledby="dropdownMenu">
                    <Link href="/download">
                        <a className={styles["nav-link"]}>Download</a>
                    </Link>
                    <Link href="/gallery">
                        <a className={styles["nav-link"]}>Gallery</a>
                    </Link>
                    <Link href="/game-info">
                        <a className={styles["nav-link"]}>Game Info</a>
                    </Link>
                    <Link href="/feedback">
                        <a className={styles["nav-link"]}>Feedback</a>
                    </Link>
                </ul>
            </div>

            <Link href="/">
                <a className={styles["nav-link"]}>The Caverns</a>
            </Link>

            <div className="flex flex-grow"></div>

            <Link href="/sign-in">
                <a className={styles["nav-link"]}>Sign In</a>
            </Link>

            <ThemeToggle forceRerender={props.forceRerender} />
            <span></span>
        </nav>
    )
}