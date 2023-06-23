import {CURRENT_VERSION, DOC_PAGE, PATH_TO_BLOG, PATH_TO_GITHUB, PATH_TO_ISSUES, PATH_TO_WIKI} from "./Constants.ts";

export const LinksToRelevantResources = () => {
    return <div className="content">
        <div className="wrap">
            <ul className="links">
                <li><a href={PATH_TO_BLOG} target="_blank">Blog</a></li>
                <li><a href={PATH_TO_GITHUB}>GitHub repository</a></li>
                <li><a href={PATH_TO_GITHUB+"/wiki/Sites-That-Run-Etherpad"}>List of public
                    instances</a></li>
                <li><a href={PATH_TO_ISSUES}>Issue tracker</a></li>
                <li><a href={PATH_TO_WIKI}>Wiki</a></li>
                <li><a href={DOC_PAGE}>Documentation <small>v${CURRENT_VERSION}</small></a></li>
            </ul>
        </div>
    </div>
}
