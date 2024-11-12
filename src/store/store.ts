import {create} from "zustand";
import {PluginResponseVal, ServerStats} from "./Plugin.ts";


export type FileNotPresentMetaData = {
    version: string,
    os: string,
    url: string,
    latestRelease: GHRelease
}


export type GHRelease = {
    url: string,
    assets_url: string,
    upload_url: string,
    html_url: string,
    id: number,
    author: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean
    },
    node_id: string,
    tag_name: string,
    target_commitish: string,
    name: string,
    draft: boolean,
    prerelease: boolean,
    created_at: string,
    published_at: string,
    assets: GHAsset[],
    tarball_url: string,
    zipball_url: string,
    body: string
}

export type GHAsset = {
    url: string,
        id: number,
    node_id: string,
    name: string,
    label: string,
    uploader: {
    login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean
},
    content_type: string,
        state: string,
    size: number,
    download_count: number,
    created_at: string,
    updated_at: string,
    browser_download_url: string
}


type PluginData = {
    list: PluginResponseVal[],
    keywords: [],
    searchKeyword: string,
    downloadMaxCount: number,
    downloadCount: number,
    downloadAverageCount: number,
    sortKey: string,
    filterOfficial: boolean,
    lastModified: number|null
} | undefined

type StoreType = {
    isDarkMode: boolean,
    toggleDarkMode: () => void,
    setDarkMode: (isDarkMode: boolean) => void,
    selectVersionWindow: boolean,
    setSelectVersionWindow: (selectVersionWindow: boolean) => void,
    releases: GHRelease[],
    setReleases: (releases: GHRelease[]) => void,
    fileNotPresentDialog: boolean,
    openFileNotPresentDialog: (fileNotPresentDialog: boolean) => void,
    fileNotPresentMetaData: FileNotPresentMetaData | undefined,
    setFileNotPresentMetaData: (fileNotPresentMetaData: FileNotPresentMetaData) => void,
    pluginSearchTerm: string,
    setPluginSearchTerm: (pluginSearchTerm: string) => void,
    serverStats: ServerStats | undefined,
    pluginData: PluginData,
    setPluginData: (pluginData: PluginData) => void,
    filteredPlugins: PluginResponseVal[][] // 30 entries per page,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    setOfficialOnly: (officialOnly: boolean) => void,
    setSortKey: (sortKey: string) => void
}


export const useUIStore = create<StoreType>((set, getState) => ({
    isDarkMode: true,
    toggleDarkMode: () => set(state => {
        document.documentElement.classList.toggle('dark')
        return {
            isDarkMode: !state.isDarkMode
        }
    }),
    setDarkMode: (dark: boolean) => set(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
        } else {
            console.log('remove dark')
            document.documentElement.classList.remove('dark')
        }
        return {
            isDarkMode:dark
        }
    }),
    selectVersionWindow:false,
    setSelectVersionWindow: (selectVersionWindow: boolean) => set(() => {
        return {
            selectVersionWindow
        }
    }),
    releases: [],
    setReleases: (releases: GHRelease[]) => set(() => {
        return {
            releases
        }
    }),
    fileNotPresentDialog: false,
    openFileNotPresentDialog: (fileNotPresentDialog: boolean) => set(() => {
        return {
            fileNotPresentDialog
        }
    }),
    fileNotPresentMetaData:undefined,
    setFileNotPresentMetaData: (fileNotPresentMetaData: FileNotPresentMetaData) => set(() => {
      return {
            fileNotPresentMetaData
      }
    }),
    pluginSearchTerm: "",
    setPluginSearchTerm: (pluginSearchTerm: string) => {
        if (pluginSearchTerm.trim().length == 0) {
            const chunkSize = 30;
            const chunks = [];
            for (let i = 0; i < getState().pluginData!.list.length; i += chunkSize) {
                const chunk = getState().pluginData!.list.slice(i, i + chunkSize);
                chunks.push(chunk);
            }
            set({
                filteredPlugins: chunks
            })
        } else {
            const chunkSize = 30;
            const chunks = [];
            const filteredList = getState().pluginData!.list.filter((plugin) => {
                return plugin.name.toLowerCase().includes(pluginSearchTerm.toLowerCase())
            })
            for (let i = 0; i < filteredList.length; i += chunkSize) {
                const chunk = filteredList.slice(i, i + chunkSize);
                chunks.push(chunk);
            }
            set({
                filteredPlugins: chunks
            })
        }

        set({
            pluginSearchTerm
        })
    },
    serverStats: undefined,
    pluginData: undefined,
    filteredPlugins: [],

    setPluginData: (pluginData: PluginData)=>{
        const chunkSize = 30;
        const chunks = [];
        for (let i = 0; i < pluginData!.list.length; i += chunkSize) {
            const chunk = pluginData!.list.slice(i, i + chunkSize);
            chunks.push(chunk);
        }
        set({
            pluginData,
            filteredPlugins: chunks
        })
    },
    currentPage: 0,
    setCurrentPage: (currentPage: number) => set({currentPage}),
    setOfficialOnly: (officialOnly: boolean) => {
        console.log('officialOnly', officialOnly)
        if (officialOnly) {
            const filteredPlugins = getState().filteredPlugins.flat(1).filter((plugin) => {
                return plugin.official
            })
            const chunkSize = 30;
            const chunks = [];
            for (let i = 0; i < filteredPlugins!.length; i += chunkSize) {
                const chunk = filteredPlugins!.slice(i, i + chunkSize);
                chunks.push(chunk);
            }
            set({
                filteredPlugins: chunks
            })
        }


        set({
            pluginData: {
                ...getState().pluginData!,
                filterOfficial: officialOnly
            }
        })
    },
    setSortKey: (sortKey: string) => {
        const newList = getState().filteredPlugins.flat(1).toSorted((a,b)=> {
            if (sortKey === 'newest') {
                if (a.created === undefined) {
                    return 1;
                } else if (b.created === undefined) {
                    return -1;
                }
                return a.created < b.created ? 1 : -1;
            } else if (sortKey === 'updated') {
                if (a.modified === undefined) {
                    return 1;
                } else if (b.modified === undefined) {
                    return -1;
                }
                return a.modified < b.modified ? 1 : -1;
            } else {
                return a.downloads < b.downloads ? 1 : -1;
            }
        })

        const chunkSize = 30;
        const chunks = [];
        for (let i = 0; i < newList!.length; i += chunkSize) {
            const chunk = newList!.slice(i, i + chunkSize);
            chunks.push(chunk);
        }

        set({
            filteredPlugins: chunks
        })

        set({pluginData: {
                ...getState().pluginData!,
                sortKey: sortKey
            }})
    }
}))
