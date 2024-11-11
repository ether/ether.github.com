import {PluginResponseVal} from "../store/Plugin.ts";
import {FC, useMemo} from "react";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import sanitizeHtml from 'sanitize-html'
import * as marked from 'marked'
import {PluginAuthorComp} from "./PluginAuthorComp.tsx";
import {Chip} from "./Chip.tsx";
type PluginProps = {
    plugins: PluginResponseVal,
    index: number,
    averageDownload: number
}
TimeAgo.addDefaultLocale(en)
const timeago = new TimeAgo('en-US')


const formatTime = (isoDate: string) => {
    return timeago.format(new Date(isoDate))
}

export const PluginCom: FC<PluginProps> = ({plugins, averageDownload}) => {

    const renderMarkdown =  (text: string) => {
        const unsafeHtml =  marked.parse(text) as string
        const sanitizedHtml = sanitizeHtml(unsafeHtml)
        return {__html: sanitizedHtml}
    }
    const popularityScore = useMemo(() => (plugins.downloads / averageDownload), [plugins.downloads, averageDownload])

    return <div className="dark:text-white border-[1px] p-2 rounded">
        <div className="flex">
            <div className="text-3xl text-primary flex gap-3">
                <a target={"_blank"} href={'https://www.npmjs.org/package/' + plugins.name}>{plugins.name}</a>
                <small className="align-text-bottom text-gray-400 mt-[3px]">{plugins.version}</small>
            </div>
            <div className="flex-grow"></div>
            {plugins.time && <div className="mr-5 mt-[0.3rem]">{formatTime(plugins.time)}</div>}
            <div className="w-10 flex items-center mr-2">
                <div className="w-10 border-[1px] border-white"
                     title={(plugins.downloads) + " downloads"}>
                    <div style={{width: popularityScore * 100 + "%"}}
                         className="bg-primary w-10 h-5 self-center"></div>
                </div>
            </div>
        </div>
        <div>{plugins.description}</div>
        <div className="flex gap-10">
            {plugins.image &&
                <img alt={"Image of " + plugins.name} className="w-60 object-contain" src={plugins.image}/>}
            {plugins.readme && <div className="w-full line-clamp-5 readme-of-plugin"
                                    dangerouslySetInnerHTML={renderMarkdown(plugins.readme)}></div>}
        </div>
        <div className="mt-5 flex">
            <PluginAuthorComp name={plugins.author.name} email={plugins.author.email}/>
            <span className="flex-grow"></span>
            <span className="mr-5">License: {plugins.license ? plugins.license : '--'}</span>
            <span className="flex gap-3">
            {
                plugins.keywords && plugins.keywords.map((k, i) => <Chip
                    key={plugins.name + i} index={i}>{k}</Chip>)
            }
            </span>
        </div>
    </div>
}
