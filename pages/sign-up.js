import Head from 'next/head';
import Link from "next/link";
import Footer from "../components/footer.js";
import NavBar from "../components/nav.js";
import { darkMode } from "../globalStates/theme.js";
import { useState } from 'react';

export default function SignUp(props) {

    const [showPassword, setShowPassword] = useState (false)

    return (
        <div className={`${(darkMode % 2) ? "dark" : ""}`}>
            <div className="transition ease-in-out flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
                <Head>
                    <title>Sign Up - The Caverns</title>
                </Head>
                <NavBar forceRerender={props.forceRerender} />
                <header className="h-fit w-full overflow-hidden">
                    <h1 className="text-5xl lg:text-7xl text-center text-zinc-800 mt-28 mb-11 mr-auto ml-auto dark:text-neutral-200 font-cinzel">SIGN UP</h1>
                    <div>
                    </div>
                </header>
                <main className="flex-grow w-full mx-auto min-h-full">
                    <div className="mx-auto w-full">
                        <form class="w-9/12 lg:w-1/5 mx-auto" method="POST" action="/api/auth/sign-up">
                            <fieldset class="mx-auto grid row-3 gap-2">
                                <input class="transition ease-in-out text-xl outline-none bg-zinc-600 m-2 px-2 py-1 border-2 border-zinc-600 rounded-lg focus:border-zinc-500" type="email" name="email" placeholder="Email" />
                                <div className="flex flex-row transition ease-in-out text-xl outline-none bg-zinc-600 m-2 px-2 py-1 border-2 border-zinc-600 rounded-lg focus:border-zinc-500">
                                <input className="w-full outline-none text-xl bg-zinc-600" type={showPassword? "text" : "password"} id="passwordBox" name="password" placeholder="Password"/>
                                    <div className="mr-6 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`absolute w-6 h-6 m-auto select-none cursor-pointer ${showPassword? "scale-100" : "scale-0"}`} onClick={ ()=>setShowPassword(!showPassword)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`absolute w-6 h-6 m-auto select-none cursor-pointer ${showPassword? "scale-0" : "scale-100"}`} onClick={ ()=>setShowPassword(!showPassword)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    </div>
                                </div>
                                <input class="transition ease-in-out text-xl outline-none bg-zinc-600 m-2 px-2 py-1 border-2 border-zinc-600 rounded-lg focus:border-zinc-500" type={showPassword? "text" : "password"} name="password" placeholder="Confirm password" />
                                <p class="m-auto my-2 lg:m-2">Already have an account? Sign in <a class="transition ease-in-out underline hover:text-sky-300" href="/sign-in">here</a></p>
                                <input class="rounded-lg bg-neutral-300 dark:bg-neutral-500 px-3 py-2 transition ease-in-out enabled:hover:scale-110 enabled:focus:scale-110 mx-auto my-3 enabled:dark:hover:bg-neutral-400 enabled:dark:focus:bg-neutral-400 block text-2xl outline-none" type="submit" value="Submit" />
                            </fieldset>
                            
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}