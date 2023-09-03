import {CURRENT_VERSION, INSTALLATION_LINK, LINUX_MAC_DOWNLOAD, WINDOWS_DOWNLOAD} from "./Constants.ts";

export const DownloadLatestVersion = ()=>{
    return <div className="highlight">
        <a className="scroll-point" id="download"></a>
        <div className="content wrap">
            <h2>Download Version {CURRENT_VERSION}</h2>
            <p>Also, see our <a href={INSTALLATION_LINK}>installation instructions</a>.
            </p>
            <a className="download-button" href={LINUX_MAC_DOWNLOAD}><i
                className="fa fa-download"></i>Linux/Mac</a>
            <a className="download-button"
               href={WINDOWS_DOWNLOAD}><i
                className="fa fa-download"></i>Windows</a>
        </div>
    </div>
}
