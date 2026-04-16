import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFingerprint, faShieldHalved, faPuzzlePiece} from "@fortawesome/free-solid-svg-icons";

import {RealTimeCollaborationLink} from "../components/RealTimeCollaborationLink.tsx";

export const RealTimeCollaboration = ()=>{

    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 dark:text-white">Three things that make Etherpad different</h2>

        <div className="mt-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center dark:text-white">
                <FontAwesomeIcon icon={faFingerprint} className="mr-3 text-primary"/>
                Authorship is the product.
            </h3>
            <p className="dark:text-gray-400">
                Every keystroke is attributed to its author. Every revision is preserved. The timeslider lets you scrub through a document&apos;s entire history, character by character, watching it come into being. Author colours make collaboration visible at a glance &mdash; not buried in a menu. Other editors hide the history. Etherpad&apos;s history is the point.
            </p>
        </div>

        <div className="mt-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center dark:text-white">
                <FontAwesomeIcon icon={faShieldHalved} className="mr-3 text-primary"/>
                Sovereignty is the default.
            </h3>
            <p className="dark:text-gray-400">
                Etherpad runs on your server, under your governance. No telemetry. No upsells. No silent updates that change the deal. The code is Apache 2.0. The data format is open. Full data export is built in. The history is yours, your users&apos;, your institution&apos;s &mdash; never a third party&apos;s.
            </p>
        </div>

        <div className="mt-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center dark:text-white">
                <FontAwesomeIcon icon={faPuzzlePiece} className="mr-3 text-primary"/>
                Malleability is structural.
            </h3>
            <p className="dark:text-gray-400">
                Etherpad ships small and grows with you. 290 plugins for comments, images, tables, drawing, video chat, math, code highlighting, OAuth/LDAP/OpenID auth, and more &mdash; including AI on your terms, pointed at the model you choose, running on infrastructure you control. SaaS competitors decide for you. Etherpad lets you decide.
            </p>
        </div>

        <p className="mt-8 dark:text-gray-400">
            You don&apos;t need to set up a server to try it. <RealTimeCollaborationLink/> one of the publicly available instances run by friendly people around the world &mdash; or set up your own by following our <a className="underline" href="https://github.com/ether/etherpad-lite#installation">installation guide</a>.
        </p>
    </div>
}
