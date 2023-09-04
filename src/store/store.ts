import {create} from "zustand";


export type FileNotPresentMetaData = {
    version: string,
    os: string,
    url: string,
    latestRelease: GHRelease,
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
}

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

export const useUIStore = create<StoreType>((set) => ({
    isDarkMode: prefersDarkMode,
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
    })
}))
