import {useUIStore} from "../store/store.ts";

export const handleManualThemeChange = ()=>{
    const newState = !useUIStore.getState().isDarkMode
    useUIStore.getState().toggleDarkMode()
    localStorage.setItem('isDarkMode', newState.toString())
}
