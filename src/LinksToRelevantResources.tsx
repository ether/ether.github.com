import {CURRENT_VERSION, DOC_PAGE, PATH_TO_BLOG, PATH_TO_GITHUB, PATH_TO_ISSUES, PATH_TO_WIKI} from "./Constants.ts";

export const LinksToRelevantResources = () => {
    return <div className="content">
        <div className="wrap">
            <ul className="links ">
                <li><a href={PATH_TO_BLOG} target="_blank" className="underline">Blog</a></li>
                <li><a href={PATH_TO_GITHUB} target="_blank" className="underline">GitHub repository</a></li>
                <li><a href={PATH_TO_GITHUB+"/wiki/Sites-That-Run-Etherpad"} target="_blank" className="underline">List of public instances</a></li>
                <li><a href={PATH_TO_ISSUES} target="_blank" className="underline">Issue tracker</a></li>
                <li><a href={PATH_TO_WIKI} target="_blank" className="underline">Wiki</a></li>
                <li><a target="_blank" href={DOC_PAGE} className="underline">Documentation <small className="text-sm">v{CURRENT_VERSION}</small></a></li>
            </ul>
        </div>
    </div>
}
