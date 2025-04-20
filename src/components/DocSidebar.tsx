import brandSvg from '../../public/favicon.ico';
import Image from "next/image";
import {Hr} from "@/components/Hr.tsx";
import {TopHeading} from "@/components/TopHeading.tsx";
import {SubHeading} from "@/components/SubHeading.tsx";


export default function () {
    return (
        <div className="bg-gray-900 p-5 h-[100vh]">
            <div className="flex">
                <Image className="w-10" src={brandSvg} alt="Etherpad logo" />
                <div className="text-white mt-auto mb-auto ml-2">Etherpad Documentation</div>
            </div>
            <Hr/>
            <TopHeading>API</TopHeading>
            <SubHeading>Test</SubHeading>
        </div>
    )
}