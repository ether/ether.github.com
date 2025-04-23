'use client'
import {BundledLanguage, codeToHtml} from "shiki";
import {Clipboard, ClipboardCheck} from "lucide-react";
import {useEffect, useState} from "react";
interface Props {
    children: string
    lang: BundledLanguage
}

export function CodeBlock(props: Props) {
    const [out, setOut] = useState<string>("");
    const [copied, setCopied] = useState(false);

    useEffect(()=>{
        codeToHtml(props.children, {
            lang: props.lang,
            theme: 'github-dark',
        }).then((result)=>{
            setOut(result)
        })
    }, [])

    return <div className="relative code-parent mt-3">
        <div className="code-block-div" dangerouslySetInnerHTML={{ __html: out }} ></div>
        <div className="absolute top-2 right-2 text-sm">{props.lang}</div>
        {copied?<ClipboardCheck className="absolute bottom-2 right-2 opacity-100"/>:<div className="absolute bottom-2 right-2 opacity-100" onClick={()=>{
            navigator.clipboard.writeText(props.children)
            setCopied(true)
        }}><Clipboard className="w-8 h-8"/></div>}
    </div>
}
