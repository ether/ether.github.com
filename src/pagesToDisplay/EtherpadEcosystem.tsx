import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {
    faCubes,
    faDesktop,
    faTerminal,
    faNetworkWired,
    faGaugeHigh,
    faDatabase,
    faCode,
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import {ETHERPAD_ORG} from "../Constants.ts";

type EcosystemProject = {
    name: string,
    url: string,
    icon: IconDefinition,
    description: string,
}

// Curated, user-facing companion projects from the Etherpad Foundation.
// Plugins are deliberately left out — they have their own /plugins page.
const PROJECTS: EcosystemProject[] = [
    {
        name: "Desktop & Mobile App",
        url: `${ETHERPAD_ORG}/etherpad-desktop`,
        icon: faDesktop,
        description: "Run Etherpad as a native app on Windows, macOS, Linux, Android and iOS — collaborate without opening a browser.",
    },
    {
        name: "Command-line Client",
        url: `${ETHERPAD_ORG}/etherpad-cli`,
        icon: faTerminal,
        description: "Create, read and edit pads straight from your terminal. Great for scripting and automating your Etherpad instance.",
    },
    {
        name: "Socket.IO Proxy",
        url: `${ETHERPAD_ORG}/etherpad-proxy`,
        icon: faNetworkWired,
        description: "A reference proxy for Etherpad's real-time Socket.IO traffic — a starting point for inspecting or routing pad messages.",
    },
    {
        name: "Load Testing Tool",
        url: `${ETHERPAD_ORG}/etherpad-load-test`,
        icon: faGaugeHigh,
        description: "Simulate many concurrent users hammering a pad so you can size and tune your instance before going live.",
    },
    {
        name: "ueberDB",
        url: `${ETHERPAD_ORG}/ueberDB`,
        icon: faDatabase,
        description: "The database abstraction layer that powers Etherpad — one API over MySQL, PostgreSQL, Redis, MongoDB, SQLite and more.",
    },
    {
        name: "Web Components",
        url: `${ETHERPAD_ORG}/webcomponents`,
        icon: faCode,
        description: "Embed a live Etherpad pad anywhere with a simple custom HTML element — drop it into your own site or app.",
    },
    {
        name: "Home Assistant Add-on",
        url: `${ETHERPAD_ORG}/home-assistant-addon-etherpad`,
        icon: faHouse,
        description: "Self-host Etherpad on your Home Assistant box in a couple of clicks — collaborative notes for your smart home.",
    },
]

export const EtherpadEcosystem = () => {
    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
            <FontAwesomeIcon icon={faCubes} className="mr-4"/>
            More from Etherpad
        </h2>
        <p className="dark:text-gray-400">
            Etherpad is more than the editor. The Foundation maintains a family of official
            apps, clients and tools to help you run, embed and scale Etherpad. Looking for
            plugins instead? Browse the <a className="underline" href="/plugins">plugin directory</a>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {PROJECTS.map((project) => (
                <a
                    key={project.url}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full p-5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 transition-shadow hover:shadow-md focus:shadow-md no-underline"
                >
                    <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={project.icon} className="text-2xl text-primary mr-3"/>
                        <span className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-primary">
                            {project.name}
                        </span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                    </span>
                </a>
            ))}
        </div>
    </div>
}
