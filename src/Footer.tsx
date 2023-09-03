import footerLogo from './assets/img/logo.svg'
import {LazyLoadImage} from "react-lazy-load-image-component";


const CCC_ATTR ={
    "xmlns:cc": "https://creativecommons.org/ns#",
}

export const Footer = ()=>{
    return <div id="footer">
        <div className="wrap">

            <div className="footer-content">
                <p>Copyright &copy; The&nbsp;Etherpad&nbsp;Foundation.</p>
                <p>Design &copy; The Apache Software Foundation, adapted by Marcel Klehr — Licensed under the <a
                    rel="license" href="https://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a></p>
                <p>The Etherpad logos by <span {...CCC_ATTR} property="cc:attributionName">Marcel Klehr</span> are
                    licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/">Creative
                        Commons Attribution-ShareAlike 3.0 Unported License</a>.</p>
                <p>Bitcoin public address: 198uyayMFVHUmrcuzWKFSMAkmwfkQgQEXj</p>
                <p>Thanks to <a href={"https://github.com/seballot"} target="_blank">@seballot</a> for the redesign</p>
            </div>

            <LazyLoadImage className="logo" src={footerLogo}/>
        </div>
    </div>
}
