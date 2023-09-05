export type Plugins = {
    [key:string]: PluginData
}

export type PluginData = {
    name: string,
    description: string,
    time: string,
    version: string,
    official: boolean,
    data: {
        _id: string,
        _rev: string,
        name: string,
        dist_tags: {
            latest: string
        },
        versions: {
            [key: string]: {
                name: string,
                version: string,
                description: string,
                author: {
                    name: string,
                    email: string,
                },
                license: string,
                keywords: string[],
                repository: {
                    type: string,
                    url: string,
                }
            }
        },
        license: string,
        downloads: number
    }
}
