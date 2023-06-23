import brandSvg from './assets/img/brand.svg';
import {useCallback, useEffect, useState} from "react";
export const Header = () => {
    const [hash, setHash] = useState<string>(window.location.hash)

    
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
                console.log(location.hash.slice(1))
                document.querySelector("[title='"+hash.slice(1)+"']")?.classList.add("active")
                const element = document.getElementById(hash.slice(1))
                if(element){
                    element.scrollIntoView({block: "start", inline: "nearest"})
                }
            }
        }
        ,[hash])


    return <div id="header">
        <div className="wrap">
            <a href="#"><img className="logo" src={brandSvg} alt="etherpad logo"/> </a>
            <div id="nav">
                <ul>
                    <li><a onClick={()=>navigateToElement('#about')} title="about">About</a></li>
                    <li><a onClick={()=>navigateToElement('#download')} title="download">Download</a></li>
                    <li><a onClick={()=>navigateToElement('#contribute')} title="contribute">Contribute</a></li>
                    <li><a onClick={()=>navigateToElement("#links")} title="links">Links</a></li>
                    <li><a onClick={()=>navigateToElement('contact')} title="contact">Contact</a></li>
                </ul>
            </div>
            <div id="mobile-nav">
                <ul>
                    <li><a href="#about"><i className="fa fa-info-circle large"></i></a></li>
                    <li><a href="#download"><i className="fa fa-download"></i></a></li>
                    <li><a href="#contribute"><i className="fa fa-wrench"></i></a></li>
                    <li><a href="#links"><i className="fa fa-external-link-square-alt"></i></a></li>
                    <li><a href="#contact"><i className="fa fa-envelope"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
}
