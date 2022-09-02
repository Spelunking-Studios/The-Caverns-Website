import styles from "./numberInput.module.css";

export default function NumberInput({ min, max, name, classes}) {
    let comps = [];
    let labels = [];
    for (let i = min; i <= max; i++) {
        comps.push(
            <input type="radio" name={name} value={i}/>
        );
        labels.push(
            <p>{i}</p>
        );
    }
    {/*<input type="number" min={min} max={max} name={name} className="text-black dark:text-white bg-neutral-300 dark:bg-neutral-600 appearance-none col-span-2 text-lg outline-neutral-300 dark:outline-neutral-600 px-2"/>*/}
    return (
        <div className={`${styles.numberInput} ${classes}`}>
            <div>
                { comps }
            </div>
            <div>
                { labels }
            </div>
        </div>
    )
}