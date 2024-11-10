import {SelectVersionModal} from "../src/components/SelectVersionModal.tsx";
import {CookieBanner} from "../src/components/CookieBanner.tsx";
import {Header} from "../src/pagesToDisplay/Header.tsx";
import {MainHeadline} from "../src/pagesToDisplay/MainHeadline.tsx";
import {RealTimeCollaboration} from "../src/pagesToDisplay/RealTimeCollaboration.tsx";
import {AddFunctionalities} from "../src/pagesToDisplay/AddFunctionalities.tsx";
import {CustomizeAppearance} from "../src/pagesToDisplay/CustomizeAppearance.tsx";
import {DownloadLatestVersion} from "../src/pagesToDisplay/DownloadLatestVersion.tsx";
import {Contribute} from "../src/pagesToDisplay/Contribute.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {LinksToRelevantResources} from "../src/pagesToDisplay/LinksToRelevantResources.tsx";
import {GetInTouchContact} from "../src/pagesToDisplay/GetInTouchContact.tsx";
import {Thanking} from "../src/pagesToDisplay/Thanking.tsx";
import {Footer} from "../src/components/Footer.tsx";

export default function Page() {
    return <div className="dark:bg-gray-800">
        <SelectVersionModal/>
        <CookieBanner/>
        <div className="sticky top-0 z-50">
            <div className=" relative top-0">
                <Header/>
            </div>
        </div>
        <div className="main-container">
            <MainHeadline/>
            <a className="scroll-point" id="about"></a>
            <RealTimeCollaboration/>
            <a className="scroll-point" id="customize"></a>
            <AddFunctionalities/>
            <CustomizeAppearance/>
            <a className="scroll-point" id="download"></a>
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
    </div>
}
