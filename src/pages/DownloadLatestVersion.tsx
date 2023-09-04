import {CURRENT_VERSION, INSTALLATION_LINK, LINUX_MAC_DOWNLOAD, WINDOWS_DOWNLOAD} from "../Constants.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faCloud} from "@fortawesome/free-solid-svg-icons";
import {useUIStore} from "../store/store.ts";

export const DownloadLatestVersion = ()=>{
    const changeSelectedVersionWindowOpen = useUIStore(state => state.setSelectVersionWindow)

    return <div className="highlight  dark:bg-gray-600"  >
        <div className="content wrap">
            <div className="flex">
                <FontAwesomeIcon icon={faDownload} className="mr-4 self-baseline text-3xl text-primary"/>
                <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">Download Version {CURRENT_VERSION}</h2>
            </div>
            <p className="dark:text-gray-400">Also, see our <a href={INSTALLATION_LINK}>installation instructions</a>.
            </p>
            <a className="download-button" href={LINUX_MAC_DOWNLOAD}>
                <FontAwesomeIcon icon={faCloud} className="mr-2"/>
                Linux/Mac</a>
            <a className="download-button"
               href={WINDOWS_DOWNLOAD}><FontAwesomeIcon icon={faCloud} className="mr-2"/>
                Windows</a>
            <br/>
            <small className="dark:text-white">Looking for <button onClick={()=>changeSelectedVersionWindowOpen(true)} className="text-primary">older releases</button>?</small>
        </div>
    </div>
}
