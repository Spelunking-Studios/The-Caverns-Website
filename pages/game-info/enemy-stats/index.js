import Head from 'next/head';
import Link from "next/link";
import NavBar from "../../../components/nav.js";
import Footer from "../../../components/footer.js";
import { darkMode } from "../../../globalStates/theme.js";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function EnemyStats(props) {
  const { data, error } = useSWR('/api/game-info/enemies', fetcher);
  let jdata = null;
  if (data) {
    jdata = JSON.parse(data);
  }
  if (error) {
    return (
      <div className={`${(darkMode % 2) ? "dark" : ""}`}>
        <div className="min-h-screen w-full dark:bg-zinc-700 dark:text-neutral-200">
          <Head>
            <title>Enemy Stats - The Caverns</title>
          </Head>
          <NavBar forceRerender={props.forceRerender} />
          <header className="h-fit w-full overflow-hidden min-h-screen">
            <h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">ENEMY STATS</h1>
          </header>
          <main className="pt-20 ml-auto mr-auto min-h-full">
            <p className="text-4xl text-center">Sorry, we ran into an error.</p>
            <Footer />
          </main>
        </div>
      </div>
    )
  }
  if (!data) {
    return (
      <div className={`${(darkMode % 2) ? "dark" : ""}`}>
        <div className="min-h-screen w-full dark:bg-zinc-700 dark:text-neutral-200">
          <Head>
            <title>Enemy Stats - The Caverns</title>
          </Head>
          <NavBar forceRerender={props.forceRerender} />
          <header className="h-fit w-full overflow-hidden min-h-screen">
            <h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mx-auto dark:text-neutral-200 font-cinzel">ENEMY STATS</h1>
          </header>
          <main className="pt-20 ml-auto mr-auto min-h-full">
            <p className="text-4xl text-center">Loading...</p>
            <Footer />
          </main>
        </div>
      </div>
    )
  }
  let l = [];
  for (let i = 0; i < jdata.enemies.length; i++) {
    l.push((
      <Link href={`/game-info/enemy-stats/${jdata.enemies[i].toLowerCase()}`} className="">
      <div className="transition ease-in-out rounded-lg border-4 border-zinc-800 dark:border-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:scale-105 p-2 grid grid-cols-3 gap-5">
          <a className="text-4xl col-span-2 my-auto ml-6">{capitalizeFirstLetter(jdata.enemies[i])}</a>
        <img src={`/api/game-info/images/enemies/${jdata.enemies[i].toLowerCase()}`} className="" />
      </div>
      </Link>
    ))
  }
  return (
    <div className={`${(darkMode % 2) ? "dark" : ""}`}>
      <div className="min-h-screen w-full dark:bg-zinc-700 dark:text-neutral-200">
        <Head>
          <title>Enemy Stats - The Caverns</title>
        </Head>
        <NavBar forceRerender={props.forceRerender} />
        <header className="h-fit w-full overflow-hidden min-h-full">
          <h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">ENEMY STATS</h1>
        </header>
        <main className="pt-10 ml-auto mr-auto min-h-full">
          <div className={`grid grid-cols-${(jdata.enemies.length >= 3 ? "3" : jdata.enemies.length)} gap-24 w-1/2 ml-auto mr-auto pb-24`}>
            {l}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}