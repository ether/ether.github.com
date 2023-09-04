import {createPortal} from "react-dom";
import {TRACKING_ID} from "./Constants.ts";
import {useEffect, useState} from "react";
import {initialize, pageview} from "react-ga";


export const CookieBanner = ()=>{
    const [cookiesAccepted, setCookiesAccepted] = useState<boolean>()

    useEffect(() => {
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

    return createPortal(
        <div className={`sticky bottom-0 bg-gray-800 p-5 text-white grid grid-cols-[1fr_auto]
         ${cookiesAccepted !==undefined ?'opacity-0 pointer-events-none h-0 overflow-hidden hidden': 'opacity-100'}`}>
            <span className="self-center">This page uses Google analytics to track page visits.
                Are you okay with that?</span>
            <div className="grid gap-3 grid-cols-2 self-center">
                <button className="border-2 rounded" onClick={()=>setCookiesAccepted(false)}>Decline</button>
                <button className="rounded bg-blue-600 p-2 self-center" onClick={()=>setCookiesAccepted(true)}>Accept cookies</button>
            </div>
        </div>
    , document.getElementById('banner')!)
}
