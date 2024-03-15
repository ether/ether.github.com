import {Header} from "./pages/Header.tsx";
import {MainHeadline} from "./pages/MainHeadline.tsx";
import {RealTimeCollaboration} from "./pages/RealTimeCollaboration.tsx";
import {DownloadLatestVersion} from "./pages/DownloadLatestVersion.tsx";
import {Contribute} from "./pages/Contribute.tsx";
import {LinksToRelevantResources} from "./pages/LinksToRelevantResources.tsx";
import {GetInTouchContact} from "./pages/GetInTouchContact.tsx";
import {Thanking} from "./pages/Thanking.tsx";
import {Footer} from "./components/Footer.tsx";
import {AddFunctionalities} from "./pages/AddFunctionalities.tsx";
import {CustomizeAppearance} from "./pages/CustomizeAppearance.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {CookieBanner} from "./components/CookieBanner.tsx";
import {SelectVersionModal} from "./components/SelectVersionModal.tsx";
import {Outlet} from "react-router-dom";


export const RootElement = ()=>{
    return <div className="dark:bg-gray-800">
        <SelectVersionModal/>
        <CookieBanner/>
        <div className="sticky top-0 z-50">
            <div className=" relative top-0">
                <Header/>
            </div>
        </div>
        <div className="main-container">
        <Outlet/>
        </div>
    </div>
}

export const App = ()=> {

    return (
        <>
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
        </>
    )
}


