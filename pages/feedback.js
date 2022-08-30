import Head from 'next/head';
import NavBar from "../components/nav.js";
import Footer from "../components/footer.js";
import { darkMode } from "../globalStates/theme.js";

export default function Download(props) {
  return (
    <div className={`${(darkMode % 2) ? "dark" : ""}`}>
		<div className="flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
			<Head>
				<title>Feedback - The Caverns</title>
			</Head>
			<NavBar forceRerender={props.forceRerender}/>
			<header className="h-fit w-full overflow-hidden">
				<h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">FEEDBACK</h1>
			</header>
			<main className="flex-grow w-full mx-auto min-h-full">
				<form method="GET" action="https://project.the-caverns.repl.co/api/feedback.php" className=" border-neutral-300 dark:border-neutral-600 w-1/3 mx-auto rounded">
                    <fieldset className="grid grid-cols-4 p-2 mx-auto">
                        <label className="text-2xl">Subject</label>
                        <input type="text" name="title" required className="w-full rounded-lg col-span-3 h-10 text-center bg-neutral-300 dark:bg-neutral-600"/>
                    </fieldset>
                    <input type="submit" value="Submit" className="hover:cursor-pointer rounded bg-neutral-300 dark:bg-neutral-600 p-3 transition ease-in-out hover:scale-110 mx-auto block text-2xl"/>
                </form>
			</main>
      <Footer/>
		</div>
	</div>
  )
}