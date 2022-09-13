import Head from 'next/head';
import NavBar from "../components/nav.js";
import Footer from "../components/footer.js";
import { darkMode } from "../globalStates/theme.js";
import { getCookie, setCookie } from 'cookies-next';
import redirect from 'nextjs-redirect';

export default function User(props) {
    if (!getCookie("ahc")) {
        const Redirect = redirect('/sign-in');
        return (
            <Redirect>
                <p className="text-2xl text-center mx-auto my-auto block">Redirecting...</p>
            </Redirect>
        )
    }
    return (
        <div className={`${(darkMode % 2) ? "dark" : ""}`}>
            <div className="flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
                <Head>
                    <title>USER - The Caverns</title>
                </Head>
                <NavBar forceRerender={props.forceRerender}/>
                <header className="h-fit w-full overflow-hidden">
                    <h1 className="text-5xl lg:text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">USER</h1>
                </header>
                <main className="flex-grow w-full mx-auto min-h-full">
                    <p>User</p>
                </main>
                <Footer/>
            </div>
        </div>
    )
}