'use client'

import {TRACKING_ID} from "../Constants.ts";
import {useEffect, useState} from "react";
import {initialize, pageview} from "react-ga";
import * as Dialog from "@radix-ui/react-dialog";


export const CookieBanner = ()=>{
    const [cookiesAccepted, setCookiesAccepted] = useState<boolean>()

    useEffect(() => {
        if(!window || !document){
            console.log("Returning")
            return
        }

        if(cookiesAccepted){
            initialize(TRACKING_ID);
            pageview(window.location.pathname + window.location.search);
        }
        if(cookiesAccepted !== undefined){
            document.cookie = `cookiesAccepted=${cookiesAccepted};  max-age=1209600; path=/`
        }

    }, [cookiesAccepted]);

    useEffect(() => {
        const reactions = document.cookie.split(';')
        const res =   reactions.find(r=>r.includes('cookiesAccepted'))

            if(res){
                res.includes('true')?
                    setCookiesAccepted(true)
                    :setCookiesAccepted(false)
            }
    }, []);

    return <Dialog.Root
    open={cookiesAccepted === undefined}
    ><Dialog.Portal>
        <Dialog.Content className="sticky bottom-0 bg-gray-800 p-5 text-white grid grid-cols-[1fr_auto] pointer-events-none">
            <Dialog.Title></Dialog.Title>
            <span className="self-center">This page uses Google analytics to track page visits.
                Are you okay with that?</span>
            <div className="grid gap-3 grid-cols-2 self-center">
                <button className="border-2 rounded" onClick={()=>setCookiesAccepted(false)}>Decline</button>
                <button className="rounded bg-blue-600 p-2 self-center" onClick={()=>setCookiesAccepted(true)}>Accept cookies</button>
            </div>
        </Dialog.Content>
    </Dialog.Portal></Dialog.Root>
}
