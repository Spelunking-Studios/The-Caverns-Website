import Head from 'next/head';
import Link from "next/link";
import Footer from "../components/footer.js";
import NavBar from "../components/nav.js";
import { darkMode } from "../globalStates/theme.js";

export default function CheckYourEmail(props) {
    {/* We need to split the sign in and sign up into 2 pages
    */}
    return (
        <div className={`${(darkMode % 2) ? "dark" : ""}`}>
            <div className="transition ease-in-out flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
                <Head>
                    <title>Check Your Email - The Caverns</title>
                </Head>
                <NavBar forceRerender={props.forceRerender} />
                <header className="h-fit w-full overflow-hidden">
                    <h1 className="text-5xl lg:text-7xl text-center text-zinc-800 mt-28 mb-5 mr-auto ml-auto dark:text-neutral-200 font-cinzel">SIGN UP</h1>
                    <div>
                        <p className="text-center mx-auto w-fit block font-cinzel mb-20 hover:text-sky-500">Last Step!</p>
                    </div>
                </header>
                <main className="flex-grow w-full mx-auto min-h-full">
                    <p className="text-center">Check your email.</p>
                </main>
                <Footer />
            </div>
        </div>
    )
}