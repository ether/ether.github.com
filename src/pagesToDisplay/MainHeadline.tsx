import gif from '../assets/img/etherpad_demo.gif'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCogs, faLanguage, faServer, faUsers} from "@fortawesome/free-solid-svg-icons";
import {Suspense} from "react";
import Link from "next/link";
export const MainHeadline = () => {
    return <div className="content primary showcase">
        <div className="wrap">
            <h1 className="font-normal ml-0 mr-0 mb-4 text-[2.5rem] mt-16 dark:text-white">
                <strong>Etherpad</strong> &mdash; the editor for <strong>documents that matter</strong>.
            </h1>
            <p className="text-xl mb-6 dark:text-gray-300">
                Real-time collaborative editing where authorship is the default, your server is the only server, and you decide what AI (if any) ever touches your text.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
                <Link href="/about" className="px-4 py-2 bg-primary text-white rounded hover:opacity-90">Read the manifesto &rarr;</Link>
                <Link href="/why-etherpad" className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white">Why Etherpad &rarr;</Link>
                <a href="https://github.com/ether/etherpad-lite#installation" target="_blank" className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white">Self-host in 5 minutes &rarr;</a>
            </div>
        </div>

        <div className="demo justify-center flex">
            <Suspense>
                <img src={gif.src} alt="Show the editor and how fast you can collaborate with other people online."/>
            </Suspense>
        </div>

        <div className="wrap">
            <h3 className="text-2xl font-bold mt-8 mb-4 dark:text-white">Sixteen years of being trusted with documents that matter</h3>
        </div>

        <div className="overview-bar dark:bg-gray-600 dark:text-white">
            <div className="item">
                <FontAwesomeIcon icon={faCogs} className="mr-2"/>
                <Link href="/plugins" target="_blank" className="underline">290 Plugins</Link>
                <span className="block text-sm opacity-75">extend without forking</span>
            </div>
            <div className="item">
                <FontAwesomeIcon icon={faLanguage} className="mr-2"/>
                105 Languages
                <span className="block text-sm opacity-75">translated by a global community</span>
            </div>
            <div className="item">
                <FontAwesomeIcon icon={faServer} className="mr-2"/>
                Thousands of Instances
                <span className="block text-sm opacity-75">Raspberry Pis to data centres</span>
            </div>
            <div className="item">
                <FontAwesomeIcon icon={faUsers} className="mr-2"/>
                Millions of Users
                <span className="block text-sm opacity-75">Wikimedia, governments, schools</span>
            </div>
        </div>
    </div>
}
