import skinVariant from './assets/img/etherpad_skin_variants.gif'
import {LazyLoadImage} from "react-lazy-load-image-component";

export const CustomizeAppearance = ()=>{
    return <div className="content wrap">
        <h2><i className="fa fa-paint-brush"></i> Customize Appearance</h2>
        <LazyLoadImage className="skin-variant-demo" src={skinVariant} alt="A video showing the possibility to customize
         the appearance of Etherpad. You can switch between dark, light, super light and super dark."/>
    </div>
}
