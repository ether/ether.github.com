import {create} from "zustand";

type StoreType = {
    isDarkMode: boolean,
    toggleDarkMode: () => void,
    setDarkMode: (isDarkMode: boolean) => void
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
    })
}))
