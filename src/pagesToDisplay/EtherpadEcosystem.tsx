import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {
    faCubes,
    faPlug,
    faDesktop,
    faTerminal,
    faShieldHalved,
    faNetworkWired,
    faDatabase,
    faHouse,
    faCalculator,
    faKeyboard,
    faRobot,
} from "@fortawesome/free-solid-svg-icons";
import {ETHERPAD_ORG} from "../Constants.ts";

type EcosystemProject = {
    name: string,
    url: string,
    icon: IconDefinition,
    description: string,
    // Internal routes (e.g. /plugins) use next/link for client-side
    // navigation; everything else opens the external project in a new tab.
    internal?: boolean,
}

// Curated, user-facing companion projects and resources from the Etherpad
// Foundation, surfaced alongside the core editor on the homepage.
const PROJECTS: EcosystemProject[] = [
    {
        name: "Plugins",
        url: "/plugins",
        icon: faPlug,
        description: "Hundreds of community plugins add features, themes and integrations. Browse the directory and extend your Etherpad however you like.",
        internal: true,
    },
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
        name: "pad — Terminal Editor",
        url: `${ETHERPAD_ORG}/pad`,
        icon: faKeyboard,
        description: "A nano-class terminal text editor. Edit files locally, or join any pad to collaborate in real time — your edits and everyone else's sync live, right in your terminal.",
    },
    {
        name: "Printing Press",
        url: "https://printingpress.dev",
        icon: faRobot,
        description: "Agent-native Etherpad tooling — a Go CLI, a Claude Code skill and an MCP server, generated from a spec so AI agents can drive Etherpad.",
    },
    {
        name: "Etherpad Scanner",
        url: "https://scanner.etherpad.org",
        icon: faShieldHalved,
        description: "Security-focused scanner for public Etherpad instances — check whether an instance is healthy, correctly configured and up to date.",
    },
    {
        name: "Socket.IO Proxy",
        url: `${ETHERPAD_ORG}/etherpad-proxy`,
        icon: faNetworkWired,
        description: "A reference proxy for Etherpad's real-time Socket.IO traffic — a starting point for inspecting or routing pad messages.",
    },
    {
        name: "Scale Calculator",
        url: "https://scale.etherpad.org",
        icon: faCalculator,
        description: "Estimate the CPU, memory and number of instances your deployment needs for a target number of concurrent users.",
    },
    {
        name: "ueberDB",
        url: `${ETHERPAD_ORG}/ueberDB`,
        icon: faDatabase,
        description: "The database abstraction layer that powers Etherpad — one API over MySQL, PostgreSQL, Redis, MongoDB, SQLite and more.",
    },
    {
        name: "Home Assistant Add-on",
        url: `${ETHERPAD_ORG}/home-assistant-addon-etherpad`,
        icon: faHouse,
        description: "Self-host Etherpad on your Home Assistant box in a couple of clicks — collaborative notes for your smart home.",
    },
]

const CARD_CLASS = "group flex flex-col h-full p-5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 transition-shadow hover:shadow-md focus:shadow-md no-underline"

const CardBody = ({project}: {project: EcosystemProject}) => <>
    <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={project.icon} className="text-2xl text-primary mr-3"/>
        <span className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-primary">
            {project.name}
        </span>
    </div>
    <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.description}
    </span>
</>

export const EtherpadEcosystem = () => {
    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
            <FontAwesomeIcon icon={faCubes} className="mr-4"/>
            More from Etherpad
        </h2>
        <p className="dark:text-gray-400">
            Etherpad is more than the editor. The Foundation maintains a family of official
            apps, clients and tools — plus a large plugin ecosystem — to help you extend, run,
            embed and scale Etherpad.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {PROJECTS.map((project) => (
                project.internal ? (
                    <Link key={project.url} href={project.url} className={CARD_CLASS}>
                        <CardBody project={project}/>
                    </Link>
                ) : (
                    <a
                        key={project.url}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={CARD_CLASS}
                    >
                        <CardBody project={project}/>
                    </a>
                )
            ))}
        </div>
    </div>
}
