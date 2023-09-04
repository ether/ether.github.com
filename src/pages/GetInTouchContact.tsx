import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons'
export const GetInTouchContact = ()=>{

    const goToPage = (page:string)=>{
        window.open(page, '_blank')?.focus();
    }

    return <div className="highlight dark:bg-gray-600">
        <a className="scroll-point" id="contact"></a>
        <div className="content wrap">
            <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-4"/>Get in touch</h2>
        </div>
        <div className="content wrap">
            <ul className="flex flex-row flex-wrap gap-3">
                <li className="pl-2 pr-2 pt-1 pb-1 bg-primary rounded cursor-pointer flex" onClick={()=>goToPage('https://discord.gg/gGJKrAnDvY')}>
                    <FontAwesomeIcon icon={faDiscord} className="mr-2 text-white self-center"/>
                    <a target="_blank" href="https://discord.gg/gGJKrAnDvY" className="!text-white">
                        Discord
                    </a>
                </li>
                <li className="pl-2 pr-2 pt-1 pb-1 bg-primary rounded cursor-pointer"  onClick={()=>goToPage('https://twitter.com/etherpadorg')}>
                    <FontAwesomeIcon icon={faTwitter} className="mr-2 text-white mt-1"/>
                    <a target="_blank" href="https://twitter.com/etherpadorg" className="!text-white">@EtherpadOrg</a>
                </li>
                <li className="pl-2 pr-2 pt-1 pb-1 bg-primary rounded cursor-pointer" onClick={()=>goToPage('mailto:contact@etherpad.org')}>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white"/>
                    <a target="_blank" href="mailto:contact@etherpad.org" className="!text-white">contact@etherpad.org</a>
                </li>
            </ul>
        </div>
    </div>
}
