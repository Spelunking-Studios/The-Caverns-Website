import styles from "./numberInput.module.css";

export default function NumberInput({ min, max, name, classes, values, labels}) {
    let comps = [];
    let ls = [];
    for (let i = min; i <= max; i++ ) {
        comps.push(
            <input type="radio" name={name} value={values[i - min]}/>
        );
        ls.push(
            <p className="rotate-45 xl:rotate-0">{ labels[i - min] }</p>
        );
    }
    {/*<input type="number" min={min} max={max} name={name} className="text-black dark:text-white bg-neutral-300 dark:bg-neutral-600 appearance-none col-span-2 text-lg outline-neutral-300 dark:outline-neutral-600 px-2"/>*/}
    return (
        <div className={`${styles.numberInput} ${classes} grid-rows-2 gap-4 lg:gap-0`}>
            <div>
                { comps }
            </div>
            <div>
                { ls }
            </div>
        </div>
    )
}