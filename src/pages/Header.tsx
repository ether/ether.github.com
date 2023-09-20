import brandSvg from '../assets/img/brand.svg';
import {Suspense, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MobileDrawer} from "../components/MobileDrawer.tsx";
import {ThemeToggler} from "../components/ThemeToggler.tsx";
import {useNavigate} from "react-router-dom";
export const Header = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false)
    const navigate = useNavigate()

    const navigateToElement = (elementId: string)=>{
        document.getElementById(elementId)?.scrollIntoView({block: "start", inline: "nearest"})
        navigate('/#'+elementId)
    }

    return <><div id="header" className="text-white border-b-[1pt] border-solid border-[#efefef] p-4 w-full bg-white dark:bg-secondary-dark">
        <div className="wrap flex items-center">
            <a href="#">
                <Suspense>
                <img className="logo h-8" src={brandSvg} alt="etherpad logo"/>
                </Suspense>
            </a>

            <div id="nav">
                <ul>
                    <li><a className="text-[#555] dark:text-white" onClick={()=>navigateToElement('about')} title="about">About</a></li>
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
