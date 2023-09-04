import full_features from './assets/img/etherpad_full_features.png'
import {ADDITIONAL_PLUGINS} from "./Constants.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlug} from "@fortawesome/free-solid-svg-icons";
import {Suspense} from "react";
export const AddFunctionalities = ()=>{
    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
            <FontAwesomeIcon icon={faPlug} className="mr-4"/>
            Add Functionalities</h2>
        Etherpad is very customizable through plugins. Instructions can be found in the <a
        href={ADDITIONAL_PLUGINS} target="_blank">plugin wiki article</a>
        <p className="full-features-demo">
            <Suspense>
                <img src={full_features} alt="Linus Torvalds and Edward Snowden winking into the camera from a collaborate Etherpad. The document reads 'So many plugins can be added to the original instance"/>
            </Suspense>
        </p>
    </div>
}
