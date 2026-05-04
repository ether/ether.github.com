import Link from 'next/link';

const sections = [
    {
        title: 'Getting Started',
        items: [
            { slug: 'docker', label: 'Docker', blurb: 'Run Etherpad in a container.' },
            { slug: 'cli', label: 'CLI', blurb: 'Command-line installation and bin scripts.' },
            { slug: 'demo', label: 'Demo', blurb: 'Try Etherpad without installing.' },
            { slug: 'cookies', label: 'Cookies', blurb: 'Cookies set by Etherpad.' },
        ],
    },
    {
        title: 'Customisation',
        items: [
            { slug: 'plugins', label: 'Plugins', blurb: 'Find and install plugins.' },
            { slug: 'skins', label: 'Skins', blurb: 'Theme the editor.' },
            { slug: 'localization', label: 'Localization', blurb: 'Translate the UI.' },
            { slug: 'stats', label: 'Stats', blurb: 'Built-in metrics.' },
        ],
    },
    {
        title: 'API',
        items: [
            { slug: 'httpAPI', label: 'HTTP API', blurb: 'REST endpoints for managing pads.' },
            { slug: 'hooksServerSide', label: 'Server-side hooks', blurb: 'Extend Etherpad on the server.' },
            { slug: 'hooksClientSide', label: 'Client-side hooks', blurb: 'Extend Etherpad in the browser.' },
            { slug: 'pluginfw', label: 'Plugin framework', blurb: 'Build your own plugin.' },
            { slug: 'editbar', label: 'Editbar', blurb: 'Toolbar API.' },
            { slug: 'toolbar', label: 'Toolbar', blurb: 'Toolbar registration.' },
            { slug: 'editorinfo', label: 'EditorInfo', blurb: 'Editor introspection API.' },
            { slug: 'changeset', label: 'Changeset', blurb: 'Changeset library reference.' },
            { slug: 'embedParameters', label: 'Embed parameters', blurb: 'Tune the embedded pad.' },
        ],
    },
];

export default function Page() {
    return (
        <article className="markdown-body">
            <h1>Etherpad Documentation</h1>
            <p>
                Etherpad is a real-time collaborative editor. Pick a topic below, or
                use the sidebar to jump to a specific page.
            </p>
            {sections.map((section) => (
                <section key={section.title}>
                    <h2>{section.title}</h2>
                    <ul>
                        {section.items.map((item) => (
                            <li key={item.slug}>
                                <Link href={`/docs/${item.slug}`}>{item.label}</Link>
                                {' — '}
                                {item.blurb}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <h2>Easysync (legacy)</h2>
            <ul>
                <li>
                    <a href="/easysync/easysync-full-description.pdf">
                        Easysync full description
                    </a>{' '}
                    — original protocol paper.
                </li>
                <li>
                    <a href="/easysync/easysync-notes.pdf">Easysync notes</a> —
                    accompanying notes.
                </li>
            </ul>
        </article>
    );
}
