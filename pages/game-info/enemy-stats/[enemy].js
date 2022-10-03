import Head from 'next/head';
import { useRouter } from 'next/router'
import NavBar from "../../../components/nav.js";
import Footer from "../../../components/footer.js";
import { darkMode } from "../../../globalStates/theme.js";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function enemyStats(props) {
	const router = useRouter();
	const enemy = router.query.enemy;
	const { data, error } = useSWR('/api/game-info/enemy-stats/' + enemy, fetcher);
	if (!enemy) {
		return (
			<div>Not found</div>
		)
	}
	if (error) {
		return (
			<div>Error loading</div>
		)
	}
	if (!data) {
		return (
			<div>Loading...</div>
		)
	}
	const jdata = JSON.parse(data);
	return (
		<div className={`${(darkMode % 2) ? "dark" : ""}`}>
			<div className="flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
				<Head>
					<title>{ jdata.name } - The Caverns</title>
				</Head>
				<NavBar forceRerender={props.forceRerender}/>
				<header className="h-fit w-full overflow-hidden min-h-full">
					<h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">{ jdata.name.toUpperCase() } STATS</h1>
				</header>
				<main className="flex-grow w-full mx-auto min-h-full">
					<div className="grid grid-rows-3 rounded-lg w-9/12 lg:w-1/3 border-4 border-zinc-400 mx-auto text-xl p-4 mb-24">
						<a className="text-2xl p-1">Name: { jdata.name }</a>
						<a className="text-2xl p-1">Health: { jdata.a.health } ({ (jdata.a.health / 100) * 100 }% of player's health)</a>
						<a className="text-2xl p-1">Damage: { jdata.a.damage }</a>
					</div>
				</main>
				<Footer/>
			</div>
		</div>
	)
	{}
}