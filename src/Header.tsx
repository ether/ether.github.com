import brandSvg from './assets/img/brand.svg';
import {Suspense, useCallback, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {MobileDrawer} from "./MobileDrawer.tsx";
export const Header = () => {
    const [hash, setHash] = useState<string>(window.location.hash)
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false)

    const hashChangeHandler = useCallback(() => {
        setHash(window.location.hash);
    }, []);

    const navigateToElement = (elementId: string)=>{
        location.hash = elementId
    }

    useEffect(() => {
        window.addEventListener('hashchange', hashChangeHandler);
        return () => {
            window.removeEventListener('hashchange', hashChangeHandler);
        };
    }, []);

    useEffect(()=> {
            if(location.hash && location.hash.length>0){
                const elements = document.getElementsByClassName("active")
                for (let i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("active")
                }
                document.querySelector("[title='"+hash.slice(1)+"']")?.classList.add("active")
                const element = document.getElementById(hash.slice(1))
                if(element){
                    element.scrollIntoView({block: "start", inline: "nearest"})
                }
            }
        }
        ,[hash])


    return <><div id="header" className="text-white border-b-[1pt] border-solid border-[#efefef] p-4 w-full">
        <div className="wrap flex items-center">
            <a href="#">
                <Suspense>
                <img className="logo h-8" src={brandSvg} alt="etherpad logo"/>
                </Suspense>
            </a>

            <div id="nav">
                <ul>
                    <li><a onClick={()=>navigateToElement('#about')} title="about">About</a></li>
                    <li><a onClick={()=>navigateToElement('#download')} title="download">Download</a></li>
                    <li><a onClick={()=>navigateToElement('#contribute')} title="contribute">Contribute</a></li>
                    <li><a onClick={()=>navigateToElement("#links")} title="links">Links</a></li>
                    <li><a onClick={()=>navigateToElement('#contact')} title="contact">Contact</a></li>
                </ul>
            </div>
            <div id="mobile-nav">
                <FontAwesomeIcon icon={faBars} className="float-right text-gray-500 text-3xl" onClick={()=>setMobileDrawerOpen(!mobileDrawerOpen)}/>

            </div>
        </div>
    </div>
    <MobileDrawer isOpen={mobileDrawerOpen} setOpen={setMobileDrawerOpen}/>
</>
}
