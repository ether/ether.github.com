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
    metadata: PluginMetaData,
    plugins: Plugin[]
}
