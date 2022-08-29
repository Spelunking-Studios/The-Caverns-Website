import Head from 'next/head';
import Link from "next/link";
import NavBar from "../../components/nav.js";
import Footer from "../../components/footer.js";
import { darkMode } from "../../globalStates/theme.js";

export default function GameInfo(props) {
  return (
    <div className={`${(darkMode % 2) ? "dark" : ""}`}>
      <div className="flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
        <Head>
          <title>Game Info - The Caverns</title>
        </Head>
        <NavBar forceRerender={props.forceRerender} />
        <header className="h-fit w-full overflow-hidden min-h-full">
          <h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">GAME INFO</h1>
          <h2 className="text-3xl text-center text-zinc-500 mr-auto ml-auto dark:text-neutral-300">This is the home of all sorts of information about the game, from enemies, to the level progression.</h2>
        </header>
        <main className="flex-grow w-full pt-20 ml-auto mr-auto min-h-full">
          <div className="grid grid-cols-3 gap-10 w-1/3 mx-auto pt-10 pb-10">
            <Link href="/game-info/enemy-stats">
            <div className="transition ease-in-out rounded-lg rounded-lg border-4 border-zinc-600 bg-zinc-300 dark:border-zinc-500 dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:scale-105 hover:bg-zinc-400 p-6 col-span-3 cursor-pointer">
                <a className="text-2xl">Enemy Stats</a>
              <p className="text-lg">Learn about different enemies, and the best ways to defeat them.</p>
            </div>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}