export default function NumberInput({ min, max, name, classes}) {
    return (
        <input type="number" min={min} max={max} name={name} className={classes}/>
    )
}