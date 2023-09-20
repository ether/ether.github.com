import {PluginResponse} from "../store/Plugin.ts";
import {useUIStore} from "../store/store.ts";
import {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {PluginCom} from "../components/Plugin.tsx";

export const PluginViewer = () => {
    const setPlugin = useUIStore(state => state.setPlugins)
    const plugins = useUIStore(state => state.plugins)
    const pluginSearchTerm = useUIStore(state => state.pluginSearchTerm)
    const setPluginSearchTerm = useUIStore(state => state.setPluginSearchTerm)


    useEffect(() => {
        fetch('/api/plugins')
            .then(response => response.json())
            .then((data: PluginResponse) => setPlugin(data))
    }, []);

    return <div className="ml-5 mr-5 flex items-center flex-col">
        <div className="w-full md:w-3/4">
            <h1 className="text-4xl font-bold dark:text-white text-left w-full">PluginViewer</h1>
            <span className="text-gray-400">
            This page lists all available plugins for etherpad hosted on npm. <span
                className="text-primary">{plugins?.metadata.total_downloads} downloads</span>  of <span
                className="text-primary">{plugins?.metadata.total_count}</span> plugins in the last month.
            For more information about Etherpad visit https://etherpad.org.
        </span>
            <h2 className="text-3xl text-primary">Plugins ({plugins?.metadata.total_count})</h2>
            <div className="mt-5 mb-5 relative flex self-center w-full">
                <input className="w-full  rounded border-[1px] pt-2 pb-2 pl-8 pr-1"
                       placeholder="Search for plugins to install" value={pluginSearchTerm}
                       onChange={v => setPluginSearchTerm(v.target.value)}/>
                <FontAwesomeIcon icon={faSearch} className="absolute left-2 mt-[0.85rem]"/>
            </div>
            <div className="grid grid-cols-1 gap-3 w-full">
                {
                    plugins?.plugins.map((plugin,i) => {
                        return <PluginCom plugins={plugin} metadata={plugins?.metadata} index={i} key={plugin.name}/>
                    })
                }
            </div>
        </div>
    </div>
}
