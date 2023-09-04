import skinVariant from './assets/img/etherpad_skin_variants.gif'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaintBrush} from "@fortawesome/free-solid-svg-icons";
import {Suspense} from "react";
export const CustomizeAppearance = ()=>{
    return <div className="content wrap">
        <h2 className="text-3xl text-primary font-bold mb-4 mt-16 flex items-center">
            <FontAwesomeIcon icon={faPaintBrush} className="mr-4"/>
             Customize Appearance</h2>
        <Suspense>
            <img className="skin-variant-demo" src={skinVariant} alt="A video showing the possibility to customize
             the appearance of Etherpad. You can switch between dark, light, super light and super dark."/>
        </Suspense>
    </div>
}
