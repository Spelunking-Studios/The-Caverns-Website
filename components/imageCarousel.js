import { useState, useEffect } from "react";
import styles from "./imageCarousel.module.css";

export default function ImageCarousel(props) {
	const [index, setIndex] = useState(props.index ? props.index : 0);
	let imageSrcs = props.images ? props.images.split(";") : [];
	const [images, setImages] = useState([]);
	const [time, setTime] = useState((new Date()).getTime());
	const loadImages = () => {
		let l = [];
		imageSrcs.forEach((imageSrc, i) => {
			l.push(
				<img className={`${styles.imageCarouselImage} ${(index == i) ? styles.imageCarouselActiveImage : styles.imageCarouselInactiveImage}`} src={imageSrc} key={i}/>
			)
		});
		setImages(l);
	}
	if (images.length == 0) {
		loadImages();
	}
	const forward = () => {
		if (index + 1 >= images.length) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
		loadImages();
	}
	const backward = () => {
		if (index - 1 < 0) {
			setIndex(images.length - 1);
		} else {
			setIndex(index - 1);
		}
		console.log(index);
		loadImages();
	}
	useEffect(() => {
		let magicNumber = 3000;
		let interval = setInterval(() => {
			setTime((new Date()).getTime());
			if (((Math.floor(time / magicNumber) * magicNumber) % magicNumber) == 0) {
				forward();
			} else {
				console.log(time);
			}
		}, magicNumber);
		return () => {
			clearInterval(interval);
		}
	})
	return (
			<div className={styles.imageCarousel}>
				{images}
			</div>
	)
}