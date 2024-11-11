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
    }
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
