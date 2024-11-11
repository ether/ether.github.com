'use client'

import {useUIStore} from "../../src/store/store";
import {useEffect, useMemo, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {PluginCom} from "../../src/components/Plugin";
import axios, {AxiosResponse} from "axios";
import {PluginMappedResponseVal, PluginResponse, ServerStats} from "../../src/store/Plugin";
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Checkbox } from "@/components/ui/checkbox"

const IMAGE_REGEX =  /\b(https?:\/\/[\S]+?(?:png|jpe?g|gif))\b/;


export default function PluginViewer() {
    const setPlugin = useUIStore(state => state.setPlugins)
    const plugins = useUIStore(state => state.plugins)
    const pluginSearchTerm = useUIStore(state => state.pluginSearchTerm)
    const setPluginSearchTerm = useUIStore(state => state.setPluginSearchTerm)
    const [officalOnly, setOfficalOnly] = useState<boolean>(false)
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
        let highestDownload = 0

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

            if (plugin[1].downloads > highestDownload) {
                highestDownload = plugin[1].downloads
            }

            return true
        }).map(plugin=> {
            return {
                ...plugin[1],
                name: plugin[0],
                image: plugin[1].readme.match(IMAGE_REGEX)?.[0]
            } satisfies PluginMappedResponseVal
        })

        setDownloadAveragePercentage(highestDownload)
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

        const chunkSize = 30;
        const chunkedArray = []
        for (let i = 0; i < entry.length; i += chunkSize) {
            const chunk = entry.slice(i, i + chunkSize);
            chunkedArray.push(chunk)
        }


        return chunkedArray
    }, [plugins, officalOnly, pluginSearchTerm])
    const [currentPage, setCurrentPage] = useState<number>(0)
    const pluginsToDisplay = useMemo(()=>{
        if (!filteredPlugins) return []
        return filteredPlugins[currentPage]
    }, [currentPage, filteredPlugins])


    function performSearch() {
        axios.get(process.env!.NEXT_PUBLIC_API_URL!+'/plugins.viewer.json')
            .then((data: AxiosResponse<PluginResponse>) => {
                setPlugin(data.data)
            })
    }

    function performStatSearch() {
        axios.get(process.env!.NEXT_PUBLIC_API_URL!+'/server-stats.json')
            .then((data: AxiosResponse<ServerStats>)=>{
                useUIStore.setState({serverStats:data.data})
            })
    }

    useEffect(() => {
        performSearch();
        performStatSearch();
    }, []);

    return (
        <div className="flex items-center flex-col bg-gray-800">
            <div className="w-full md:w-3/4">
                <h1 className="text-4xl font-bold text-white text-left w-full">PluginViewer</h1>
                <div className="text-white text-2xl">
                    This page lists all available plugins for etherpad hosted on npm. <div
                    className=""><span className="text-primary">{totalDownloads}</span> downloads
                    of {totalCount} plugins in the last month. </div>
                    For more information about Etherpad visit <Link href="https://etherpad.org"
                                                                    target="_blank">https://etherpad.org</Link>
                </div>
                <h2 className="text-3xl text-primary">Plugins ({totalCount})</h2>
                <div className="flex gap-5 border-t-[1px] border-b-[1px] border-gray-600 pt-2 pb-2">
                    <span>
                    <Checkbox className="self-center text-white" checked={officalOnly} onCheckedChange={() => setOfficalOnly(!officalOnly)} id="c1"/>
                    <label className="text-white ml-2 mt-auto text-2xl" htmlFor="c1">
                        Only official plugins
                    </label>
                        </span>
                    <span className="text-white mt-auto text-2xl">Sort by:</span>
                    <Select onValueChange={(v: string)=>{
                        setSortKey(v)
                    }}>
                        <SelectTrigger className="bg-gray-700 text-white border-[1px] w-1/2 pt-1 pl-2">{sortKey}</SelectTrigger>
                        <SelectContent className="bg-gray-700 text-white">
                            <SelectItem className="bg-gray-700" onClick={() => {
                                setSortKey('created')
                            }} value={"created"}>Created</SelectItem>
                            <SelectItem className="bg-gray-700" value="updated">Updated</SelectItem>
                            <SelectItem className="bg-gray-700" value="newest">Newest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="mt-5 mb-5 relative flex self-center w-full">
                    <input className="w-full  rounded border-[1px] pt-2 pb-2 pl-8 pr-1 bg-gray-700 text-white"
                           placeholder="Search for plugins to install" value={pluginSearchTerm}
                           onChange={v => setPluginSearchTerm(v.target.value)}/>
                    <FontAwesomeIcon icon={faSearch} className="absolute left-2 mt-[0.7rem] text-white"/>
                </div>
                <div className="grid grid-cols-1 gap-3 w-full mb-5">
                    {
                        pluginsToDisplay.map((plugin, i) => {
                            return <PluginCom key={i} index={i} plugins={plugin} averageDownload={downloadPercentage}/>
                        })
                    }
                    <Pagination>
                        <PaginationContent className="text-white">
                            <PaginationItem>
                                <PaginationPrevious onClick={()=>{
                                    if (currentPage === 0) return
                                    setCurrentPage(currentPage-1)
                                }} />
                            </PaginationItem>
                            {
                                filteredPlugins && filteredPlugins.map((_, i) => {
                                    return <PaginationItem key={i}>
                                        <PaginationLink isActive={currentPage === i} onClick={()=>{
                                            setCurrentPage(i)
                                        }}>{i+1}</PaginationLink>
                                    </PaginationItem>
                                })
                            }
                            <PaginationItem>
                                <PaginationNext className="text-white" aria-disabled={filteredPlugins && filteredPlugins.length -1 == currentPage} onClick={()=>{
                                    if (currentPage === filteredPlugins!.length -1) return
                                    setCurrentPage(currentPage+1)
                                }} />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}
