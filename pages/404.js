import Head from 'next/head';
import NavBar from "../components/nav.js";
import styles from "../styles/pages/404.module.css";

export default function Custom404() {
    return (
        <div>
			<div className={styles.container}>
				<Head>
					<title>404 - The Caverns</title>
				</Head>
				<NavBar/>
				<header className={styles.header}>
					<h1 className={styles.title}>404</h1>
				</header>
				<main className={styles.main}>
					<p className={styles.message}>Thats a 404.</p>
				</main>
			</div>
		</div>
    )
}