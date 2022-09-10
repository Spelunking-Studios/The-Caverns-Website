import Head from 'next/head';
import NavBar from "../components/nav.js";
import Footer from "../components/footer.js";
import ImageCarousel from "../components/imageCarousel.js";
import { darkMode } from "../globalStates/theme.js";

export default function Gallery(props) {
  return (
    <div className={`${(darkMode % 2) ? "dark" : ""}`}>
      <div className="transition ease-in-out flex flex-col min-h-screen w-full bg-zinc-100 dark:bg-zinc-700 dark:text-neutral-200">
        <Head>
          <title>Gallery - The Caverns</title>
        </Head>
        <NavBar forceRerender={props.forceRerender} />
        <header className="h-fit w-full overflow-hidden min-h-full">
          <h1 className="text-7xl text-center text-zinc-800 mt-28 mb-20 mr-auto ml-auto dark:text-neutral-200 font-cinzel">GALLERY</h1>
        </header>
        <main className="mx-0 mx-auto w-full min-h-full flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-14 px-0 lg:px-10 xl:px-24 pb-20">
            <div>
              <img src="/images/snap1.png" className="w-auto h-auto max-h-m max-w-md m-auto" />
            </div>
            <div>
              <img src="/images/snap3.png" className="w-auto h-auto max-h-m max-w-md m-auto" />
            </div>
            <div>
              <img src="/images/snap2.png" className="w-auto h-auto max-h-m max-w-md m-auto" />
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}