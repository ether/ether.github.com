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

export const App = ()=> {


    return (
        <>
            <Header/>
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
                    <h2><i className="fa fa-external-link-square-alt"></i> Links</h2>
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
