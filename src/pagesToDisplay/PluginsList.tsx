import {useUIStore} from "@/store/store.ts";
import {PluginCom} from "@/components/Plugin.tsx";
import {useMemo} from "react";

export const PluginsList = ()=>{
    const pluginPage = useUIStore(state=>state.filteredPlugins)
    const currentPage = useUIStore(state=>state.currentPage)

    const pluginsToDisplay = useMemo(()=>{
        if (!pluginPage || pluginPage.length == 0) return []
        return pluginPage[currentPage]
    }, [pluginPage, currentPage])

    return (
        pluginsToDisplay.map((plugin, index) => (
          <PluginCom plugins={plugin} index={index} key={plugin.modified}/>
        ))
    )
}
