import brandSvg from '../../public/favicon.ico';
import Image from "next/image";
import {Hr} from "@/components/Hr.tsx";
import {TopHeading} from "@/components/TopHeading.tsx";
import {SubHeading} from "@/components/SubHeading.tsx";


export default function () {

        return (
        <div className="bg-gray-900 p-10 h-[100vh] overflow-y-auto">
            <div className="flex">
                <Image className="w-10" src={brandSvg} alt="Etherpad logo" />
                <div className="text-white mt-auto mb-auto ml-2">Etherpad Documentation</div>
            </div>
            <Hr/>
            <TopHeading className="text-md text-white mt-4">General</TopHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/docker">Docker</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/localization">Localization</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/cookies">Cookies</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/plugins">Plugins</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/stats">Stats</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/skins">Skins</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/demo">Demo</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/cli">CLI</SubHeading>
            <Hr/>

            <TopHeading className="text-md text-white mt-4">API</TopHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/changeset">Changeset</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/editbar">Editbar</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/editorinfo">EditorInfo</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/embedParameters">Embed Parameters</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/hooksClientSide">Hooks Client Side</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/hooksServerSide">Hooks Server Side</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/plugins">Plugins</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/toolbar">Toolbar</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/httpAPI">HTTP API</SubHeading>

             <Hr/>
            <TopHeading className="text-md text-white mt-4">Old Docs</TopHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/easyDescription">Easync description</SubHeading>
            <SubHeading className="text-sm text-gray-500 mt-2" href="/docs/easyNotes">Easysync notes</SubHeading>
        </div>
    )
}
