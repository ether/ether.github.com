import {GITHUB_HELP, PATH_TO_GITHUB, PATH_TO_WIKI} from "../Constants.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWrench} from "@fortawesome/free-solid-svg-icons";

export const Contribute = ()=>{


    return <div className="content wrap dark:text-gray-400">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
            <FontAwesomeIcon icon={faWrench} className="mr-4"/>How to help</h2>
        <p>Etherpad is maintained by a small volunteer team and depends on contribution. Pick the way that fits you.</p>

        <h5 className="text-xl font-bold mb-3 mt-6 dark:text-white">Contribute code, docs, translations, or plugins</h5>
        <p>Bug fixes, new plugins, documentation improvements, and translations are all welcome. Read the <a target="_blank" className="underline" href="https://github.com/ether/etherpad-lite/blob/master/CONTRIBUTING.md">contributor guide</a>, or browse <a target="_blank" className="underline" href={PATH_TO_WIKI}>the wiki</a> for orientation. The project follows a standard fork-and-PR workflow against <code>ether/develop</code> on <a target="_blank" className="underline" href={PATH_TO_GITHUB}>GitHub</a>; <code>master</code> tracks stable releases.</p>

        <h5 className="text-xl font-bold mb-3 mt-6 dark:text-white">Become a maintainer</h5>
        <p>We are actively looking for maintainers with experience in Node.js, real-time systems, or institutional collaboration tooling. Open an <a target="_blank" className="underline" href="https://github.com/ether/etherpad-lite/issues">issue</a> or contact <a target="_blank" className="underline" href="https://github.com/JohnMcLear">John McLear</a> to start a conversation.</p>

        <h5 className="text-xl font-bold mb-3 mt-6 dark:text-white">Use Etherpad and tell people</h5>
        <p>One of the most useful things you can do is run an instance, recommend it to your team, school, or institution, and write about how you use it. A generation of decision-makers grew up after Etherpad&apos;s first wave of fame &mdash; word-of-mouth keeps the project alive.</p>

        <h5 className="text-xl font-bold mb-3 mt-6 dark:text-white">How a contribution lands</h5>
        <p>The main development happens on <a target="_blank" className="underline" href={PATH_TO_GITHUB}>GitHub</a>. <a target="_blank" className="underline" href={GITHUB_HELP+"/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"}>Fork the repo</a>, branch off a feature branch from <code>develop</code>, commit your changes, push to your fork, and open a <a target="_blank" className="underline" href={GITHUB_HELP+"/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"}>pull request</a> against <code>ether/develop</code>. Periodically <code>develop</code> is merged into <code>master</code>, producing a new release.</p>
    </div>
}
