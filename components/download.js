import styles from "./download.module.css";

export default function DownloadList() {
	return (
		<div className={styles.download}>
			<div className={styles["download-option-container"]}>
				<div className={styles["dowload-option-image-container"]}>
					<img src="images/WindowsLogo.webp" className={`${styles["download-option-image"]}`}/>
				</div>
                <div className={styles["download-option-content-container"]}>
                    <a tobehref="/downloads/macos/current/The Caverns.dmg" className={styles["download-button"]} disabled>Coming Soon!</a>
                </div>
			</div>
			<div className={styles["download-option-container"]}>
				<div className={styles["dowload-option-image-container"]}>
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/MacOS_wordmark_%282017%29.svg/512px-MacOS_wordmark_%282017%29.svg.png" className={`${styles["download-option-image"]}`}/>
				</div>
                <div className={styles["download-option-content-container"]}>
				    <a tobehref="/downloads/macos/current/The Caverns.dmg" className={styles["download-button"]} disabled>Coming Soon!</a>
                </div>
			</div>
			<div className={styles["download-option-container"]}>
				<div className={styles["dowload-option-image-container"]}>
					<img src="images/linux-logo.png" className={`${styles["download-option-image"]}`}/>
				</div>
                <div className={styles["download-option-content-container"]}>
				    <a tobehref="/downloads/linux/debian/current/The Caverns.deb" className={styles["download-button"]} disabled>Coming Soon!</a>
                </div>
			</div>
		</div>
	)
}