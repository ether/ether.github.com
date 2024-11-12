import {PluginResponseVal} from "../store/Plugin.ts";
import {FC, useMemo} from "react";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import sanitizeHtml from 'sanitize-html'
import * as marked from 'marked'
import {PluginAuthorComp} from "./PluginAuthorComp.tsx";
import {Chip} from "./Chip.tsx";
import {useUIStore} from "@/store/store.ts";
type PluginProps = {
    plugins: PluginResponseVal,
    index: number
}
TimeAgo.addDefaultLocale(en)
const timeago = new TimeAgo('en-US')


const formatTime = (isoDate: string) => {
    return timeago.format(new Date(isoDate))
}

export const PluginCom: FC<PluginProps> = ({plugins}) => {
    const downloadAverage = useUIStore(state => state.pluginData)
    const renderMarkdown =  (text: string) => {
        const unsafeHtml =  marked.parse(text) as string
        const sanitizedHtml = sanitizeHtml(unsafeHtml)
        return {__html: sanitizedHtml}
    }

    const downloadStatsStyle = useMemo(()=>{
        if (!downloadAverage) return 'rgb(100, 100, 100) 50%'

        let downloadPercentage: number;
        if (plugins.downloads < downloadAverage?.downloadAverageCount) {
            downloadPercentage = plugins.downloads / downloadAverage.downloadAverageCount * 50;
        } else {
            downloadPercentage = 50 + (plugins.downloads / downloadAverage.downloadMaxCount * 50);
        }

        let downloadStatsStyle = 'rgb(100, 100, 100) ' + downloadPercentage + '%';
        if (downloadPercentage > 50) {
            downloadStatsStyle = 'rgb(0, 200, 0) ' + downloadPercentage + '%';
        } else if (downloadPercentage > 15) {
            downloadStatsStyle = 'orange ' + downloadPercentage + '%';
        }
        return downloadStatsStyle
    }, [])



    return <div className="text-gray-400 border-[1px] p-2 rounded-2xl bg-gray-900 ">
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
                    <div style={{background: "linear-gradient(to right, " + downloadStatsStyle + ", lightgrey 1%)"}}
                         className="bg-primary w-10 h-5 self-center"></div>
                </div>
            </div>
        </div>
        <div>{plugins.description}</div>
        <div className="flex gap-10">
            {plugins.images && plugins.images.map((img, i) => <img src={img} className="w-60 object-contain" key={plugins.name + i} alt={"Image of " + plugins.name}/>)}
            {plugins.readme && <div className="w-full line-clamp-5 readme-of-plugin"
                                    dangerouslySetInnerHTML={renderMarkdown(plugins.readme)}></div>}
        </div>
        <div className="mt-5 flex mb-2">
            <PluginAuthorComp name={plugins.author.name} email={plugins.author.email}/>
            <span className="flex-grow"></span>
            <span className="mr-5">License: {plugins.license ? plugins.license : '--'}</span>
        </div>
        <div className="flex">
            <div className="flex-grow"></div>
        <div className="flex gap-3 self-end">
            {
                plugins.keywords && plugins.keywords.map((k, i) => <Chip
                    key={plugins.name + i} index={i}>{k}</Chip>)
            }
        </div>
        </div>
    </div>
}
