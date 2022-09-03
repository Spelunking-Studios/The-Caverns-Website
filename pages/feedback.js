import Head from 'next/head';
import NavBar from "../components/nav.js";
import Footer from "../components/footer.js";
import NumberInput from "../components/numberInput.js";
import { darkMode } from "../globalStates/theme.js";
import dropdownStyles from "./dropdown.module.css";
import { useState } from "react";

export default function Feedback(props) {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [category, setCategory] = useState("Select One");
    const [fc, setFc] = useState(``);
    const [form_content, setForm_content] = useState("");
    const [form_bugSeverity, setForm_bugSeverity] = useState(2);
    const dropdownClick = () => {
        setDropdownActive(!dropdownActive);
    };
    const dropdownClickBug = () => {
        dropdownClick();
        setCategory("Bug");
        loadBugText();
    };
    const dropdownClickSuggestion = () => {
        dropdownClick();
        setCategory("Suggestion");
        loadSuggestionText();
    };
    const setFormContent = (e) => {
        setForm_content(form_content + e.target.value);
    }
    const setBugSeverity = (e) => {
        setForm_bugSeverity()
    };
    const loadBugText = () => {
        setFc(
            <div>
                <textarea placeholder="Enter description" className="rounded-lg p-3 outline-none text-black dark:text-white bg-neutral-300 dark:bg-neutral-600 w-full mx-auto mt-8 mb-6 resize-none" name="content" onInput={setFormContent}></textarea>
                <div className="grid grid-cols-3 mb-6">
                    <p>Bug Severity</p>
                    {/*<input type="number" min="1" max="10" name="bug-severity" className="text-black dark:text-white bg-neutral-300 dark:bg-neutral-600" onChange={e => {setForm_bugSeverity(e.target.value)}} onInput={e => {setForm_bugSeverity(e.target.value)}}/>*/}
                    <NumberInput min={1} max={5} name="bug-severity" classes="col-span-2"/>
                </div>
            </div>
        )
    }
    const loadSuggestionText = () => {
        setFc(
            <textarea placeholder="Enter description" className="rounded-lg p-3 outline-none text-black dark:text-white bg-neutral-300 dark:bg-neutral-600 w-full mx-auto mt-8 mb-6 resize-none" name="content" onInput={setFormContent}></textarea>
        )
    }
    return (
        <div className={`${(darkMode % 2) ? "dark" : ""}`}>
            <div className="flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
                <Head>
                    <title>Feedback - The Caverns</title>
                </Head>
                <NavBar forceRerender={props.forceRerender} />
                <header className="h-fit w-full overflow-hidden">
                    <h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">FEEDBACK</h1>
                </header>
                <main className="flex-grow w-full mx-auto min-h-full">
                    <form method="GET" action="https://project.the-caverns.repl.co/api/feedback.php" className=" border-neutral-300 dark:border-neutral-600 w-1/3 mx-auto rounded">
                        <fieldset className="grid grid-cols-4 mb-4">
                            <label className="text-2xl p-1 ml-3">Subject</label>
                            <div className="col-span-3">
                            <input type="text" name="title" required className="fixed px-3 w-1/4 rounded-lg col-span-3 h-10 p-2 text-left bg-neutral-300 dark:bg-neutral-600 outline-none focus:border-4 focus:border-neutral-400 focus:dark:border-neutral-500" />
                            </div>
                        </fieldset>
                        <fieldset className="grid grid-cols-4">
                            <label className="text-2xl p-1 ml-3">Category</label>
                            <div className="col-span-3">
                            <div id="dropdown" class={`fixed ${dropdownStyles.dropdown} bg-neutral-300 dark:bg-neutral-600 rounded-lg px-3 dark:text-gray-200 dark:text-neutral-300 text-neutral-700 w-1/4 col-span-3 p-0`} active={"" + dropdownActive}>
                                <p className="text-lg transition ease-in-out duration-100 p-1 leading-loose hover:cursor-pointer select-none rounded-none" onClick={dropdownClick}>{category}</p>
                                <ul className="w-full pl-3 pr-3" aria-labelledby="dropdownMenu">
                                    <p className="text-lg transition ease-in-out duration-100 p-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose hover:cursor-pointer" onClick={dropdownClickBug}>Bug</p>
                                    <p className="text-lg transition ease-in-out duration-100 p-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose hover:cursor-pointer" onClick={dropdownClickSuggestion}>Suggestion</p>
                                </ul>
                            </div>
                            </div>
                        </fieldset>
                        {fc}
                        <input type="submit" value="Submit" className="disabled:cursor-not-allowed enabled:hover:cursor-pointer rounded-lg bg-neutral-300 dark:bg-neutral-500 p-3 transition ease-in-out enabled:hover:scale-110 enabled:focus:scale-110 mx-auto mt-3 enabled:dark:hover:bg-neutral-400 enabled:dark:focus:bg-neutral-400 block text-2xl outline-none" disabled={true} />
                    </form>
                </main>
                <Footer />
            </div>
        </div>
    )
}