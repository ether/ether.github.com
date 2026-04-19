import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";

export const WhoUsesEtherpad = () => {
    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
            <FontAwesomeIcon icon={faBuildingColumns} className="mr-4"/>
            Who uses Etherpad
        </h2>

        <p className="dark:text-gray-400 mb-4">
            For more than a decade, Etherpad has quietly underpinned the documents that matter to:
        </p>

        <ul className="list-disc pl-8 dark:text-gray-400 space-y-2">
            <li><strong>Wikimedia Foundation</strong> &mdash; collaborative drafting across editor communities.</li>
            <li><strong>Public-sector institutions across the EU</strong> &mdash; including organisations that legally cannot use US-cloud SaaS for sovereignty and GDPR reasons.</li>
            <li><strong>Universities and schools worldwide</strong> &mdash; including jurisdictions where Google Workspace is no longer permitted in education.</li>
            <li><strong>Civic-tech and democratic-deliberation projects</strong> &mdash; citizen assemblies, participatory budgeting, public consultations.</li>
            <li><strong>Newsrooms and investigative journalism teams</strong> &mdash; where authorship and editing history matter for legal and editorial integrity.</li>
            <li><strong><a className="underline" href="https://scanner.etherpad.org/" target="_blank">Tens of thousands of self-hosted instances</a></strong> &mdash; run by IT teams who chose Etherpad because it is theirs.</li>
        </ul>
    </div>
}
