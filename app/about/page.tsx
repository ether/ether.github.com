import {Header} from "../../src/pagesToDisplay/Header.tsx";
import {Footer} from "../../src/components/Footer.tsx";

export default function AboutPage() {
    return <div className="dark:bg-gray-800">
        <div className="sticky top-0 z-50">
            <div className="relative top-0">
                <Header/>
            </div>
        </div>

        <div className="main-container">
            <div className="content wrap dark:text-gray-300">
                <h1 className="text-4xl font-bold mt-16 mb-2 dark:text-white">An editor for documents that matter</h1>
                <p className="text-xl italic mt-2 mb-12 dark:text-gray-400">Why Etherpad exists, what it&apos;s for, and what it won&apos;t do.</p>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">The problem</h2>
                <p className="mb-4">Most collaborative editors are designed to forget.</p>
                <p className="mb-4">They show you the current version of the document. They hide the history behind menus. They obscure who wrote what. They live on servers you don&apos;t control, governed by terms you don&apos;t write, owned by companies whose business model is the opposite of trust.</p>
                <p className="mb-4">For most documents &mdash; a shopping list, a meeting note, a draft email &mdash; none of that matters.</p>
                <p className="mb-4">For some documents, it matters enormously.</p>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">The documents that matter</h2>
                <p className="mb-4">If a country were drafting a new constitution, where would they write it?</p>
                <p className="mb-4">If a treaty were being negotiated between governments, where would they draft it?</p>
                <p className="mb-4">If a scientific paper were being co-authored across continents, where would the record of authorship live?</p>
                <p className="mb-4">If a piece of investigative journalism were being assembled from sources who need to know that their words won&apos;t be silently edited by a platform, where would they write?</p>
                <p className="mb-4">If a school were teaching children that what they say belongs to them, what tool would they put in front of them?</p>
                <p className="mb-4">These documents share something in common. Provenance is not a nice-to-have &mdash; it is the entire point. <em>Who said what, when, and why</em> is part of the meaning of the document itself.</p>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">What Etherpad is</h2>
                <p className="mb-4">Etherpad is the editor for those documents.</p>
                <p className="mb-4">Every keystroke is attributed. Every revision is preserved. Every change is reversible. The timeslider lets you scrub through the entire history of a document, character by character, watching it come into being. The author colours aren&apos;t a hidden feature &mdash; they&apos;re the product. They make authorship visible, by default, to everyone who reads.</p>
                <p className="mb-4">And the whole thing runs on your server, under your governance, with no telemetry, no upsells, no terms of service you didn&apos;t agree to. AI is a plugin you install, pointed at the model you choose, running on infrastructure you control &mdash; not a feature decided for you in a boardroom you weren&apos;t in. The code is Apache 2.0. The data format is open. The history is yours.</p>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">Our principles</h2>
                <ul className="list-none pl-0 space-y-3 mb-4">
                    <li><strong>Honest.</strong> We tell you what the software does and what it doesn&apos;t.</li>
                    <li><strong>Open.</strong> Source, format, governance, roadmap.</li>
                    <li><strong>Transparent.</strong> No hidden state. No invisible edits. No silent changes.</li>
                    <li><strong>Malleable.</strong> A plugin system that lets you make Etherpad fit your work, not the other way around.</li>
                    <li><strong>Accessible.</strong> 105 languages. Runs on a Raspberry Pi or a server farm. Works in any modern browser.</li>
                    <li><strong>Truthful.</strong> The document tells the truth about itself. Who wrote it, when, and how it got to be what it is.</li>
                </ul>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">What we won&apos;t do</h2>
                <p className="mb-4">We won&apos;t pander to the trends. We won&apos;t add surveillance. We won&apos;t pivot to extraction. We won&apos;t bury the authorship to make the UI cleaner. We won&apos;t give up the values to grow the userbase.</p>
                <p className="mb-4">The world is trending the other way. We&apos;re holding the line.</p>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">A short history of holding the line</h2>
                <p className="mb-4">Etherpad has been quietly used by Wikimedia, governments, EU public-sector institutions, universities, and self-hosters around the world since 2009. No pivots. No acquisitions. No enshittification. Just sixteen years of doing the same thing, well.</p>
                <p className="mb-4">That kind of stability is itself a feature. Institutions that adopt Etherpad in 2026 can reasonably expect it to still be Etherpad in 2036 &mdash; still open, still self-hostable, still attributing every keystroke, still owned by no one.</p>
                <p className="mb-4">Almost no other software in this category can credibly say the same.</p>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">What you can do</h2>
                <p className="mb-4">If this matters to you:</p>
                <ul className="list-disc pl-8 space-y-2 mb-4">
                    <li><a className="underline" target="_blank" href="https://github.com/ether/etherpad">Run an Etherpad</a> for your team, your organisation, your school, your community.</li>
                    <li>Contribute &mdash; code, documentation, translations, plugins, time.</li>
                    <li>Tell someone else this exists. A generation of developers and decision-makers grew up after Etherpad&apos;s first wave of fame and have never heard of it. Word of mouth is how this kind of project survives.</li>
                </ul>
                <p className="mb-12">The documents that matter deserve an editor that takes them seriously.</p>
                <p className="mb-12 italic">That&apos;s what Etherpad is for.</p>
            </div>

            <Footer/>
        </div>
    </div>
}
