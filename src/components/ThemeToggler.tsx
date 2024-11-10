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
        if(isDarkMode != null){
            setDarkMode(isDarkMode === 'true')
        }
        else{
            setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
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
