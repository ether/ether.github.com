import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {useUIStore} from "../store/store.ts";
import {useEffect} from "react";

export const handleManualThemeChange = ()=>{
    const newState = !useUIStore.getState().isDarkMode
    useUIStore.getState().toggleDarkMode()
    localStorage.setItem('isDarkMode', newState.toString())
}

export const ThemeToggler = ()=>{
    const darkMode = useUIStore(state=>state.isDarkMode)
    const setDarkMode = useUIStore(state=>state.setDarkMode)

    useEffect(() => {
        const isDarkMode = localStorage.getItem('isDarkMode')
        if(isDarkMode != null){
            setDarkMode(isDarkMode === 'true')
        }
        else{
            setDarkMode(darkMode)
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
