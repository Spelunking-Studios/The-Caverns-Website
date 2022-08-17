import styles from "./download.module.css";

export default function DownloadList() {
	return (
		<div className="flex flex-col w-10/12 ml-auto mr-auto gap-10 pt-10 pb-10 dark:bg-zinc-700 dark:text-neutral-200">
			<div className="flex flex-row">
				<div className="flex-1 mt-auto mb-auto ml-auto mr-auto">
					<img src="https://www.freepnglogos.com/uploads/windows-logo-png/file-windows-logo-and-wordmark-svg-wikimedia-commons-24.png" className="max-h-14 ml-auto mr-auto mt-auto mb-auto"/>
				</div>
				<div className="flex-1">
					<a href="/downloads/windows/current/The Caverns.exe" className={`text-center mt-10 mb-10 ml-auto mr-auto block leading-10 text-2xl bg-green-500 max-w-sm min-w-sm rounded dark:bg-green-700 ${styles.download_btn}`}><span className="material-symbols-outlined relative top-1">download</span>Download</a>
				</div>
			</div>
			<div className="flex flex-row">
				<div className="flex-1  mt-auto mb-auto ml-auto mr-auto">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/MacOS_wordmark_%282017%29.svg/512px-MacOS_wordmark_%282017%29.svg.png" className="max-h-10 ml-auto mr-auto mt-auto mb-auto"/>
				</div>
				<div className="flex-1">
					<a tobehref="/downloads/macos/current/The Caverns.dmg" className="text-center mt-10 mb-10 ml-auto mr-auto block leading-10 text-2xl bg-zinc-400 max-w-sm rounded cursor-not-allowed dark:bg-zinc-500">Coming Soon!</a>
				</div>
			</div>
			<div className="flex flex-row">
				<div className="flex-1  mt-auto mb-auto ml-auto mr-auto">
					<img src="/images/debian-logo.png" className="h-auto w-auto max-h-24 ml-auto mr-auto mt-auto mb-auto"/>
				</div>
				<div className="flex-1">
					<a tobehref="/downloads/linux/debian/current/The Caverns.deb" className="text-center mt-10 mb-10 ml-auto mr-auto block leading-10 text-2xl bg-zinc-400 max-w-sm min-w-sm rounded cursor-not-allowed dark:bg-zinc-500">Coming Soon!</a>
				</div>
			</div>
		</div>
	)
}