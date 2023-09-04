import {Header} from "./Header.tsx";
import {MainHeadline} from "./MainHeadline.tsx";
import {RealTimeCollaboration} from "./RealTimeCollaboration.tsx";
import {DownloadLatestVersion} from "./DownloadLatestVersion.tsx";
import {Contribute} from "./Contribute.tsx";
import {LinksToRelevantResources} from "./LinksToRelevantResources.tsx";
import {GetInTouchContact} from "./GetInTouchContact.tsx";
import {Thanking} from "./Thanking.tsx";
import {Footer} from "./Footer.tsx";
import {AddFunctionalities} from "./AddFunctionalities.tsx";
import {CustomizeAppearance} from "./CustomizeAppearance.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {CookieBanner} from "./CookieBanner.tsx";
export const App = ()=> {

    return (
        <>
            <CookieBanner/>
            <div className="relative">
            <Header/>
            </div>
            <div className="main-container">
                <MainHeadline/>
                <a className="scroll-point" id="about"></a>
                <RealTimeCollaboration/>
                <a className="scroll-point" id="customize"></a>
                <AddFunctionalities/>
                <CustomizeAppearance/>
                <DownloadLatestVersion/>
                <a className="scroll-point" id="contribute"></a>
                <Contribute/>
                <a className="scroll-point" id="links"></a>
                <div className="content wrap">
                    <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
                        <FontAwesomeIcon icon={faExternalLink} className="mr-4"/>Links</h2>
                </div>
                <LinksToRelevantResources/>
                <GetInTouchContact/>
                <a className="scroll-point" id="thanks"></a>
                <Thanking/>
                <Footer/>
            </div>
        </>
    )
}
