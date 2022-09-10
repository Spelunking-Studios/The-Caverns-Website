import Head from 'next/head';
import Link from "next/link";
import Footer from "../components/footer.js";
import NavBar from "../components/nav.js";
import { darkMode } from "../globalStates/theme.js";

export default function SignUp(props) {
    {/* We need to split the sign in and sign up into 2 pages
    */}
    return (
        <div className={`${(darkMode % 2) ? "dark" : ""}`}>
            <div className="transition ease-in-out flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
                <Head>
                    <title>Sign Up - The Caverns</title>
                </Head>
                <NavBar forceRerender={props.forceRerender} />
                <header className="h-fit w-full overflow-hidden">
                    <h1 className="text-7xl text-center text-zinc-800 mt-28 mb-5 mr-auto ml-auto dark:text-neutral-200 font-cinzel">SIGN UP</h1>
                    <div>
                    </div>
                </header>
                <main className="flex-grow w-full mx-auto min-h-full">
                    <div className="mx-auto w-full">
                        <form class="w-1/4 mx-auto" method="POST" action="/api/auth/sign-up">
                            <fieldset class="mx-auto grid row-3 gap-2">
                                <input class="transition ease-in-out text-xl outline-none bg-zinc-600 m-2 px-2 py-1 border-2 border-zinc-600 rounded-lg focus:border-zinc-500" type="email" name="email" placeholder="Email" />
                                <input class="transition ease-in-out text-xl outline-none bg-zinc-600 m-2 px-2 py-1 border-2 border-zinc-600 rounded-lg focus:border-zinc-500" type="text" name="password" placeholder="Password" />
                                <input class="transition ease-in-out text-xl outline-none bg-zinc-600 m-2 px-2 py-1 border-2 border-zinc-600 rounded-lg focus:border-zinc-500" type="text" name="password" placeholder="Confirm password" />
                                <p class="m-2">Already have an account? Sign in <a class="transition ease-in-out underline hover:text-sky-300" href="/sign-in">here</a></p>
                                <input class="rounded-lg bg-neutral-300 dark:bg-neutral-500 p-3 transition ease-in-out enabled:hover:scale-110 enabled:focus:scale-110 mx-auto my-3 enabled:dark:hover:bg-neutral-400 enabled:dark:focus:bg-neutral-400 block text-2xl outline-none" type="submit" value="Submit" />
                            </fieldset>
                            
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}