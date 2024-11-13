'use client'

import {useUIStore} from "../../src/store/store";
import {useEffect} from "react";
import axios, {AxiosResponse} from "axios";
import {PluginResponse, ServerStats} from "../../src/store/Plugin";
import {PluginViewerHeader} from "../../src/pagesToDisplay/PluginViewerHeader";
import {PluginsList} from "../../src/pagesToDisplay/PluginsList";
import {PluginsFooter} from "../../src/pagesToDisplay/PluginsFooter";

let productionURL: string
if (process.env.NODE_ENV == 'development') {
    productionURL = ""
} else {
    productionURL = "https://static.etherpad.org"
}

export default function PluginViewer() {

    function performSearch() {
        let lastModified: number = 0;
        fetch(productionURL+'/plugins.viewer.json')
            .then(response => {
                lastModified = Date.parse(response.headers.get('last-modified')!)
                return response.json() as Promise<PluginResponse>
            }).then((result) => {
            let list = Object.values(result);
            let keywordsTmp: { [key: string]: number } = {};
            let downloadMaxCount = 0;
            let downloadCount = 0;

            let regex = /\b(https?:\/\/[\S]+?(?:png|jpe?g|gif))\b/;

            list.forEach(function (plugin, index) {
                if (plugin.keywords) {
                    plugin.keywords.forEach(function (key) {
                        if (keywordsTmp[key]) {
                            keywordsTmp[key]++
                        } else {
                            keywordsTmp[key] = 1
                        }
                    })
                }

                downloadCount += plugin.downloads || 0;
                if (plugin.downloads > downloadMaxCount) {
                    downloadMaxCount = plugin.downloads;
                }

                if (plugin.readme) {
                    let results = plugin.readme.match(regex);
                    if (results) {
                        results.forEach(function (item, i) {
                            results[i] = item.replace('http://', 'https://');
                        })
                        list[index].images = results.filter((e, pos) => pos === results.indexOf(e));
                    }
                }
            })

            let tmp: { [key: string]: number } = {};
            for (let key in keywordsTmp) {
                let count = keywordsTmp[key]
                if (count > 1) {
                    tmp[key] = count
                }
            }

            useUIStore.getState().setPluginData(
                {
                    downloadCount,
                    downloadMaxCount,
                    list,
                    downloadAverageCount: downloadCount / list.length,
                    lastModified,
                    keywords: [],
                    searchKeyword: '',
                    sortKey: 'newest',
                    filterOfficial: false
                })
        })
            .catch(error => {
                console.log("error", error);
            });
    }

    function performStatSearch() {
        axios.get(productionURL + '/server-stats.json')
            .then((data: AxiosResponse<ServerStats>) => {
                useUIStore.setState({serverStats: data.data})
            })
    }

    useEffect(() => {
        performSearch();
        performStatSearch();
    }, []);

    return (
        <div className="flex items-center flex-col bg-gray-800">
            <style jsx global>{`
      #root {
        background-color: rgb(31 41 55 / var(--tw-bg-opacity));
      }
      html {
          background-color: rgb(31 41 55 / 1);
      }
    `}</style>
            <div className="w-full md:w-3/4">
                <PluginViewerHeader/>

                <div className="grid grid-cols-1 gap-3 w-full mb-5">
                    <PluginsList/>
                    <PluginsFooter/>
                </div>
            </div>
        </div>
    )
}
