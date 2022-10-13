import Head from 'next/head';
import NavBar from "../components/nav.js";
import NumberInput from "../components/numberInput.js";
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
            <div className="p-2">
                <textarea placeholder="Enter description" className="rounded-lg p-3 outline-none text-black dark:text-white bg-zinc-300 dark:bg-zinc-600 w-full mx-auto mb-6 resize-none border-2 border-zinc-300 dark:border-zinc-600 focus:border-zinc-500 focus:dark:border-neutral-500" name="content" onInput={setFormContent}></textarea>
                <div className="grid lg:grid-cols-3 mb-6">
                    <p className="mx-auto lg:m-0 lg:pr-8">How often does this disrupt your gameplay?</p>
                    {/*<input type="number" min="1" max="10" name="bug-severity" className="text-black dark:text-white bg-neutral-300 dark:bg-neutral-600" onChange={e => {setForm_bugSeverity(e.target.value)}} onInput={e => {setForm_bugSeverity(e.target.value)}}/>*/}
                    <NumberInput min={1} max={5} name="bug-severity" classes="lg:col-span-2" values={[1, 2, 3, 4, 5]} labels={["Rarely", "Somewhat often", "Often", "Quite Frequent", "Constantly"]}/>
                </div>
            </div>
        )
    }
    const loadSuggestionText = () => {
        setFc(
            <div className="p-2">
            <textarea placeholder="Enter description" className="rounded-lg p-3 outline-none text-black dark:text-white bg-zinc-300 dark:bg-zinc-600 w-full mx-auto mb-6 resize-none border-2 border-zinc-300 dark:border-zinc-600 focus:border-zinc-500 focus:dark:border-neutral-500" name="content" onInput={setFormContent}></textarea>
            </div>
        )
    }
    return (
        <div>
            <div className="transition ease-in-out flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
                <Head>
                    <title>Feedback - The Caverns</title>
                </Head>
                <NavBar forceRerender={props.forceRerender} />
                <header className="h-fit w-full overflow-hidden">
                    <h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">FEEDBACK</h1>
                </header>
                <main className="flex-grow w-full mx-auto min-h-full">
                    <form method="GET" action="https://project.the-caverns.repl.co/api/feedback.php" className=" border-neutral-300 dark:border-neutral-600 w-5/6 lg:w-1/3 mx-auto rounded">
                    <fieldset className="grid grid-cols-3 lg:grid-cols-4 p-2 mx-auto">
                            <label className="text-xl lg:text-2xl my-auto p-1">Subject</label>
                            <input type="text" name="title" required className="w-full rounded-lg col-span-2 lg:col-span-3 h-10 p-2 text-left bg-neutral-300 dark:bg-zinc-600 outline-none focus:border-2 focus:border-zinc-500 focus:dark:border-neutral-500"/>
                        </fieldset>
                        <fieldset className="grid grid-cols-3 lg:grid-cols-4 p-2 mx-auto">
                            <label className="text-xl lg:text-2xl my-auto p-1">Category</label>
                            <div id="dropdown" class={`relative ${dropdownStyles.dropdown} bg-zinc-300 dark:bg-zinc-600 rounded-lg px-3 dark:text-gray-200 dark:text-zinc-300 text-neutral-700 col-span-2 lg:col-span-3 p-0`} active={"" + dropdownActive}>
                                <p className="text-lg transition ease-in-out duration-100 p-1 leading-loose hover:cursor-pointer select-none rounded-none" onClick={dropdownClick}>{category}</p>
                                <ul className="grid grid-col-1 py-1 text-sm bg-zinc-300 dark:bg-zinc-600 rounded-b-lg pr-5 pl-3 dark:text-gray-200 dark:text-neutral-300 text-neutral-700 w-full max-h-32 overflow-y-auto mx-auto" aria-labelledby="dropdownMenu">
                                    <p className="text-lg transition ease-in-out duration-100 p-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose hover:cursor-pointer" onClick={dropdownClickBug}>Bug</p>
                                    <p className="text-lg transition ease-in-out duration-100 p-1 hover:text-sky-500 dark:hover:text-sky-400 leading-loose hover:cursor-pointer" onClick={dropdownClickSuggestion}>Suggestion</p>
                                </ul>
                            </div>
                        </fieldset>
                        {fc}
                        <input type="submit" value="Submit" className="rounded-lg bg-neutral-300 dark:bg-neutral-500 px-3 py-2 transition ease-in-out enabled:hover:scale-110 enabled:focus:scale-110 mx-auto my-3 enabled:dark:hover:bg-neutral-400 enabled:dark:focus:bg-neutral-400 block text-2xl outline-none" disabled={true} />
                    </form>
                </main>
            </div>
        </div>
    )
}