'use client'
import brandSvg from '../assets/img/brand.svg';
import {Suspense, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MobileDrawer} from "../components/MobileDrawer.tsx";
import {ThemeToggler} from "../components/ThemeToggler.tsx";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false)
    const navigate = useRouter()

    // Scroll to an anchor on the home page. If the user is on a different
    // route (e.g. /about), push back to the home page with the hash so the
    // scroll-point element actually exists before we try to find it.
    const navigateToElement = (elementId: string)=>{
        const el = document.getElementById(elementId)
        if (el) {
            el.scrollIntoView({block: "start", inline: "nearest"})
            navigate.push('/#'+elementId)
        } else {
            navigate.push('/#'+elementId)
        }
    }

    return <><div id="header" className="text-white border-b-[1pt] border-solid border-[#efefef] p-4 w-full bg-white dark:bg-secondary-dark">
        <div className="wrap flex items-center justify-self-center">
            <Link href="/">
                <Suspense>
                <Image className="logo h-8 image-logo" src={brandSvg} alt="etherpad logo"/>
                </Suspense>
            </Link>

            <div id="nav">
                <ul>
                    <li><Link className="text-[#555] dark:text-white" href="/about" title="about">About</Link></li>
                    <li><a className="text-[#555] dark:text-white" onClick={()=>navigateToElement('download')} title="download">Download</a></li>
                    <li><a className="text-[#555] dark:text-white" onClick={()=>navigateToElement('contribute')} title="contribute">Contribute</a></li>
                    <li><a className="text-[#555] dark:text-white" onClick={()=>navigateToElement("links")} title="links">Links</a></li>
                    <li><a className="text-[#555] dark:text-white" onClick={()=>navigateToElement('contact')} title="contact">Contact</a></li>
                    <li className="dark:bg-secondary-dark"><ThemeToggler/></li>
                </ul>
            </div>
            <div id="mobile-nav">
                <FontAwesomeIcon icon={faBars} className="float-right text-gray-500 dark:text-white text-3xl" onClick={()=>setMobileDrawerOpen(!mobileDrawerOpen)}/>
            </div>
        </div>
    </div>
    <MobileDrawer isOpen={mobileDrawerOpen} setOpen={setMobileDrawerOpen}/>
</>
}
