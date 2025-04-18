'use client'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle, faDownload, faWrench, faExternalLink, faContactCard} from '@fortawesome/free-solid-svg-icons'
import {FC, useEffect} from "react";
import {ThemeToggler} from "./ThemeToggler.tsx";
import {useUIStore} from "../store/store.ts";
import {useRouter} from "next/navigation";

type MobileDrawerProps = {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void
}

export const MobileDrawer:FC<MobileDrawerProps> = ({isOpen, setOpen}) => {
    const toggleTheme = useUIStore(state=>state.toggleDarkMode)
    const navigate = useRouter()
    const navigateToElement = (elementId: string)=>{
        document.getElementById(elementId)?.scrollIntoView({block: "start", inline: "nearest"})
        navigate.push('/#'+elementId)
    }

    useEffect(() => {
        if (!window) return
        /*
         * Scroll to the element if the url contains a hash at the very end.
         */
        const hash = window.location.hash
        const lastHash = hash.lastIndexOf('#')
        const lastSlash = hash.lastIndexOf('/')
        lastHash>lastSlash && navigateToElement(hash.substring(lastHash+1))
    }, []);

    return <div className={` ${!isOpen?'h-0  overflow-hidden':' h-[100vh]'} w-full bg-transparent md:hidden z-10 absolute pointer-events-none`}
                onClick={()=>setOpen(false)}>
        <div className="flex justify-center p-2 overflow-auto  bg-secondary pointer-events-auto  dark:bg-secondary-dark dark:text-white">
            <div className="grid grid-cols-[auto_1fr] gap-2 w-fit text-2xl">
                <div className="contents"  onClick={()=>navigateToElement('about')}>
                        <FontAwesomeIcon icon={faInfoCircle} className="self-center"/>
                        <a title="about">About</a>
                </div>
                <div className="contents"  onClick={()=>navigateToElement('download')}>
                    <FontAwesomeIcon icon={faDownload} className="self-center"/>
                    <a title="download">Download</a>
                </div>
                <div className="contents"  onClick={()=>navigateToElement('contribute')}>
                        <FontAwesomeIcon icon={faWrench} className="self-center"/>
                        <a title="contribute">Contribute</a>
                </div>
                <div className="contents" onClick={()=>navigateToElement('links')}>
                    <FontAwesomeIcon icon={faExternalLink} className="self-center"/><a
                 title="links">Links</a>
                </div>
                <div className="contents" onClick={()=>navigateToElement('contact')}>
                        <FontAwesomeIcon icon={faContactCard} className="self-center"/><a
                     title="contact">Contact</a>
                </div>
                <div className="contents cursor-pointer" onClick={toggleTheme}>
                    <ThemeToggler/>
                    <span>Toggle Theme</span>
                </div>
            </div>
        </div>
        <div  onClick={()=>setOpen(false)} className="pointer-events-auto h-full">

        </div>
    </div>
}
