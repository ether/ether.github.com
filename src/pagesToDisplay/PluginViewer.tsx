'use client'
import {PluginResponse} from "../store/Plugin.ts";
import {useUIStore} from "../store/store.ts";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {PluginCom} from "../components/Plugin.tsx";
import * as Checkbox from '@radix-ui/react-checkbox';
import {CheckIcon} from "../components/CheckIcon.tsx";
import {useDebounce} from "../utils/useDebounce.ts";
import axios, {AxiosResponse} from "axios";

export const PluginViewer = () => {
    const setPlugin = useUIStore(state => state.setPlugins)
    const plugins = useUIStore(state => state.plugins)
    const pluginSearchTerm = useUIStore(state => state.pluginSearchTerm)
    const setPluginSearchTerm = useUIStore(state => state.setPluginSearchTerm)
    const [officalOnly, setOfficalOnly] = useState<boolean>(false)

    function performSearch() {
        axios.get('/api/plugins', {
          params: {
                query: pluginSearchTerm,
                official: officalOnly
          }
        })
            .then((data: AxiosResponse<PluginResponse>) => {
                setPlugin(data.data)
            })
    }

    useEffect(() => {
        performSearch();
    }, []);


    useDebounce(()=>{
        performSearch();
    },1000,[pluginSearchTerm, officalOnly])

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
            <div className="flex items-center gap-5">
                <Checkbox.Root className="w-5 h-5 p-2 flex items-center justify-center data-[state=unchecked]:bg-gray-600 data-[state=unchecked]:rounded-full" checked={officalOnly}
                               onCheckedChange={()=>setOfficalOnly(!officalOnly)} id="c1">
                    <Checkbox.Indicator className=" text-white bg-primary rounded-full p-1">
                            <CheckIcon/>
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className="text-white" htmlFor="c1">
                    Only official plugins
                </label>
            </div>
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
