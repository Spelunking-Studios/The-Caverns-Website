import styles from "./download.module.css";

export default function DownloadList() {
	return (
		<div className="flex flex-col w-1/2 mx-auto gap-10 pb-16 dark:bg-zinc-700 dark:text-neutral-100">
			<div className="flex flex-row bg-zinc-300 dark:bg-zinc-600 rounded-lg">
				<div className="flex-1 mt-auto mb-auto mx-auto">
					<img src="https://www.freepnglogos.com/uploads/windows-logo-png/file-windows-logo-and-wordmark-svg-wikimedia-commons-24.png" className="max-h-14 ml-16 mt-auto mb-auto"/>
				</div>
				<div className="flex-1">
					<a href="/downloads/windows/current/The Caverns.exe" className={`text-center mt-10 mb-10 mx-auto block leading-10 text-2xl bg-green-400 dark:bg-green-600 w-60 h-14 p-2 rounded-lg transition ease-in-out hover:scale-110 hover:bg-emerald-500 dark:hover:bg-emerald-500 ${styles.download_btn}`}><span className="material-symbols-outlined relative top-1">download</span>Download</a>
				</div>
			</div>
			<div className="flex flex-row bg-zinc-300 dark:bg-zinc-600 rounded-lg">
				<div className="flex-1  mt-auto mb-auto mx-auto">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/MacOS_wordmark_%282017%29.svg/512px-MacOS_wordmark_%282017%29.svg.png" className="max-h-10 ml-16 mt-auto mb-auto"/>
				</div>
				<div className="flex-1">
					<a tobehref="/downloads/macos/current/The Caverns.dmg" className="text-center mt-10 mb-10 mx-auto block leading-10 text-2xl bg-zinc-200 dark:bg-zinc-500 w-60 h-14 p-2 rounded-lg cursor-not-allowed">Coming Soon!</a>
				</div>
			</div>
			<div className="flex flex-row bg-zinc-300 dark:bg-zinc-600 rounded-lg">
				<div className="flex-1  mt-auto mb-auto mx-auto">
					<img src="images/linux-logo.png" className="h-auto w-auto max-h-20 ml-16 mt-auto mb-auto"/>
				</div>
				<div className="flex-1">
					<a tobehref="/downloads/linux/debian/current/The Caverns.deb" className="text-center mt-10 mb-10 mx-auto block leading-10 text-2xl bg-zinc-200 dark:bg-zinc-500 w-60 h-14 p-2 rounded-lg cursor-not-allowed">Coming Soon!</a>
				</div>
			</div>
		</div>
	)
}