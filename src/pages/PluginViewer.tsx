import {Plugins} from "../store/Plugin.ts";
import {useUIStore} from "../store/store.ts";
import {useEffect, useMemo} from "react";

export const PluginViewer = ()=>{
    const setPlugin = useUIStore(state => state.setPlugins)
    const plugins = useUIStore(state => state.plugins)
    const numberOfTotalDownloads = useMemo(()=>{
        return Object.keys(plugins).reduce((acc, key)=>{
            return acc + plugins[key].data.downloads
        },0)
    }, [plugins]
    )
    const retrievePlugins = async ()=>{
        fetch('https://static.etherpad.org/plugins.full.json')
            .then(response => response.json())
            .then((data:Plugins) =>setPlugin(data))
    }

    useEffect(() => {
        if (Object.keys(plugins).length > 0) return
        retrievePlugins()
    }, []);

    return <div className="ml-5 mr-5">
        <h1 className="text-2xl dark:text-white">PluginViewer</h1>
        <span className="text-gray-400">
            This page lists all available plugins for etherpad hosted on npm. <span className="text-primary">{numberOfTotalDownloads} downloads</span>  of <span className="text-primary">231</span> plugins in the last month.
            For more information about Etherpad visit https://etherpad.org.
        </span>

    </div>
}
