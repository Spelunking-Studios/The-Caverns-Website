import { useState, useEffect } from "react";
import styles from "./wordWheel.module.css";

function useForceUpdate() {
	const [value, setValue] = useState(0);
	return () => setValue(value => value + 1);
}

export default function WordWheel(props) {
	const forceUpdate = useForceUpdate();
	const [tv, setTv] = useState(props.vals[0]);
	const [ntv, setNtv] = useState("test");
	let items = props.vals ? props.vals : [];
	const [period, setPeriod] = useState(props.period ? props.period : 1000);
	const [count, setCount] = useState(0);
	const nextCount = () => {
		let r = -1;
		while (r < 0 || r == count) {
			r = Math.floor(Math.random() * items.length);
		}
		return r;//(count + 1) % (items.length - 1);//(count < items.length - 1) ? count + 1 : 0;
	}
	const uef = () => {
		let interval = setInterval(() => {
			//setTv(items[count]);
			setTv(ntv);
			setCount(nextCount);
			//console.log(nextCount(), items[nextCount()], items);
			setNtv(items[count]);
		}, period);
		return () => {
			clearInterval(interval);
		}		
	}
	useEffect(uef);
	return (
		<span className={`${styles.wordWheel} leading-1`}>
			<span className={`${styles.wordWheelMain} ${styles.wordWheelMainAnm}`}>{tv}</span>
			<span className={`${styles.wordWheelNext} ${styles.wordWheelNextAnm}`}>{ntv}</span>
		</span>
	)
}