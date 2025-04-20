'use client'
import {CURRENT_VERSION, INSTALLATION_LINK, LINUX_MAC_DOWNLOAD} from "../Constants.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {GHRelease, useUIStore} from "../store/store.ts";
import {faWindows, faApple, faLinux} from '@fortawesome/free-brands-svg-icons'
import {downloadFile} from "../utils/utils.ts";
import {FileNotPresentDialog} from "../components/FileNotPresentDialog.tsx";

export const DownloadLatestVersion = ()=>{
    const changeSelectedVersionWindowOpen = useUIStore(state => state.setSelectVersionWindow)

    const downloadFileChecked = async () => {
        const response: GHRelease = await fetch("https://api.github.com/repos/ether/etherpad-lite/releases/latest")
            .then(response => response.json())
        downloadFile(response.zipball_url)
    }


    return <div className="highlight  dark:bg-gray-600"  >
        <FileNotPresentDialog/>
        <div className="content wrap">
            <div className="flex">
                <FontAwesomeIcon icon={faDownload} className="mr-4 self-baseline text-3xl text-primary"/>
                <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">Download Version {CURRENT_VERSION}</h2>
            </div>
            <p className="dark:text-gray-400">Also, see our <a href={INSTALLATION_LINK} target="_blank">installation instructions</a>.
            </p>
            <a className="download-button" href={LINUX_MAC_DOWNLOAD}>
                <FontAwesomeIcon icon={faLinux} className="mr-2 text-xl"/>
                <FontAwesomeIcon icon={faApple} className="mr-2 text-xl"/>
                Linux/Mac</a>
            <a className="download-button"
               onClick={()=>downloadFileChecked()}><FontAwesomeIcon icon={faWindows} className="mr-2 text-xl"/>
                Windows</a>
            <br/>
            <small className="dark:text-white">Looking for <button onClick={()=>changeSelectedVersionWindowOpen(true)} className="text-primary">older releases</button>?</small>
        </div>
    </div>
}
