export type Plugin = {
    name: string,
    description: string,
    version: string,
    time: string,
    author: string,
    author_email: string,
    official: boolean,
    popularity_score: number,
    keywords: string,
    image: string,
    readme: string,
    license: string
}

export type PluginMetaData = {
    total_count: number,
    total_downloads: number,
    page_size: number,
}


export type PluginResponse = {
    [key: string]: PluginResponseVal
}

export enum CompatibilityStatus {
    Compatible = 'compatible',
    Warning = 'warning',
    Failed = 'failed',
}

export type PluginResponseVal = {
    name: string,
    description: string,
    time: string,
    created: string,
    modified: string,
    version: string,
    license: string,
    official: boolean,
    downloads: number,
    keywords: string[],
    readme: string,
    author: {
        name: string,
        email: string
    },
    compatibility?: CompatibilityStatus,
    images?: string[],
    /**
     * `@feature:*` Playwright tags for core specs that the plugin
     * intentionally disables. Sourced from the plugin's `ep.json`
     * `disables` array; see ether/etherpad-lite#7648 and
     * `doc/PLUGIN_FEATURE_DISABLES.md` for the contract.
     *
     * If present and non-empty, the plugin is one whose CI is permitted
     * to skip specs tagged with these features — but is also required
     * to make those specs FAIL (i.e. the plugin must actually disable
     * what it declares). Surfaced in the plugin card so users see what
     * a plugin removes before installing.
     *
     * May be undefined for plugins that don't disable any baseline
     * feature, which is the common case.
     */
    disables?: string[]
}


export type PluginMappedResponseVal = PluginResponseVal & {
    name: string,
    image?: string
}


export type ServerStats = {
    clients: {
        count: number
    },
    org: [
        {
            name: string,
            count: number
        }
    ],
    isp: [
        {
            name: string,
            count: number
        }
    ],
    country: [
        {
            name: string,
            count: number
        }
    ],
    user_agent:[
        {
            name: string,
            count: number
        }
    ]
}
