'use client'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinux, faApple, faWindows} from "@fortawesome/free-brands-svg-icons";
import {faCopy, faCheck} from "@fortawesome/free-solid-svg-icons";

type OS = 'linux' | 'mac' | 'windows';

const ONE_LINERS: Record<OS, {label: string; command: string; icon: typeof faLinux}> = {
    linux: {
        label: 'Linux',
        icon: faLinux,
        command: 'curl -fsSL https://raw.githubusercontent.com/ether/etherpad/master/bin/installer.sh | sh',
    },
    mac: {
        label: 'macOS',
        icon: faApple,
        command: 'curl -fsSL https://raw.githubusercontent.com/ether/etherpad/master/bin/installer.sh | sh',
    },
    windows: {
        label: 'Windows',
        icon: faWindows,
        command: 'irm https://raw.githubusercontent.com/ether/etherpad/master/bin/installer.ps1 | iex',
    },
};

export const InstallOneLiner = () => {
    const [os, setOs] = useState<OS>('linux');
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(ONE_LINERS[os].command);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // Clipboard unavailable — the command is still selectable in the <code>.
        }
    };

    return <div className="my-8 mx-auto p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 overflow-hidden max-w-xl">
        <div className="flex text-sm">
            {(Object.keys(ONE_LINERS) as OS[]).map((key) => {
                const active = os === key;
                return <button
                    key={key}
                    type="button"
                    onClick={() => setOs(key)}
                    className={`flex-1 px-3 py-2 border-b-2 transition ${
                        active
                            ? 'border-primary text-primary bg-white dark:bg-gray-800'
                            : 'border-transparent text-gray-600 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-800/50'
                    }`}>
                    <FontAwesomeIcon icon={ONE_LINERS[key].icon} className="mr-2"/>
                    {ONE_LINERS[key].label}
                </button>;
            })}
        </div>
        <div className="flex items-center justify-between gap-2 p-3">
            <code className="flex-1 text-sm font-mono break-all text-gray-800 dark:text-gray-100">
                {ONE_LINERS[os].command}
            </code>
            <button
                type="button"
                onClick={copy}
                className="shrink-0 px-2 py-1 text-sm text-primary hover:bg-primary hover:text-white rounded"
                aria-label="Copy install command">
                <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="mr-1"/>
                {copied ? 'Copied' : 'Copy'}
            </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 px-3 pb-3">
            Needs <code>git</code> and Node.js &ge; 20. Then <code>cd etherpad && pnpm run prod</code> and open <code>http://localhost:9001</code>.{' '}
            <a
                href="https://github.com/ether/etherpad#installation"
                target="_blank"
                rel="noreferrer"
                className="underline">
                Other install options
            </a>.
        </p>
    </div>;
};
