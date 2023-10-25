import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandshake} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

export const RealTimeCollaboration = ()=>{
    const navigate = useNavigate()
    const navigateToElement = (elementId: string)=>{
        document.getElementById(elementId)?.scrollIntoView({block: "start", inline: "nearest"})
        navigate('/#'+elementId)
    }
    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
            <FontAwesomeIcon icon={faHandshake} className="mr-4"/>
            Collaborating in really real-time</h2>

        <h5 className="subheading text-xl font-bold mb-5  dark:text-white">No more sending your stuff back and forth via email, just set up a pad, share the
            link and start collaborating!</h5>
        <p className="dark:text-gray-400">Etherpad allows you to edit documents collaboratively in real-time, much like a live multi-player editor that
            runs in your browser. Write articles, press releases, to-do lists, etc. together with your friends, fellow
            students or colleagues, all working on the same document at the same time.</p>
        <p className="dark:text-gray-400">All instances provide access to all data through a well-documented API and support import/export to many
            major data exchange formats. And if the built-in feature set isn't enough for you, there's tons of plugins
            that allow you to customize your instance to suit your needs.</p>

        <p className="dark:text-gray-400">You don't need to set up a server and install Etherpad in order to use it. Just
            <a onClick={()=>navigateToElement('links')}> pick</a> one
            of the publicly available instances that friendly people from everywhere around the world have set up.
            Alternatively, you can set up your own instance by following our <a
                href="https://github.com/ether/etherpad-lite#installation">installation guide</a>.</p>
    </div>
}
