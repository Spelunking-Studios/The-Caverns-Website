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
				<img className={`flex-1 rounded w-auto h-auto ml-auto mr-auto max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl ${(index == i) ? styles.imageCarouselActiveImage : styles.imageCarouselInactiveImage}`} src={imageSrc} key={i}/>
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
	{/*<div className="w-full">*/}
	return (
			<div className={`ml-auto mr-auto flex overflow-hidden mt-7 mb-7 ${styles.imageCarousel} min-h-xl`}>
				{images}
			</div>
	)
	{/*</div>*/}
}