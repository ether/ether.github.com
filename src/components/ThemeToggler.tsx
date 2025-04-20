import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {useUIStore} from "../store/store.ts";
import {useEffect} from "react";
import {handleManualThemeChange} from "../utils/ThemeChanger.ts";


export const ThemeToggler = ()=>{
    const darkMode = useUIStore(state=>state.isDarkMode)
    const setDarkMode = useUIStore(state=>state.setDarkMode)

    useEffect(() => {
        if (typeof window === 'undefined') return
        const isDarkMode = localStorage.getItem('isDarkMode')
        if (isDarkMode != null) {
            const dark = isDarkMode === 'true'
            if (dark) {
                document.documentElement.classList.add('dark')
            } else {
                console.log('remove dark')
                document.documentElement.classList.remove('dark')
            }
        } else {
            const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
            if (dark) {
                document.documentElement.classList.add('dark')
            } else {
                console.log('remove dark')
                document.documentElement.classList.remove('dark')
            }

            setDarkMode(dark)
        }
    }, []);

    return <>
        {darkMode?
                <button>
                    <FontAwesomeIcon className="text-white" icon={faSun} onClick={handleManualThemeChange}/>
                </button>
            :
                <button>
                    <FontAwesomeIcon className="text-black" icon={faMoon} onClick={handleManualThemeChange}/>
                </button>
        }
        </>
}
