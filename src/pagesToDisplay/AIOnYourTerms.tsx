import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRobot} from "@fortawesome/free-solid-svg-icons";

export const AIOnYourTerms = () => {
    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
            <FontAwesomeIcon icon={faRobot} className="mr-4"/>
            AI on your terms &mdash; or not at all
        </h2>

        <p className="dark:text-gray-400 mb-4">
            Most editors decided AI for you. They added it to the toolbar, turned it on by default, sent your text to a model you can&apos;t choose, on infrastructure you can&apos;t audit, under terms you didn&apos;t write.
        </p>

        <p className="dark:text-gray-400 mb-4 font-bold">
            Etherpad doesn&apos;t.
        </p>

        <p className="dark:text-gray-400 mb-4">
            AI in Etherpad is a <strong>plugin you install</strong> &mdash; pointed at the model you choose, running on the infrastructure you control, through code you can audit. You can swap providers. You can run a local model. You can turn it off. You can never turn it on.
        </p>

        <p className="dark:text-gray-400 mb-4">
            For regulated industries, public-sector institutions, journalism, healthcare, legal, and anyone who cannot ship their documents to a third-party model &mdash; this isn&apos;t a nice-to-have. It&apos;s the only acceptable posture.
        </p>

        <p className="dark:text-gray-400">
            <a className="underline" href="https://static.etherpad.org" target="_blank">Browse AI plugins &rarr;</a>
        </p>
    </div>
}
