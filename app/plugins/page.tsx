'use client'

import * as Checkbox from '@radix-ui/react-checkbox';
import {useUIStore} from "../../src/store/store";
import {useEffect, useMemo, useState} from "react";
import {CheckIcon} from '../../src/components/CheckIcon';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {PluginCom} from "../../src/components/Plugin";
import axios, {AxiosResponse} from "axios";
import {PluginMappedResponseVal, PluginResponse, ServerStats} from "../../src/store/Plugin";
import Link from "next/link";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const IMAGE_REGEX =  /\b(https?:\/\/[\S]+?(?:png|jpe?g|gif))\b/;


export default function PluginViewer() {
    const setPlugin = useUIStore(state => state.setPlugins)
    const plugins = useUIStore(state => state.plugins)
    const pluginSearchTerm = useUIStore(state => state.pluginSearchTerm)
    const setPluginSearchTerm = useUIStore(state => state.setPluginSearchTerm)
    const [officalOnly, setOfficalOnly] = useState<boolean>(false)
    const serverStats = useUIStore(state => state.serverStats)
    const totalDownloads = useMemo(()=>{
        if (!plugins) return 0
        return Object.values(plugins).reduce((acc, val) => acc + val.downloads, 0)
    },[plugins])
    const [sortKey, setSortKey] = useState<string>('newest')
    const [downloadPercentage, setDownloadAveragePercentage] = useState<number>(0)
    const totalCount = useMemo(()=>{
        if (!plugins) return 0
        return Object.keys(plugins).length
    }, [plugins])
    const filteredPlugins = useMemo(()=>{
        if (!plugins) return plugins
        let average = 0

        const entry: PluginMappedResponseVal[] = Object.entries(plugins).filter((plugin) => {
            if (officalOnly && plugin[1].official == false) {
                return false
            }
            if (plugin[1].keywords && pluginSearchTerm) {
                for (let i = 0; i < plugin[1].keywords.length; i++) {
                    let keyword = plugin[1].keywords[i];
                    if (keyword.toUpperCase().indexOf(pluginSearchTerm) > -1) {
                        return true;
                    }
                }
            }

            average += plugin[1].downloads

            return true
        }).map(plugin=> {
            return {
                ...plugin[1],
                name: plugin[0],
                image: plugin[1].readme.match(IMAGE_REGEX)?.[0]
            } satisfies PluginMappedResponseVal
        })

        average = average / entry.length
        setDownloadAveragePercentage(average)
        entry.sort(function (a, b) {
        if (sortKey === 'newest') {
            if (a.time === undefined) {
                return 1;
            } else if (b.time === undefined) {
                return -1;
            }
            return a.time < b.time ? 1 : -1;
        } else if (sortKey === 'updated') {
            if (a.modified === undefined) {
                return 1;
            } else if (b.modified === undefined) {
                return -1;
            }
            return a.modified < b.modified ? 1 : -1;
        } else {
            return a.downloads < b.downloads ? 1 : -1;
        }})


        return entry
    }, [plugins, officalOnly, pluginSearchTerm])


    function performSearch() {
        axios.get('/plugins.viewer.json')
            .then((data: AxiosResponse<PluginResponse>) => {
                setPlugin(data.data)
            })
    }

    function performStatSearch() {
        axios.get('/server-stats.json')
            .then((data: AxiosResponse<ServerStats>)=>{
                useUIStore.setState({serverStats:data.data})
            })
    }

    useEffect(() => {
        performSearch();
        performStatSearch();
    }, []);

    return (
        <div className="ml-5 mr-5 flex items-center flex-col">
            <div className="w-full md:w-3/4">
                <h1 className="text-4xl font-bold dark:text-white text-left w-full">PluginViewer</h1>
                <div className="text-black text-2xl">
            This page lists all available plugins for etherpad hosted on npm. <div
                    className="text-black"><span className="text-primary">{totalDownloads}</span> downloads  of {totalCount}  plugins in the last month. </div>
            For more information about Etherpad visit <Link href="https://etherpad.org" target="_blank">https://etherpad.org</Link>
        </div>
                <div className="flex gap-5">
                    <h2 className="text-3xl text-primary">Plugins ({totalCount})</h2>
                    <Checkbox.Root
                        className="w-5 h-5 p-2 data-[state=unchecked]:bg-gray-600 data-[state=unchecked]:rounded-full"
                        checked={officalOnly}
                        onCheckedChange={() => setOfficalOnly(!officalOnly)} id="c1">
                        <Checkbox.Indicator className="text-white bg-primary rounded-full p-1">
                            <CheckIcon/>
                        </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label className="text-black" htmlFor="c1">
                        Only official plugins
                    </label>
                    Sort by:
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger className="btn">{sortKey}</DropdownMenu.Trigger>
                        <DropdownMenu.Content className="dropdown-content">
                            <DropdownMenu.Item className="dropdown-item" onClick={()=>{
                                setSortKey('created')
                            }}>Created</DropdownMenu.Item>
                            <DropdownMenu.Item className="dropdown-item"  onClick={()=>{
                                setSortKey('updated')
                            }}>Updated</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root>
                </div>
                <div className="mt-5 mb-5 relative flex self-center w-full">
                <input className="w-full  rounded border-[1px] pt-2 pb-2 pl-8 pr-1"
                           placeholder="Search for plugins to install" value={pluginSearchTerm}
                           onChange={v => setPluginSearchTerm(v.target.value)}/>
                    <FontAwesomeIcon icon={faSearch} className="absolute left-2 mt-[0.85rem]"/>
                </div>
                <div className="grid grid-cols-1 gap-3 w-full">
                    {
                        filteredPlugins && filteredPlugins?.map((plugin, i) => {
                            return <PluginCom plugins={plugin} index={i}  averageDownload={downloadPercentage}
                                              key={plugin.name}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
