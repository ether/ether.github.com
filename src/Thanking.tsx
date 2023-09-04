import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
export const Thanking = () => {
    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center"><FontAwesomeIcon className="mr-4" icon={faHeart}></FontAwesomeIcon> Thanks</h2>
        <p>Many individuals, companies and organizations have contributed to Etherpad. We'd like to thank them all!</p>
        <p>Additionally, our thanks go out to the tens of thousands of developers and organizations who have created all
            the modules we depend on or contributed in some way to our ability to provide Etherpad as open source.</p>
        <p>We'd also like to thank you. You, who've been making Etherpad what it is, if you've been developing awesome
            features or plugins, whether you're running an instance or you're just one of our diligent users.</p>
        <p>Thank you!</p>
    </div>
}
