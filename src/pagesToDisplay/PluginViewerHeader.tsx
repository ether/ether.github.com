import Link from "next/link";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useUIStore} from "@/store/store.ts";


export const PluginViewerHeader = ()=> {
    const setPluginSearchTerm = useUIStore(state => state.setPluginSearchTerm)
    const plugins = useUIStore(state => state.pluginData)
    const pluginSearchTerm = useUIStore(state => state.pluginSearchTerm)
    const pluginData = useUIStore(state => state.pluginData)
    const setOfficalOnly = useUIStore(state => state.setOfficialOnly)
    const setSortKey = useUIStore(state => state.setSortKey)

    return <>
        <h1 className="text-4xl font-bold text-white text-left w-full">PluginViewer</h1>
        <div className="text-white text-2xl">
            This page lists all available plugins for etherpad hosted on npm. <div
            className=""><span className="text-primary">{plugins?.downloadCount}</span> downloads
            of <span className="text-primary">{plugins?.list.length}</span> plugins in the last month. </div>
            <div>There are about <span  className="text-primary">10969</span> instances</div>
            For more information about Etherpad visit <Link href="https://etherpad.org"
                                                            target="_blank">https://etherpad.org</Link>
        </div>
        <h2 className="text-3xl text-primary">Plugins ({plugins?.list.length})</h2>
        <div className="flex gap-5 border-t-[1px] border-b-[1px] border-gray-600 pt-2 pb-2">
            <span>
                <Checkbox className="text-white bg-primary data-[state=checked]:bg-primary" checked={pluginData?.filterOfficial}
                          onCheckedChange={() => setOfficalOnly(!pluginData?.filterOfficial)} id="c1"/>
                <label className="text-white ml-2 mt-auto text-2xl" htmlFor="c1">
                    Only official plugins
                </label>
            </span>
            <span className="text-white mt-auto text-2xl">Sort by:</span>
            <Select onValueChange={(v: string) => {
                setSortKey(v);
            }}>
                <SelectTrigger className="bg-gray-700 text-white border-[1px] w-1/2 pt-1 pl-2">{pluginData?.sortKey}</SelectTrigger>
                <SelectContent className="bg-gray-700 text-white">
                    <SelectItem className="bg-gray-700" onClick={() => {
                        setSortKey('created');
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
    </>
}
