import {PluginMetaData,Plugin} from "../store/Plugin.ts";
import {FC} from "react";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import sanitizeHtml from 'sanitize-html'
import * as marked from 'marked'
type PluginProps = {
    metadata: PluginMetaData,
    plugins: Plugin
}
TimeAgo.addDefaultLocale(en)
const timeago = new TimeAgo('en-US')


const formatTime = (isoDate: string) => {
    return timeago.format(new Date(isoDate))
}

const renderMarkdown = (text: string) => {
    const unsafeHtml = marked.parse(text)
    const sanitizedHtml =  sanitizeHtml(unsafeHtml)
    return {__html: sanitizedHtml}
}

export const PluginCom: FC<PluginProps> = ({plugins})=>{
    return <div className="dark:text-white border-[1px] p-2 rounded">
        <div className="flex">
            <div className="text-3xl text-primary flex gap-3">
                <span>{plugins.name}</span>
                <small className="align-text-bottom text-gray-400 mt-[3px]">{plugins.version}</small>
            </div>
            <div className="flex-grow"></div>
            {plugins.time&&<div className="mr-5 mt-[0.3rem]">{formatTime(plugins.time)}</div>}
            <div className="w-10 flex items-center mr-2">
                <div className="w-10 border-[1px] border-white">
                    <div style={{width: plugins.popularity_score*100+"%"}} title={(plugins.popularity_score*100).toFixed(2)+"% popular among other plugins"} className="bg-primary w-10 h-5 self-center"></div>
                </div>
            </div>
        </div>
        <div>{plugins.description}</div>
        <div className="flex gap-10">
            {plugins.image&&<img alt={"Image of "+plugins.name} className="w-60" src={plugins.image}/>}
            {plugins.readme&&<div className="w-full line-clamp-5" dangerouslySetInnerHTML={renderMarkdown(plugins.readme)}></div>}
        </div>
        <div>

        </div>
    </div>
}
