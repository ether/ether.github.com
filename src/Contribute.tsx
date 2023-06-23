import {GITHUB_HELP, PATH_TO_GITHUB, PATH_TO_WIKI} from "./Constants.ts";

export const Contribute = ()=>{
    return <div className="content wrap">
        <h2><i className="fa fa-wrench"></i> Contribute</h2>
        <p>Etherpad is an open source project. Lots of passionate, helpful individuals have joined and voluntarily
            contributed every single bit throughout this project: From this website through the documentation to the
            very core of the application. So, if you like Etherpad and would like to give back some love, we'd like to
            see <em>your</em> contributions! It doesn't matter how familiar you are with real-time applications, or
            whether you know how to write programs for Node.js. There are plenty of ways to be helpful!</p>
        <p>One of the first things you should do is actually use Etherpad, and get to know it - read about it,
            evangelise it, and engage with the wider community. You can also translate the user interface to your mother
            tongue or learn how to write plugins. Be creative!</p>
        <p>If you'd like to help, <a href="#contact">get in touch</a>! Also, <a
            href={PATH_TO_WIKI}>the wiki</a> is always a valuable resource.</p>

        <h5>Development workflow</h5>
        <p>The main development happens on <a href={PATH_TO_GITHUB}>GitHub</a>. To
            contribute, <a href={GITHUB_HELP+"/fork-a-repo/"}>fork</a> the <a
                href={PATH_TO_GITHUB}>main repo</a>, branch off a <a
                href="https://www.google.com/search?q=git+feature+branches">feature branch</a> from <code>develop</code>,
            make your changes and <a href="https://git-scm.com/docs/git-commit">commit</a> them, <a
                href="https://git-scm.com/docs/git-push">push</a> to your fork and submit a <a
                href={GITHUB_HELP+"/send-pull-requests/"}>pull request</a> for <code>ether/develop</code>.</p>
        <p>Once in a while we merge <code>develop</code> into <code>master</code>, which results in a new release. This
            means you will always find the latest stable version in the <code>master</code> branch.</p>
    </div>
}
