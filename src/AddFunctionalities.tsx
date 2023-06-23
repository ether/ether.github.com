import full_features from './assets/img/etherpad_full_features.png'
import {ADDITIONAL_PLUGINS} from "./Constants.ts";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const AddFunctionalities = ()=>{
    return <div className="content wrap">
        <h2>Add Functionalities</h2>
        Etherpad is very customizable through plugins. Instructions can be found in the <a
        href={ADDITIONAL_PLUGINS} target="_blank">plugin wiki article</a>
        <p className="full-features-demo">
            <LazyLoadImage src={full_features} alt="Linus Torvalds and Edward Snowden winking into the camera from a collaborate Etherpad. The document reads 'So many plugins can be added to the original instance"/>
        </p>
    </div>
}
