import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles["footer-section"]}>
				<p>Links</p>
				<p><Link href="/download" target="_blank"><a>Download</a></Link></p>
				<p><Link href="/sign-up" target="_blank"><a>Sign Up</a></Link></p>
				<p><Link href="/sign-in" target="_blank"><a>Sign In</a></Link></p>
			</div>
			<img className={styles["footer-image"]} src="/images/SpelunkingStudios.webp"/>
			<div className={styles["footer-section"]}>
				<p>Authors</p>
				<p><a href="https://github.com/LGgameLAB" target="_blank">Luke Gonsalves</a></p>
				<p>Matthew Hosier</p>
				<p><a href="https://github.com/https123456789" target="_blank">Ben Landon</a></p>
				<p><a href="https://github.com/AryanUPA" target="_blank">Aryan Upadhyaya</a></p>
				<p><a href="https://github.com/DevBro123" target="_blank">Deven McWhirk</a></p>
			</div>
		</div>
		/*<div className={styles.footer}>
			<div className={styles["footer-section"]}>
				<p className="text-lg col-span-1 font-semibold mb-2">Links</p>
				<p><Link href="/download" target="_blank"><a className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Download</a></Link></p>
				<p><a href="https://github.com/LGgameLAG/The-Caverns" target="_blank" className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">GitHub Repository</a></p>
				<p className="whitespace-pre"> </p>
				<p className="whitespace-pre lg:whitespace-normal"> </p>
				<p className="whitespace-pre lg:whitespace-normal"> </p>
			</div>
			<img className={styles["footer-image"]} src="/images/SpelunkingStudios.webp"/>
			<div className={styles["footer-section"]}>
				<p className="text-lg col-span-1 lg:col-span-2 font-semibold mb-2">Authors</p>
				<p><a href="https://github.com/LGgameLAB" target="_blank" className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Luke Gonsalves</a></p>
				<p className="text-sm lg:text-lg m-auto">Matthew Hosier</p>
				<p><a href="https://github.com/https123456789" target="_blank" className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Ben Landon</a></p>
				<p className="text-sm lg:text-lg m-auto">Aryan Upadhyaya</p>
				<p><a href="https://github.com/DevBro123" target="_blank" className="text-sm lg:text-lg m-auto transition ease-in-out duration-100 hover:text-sky-600 hover:underline dark:hover:text-sky-300">Deven McWhirk</a></p>
			</div>
		</div>*/
	)
}