import {CURRENT_VERSION, INSTALLATION_LINK, LINUX_MAC_DOWNLOAD, WINDOWS_DOWNLOAD} from "../Constants.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {GHRelease, useUIStore} from "../store/store.ts";
import {faWindows, faApple, faLinux} from '@fortawesome/free-brands-svg-icons'
import {downloadFile} from "../utils/utils.ts";
import {FileNotPresentDialog} from "../components/FileNotPresentDialog.tsx";
export const DownloadLatestVersion = ()=>{
    const changeSelectedVersionWindowOpen = useUIStore(state => state.setSelectVersionWindow)
    const setFileNotPresentMetada = useUIStore(state => state.setFileNotPresentMetaData)
    const setFileNotPresentDialog = useUIStore(state => state.openFileNotPresentDialog)

    const downloadFileChecked = async (url: string, os: string, version: string) => {
        const response: GHRelease = await fetch("https://api.github.com/repos/ether/etherpad-lite/releases/latest")
            .then(response => response.json())
        if(response.tag_name.includes(version) && response.assets.some(a=>a.browser_download_url.includes(url))) {
            downloadFile(url)
        } else {
            setFileNotPresentMetada({
                url,
                os,
                version,
                latestRelease: response
            })
            setFileNotPresentDialog(true)
        }
    }


    return <div className="highlight  dark:bg-gray-600"  >
        <FileNotPresentDialog/>
        <div className="content wrap">
            <div className="flex">
                <FontAwesomeIcon icon={faDownload} className="mr-4 self-baseline text-3xl text-primary"/>
                <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">Download Version {CURRENT_VERSION}</h2>
            </div>
            <p className="dark:text-gray-400">Also, see our <a href={INSTALLATION_LINK}>installation instructions</a>.
            </p>
            <a className="download-button" href={LINUX_MAC_DOWNLOAD}>
                <FontAwesomeIcon icon={faLinux} className="mr-2 text-xl"/>
                <FontAwesomeIcon icon={faApple} className="mr-2 text-xl"/>
                Linux/Mac</a>
            <a className="download-button"
               onClick={()=>downloadFileChecked(WINDOWS_DOWNLOAD, "Windows", CURRENT_VERSION)}><FontAwesomeIcon icon={faWindows} className="mr-2 text-xl"/>
                Windows</a>
            <br/>
            <small className="dark:text-white">Looking for <button onClick={()=>changeSelectedVersionWindowOpen(true)} className="text-primary">older releases</button>?</small>
        </div>
    </div>
}
