import Head from 'next/head';
import Link from "next/link";
import NavBar from "../components/nav.js";
import { darkMode } from "../globalStates/theme.js";
import { useState } from 'react';


export default function SignIn(props) {

    const [showPassword, setShowPassword] = useState (false)
    const [googleSignin, setGoogleSignin] = useState (false)

    return (
        <div className={`${(darkMode % 2) ? "dark" : ""}`}>
            <div className="transition ease-in-out flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
                <Head>
                    <title>Sign In - The Caverns</title>
                </Head>
                <NavBar forceRerender={props.forceRerender} />
                <header className="h-fit w-full overflow-hidden">
                    <p className={` ${googleSignin? "text-9xl mt-28 scale pb-96 mx-10 mb-96 leading-normal" : "scale-0" }`}>My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104.</p>
                    <h1 className="text-5xl lg:text-7xl text-center text-zinc-800 mt-28 mb-11 mr-auto ml-auto dark:text-neutral-200 font-cinzel">SIGN IN</h1>
                </header>
                <main className="flex-grow w-full mx-auto min-h-full">
                    <div className="mx-auto w-full">
                        <form className="w-9/12 lg:w-1/5 mx-auto" method="POST" action="/api/auth/sign-in">
                            <fieldset className="grid row-3">
                                <input className="transition ease-in-out text-xl outline-none bg-zinc-600 mx-2 mb-3 px-2 py-1 border-2 border-zinc-600 rounded-lg focus:border-zinc-500 autofill:bg-zinc-900" type="email" name="email" placeholder="Email" />
                                <div className="grid grid-rows-1 relative">
                                    <input className="transition ease-in-out text-xl outline-none bg-zinc-600 m-2 px-2 py-1 border-2 border-zinc-600 rounded-lg focus:border-zinc-500" type={showPassword? "text" : "password"} id="passwordBox" name="password" placeholder="Password"/>
                                    <div className="absolute mt-4 right-11">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`absolute w-6 h-6 m-auto select-none cursor-pointer ${showPassword? "scale-100" : "scale-0"}`} onClick={ ()=>setShowPassword(!showPassword)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`absolute w-6 h-6 m-auto select-none cursor-pointer ${showPassword? "scale-0" : "scale-100"}`} onClick={ ()=>setShowPassword(!showPassword)}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    </div>
                                </div>
                                <input class="rounded-lg bg-neutral-300 dark:bg-neutral-500 px-2 py-1.5 transition ease-in-out mx-2 my-3 enabled:dark:hover:bg-neutral-400 enabled:dark:focus:bg-neutral-400 block text-xl outline-none cursor-pointer" type="submit" value="Sign In" />
                                <div className="relative border-b-2 mx-2 my-6">
                                    <span className="absolute -top-2.5 text-center w-full "><a className="dark:bg-zinc-700 px-2 py-1 rounded-lg">OR</a></span>
                                </div>
                                <div className="transition ease-in-out dark:bg-zinc-100 dark:hover:bg-zinc-400 mx-2 text-black py-1.5 rounded-lg text-xl flex grid-cols-2 gap-4 my-4 justify-center cursor-pointer" onClick={ ()=>setGoogleSignin(!googleSignin)}>
                                    <img src="/images/GoogleLogo.webp" className="w-7"/>
                                    <p>Sign in with Google</p>
                                </div>
                                <p className="m-auto my-2 lg:m-2">Don't have an account? Sign up <a class="transition ease-in-out underline hover:text-sky-300" href="/sign-up">here</a></p>
                            </fieldset>
                            
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

