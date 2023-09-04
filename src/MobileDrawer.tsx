import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faDownload, faWrench, faExternalLink, faContactCard} from '@fortawesome/free-solid-svg-icons'
import {FC} from "react";

type MobileDrawerProps = {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
}

export const MobileDrawer:FC<MobileDrawerProps> = ({isOpen, setOpen}) => {
    const navigateToElement = (elementId: string)=>{
        location.hash = elementId
        setOpen(false)
    }

    return <div className={` ${!isOpen?'h-0  overflow-hidden':' h-[100vh]'} w-full bg-transparent md:hidden z-10 absolute pointer-events-none`}
                onClick={()=>setOpen(false)}>
        <div className="flex justify-center p-2 overflow-auto  bg-secondary pointer-events-auto">
            <div className="grid grid-cols-[auto_1fr] gap-2 w-1/5 text-2xl">
                <div className="contents">
                        <FontAwesomeIcon icon={faInfoCircle} className="self-center"/>
                        <a onClick={()=>navigateToElement('about')} title="about">About</a>
                </div>
                <div className="contents">
                    <FontAwesomeIcon icon={faDownload} className="self-center"/>
                    <a onClick={()=>navigateToElement('download')} title="download">Download</a>
                </div>
                <div className="contents">
                        <FontAwesomeIcon icon={faWrench} className="self-center"/>
                        <a onClick={()=>navigateToElement('contribute')} title="contribute">Contribute</a>
                </div>
                <div className="contents">
                    <FontAwesomeIcon icon={faExternalLink} className="self-center"/><a
                onClick={()=>navigateToElement('links')} title="links">Links</a>
                </div>
                <div className="contents">
                        <FontAwesomeIcon icon={faContactCard} className="self-center"/><a
                    onClick={()=>navigateToElement('contact')} title="contact">Contact</a>
                </div>
            </div>
        </div>
        <div  onClick={()=>setOpen(false)} className="pointer-events-auto h-full">

        </div>
    </div>
}
