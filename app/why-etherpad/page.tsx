import {Header} from "../../src/pagesToDisplay/Header.tsx";
import {Footer} from "../../src/components/Footer.tsx";

export default function WhyEtherpadPage() {
    return <div className="dark:bg-gray-800">
        <div className="sticky top-0 z-50">
            <div className="relative top-0">
                <Header/>
            </div>
        </div>

        <div className="main-container">
            <div className="content wrap dark:text-gray-300">
                <h1 className="text-4xl font-bold mt-16 mb-2 dark:text-white">Why Etherpad?</h1>
                <p className="text-xl italic mt-2 mb-12 dark:text-gray-400">Honest comparison with the alternatives. Where Etherpad is stronger, where it isn&apos;t, and which one you should use.</p>

                <p className="mb-4">Most product comparison pages exist to win the click. This one doesn&apos;t. Etherpad isn&apos;t the right tool for everyone, and pretending otherwise would betray our first principle &mdash; honesty.</p>

                <p className="mb-8">Here&apos;s an honest read on how Etherpad compares with the major collaborative editors in 2026.</p>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">Capability comparison</h2>

                <div className="overflow-x-auto mb-8">
                    <table className="min-w-full text-sm border border-gray-700">
                        <thead className="bg-gray-700 text-white">
                            <tr>
                                <th className="text-left p-2 border border-gray-600">Capability</th>
                                <th className="text-left p-2 border border-gray-600">Etherpad</th>
                                <th className="text-left p-2 border border-gray-600">Google Docs</th>
                                <th className="text-left p-2 border border-gray-600">MS&nbsp;Word/365</th>
                                <th className="text-left p-2 border border-gray-600">Notion</th>
                                <th className="text-left p-2 border border-gray-600">CryptPad</th>
                                <th className="text-left p-2 border border-gray-600">HedgeDoc</th>
                            </tr>
                        </thead>
                        <tbody className="dark:text-gray-300">
                            <tr><td className="p-2 border border-gray-600">Real-time multi-user editing</td><td className="p-2 border border-gray-600">Yes</td><td className="p-2 border border-gray-600">Yes</td><td className="p-2 border border-gray-600">Yes</td><td className="p-2 border border-gray-600">Yes</td><td className="p-2 border border-gray-600">Yes</td><td className="p-2 border border-gray-600">Yes</td></tr>
                            <tr><td className="p-2 border border-gray-600">Per-character authorship visible by default</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">No (hidden)</td><td className="p-2 border border-gray-600">No (hidden)</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">Partial</td><td className="p-2 border border-gray-600">No</td></tr>
                            <tr><td className="p-2 border border-gray-600">Full history scrubbable character-by-character</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">No (snapshots)</td><td className="p-2 border border-gray-600">No (snapshots)</td><td className="p-2 border border-gray-600">Limited</td><td className="p-2 border border-gray-600">Limited</td><td className="p-2 border border-gray-600">Limited</td></tr>
                            <tr><td className="p-2 border border-gray-600">Open source</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">Yes</td><td className="p-2 border border-gray-600">Yes</td></tr>
                            <tr><td className="p-2 border border-gray-600">Self-hostable</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">Yes</td><td className="p-2 border border-gray-600">Yes</td></tr>
                            <tr><td className="p-2 border border-gray-600">No corporate owner</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">Yes (foundation)</td><td className="p-2 border border-gray-600">Yes</td></tr>
                            <tr><td className="p-2 border border-gray-600">Apache 2.0 / permissive licence</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">AGPL</td><td className="p-2 border border-gray-600">AGPL</td></tr>
                            <tr><td className="p-2 border border-gray-600">15+ years stable, no pivots</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">N/A</td><td className="p-2 border border-gray-600">N/A</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">~10 years</td><td className="p-2 border border-gray-600">~7 years</td></tr>
                            <tr><td className="p-2 border border-gray-600">End-to-end encryption</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">No</td></tr>
                            <tr><td className="p-2 border border-gray-600">Multiple document types (sheets, slides, etc.)</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">No</td></tr>
                            <tr><td className="p-2 border border-gray-600">Mobile-first experience</td><td className="p-2 border border-gray-600">No</td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600"><strong>Yes</strong></td><td className="p-2 border border-gray-600">Limited</td><td className="p-2 border border-gray-600">Limited</td></tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">When you should use something else</h2>

                <p className="mb-4"><strong>Use CryptPad if</strong> end-to-end encryption is non-negotiable for your threat model. CryptPad encrypts in the browser and even the server operator cannot read your documents. Etherpad does not.</p>

                <p className="mb-4"><strong>Use HedgeDoc if</strong> you want a markdown-first collaborative editor with native rendering, slides mode, and code highlighting baked in. Etherpad can do markdown via plugin, but HedgeDoc is purpose-built for it.</p>

                <p className="mb-4"><strong>Use Onlyoffice or Collabora if</strong> you need a full office suite (documents, spreadsheets, slides) with formatting compatible with Microsoft Office. Etherpad has one editor type.</p>

                <p className="mb-4"><strong>Use Google Docs or Notion if</strong> you want polished mobile apps, integrated suites, and modern AI features that you don&apos;t mind running on a third-party model. Both are more polished than Etherpad and have larger feature surfaces. They are also more expensive in ways that don&apos;t show up on the bill.</p>

                <p className="mb-8"><strong>Use Git if</strong> the document is code, the history needs cryptographic integrity, and you don&apos;t need real-time collaboration.</p>

                <h2 className="text-2xl text-primary font-bold mt-12 mb-4">When you should use Etherpad</h2>

                <p className="mb-4">Etherpad is the right choice when:</p>
                <ul className="list-disc pl-8 space-y-2 mb-4">
                    <li>You need <strong>real-time collaborative editing</strong> with no setup friction for editors.</li>
                    <li>You need <strong>visible, per-character authorship</strong> as the default UX &mdash; not buried in a menu.</li>
                    <li>You need to <strong>self-host</strong> for sovereignty, GDPR, regulatory, or institutional reasons.</li>
                    <li>You need a tool with <strong>no corporate owner</strong> &mdash; one that cannot be acquired and shut down, and that has a track record of holding the line.</li>
                    <li>You need <strong>opt-in AI</strong> rather than forced AI &mdash; or no AI at all.</li>
                    <li>You need to <strong>extend the editor</strong> to fit a specific institutional workflow without forking, without enterprise contracts, and without permission from a vendor.</li>
                    <li>You value <strong>boring stability</strong> over feature novelty. Etherpad has been doing the same thing well since 2009.</li>
                </ul>

                <p className="mb-12">If most of those apply, you&apos;re probably in the right place.</p>
            </div>

            <Footer/>
        </div>
    </div>
}
