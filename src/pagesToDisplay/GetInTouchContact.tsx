import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faDiscord, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
export const GetInTouchContact = ()=>{

    return <div className="highlight dark:bg-gray-600"  id="contact">
        <a className="scroll-point"></a>
        <div className="content wrap">
            <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-4"/>Get in touch</h2>
        </div>
        <div className="content wrap">
            <ul className="flex flex-row flex-wrap gap-3">
                <Link className="pl-2 pr-2 pt-1 pb-1 bg-primary rounded cursor-pointer grid grid-cols-[auto_auto]" target="_blank" href="https://discord.gg/gGJKrAnDvY">
                    <FontAwesomeIcon icon={faDiscord} className="mr-2 text-white self-center"/>
                        <span className="text-white! self-center">Discord</span>
                </Link>
                <Link className="pl-2 pr-2 pt-1 pb-1 bg-primary rounded cursor-pointer grid grid-cols-[auto_auto]"  href="https://twitter.com/etherpadorg" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} className="mr-2 text-white mt-1 self-center"/>
                    <span className="text-white! self-center">@EtherpadOrg</span>
                </Link>
                <Link className="pl-2 pr-2 pt-1 pb-1 bg-primary rounded cursor-pointer grid grid-cols-[auto_auto]" href="mailto:contact@etherpad.org" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white self-center"/>
                    <span className="text-white! self-center">contact@etherpad.org</span>
                </Link>
            </ul>
        </div>
    </div>
}
